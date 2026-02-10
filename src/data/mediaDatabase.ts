import type { MediaTitle, FilmingLocation, ItineraryDay } from '@/types'

export const MEDIA_DATABASE: MediaTitle[] = [
  {
    id: 'titanic-1997',
    title: 'Titanic',
    year: 1997,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Titanic',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    genre: ['Drama', 'Romance'],
  },
  {
    id: 'lord-of-the-rings-2001',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=LOTR',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.',
    genre: ['Adventure', 'Fantasy'],
  },
  {
    id: 'harry-potter-2001',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    year: 2001,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Harry+Potter',
    description: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    genre: ['Adventure', 'Fantasy'],
  },
  {
    id: 'game-of-thrones-2011',
    title: 'Game of Thrones',
    year: 2011,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=GoT',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    genre: ['Drama', 'Fantasy'],
  },
  {
    id: 'breaking-bad-2008',
    title: 'Breaking Bad',
    year: 2008,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Breaking+Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.',
    genre: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 'inception-2010',
    title: 'Inception',
    year: 2010,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
  },
  {
    id: 'dark-knight-2008',
    title: 'The Dark Knight',
    year: 2008,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Dark+Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.',
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 'stranger-things-2016',
    title: 'Stranger Things',
    year: 2016,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Stranger+Things',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.',
    genre: ['Drama', 'Fantasy', 'Horror'],
  },
  {
    id: 'avatar-2009',
    title: 'Avatar',
    year: 2009,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Avatar',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    genre: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id: 'sherlock-2010',
    title: 'Sherlock',
    year: 2010,
    type: 'tv',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Sherlock',
    description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    genre: ['Crime', 'Drama', 'Mystery'],
  },
  {
    id: 'the-great-gatsby-book',
    title: 'The Great Gatsby',
    year: 1925,
    type: 'book',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Great+Gatsby',
    description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Jazz Age on Long Island.',
    genre: ['Fiction', 'Classic'],
  },
  {
    id: 'forrest-gump-1994',
    title: 'Forrest Gump',
    year: 1994,
    type: 'movie',
    posterUrl: 'https://placehold.co/300x450/1a1a1a/E50914?text=Forrest+Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.',
    genre: ['Drama', 'Romance'],
  },
]

export const LOCATION_DATABASE: Record<string, FilmingLocation[]> = {
  'titanic-1997': [
    {
      id: 'titanic-loc-1',
      name: 'Titanic Belfast Museum',
      city: 'Belfast',
      country: 'Northern Ireland',
      description: 'The world\'s largest Titanic visitor experience, built on the very site where the RMS Titanic was designed and constructed.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Titanic+Belfast',
      source: 'Wikipedia',
    },
    {
      id: 'titanic-loc-2',
      name: 'Cobh Heritage Centre',
      city: 'Cobh',
      country: 'Ireland',
      description: 'The last port of call for the RMS Titanic. The town\'s harbor and Victorian architecture were featured prominently.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Cobh+Ireland',
      source: 'IMDb',
    },
    {
      id: 'titanic-loc-3',
      name: 'Fox Baja Studios',
      city: 'Rosarito',
      country: 'Mexico',
      description: 'The massive water tank and set where most of the Titanic ship scenes were filmed, including the iconic bow scene.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Baja+Studios',
      source: 'IMDb',
    },
    {
      id: 'titanic-loc-4',
      name: 'Halifax Maritime Museum',
      city: 'Halifax',
      country: 'Canada',
      description: 'Home to the largest collection of wooden Titanic artifacts, including a deck chair and part of the grand staircase.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Halifax+Museum',
      source: 'Wikipedia',
    },
  ],
  'lord-of-the-rings-2001': [
    {
      id: 'lotr-loc-1',
      name: 'Hobbiton Movie Set',
      city: 'Matamata',
      country: 'New Zealand',
      description: 'The actual Shire! This fully preserved movie set features 44 hobbit holes nestled into the rolling green hills of a working farm.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Hobbiton',
      source: 'Movie Locations',
    },
    {
      id: 'lotr-loc-2',
      name: 'Tongariro National Park',
      city: 'Tongariro',
      country: 'New Zealand',
      description: 'Mount Ngauruhoe served as the filming location for Mount Doom. The volcanic landscape creates an otherworldly atmosphere.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Mt+Doom',
      source: 'Atlas of Wonders',
    },
    {
      id: 'lotr-loc-3',
      name: 'Kaitoke Regional Park',
      city: 'Upper Hutt',
      country: 'New Zealand',
      description: 'The ethereal forest setting used for Rivendell, the Elven outpost. A memorial marks the exact filming spot.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Rivendell',
      source: 'Movie Locations',
    },
    {
      id: 'lotr-loc-4',
      name: 'Mount Sunday',
      city: 'Canterbury',
      country: 'New Zealand',
      description: 'This isolated hill served as the location for Edoras, the capital city of Rohan, with stunning mountain backdrops.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Edoras',
      source: 'Atlas of Wonders',
    },
  ],
  'harry-potter-2001': [
    {
      id: 'hp-loc-1',
      name: 'Warner Bros. Studio Tour',
      city: 'Leavesden',
      country: 'England',
      description: 'The Making of Harry Potter studio tour features the actual Great Hall, Diagon Alley, Dumbledore\'s Office, and the Forbidden Forest.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=WB+Studio',
      source: 'IMDb',
    },
    {
      id: 'hp-loc-2',
      name: 'Alnwick Castle',
      city: 'Alnwick',
      country: 'England',
      description: 'Used as the exterior of Hogwarts in the first two films. The courtyard is where Harry had his first broomstick lesson.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Alnwick+Castle',
      source: 'Wikipedia',
    },
    {
      id: 'hp-loc-3',
      name: 'Bodleian Library',
      city: 'Oxford',
      country: 'England',
      description: 'Duke Humfrey\'s Library served as the Hogwarts Library, and the Divinity School was used as the Hogwarts infirmary.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Bodleian+Library',
      source: 'Movie Locations',
    },
    {
      id: 'hp-loc-4',
      name: 'Glenfinnan Viaduct',
      city: 'Glenfinnan',
      country: 'Scotland',
      description: 'The iconic railway bridge featured in multiple films as the route of the Hogwarts Express through the Scottish Highlands.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Glenfinnan',
      source: 'Atlas of Wonders',
    },
    {
      id: 'hp-loc-5',
      name: 'King\'s Cross Station',
      city: 'London',
      country: 'England',
      description: 'Home of the famous Platform 9¾. A permanent photo opportunity with a luggage trolley "disappearing" into the wall exists at the station.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Platform+9¾',
      source: 'Wikipedia',
    },
  ],
  'game-of-thrones-2011': [
    {
      id: 'got-loc-1',
      name: 'Dubrovnik Old Town',
      city: 'Dubrovnik',
      country: 'Croatia',
      description: 'The primary filming location for King\'s Landing. Walk the city walls and recognize iconic scenes from the show.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Dubrovnik',
      source: 'IMDb',
    },
    {
      id: 'got-loc-2',
      name: 'Dark Hedges',
      city: 'Ballymoney',
      country: 'Northern Ireland',
      description: 'This stunning avenue of intertwined beech trees was used as the King\'s Road in the series.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Dark+Hedges',
      source: 'Atlas of Wonders',
    },
    {
      id: 'got-loc-3',
      name: 'Alcázar of Seville',
      city: 'Seville',
      country: 'Spain',
      description: 'This stunning royal palace was used as the Water Gardens of Dorne, home of House Martell.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Alcazar+Seville',
      source: 'Wikipedia',
    },
    {
      id: 'got-loc-4',
      name: 'Þingvellir National Park',
      city: 'Þingvellir',
      country: 'Iceland',
      description: 'Used for scenes beyond the Wall and the Bloody Gate leading to the Eyrie. The tectonic landscapes are otherworldly.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Thingvellir',
      source: 'Movie Locations',
    },
  ],
  'breaking-bad-2008': [
    {
      id: 'bb-loc-1',
      name: 'Walter White\'s House',
      city: 'Albuquerque',
      country: 'USA',
      description: 'The iconic residence at 3828 Piermont Dr NE. The real house is a private residence, but visitors often stop for photos.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=White+Residence',
      source: 'IMDb',
    },
    {
      id: 'bb-loc-2',
      name: 'Dog House Drive In',
      city: 'Albuquerque',
      country: 'USA',
      description: 'The real-life restaurant that appears in multiple episodes, serving their famous hot dogs and burgers since 1953.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Dog+House',
      source: 'Movie Locations',
    },
    {
      id: 'bb-loc-3',
      name: 'To\'hajiilee Indian Reservation',
      city: 'To\'hajiilee',
      country: 'USA',
      description: 'The vast desert landscape used for key scenes including the money burial site and dramatic confrontations.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Desert+NM',
      source: 'Atlas of Wonders',
    },
    {
      id: 'bb-loc-4',
      name: 'Octopus Car Wash',
      city: 'Albuquerque',
      country: 'USA',
      description: 'Known as the A1A Car Wash in the show. This real car wash became an iconic symbol of the series.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Car+Wash',
      source: 'IMDb',
    },
  ],
  'inception-2010': [
    {
      id: 'inception-loc-1',
      name: 'Pont de Bir-Hakeim',
      city: 'Paris',
      country: 'France',
      description: 'The bridge where Cobb and Ariadne walk while she learns to manipulate the dream world, bending the city around them.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Bir-Hakeim',
      source: 'IMDb',
    },
    {
      id: 'inception-loc-2',
      name: 'Nijo Castle',
      city: 'Kyoto',
      country: 'Japan',
      description: 'Saito\'s Japanese castle, featured in the opening dream sequence of the film.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Nijo+Castle',
      source: 'Atlas of Wonders',
    },
    {
      id: 'inception-loc-3',
      name: 'Fortress Mountain',
      city: 'Kananaskis',
      country: 'Canada',
      description: 'The snow fortress level was filmed at this former ski resort in the Canadian Rockies.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Fortress+Mountain',
      source: 'Movie Locations',
    },
    {
      id: 'inception-loc-4',
      name: 'Tangier Medina',
      city: 'Tangier',
      country: 'Morocco',
      description: 'The narrow winding streets of the Tangier Medina were used for the Mombasa chase sequence.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Tangier',
      source: 'Wikipedia',
    },
  ],
  'dark-knight-2008': [
    {
      id: 'dk-loc-1',
      name: 'Willis Tower (Sears Tower)',
      city: 'Chicago',
      country: 'USA',
      description: 'Chicago\'s skyline doubled as Gotham City. The iconic Willis Tower appears in numerous aerial shots throughout the film.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Chicago+Skyline',
      source: 'IMDb',
    },
    {
      id: 'dk-loc-2',
      name: 'Battersea Power Station',
      city: 'London',
      country: 'England',
      description: 'This massive decommissioned power station served as the backdrop for key scenes in the Gotham underworld.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Battersea',
      source: 'Movie Locations',
    },
    {
      id: 'dk-loc-3',
      name: 'Hong Kong IFC Tower',
      city: 'Hong Kong',
      country: 'China',
      description: 'Batman\'s dramatic skydive into Hong Kong to capture Lau was filmed using the actual IFC tower and its surroundings.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Hong+Kong+IFC',
      source: 'Atlas of Wonders',
    },
  ],
  'stranger-things-2016': [
    {
      id: 'st-loc-1',
      name: 'Jackson, Georgia Downtown',
      city: 'Jackson',
      country: 'USA',
      description: 'This charming small town served as the main filming location for the fictional Hawkins, Indiana.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Jackson+GA',
      source: 'IMDb',
    },
    {
      id: 'st-loc-2',
      name: 'Emory University',
      city: 'Atlanta',
      country: 'USA',
      description: 'Parts of the Hawkins National Laboratory were filmed at Emory University campus buildings.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Emory+Univ',
      source: 'Movie Locations',
    },
    {
      id: 'st-loc-3',
      name: 'Gwinnett Place Mall',
      city: 'Duluth',
      country: 'USA',
      description: 'The Starcourt Mall from Season 3 was filmed at this real mall in Duluth, Georgia.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Starcourt+Mall',
      source: 'Wikipedia',
    },
  ],
  'avatar-2009': [
    {
      id: 'avatar-loc-1',
      name: 'Zhangjiajie National Forest Park',
      city: 'Zhangjiajie',
      country: 'China',
      description: 'The towering sandstone pillars that inspired the floating Hallelujah Mountains of Pandora. One pillar was renamed "Avatar Hallelujah Mountain."',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Zhangjiajie',
      source: 'Wikipedia',
    },
    {
      id: 'avatar-loc-2',
      name: 'Kauai, Hawaii',
      city: 'Kauai',
      country: 'USA',
      description: 'The lush tropical forests of Kauai provided real-world reference and partial filming for Pandora\'s bioluminescent jungles.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Kauai',
      source: 'IMDb',
    },
    {
      id: 'avatar-loc-3',
      name: 'Wellington Studios',
      city: 'Wellington',
      country: 'New Zealand',
      description: 'The motion capture and post-production work was done at Stone Street Studios in Wellington.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Wellington+Studios',
      source: 'Movie Locations',
    },
  ],
  'sherlock-2010': [
    {
      id: 'sherlock-loc-1',
      name: '187 North Gower Street',
      city: 'London',
      country: 'England',
      description: 'The real-world exterior used for 221B Baker Street. The famous black door and knocker are a must-see for fans.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=221B+Baker+St',
      source: 'IMDb',
    },
    {
      id: 'sherlock-loc-2',
      name: 'Speedy\'s Cafe',
      city: 'London',
      country: 'England',
      description: 'The real cafe next to the 221B filming location. Featured in the show and now a popular tourist destination.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Speedys+Cafe',
      source: 'Wikipedia',
    },
    {
      id: 'sherlock-loc-3',
      name: 'National Museum Cardiff',
      city: 'Cardiff',
      country: 'Wales',
      description: 'Many interior scenes including government buildings and museums were filmed in Cardiff\'s civic centre.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Cardiff+Museum',
      source: 'Movie Locations',
    },
  ],
  'the-great-gatsby-book': [
    {
      id: 'gatsby-loc-1',
      name: 'Gold Coast Mansions',
      city: 'Long Island',
      country: 'USA',
      description: 'The North Shore of Long Island is the real "East Egg" and "West Egg." Several Gold Coast mansions inspired Gatsby\'s estate.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Gold+Coast',
      source: 'Wikipedia',
    },
    {
      id: 'gatsby-loc-2',
      name: 'The Plaza Hotel',
      city: 'New York City',
      country: 'USA',
      description: 'The iconic hotel where the pivotal confrontation between Gatsby and Tom Buchanan takes place in the novel.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Plaza+Hotel',
      source: 'Wikipedia',
    },
    {
      id: 'gatsby-loc-3',
      name: 'Flushing Meadows',
      city: 'Queens',
      country: 'USA',
      description: 'The "Valley of Ashes" from the novel, the industrial wasteland between West Egg and New York City.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Valley+of+Ashes',
      source: 'Wikipedia',
    },
  ],
  'forrest-gump-1994': [
    {
      id: 'fg-loc-1',
      name: 'Chippewa Square',
      city: 'Savannah',
      country: 'USA',
      description: 'The famous bench scenes where Forrest tells his life story were filmed here. A replica bench is in the Savannah History Museum.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Chippewa+Square',
      source: 'IMDb',
    },
    {
      id: 'fg-loc-2',
      name: 'Monument Valley',
      city: 'Utah/Arizona Border',
      country: 'USA',
      description: 'The iconic spot where Forrest ends his cross-country run, surrounded by the stunning red buttes and mesas.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Monument+Valley',
      source: 'Atlas of Wonders',
    },
    {
      id: 'fg-loc-3',
      name: 'The Lincoln Memorial',
      city: 'Washington D.C.',
      country: 'USA',
      description: 'Where Forrest gives his speech during the anti-war rally and has his reunion with Jenny at the reflecting pool.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Lincoln+Memorial',
      source: 'Movie Locations',
    },
    {
      id: 'fg-loc-4',
      name: 'Beaufort',
      city: 'Beaufort',
      country: 'USA',
      description: 'Multiple scenes were filmed in this charming South Carolina town, including Forrest\'s childhood home.',
      imageUrl: 'https://placehold.co/400x250/1a1a1a/E50914?text=Beaufort+SC',
      source: 'Wikipedia',
    },
  ],
}

// Fuzzy title aliases for forgiving search
export const TITLE_ALIASES: Record<string, string> = {
  'titnic': 'titanic-1997',
  'titenic': 'titanic-1997',
  'titanic 1997': 'titanic-1997',
  'lotr': 'lord-of-the-rings-2001',
  'lord of the rings': 'lord-of-the-rings-2001',
  'fellowship of the ring': 'lord-of-the-rings-2001',
  'harry potter': 'harry-potter-2001',
  'hp': 'harry-potter-2001',
  'sorcerers stone': 'harry-potter-2001',
  'philosophers stone': 'harry-potter-2001',
  'got': 'game-of-thrones-2011',
  'game of thrones': 'game-of-thrones-2011',
  'thrones': 'game-of-thrones-2011',
  'breaking bad': 'breaking-bad-2008',
  'braking bad': 'breaking-bad-2008',
  'bb': 'breaking-bad-2008',
  'inception': 'inception-2010',
  'dark knight': 'dark-knight-2008',
  'batman': 'dark-knight-2008',
  'batman dark knight': 'dark-knight-2008',
  'stranger things': 'stranger-things-2016',
  'avatar': 'avatar-2009',
  'sherlock': 'sherlock-2010',
  'sherlock holmes': 'sherlock-2010',
  'great gatsby': 'the-great-gatsby-book',
  'gatsby': 'the-great-gatsby-book',
  'forrest gump': 'forrest-gump-1994',
  'forest gump': 'forrest-gump-1994',
  'forrest': 'forrest-gump-1994',
}

export function generateItinerary(
  title: MediaTitle,
  locations: FilmingLocation[],
  preferences: { fromDate: string; toDate: string; departureCity: string }
): ItineraryDay[] {
  const start = new Date(preferences.fromDate)
  const end = new Date(preferences.toDate)
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1)

  const itinerary: ItineraryDay[] = []

  // Local attractions & food recommendations per country
  const localAttractions: Record<string, { attractions: string[]; food: string[] }> = {
    'Northern Ireland': {
      attractions: ['Giant\'s Causeway', 'Carrick-a-Rede Rope Bridge', 'Belfast Cathedral Quarter'],
      food: ['The Crown Liquor Saloon', 'St George\'s Market', 'OX Belfast'],
    },
    'Ireland': {
      attractions: ['Blarney Castle', 'Cliffs of Moher', 'Ring of Kerry'],
      food: ['English Market Cork', 'The Farmgate Cafe', 'Ballymaloe House'],
    },
    'Mexico': {
      attractions: ['La Bufadora Blowhole', 'Valle de Guadalupe Wine Region', 'Ensenada Waterfront'],
      food: ['Tacos El Yaqui', 'La Guerrerense', 'Hussong\'s Cantina'],
    },
    'Canada': {
      attractions: ['Peggy\'s Cove Lighthouse', 'Cape Breton Highlands', 'Lunenburg UNESCO Town'],
      food: ['Bicycle Thief Restaurant', 'The Canteen', 'Salvatore\'s Pizzeria'],
    },
    'New Zealand': {
      attractions: ['Milford Sound', 'Waitomo Glowworm Caves', 'Te Puia Geothermal Valley'],
      food: ['Fergburger Queenstown', 'Depot Eatery Auckland', 'Logan Brown Wellington'],
    },
    'England': {
      attractions: ['Tower of London', 'Stonehenge', 'The Cotswolds'],
      food: ['Borough Market', 'Dishoom', 'The Eagle Pub Cambridge'],
    },
    'Scotland': {
      attractions: ['Edinburgh Castle', 'Isle of Skye', 'Loch Ness'],
      food: ['The Kitchin Edinburgh', 'Ubiquitous Chip Glasgow', 'Café Royal Edinburgh'],
    },
    'Croatia': {
      attractions: ['Plitvice Lakes National Park', 'Diocletian\'s Palace', 'Hvar Island'],
      food: ['Konoba Mea Culpa', 'Pantarul Restaurant', 'Nishta Dubrovnik'],
    },
    'Spain': {
      attractions: ['La Alhambra Granada', 'Park Güell Barcelona', 'Plaza de España Seville'],
      food: ['Mercado de Triana', 'Bar El Rinconcillo', 'La Brunilda Tapas'],
    },
    'Iceland': {
      attractions: ['Golden Circle Tour', 'Blue Lagoon', 'Jökulsárlón Glacier Lagoon'],
      food: ['Grillmarkaðurinn', 'Bæjarins Beztu', 'Dill Restaurant'],
    },
    'USA': {
      attractions: ['Nearest National Park', 'Local Historical District', 'City Walking Tour'],
      food: ['Top-rated local diner', 'Famous regional cuisine spot', 'Craft brewery tour'],
    },
    'France': {
      attractions: ['Eiffel Tower', 'Musée d\'Orsay', 'Montmartre & Sacré-Cœur'],
      food: ['Le Comptoir du Panthéon', 'Café de Flore', 'L\'As du Fallafel'],
    },
    'Japan': {
      attractions: ['Fushimi Inari Shrine', 'Bamboo Grove Arashiyama', 'Kinkaku-ji Golden Pavilion'],
      food: ['Nishiki Market', 'Ippudo Ramen', 'Gion Karyo'],
    },
    'Morocco': {
      attractions: ['Kasbah of the Udayas', 'Hercules Cave', 'Grand Socco Market'],
      food: ['El Morocco Club', 'Le Saveur du Poisson', 'Café Hafa'],
    },
    'China': {
      attractions: ['Tianmen Mountain Glass Walkway', 'Baofeng Lake', 'Golden Whip Stream'],
      food: ['Grandma\'s Kitchen', 'Local Hunan cuisine restaurants', 'Night market street food'],
    },
    'Wales': {
      attractions: ['Cardiff Castle', 'Snowdonia National Park', 'Cardiff Bay'],
      food: ['The Potted Pig', 'Café Citta', 'Zerodegrees Cardiff'],
    },
  }

  // Distribute locations across days
  for (let dayIdx = 0; dayIdx < totalDays; dayIdx++) {
    const currentDate = new Date(start)
    currentDate.setDate(start.getDate() + dayIdx)
    const dateStr = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })

    const activities: ItineraryDay['activities'] = []
    const locationIdx = Math.min(dayIdx, locations.length - 1)
    const loc = locations[locationIdx]

    if (dayIdx === 0) {
      activities.push({
        time: '08:00 AM',
        title: `Depart from ${preferences.departureCity}`,
        description: `Begin your ${title.title}-themed adventure! Travel to ${loc.city}, ${loc.country}.`,
        type: 'transport',
        icon: '✈️',
      })
      activities.push({
        time: '02:00 PM',
        title: `Check-in & Settle In`,
        description: `Arrive and check into your hotel near ${loc.name}. Rest and prepare for tomorrow\'s exploration.`,
        type: 'accommodation',
        icon: '🏨',
      })
      activities.push({
        time: '07:00 PM',
        title: `Welcome Dinner`,
        description: `Enjoy a welcome dinner at a local restaurant. ${localAttractions[loc.country]?.food[0] ? `Try: ${localAttractions[loc.country].food[0]}` : 'Explore local cuisine.'}`,
        type: 'food',
        icon: '🍽️',
      })
    } else if (dayIdx === totalDays - 1) {
      activities.push({
        time: '09:00 AM',
        title: `Final Morning at ${loc.name}`,
        description: `Last chance to take photos and soak in the atmosphere of this ${title.title} location.`,
        type: 'filming-spot',
        icon: '🎬',
      })
      activities.push({
        time: '12:00 PM',
        title: 'Farewell Lunch',
        description: `A final meal before heading home. ${localAttractions[loc.country]?.food[2] ? `Recommended: ${localAttractions[loc.country].food[2]}` : 'Enjoy a local favorite.'}`,
        type: 'food',
        icon: '🍽️',
      })
      activities.push({
        time: '03:00 PM',
        title: `Return to ${preferences.departureCity}`,
        description: `Depart for home with unforgettable memories of your ${title.title} journey!`,
        type: 'transport',
        icon: '✈️',
      })
    } else {
      activities.push({
        time: '09:00 AM',
        title: `Visit ${loc.name}`,
        description: loc.description,
        type: 'filming-spot',
        icon: '🎬',
      })

      const extras = localAttractions[loc.country]
      if (extras) {
        const attractionIdx = dayIdx % extras.attractions.length
        activities.push({
          time: '12:00 PM',
          title: `Lunch Break`,
          description: `Enjoy local cuisine. Recommended: ${extras.food[dayIdx % extras.food.length]}`,
          type: 'food',
          icon: '🍽️',
        })
        activities.push({
          time: '02:00 PM',
          title: `Explore ${extras.attractions[attractionIdx]}`,
          description: `A famous local attraction near ${loc.city} that\'s well worth a visit while you\'re in the area.`,
          type: 'local-attraction',
          icon: '🏛️',
        })
      }

      activities.push({
        time: '06:00 PM',
        title: `Evening Exploration`,
        description: `Free time to explore ${loc.city}. Wander the local streets, shop for souvenirs, and enjoy the atmosphere.`,
        type: 'local-attraction',
        icon: '🌆',
      })
      activities.push({
        time: '08:00 PM',
        title: `Dinner`,
        description: `${extras ? `Try: ${extras.food[(dayIdx + 1) % extras.food.length]}` : 'Enjoy a local dining experience.'}`,
        type: 'food',
        icon: '🍽️',
      })
    }

    itinerary.push({
      day: dayIdx + 1,
      date: dateStr,
      location: `${loc.city}, ${loc.country}`,
      activities,
    })
  }

  return itinerary
}
