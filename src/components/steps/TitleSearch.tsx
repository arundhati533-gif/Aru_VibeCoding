import { useState, useCallback } from 'react'
import { Search, Film, Tv, BookOpen, Loader2, ArrowRight, AlertCircle } from 'lucide-react'
import { searchTitle, type SearchResult } from '@/lib/search'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/Skeleton'
import type { MediaTitle, MediaType } from '@/types'

interface TitleSearchProps {
  onTitleVerified: (title: MediaTitle) => void
  onManualConfirm: (query: string) => void
}

const TYPE_ICON: Record<MediaType, typeof Film> = {
  movie: Film,
  tv: Tv,
  book: BookOpen,
}

const TYPE_LABEL: Record<MediaType, string> = {
  movie: 'Movie',
  tv: 'TV Show',
  book: 'Book',
}

export function TitleSearch({ onTitleVerified, onManualConfirm }: TitleSearchProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<SearchResult | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = useCallback(() => {
    if (!query.trim()) return
    setIsSearching(true)
    setHasSearched(false)

    // Simulate search delay for realism
    setTimeout(() => {
      const searchResult = searchTitle(query)
      setResult(searchResult)
      setIsSearching(false)
      setHasSearched(true)

      // Auto-advance if exact match
      if (searchResult.exact && searchResult.suggestions.length === 0) {
        // Don't auto-advance, let user confirm
      }
    }, 800)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          What did you <span className="text-netflix-red">watch</span>?
        </h2>
        <p className="text-netflix-text-muted text-lg">
          Search for a movie, TV show, or book to start your cinematic journey.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-netflix-text-muted" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Try "Titanic", "Breaking Bad", or "The Great Gatsby"...'
              className="w-full pl-12 pr-4 py-4 bg-netflix-gray border border-netflix-light-gray rounded-lg text-white placeholder-netflix-text-muted focus:outline-none focus:border-netflix-red focus:shadow-[0_0_0_1px_#E50914] transition-all text-lg"
              autoFocus
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            className="px-6 py-4 bg-netflix-red hover:bg-netflix-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            {isSearching ? <Loader2 size={20} className="animate-spin" /> : <Search size={20} />}
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isSearching && (
        <div className="space-y-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      )}

      {/* Results */}
      {hasSearched && result && !isSearching && (
        <div className="space-y-6">
          {/* Exact Match */}
          {result.exact && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-netflix-text-muted uppercase tracking-wider">
                {result.suggestions.length > 0 ? 'Best Match' : 'Found It!'}
              </h3>
              <MediaCard
                media={result.exact}
                onSelect={onTitleVerified}
                highlight
              />
            </div>
          )}

          {/* Suggestions */}
          {result.suggestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-netflix-text-muted uppercase tracking-wider">
                {result.exact ? 'Did you mean one of these?' : 'Did you mean...?'}
              </h3>
              <div className="space-y-3">
                {result.suggestions.map(s => (
                  <MediaCard key={s.id} media={s} onSelect={onTitleVerified} />
                ))}
              </div>
            </div>
          )}

          {/* Manual confirm fallback */}
          {!result.exact && (
            <div className="border border-netflix-light-gray rounded-lg p-6 bg-netflix-dark space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-yellow-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Can't find "{query}"?</p>
                  <p className="text-netflix-text-muted text-sm mt-1">
                    We might not have it in our database yet. You can still continue with your title and we'll do our best.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onManualConfirm(query)}
                className="w-full py-3 border border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Continue with "{query}" <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Trending suggestions before search */}
      {!hasSearched && !isSearching && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-netflix-text-muted uppercase tracking-wider">
            Trending titles to explore
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Titanic', 'Harry Potter', 'Game of Thrones', 'Breaking Bad', 'Inception', 'Forrest Gump'].map(title => (
              <button
                key={title}
                onClick={() => { setQuery(title); }}
                className="px-4 py-2 bg-netflix-gray hover:bg-netflix-light-gray border border-netflix-light-gray rounded-full text-sm text-netflix-text hover:text-white transition-all"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MediaCard({
  media,
  onSelect,
  highlight = false,
}: {
  media: MediaTitle
  onSelect: (m: MediaTitle) => void
  highlight?: boolean
}) {
  const Icon = TYPE_ICON[media.type]

  return (
    <button
      onClick={() => onSelect(media)}
      className={cn(
        'w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left group',
        highlight
          ? 'bg-netflix-gray border-netflix-red hover:shadow-[0_0_20px_rgba(229,9,20,0.2)]'
          : 'bg-netflix-dark border-netflix-light-gray hover:border-netflix-red hover:bg-netflix-gray'
      )}
    >
      {/* Poster */}
      <div className="w-16 h-24 rounded overflow-hidden shrink-0 bg-netflix-gray">
        <img
          src={media.posterUrl}
          alt={media.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-white font-semibold text-lg truncate">{media.title}</h4>
          {highlight && (
            <span className="shrink-0 px-2 py-0.5 bg-netflix-red text-white text-xs rounded font-bold">MATCH</span>
          )}
        </div>
        <div className="flex items-center gap-3 text-netflix-text-muted text-sm mb-2">
          <span className="flex items-center gap-1">
            <Icon size={14} /> {TYPE_LABEL[media.type]}
          </span>
          <span>{media.year}</span>
          <span>{media.genre.join(', ')}</span>
        </div>
        <p className="text-netflix-text-muted text-sm line-clamp-2">{media.description}</p>
      </div>

      {/* Arrow */}
      <ArrowRight size={20} className="text-netflix-text-muted group-hover:text-netflix-red transition-colors shrink-0" />
    </button>
  )
}
