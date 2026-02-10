export type MediaType = 'movie' | 'tv' | 'book'

export interface MediaTitle {
  id: string
  title: string
  year: number
  type: MediaType
  posterUrl: string
  description: string
  genre: string[]
}

export interface FilmingLocation {
  id: string
  name: string
  city: string
  country: string
  description: string
  imageUrl: string
  source: 'IMDb' | 'Wikipedia' | 'Atlas of Wonders' | 'Movie Locations'
  coordinates?: { lat: number; lng: number }
  selected?: boolean
}

export interface TripPreferences {
  fromDate: string
  toDate: string
  departureCity: string
}

export interface ItineraryDay {
  day: number
  date: string
  location: string
  activities: ItineraryActivity[]
}

export interface ItineraryActivity {
  time: string
  title: string
  description: string
  type: 'filming-spot' | 'local-attraction' | 'food' | 'transport' | 'accommodation'
  icon: string
}

export interface WizardState {
  currentStep: number
  searchQuery: string
  selectedTitle: MediaTitle | null
  locations: FilmingLocation[]
  selectedLocations: FilmingLocation[]
  tripPreferences: TripPreferences
  itinerary: ItineraryDay[]
}
