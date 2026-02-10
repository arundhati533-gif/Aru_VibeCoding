import { MEDIA_DATABASE, TITLE_ALIASES } from '@/data/mediaDatabase'
import type { MediaTitle } from '@/types'

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }
  return matrix[b.length][a.length]
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()
}

export interface SearchResult {
  exact: MediaTitle | null
  suggestions: MediaTitle[]
}

export function searchTitle(query: string): SearchResult {
  const normalized = normalize(query)
  if (!normalized) return { exact: null, suggestions: [] }

  // 1. Check exact alias match
  const aliasId = TITLE_ALIASES[normalized]
  if (aliasId) {
    const found = MEDIA_DATABASE.find(m => m.id === aliasId)
    if (found) return { exact: found, suggestions: [] }
  }

  // 2. Check exact title match
  const exactMatch = MEDIA_DATABASE.find(m => normalize(m.title) === normalized)
  if (exactMatch) return { exact: exactMatch, suggestions: [] }

  // 3. Check if query is contained in title or vice versa
  const containsMatch = MEDIA_DATABASE.find(m => {
    const normTitle = normalize(m.title)
    return normTitle.includes(normalized) || normalized.includes(normTitle)
  })
  if (containsMatch) return { exact: containsMatch, suggestions: [] }

  // 4. Fuzzy match using Levenshtein distance
  const scored = MEDIA_DATABASE.map(m => {
    const normTitle = normalize(m.title)
    // Check against title words
    const titleWords = normTitle.split(/\s+/)
    const queryWords = normalized.split(/\s+/)

    // Best word-level match
    let bestWordDist = Infinity
    for (const qw of queryWords) {
      for (const tw of titleWords) {
        const dist = levenshtein(qw, tw)
        bestWordDist = Math.min(bestWordDist, dist)
      }
    }

    const fullDist = levenshtein(normalized, normTitle)
    const score = Math.min(bestWordDist, fullDist)

    return { title: m, score }
  })

  scored.sort((a, b) => a.score - b.score)

  // If best match is close enough, treat as exact
  if (scored[0] && scored[0].score <= 2) {
    return { exact: scored[0].title, suggestions: scored.slice(1, 4).map(s => s.title) }
  }

  // Otherwise return as suggestions
  return {
    exact: null,
    suggestions: scored.slice(0, 4).map(s => s.title),
  }
}
