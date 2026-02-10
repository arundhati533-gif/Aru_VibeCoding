import { useState, useCallback } from 'react'
import { ArrowLeft } from 'lucide-react'
import { ProgressStepper } from './ProgressStepper'
import { TitleSearch } from './steps/TitleSearch'
import { LocationCards } from './steps/LocationCards'
import { TripPreferences } from './steps/TripPreferences'
import { ItineraryView } from './steps/ItineraryView'
import { LOCATION_DATABASE, MEDIA_DATABASE, generateItinerary } from '@/data/mediaDatabase'
import type { MediaTitle, FilmingLocation, TripPreferences as TripPrefsType, ItineraryDay } from '@/types'

export function Wizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTitle, setSelectedTitle] = useState<MediaTitle | null>(null)
  const [locations, setLocations] = useState<FilmingLocation[]>([])
  const [selectedLocations, setSelectedLocations] = useState<FilmingLocation[]>([])
  const [tripPreferences, setTripPreferences] = useState<TripPrefsType | null>(null)
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([])

  const handleTitleVerified = useCallback((title: MediaTitle) => {
    setSelectedTitle(title)
    const locs = LOCATION_DATABASE[title.id] || []
    setLocations(locs)
    setCurrentStep(4) // Jump to locations
  }, [])

  const handleManualConfirm = useCallback((query: string) => {
    // Create a manual title entry, try to find closest match for locations
    const fallbackTitle: MediaTitle = {
      id: 'manual-' + query.toLowerCase().replace(/\s+/g, '-'),
      title: query,
      year: new Date().getFullYear(),
      type: 'movie',
      posterUrl: `https://placehold.co/300x450/1a1a1a/E50914?text=${encodeURIComponent(query)}`,
      description: `A cinematic journey inspired by "${query}".`,
      genre: ['Adventure'],
    }

    // Try to find any partial match in the database for locations
    const normalizedQuery = query.toLowerCase()
    let matchedLocations: FilmingLocation[] = []
    for (const media of MEDIA_DATABASE) {
      if (media.title.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(media.title.toLowerCase())) {
        matchedLocations = LOCATION_DATABASE[media.id] || []
        fallbackTitle.genre = media.genre
        break
      }
    }

    // If no locations found, provide generic ones
    if (matchedLocations.length === 0) {
      matchedLocations = [
        {
          id: 'generic-1',
          name: 'Hollywood Walk of Fame',
          city: 'Los Angeles',
          country: 'USA',
          description: 'The iconic Hollywood boulevard celebrating the entertainment industry. A fitting start to any cinematic journey.',
          imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Hollywood',
          source: 'Wikipedia',
        },
        {
          id: 'generic-2',
          name: 'Cinecittà Studios',
          city: 'Rome',
          country: 'Italy',
          description: 'The legendary Italian film studio where countless masterpieces were created.',
          imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Cinecitta',
          source: 'Wikipedia',
        },
        {
          id: 'generic-3',
          name: 'Pinewood Studios',
          city: 'Buckinghamshire',
          country: 'England',
          description: 'One of the world\'s most famous film studios, home to James Bond and Star Wars productions.',
          imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Pinewood',
          source: 'IMDb',
        },
      ]
    }

    setSelectedTitle(fallbackTitle)
    setLocations(matchedLocations)
    setCurrentStep(4)
  }, [])

  const handlePlanTrip = useCallback((selected: FilmingLocation[]) => {
    setSelectedLocations(selected)
    setCurrentStep(6)
  }, [])

  const handleTripPreferences = useCallback((prefs: TripPrefsType) => {
    setTripPreferences(prefs)
    if (selectedTitle) {
      const generatedItinerary = generateItinerary(selectedTitle, selectedLocations, prefs)
      setItinerary(generatedItinerary)
    }
    setCurrentStep(8)
  }, [selectedTitle, selectedLocations])

  const handleBack = () => {
    if (currentStep >= 8) setCurrentStep(6)
    else if (currentStep >= 6) setCurrentStep(4)
    else if (currentStep >= 4) setCurrentStep(1)
  }

  const handleStartOver = () => {
    setCurrentStep(1)
    setSelectedTitle(null)
    setLocations([])
    setSelectedLocations([])
    setTripPreferences(null)
    setItinerary([])
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Header */}
      <header className="border-b border-netflix-gray">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={handleStartOver} className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-black text-netflix-red tracking-tighter">
              JETFLIX
            </span>
            <span className="text-xs text-netflix-text-muted hidden sm:inline mt-1">
              Cinematic Travel
            </span>
          </button>

          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-netflix-text-muted hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <ProgressStepper currentStep={currentStep} />
      </div>

      {/* Step Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Steps 1-3: Search & Verify */}
        {currentStep <= 3 && (
          <TitleSearch
            onTitleVerified={handleTitleVerified}
            onManualConfirm={handleManualConfirm}
          />
        )}

        {/* Steps 4-5: Locations */}
        {currentStep >= 4 && currentStep <= 5 && selectedTitle && (
          <LocationCards
            title={selectedTitle}
            locations={locations}
            onPlanTrip={handlePlanTrip}
          />
        )}

        {/* Steps 6-7: Trip Preferences */}
        {currentStep >= 6 && currentStep <= 7 && selectedTitle && (
          <TripPreferences
            title={selectedTitle}
            selectedLocations={selectedLocations}
            onSubmit={handleTripPreferences}
          />
        )}

        {/* Steps 8-9: Itinerary */}
        {currentStep >= 8 && selectedTitle && tripPreferences && (
          <ItineraryView
            title={selectedTitle}
            itinerary={itinerary}
            departureCity={tripPreferences.departureCity}
          />
        )}
      </main>
    </div>
  )
}
