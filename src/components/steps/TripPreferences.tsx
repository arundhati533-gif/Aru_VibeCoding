import { useState } from 'react'
import { Calendar, MapPin, ArrowRight, Plane } from 'lucide-react'
import type { TripPreferences as TripPrefsType, MediaTitle, FilmingLocation } from '@/types'

interface TripPreferencesProps {
  title: MediaTitle
  selectedLocations: FilmingLocation[]
  onSubmit: (prefs: TripPrefsType) => void
}

export function TripPreferences({ title, selectedLocations, onSubmit }: TripPreferencesProps) {
  const today = new Date().toISOString().split('T')[0]
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  const [prefs, setPrefs] = useState<TripPrefsType>({
    fromDate: nextWeek,
    toDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    departureCity: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!prefs.fromDate) newErrors.fromDate = 'Start date is required'
    if (!prefs.toDate) newErrors.toDate = 'End date is required'
    if (!prefs.departureCity.trim()) newErrors.departureCity = 'Departure city is required'
    if (prefs.fromDate && prefs.toDate && prefs.fromDate >= prefs.toDate) {
      newErrors.toDate = 'End date must be after start date'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onSubmit(prefs)
    }
  }

  const countries = [...new Set(selectedLocations.map(l => l.country))]

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Plan Your <span className="text-netflix-red">Trip</span>
        </h2>
        <p className="text-netflix-text-muted text-lg">
          Set your travel dates and departure city for your {title.title} adventure.
        </p>
      </div>

      {/* Trip Summary */}
      <div className="bg-netflix-gray rounded-xl p-5 border border-netflix-light-gray">
        <div className="flex items-center gap-3 mb-3">
          <Plane size={20} className="text-netflix-red" />
          <h3 className="text-white font-semibold">Trip Summary</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-netflix-text-muted">Title</span>
            <p className="text-white font-medium">{title.title} ({title.year})</p>
          </div>
          <div>
            <span className="text-netflix-text-muted">Locations</span>
            <p className="text-white font-medium">{selectedLocations.length} selected</p>
          </div>
          <div className="col-span-2">
            <span className="text-netflix-text-muted">Countries</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {countries.map(c => (
                <span key={c} className="px-2 py-1 bg-netflix-dark rounded text-netflix-text text-xs border border-netflix-light-gray">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* From Date */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium text-sm">
              <Calendar size={16} className="text-netflix-red" />
              From Date
            </label>
            <input
              type="date"
              value={prefs.fromDate}
              min={today}
              onChange={e => setPrefs(p => ({ ...p, fromDate: e.target.value }))}
              className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors [color-scheme:dark]"
            />
            {errors.fromDate && <p className="text-red-400 text-xs">{errors.fromDate}</p>}
          </div>

          {/* To Date */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium text-sm">
              <Calendar size={16} className="text-netflix-red" />
              To Date
            </label>
            <input
              type="date"
              value={prefs.toDate}
              min={prefs.fromDate || today}
              onChange={e => setPrefs(p => ({ ...p, toDate: e.target.value }))}
              className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors [color-scheme:dark]"
            />
            {errors.toDate && <p className="text-red-400 text-xs">{errors.toDate}</p>}
          </div>
        </div>

        {/* Departure City */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-white font-medium text-sm">
            <MapPin size={16} className="text-netflix-red" />
            Departure City
          </label>
          <input
            type="text"
            value={prefs.departureCity}
            onChange={e => setPrefs(p => ({ ...p, departureCity: e.target.value }))}
            placeholder="e.g., New York, London, Tokyo..."
            className="w-full px-4 py-3 bg-netflix-dark border border-netflix-light-gray rounded-lg text-white placeholder-netflix-text-muted focus:outline-none focus:border-netflix-red transition-colors"
          />
          {errors.departureCity && <p className="text-red-400 text-xs">{errors.departureCity}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 bg-netflix-red hover:bg-netflix-red-dark text-white font-bold text-lg rounded-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:shadow-[0_0_40px_rgba(229,9,20,0.4)]"
        >
          Generate My Itinerary <ArrowRight size={22} />
        </button>
      </form>
    </div>
  )
}
