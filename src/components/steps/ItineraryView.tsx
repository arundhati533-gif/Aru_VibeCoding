import { useState, useEffect } from 'react'
import { MapPin, Clock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/Skeleton'
import type { ItineraryDay, MediaTitle } from '@/types'

interface ItineraryViewProps {
  title: MediaTitle
  itinerary: ItineraryDay[]
  departureCity: string
}

const ACTIVITY_COLORS: Record<string, string> = {
  'filming-spot': 'border-netflix-red bg-netflix-red/10',
  'local-attraction': 'border-purple-500 bg-purple-500/10',
  'food': 'border-orange-500 bg-orange-500/10',
  'transport': 'border-blue-500 bg-blue-500/10',
  'accommodation': 'border-green-500 bg-green-500/10',
}

const ACTIVITY_DOT_COLORS: Record<string, string> = {
  'filming-spot': 'bg-netflix-red',
  'local-attraction': 'bg-purple-500',
  'food': 'bg-orange-500',
  'transport': 'bg-blue-500',
  'accommodation': 'bg-green-500',
}

export function ItineraryView({ title, itinerary, departureCity }: ItineraryViewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]))

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const toggleDay = (day: number) => {
    setExpandedDays(prev => {
      const next = new Set(prev)
      if (next.has(day)) {
        next.delete(day)
      } else {
        next.add(day)
      }
      return next
    })
  }

  const expandAll = () => {
    setExpandedDays(new Set(itinerary.map(d => d.day)))
  }

  const collapseAll = () => {
    setExpandedDays(new Set())
  }

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <Skeleton className="h-10 w-80 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="flex items-center justify-center gap-3 py-6">
          <Sparkles className="text-netflix-red animate-pulse" size={24} />
          <p className="text-netflix-text-muted text-lg animate-pulse">Generating your personalized itinerary...</p>
        </div>
        {[1, 2, 3].map(i => (
          <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-netflix-red/10 border border-netflix-red/30 rounded-full mb-2">
          <Sparkles size={16} className="text-netflix-red" />
          <span className="text-netflix-red font-semibold text-sm">Your Itinerary is Ready!</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="text-netflix-red">{title.title}</span> Trip
        </h2>
        <p className="text-netflix-text-muted text-lg">
          {itinerary.length}-day journey from {departureCity} | {itinerary[0]?.date.split(',').slice(1).join(',').trim()} - {itinerary[itinerary.length - 1]?.date.split(',').slice(1).join(',').trim()}
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm text-netflix-text-muted hover:text-white border border-netflix-light-gray hover:border-netflix-text-muted rounded-lg transition-colors"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm text-netflix-text-muted hover:text-white border border-netflix-light-gray hover:border-netflix-text-muted rounded-lg transition-colors"
        >
          Collapse All
        </button>
      </div>

      {/* Day Cards */}
      <div className="space-y-4">
        {itinerary.map(day => {
          const isExpanded = expandedDays.has(day.day)
          return (
            <div
              key={day.day}
              className="rounded-xl border border-netflix-light-gray bg-netflix-dark overflow-hidden transition-all"
            >
              {/* Day Header */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full flex items-center justify-between p-5 hover:bg-netflix-gray/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-netflix-red flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">{day.day}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg">Day {day.day}</h3>
                    <div className="flex items-center gap-2 text-netflix-text-muted text-sm">
                      <MapPin size={14} className="text-netflix-red" />
                      {day.location}
                      <span className="text-netflix-light-gray">|</span>
                      {day.date.split(',')[0]}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-netflix-text-muted text-sm hidden sm:inline">
                    {day.activities.length} activities
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={20} className="text-netflix-text-muted" />
                  ) : (
                    <ChevronDown size={20} className="text-netflix-text-muted" />
                  )}
                </div>
              </button>

              {/* Activities */}
              {isExpanded && (
                <div className="px-5 pb-5 space-y-3">
                  <div className="h-px bg-netflix-light-gray" />
                  {day.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'flex gap-4 p-4 rounded-lg border-l-4 transition-all',
                        ACTIVITY_COLORS[activity.type] || 'border-netflix-light-gray bg-netflix-gray/50'
                      )}
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        <span className="text-2xl">{activity.icon}</span>
                        <div className={cn('w-2 h-2 rounded-full', ACTIVITY_DOT_COLORS[activity.type] || 'bg-netflix-light-gray')} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock size={14} className="text-netflix-text-muted shrink-0" />
                          <span className="text-netflix-text-muted text-sm">{activity.time}</span>
                        </div>
                        <h4 className="text-white font-semibold">{activity.title}</h4>
                        <p className="text-netflix-text-muted text-sm mt-1 leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-center space-y-4 py-6">
        <div className="h-px bg-gradient-to-r from-transparent via-netflix-light-gray to-transparent" />
        <p className="text-netflix-text-muted text-sm">
          This itinerary was generated based on <span className="text-netflix-red font-semibold">{title.title}</span> filming and setting locations.
          <br />Flight booking and hotel reservations coming soon!
        </p>
      </div>
    </div>
  )
}
