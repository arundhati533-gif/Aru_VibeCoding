import { useState } from 'react'
import { MapPin, Check, ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/Skeleton'
import type { FilmingLocation, MediaTitle } from '@/types'

interface LocationCardsProps {
  title: MediaTitle
  locations: FilmingLocation[]
  onPlanTrip: (selected: FilmingLocation[]) => void
}

const SOURCE_COLORS: Record<string, string> = {
  'IMDb': 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  'Wikipedia': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  'Atlas of Wonders': 'bg-purple-600/20 text-purple-400 border-purple-600/30',
  'Movie Locations': 'bg-green-600/20 text-green-400 border-green-600/30',
}

export function LocationCards({ title, locations, onPlanTrip }: LocationCardsProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set(locations.map(l => l.id)))
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  })

  const toggleLocation = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handlePlanTrip = () => {
    const selectedLocations = locations.filter(l => selected.has(l.id))
    if (selectedLocations.length > 0) {
      onPlanTrip(selectedLocations)
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-72 w-full rounded-xl" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          <span className="text-netflix-red">{title.title}</span> Locations
        </h2>
        <p className="text-netflix-text-muted text-lg">
          Real-world filming and setting locations you can visit. Select the ones you'd like to include in your trip.
        </p>
      </div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map(loc => {
          const isSelected = selected.has(loc.id)
          return (
            <div
              key={loc.id}
              onClick={() => toggleLocation(loc.id)}
              className={cn(
                'relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 group',
                isSelected
                  ? 'border-netflix-red shadow-[0_0_20px_rgba(229,9,20,0.15)]'
                  : 'border-netflix-light-gray hover:border-netflix-text-muted'
              )}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.imageUrl}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-black/90 via-netflix-black/40 to-transparent" />

                {/* Selection badge */}
                <div
                  className={cn(
                    'absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all',
                    isSelected ? 'bg-netflix-red' : 'bg-netflix-black/60 border border-white/30'
                  )}
                >
                  {isSelected && <Check size={16} className="text-white" />}
                </div>

                {/* Source badge */}
                <div className="absolute top-3 left-3">
                  <span className={cn(
                    'px-2 py-1 rounded text-xs font-semibold border flex items-center gap-1',
                    SOURCE_COLORS[loc.source] || 'bg-gray-600/20 text-gray-400 border-gray-600/30'
                  )}>
                    <ExternalLink size={10} />
                    {loc.source}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2 bg-netflix-dark">
                <h3 className="text-white font-bold text-lg">{loc.name}</h3>
                <div className="flex items-center gap-1 text-netflix-text-muted text-sm">
                  <MapPin size={14} className="text-netflix-red" />
                  {loc.city}, {loc.country}
                </div>
                <p className="text-netflix-text-muted text-sm leading-relaxed">{loc.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Plan Trip Button */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-netflix-text-muted text-sm">
          {selected.size} of {locations.length} locations selected
        </p>
        <button
          onClick={handlePlanTrip}
          disabled={selected.size === 0}
          className="px-8 py-4 bg-netflix-red hover:bg-netflix-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-lg transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:shadow-[0_0_40px_rgba(229,9,20,0.4)]"
        >
          Plan My Trip <ArrowRight size={22} />
        </button>
      </div>
    </div>
  )
}
