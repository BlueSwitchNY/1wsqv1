const neighborhoodGallery = [
  { src: '/images/neighborhood/neighborhood1', 
    alt: 'Katz Deli Interior' },
  {
    src: '/images/neighborhood/neighborhood2',
    alt: 'Dekalb Mar Taco Sign'
  },
  { src: '/images/neighborhood/neighborhood3', alt: 'Mile End Interior' },
  { src: '/images/neighborhood/neighborhood4', alt: 'Mile End Exterior' },
  { src: '/images/neighborhood/neighborhood5', alt: 'La Vara Window' },
  {
    src: '/images/neighborhood/neighborhood6',
    alt: 'Steven Allen Storefront'
  },
  {
    src: '/images/neighborhood/neighborhood7',
    alt: 'Barneys New York Storefront'
  },
  { src: '/images/neighborhood/neighborhood8', alt: "Trader Joe's Sign" },
  {
    src: '/images/neighborhood/neighborhood9',
    alt: 'Bam Rose Cinema Exterior'
  },
  {
    src: '/images/neighborhood/neighborhood10',
    alt: "Luke's Lobster Exterior"
  },
  {
    src: '/images/neighborhood/neighborhood11',
    alt: 'Park with movie screen'
  }
];

const diningList = [
  {
    sectionTitle: 'RESTAURANTS',
    destinations: [
      'BACCHUS',
      'BEDOUIN TENT',
      'BETTY BAKERY',
      'BIEN CUIT',
      'BIJAN’S',
      'BRASSERIE SÉOUL',
      'BRAZEN HEAD',
      'DEKALB MARKET HALL',
      'FORNO ROSSO PIZZERIA',
      'FRENCH LOUIE',
      'GOTHAM WEST MARKET AT THE ASHLAND',
      'GOVINDA’S VEGETARIAN',
      'GRAND ARMY',
      'HILL COUNTRY BARBECUE MARKET',
      'HOLLOW NICKEL',
      'KI SUSHI',
      'LIVINGSTON MANOR',
      'MILE END',
      'MISDEMEANOR',
      'PERELANDRA NATURAL FOOD CENTER',
      'RICE & MISO',
      'ROBERT',
      'RUCOLA',
      'SHAKE SHACK',
      'SOTTOCASA PIZZERIA',
      'ST GAMBRINUS BEER SHOPPE',
      'TAIKI',
      'THE LITTLE SWEET CAFÉ',
      'THE SOUL SPOT',
      'THE WEI',
      'TWO8TWO',
      'VAN LEEUWEN ARTISAN ICE CREAM',
      'YASO TANGBAO'
    ]
  }
];

const amenitiesList = [
  {
    sectionTitle: 'HOTELS',
    destinations: [
      '1 HOTEL BROOKLYN BRIDGE',
      'ALOFT NEW YORK BROOKLYN',
      'HAMPTON INN BROOKLYN / DOWNTOWN',
      'HOLIDAY INN BROOKLYN DOWNTOWN',
      'EVEN HOTELS BROOKLYN',
      'HILTON BROOKLYN',
      'HOTEL INDIGO BROOKLYN',
      'MARRIOTT BROOKLYN BRIDGE',
      'NU HOTEL',
      'SHERATON BROOKLYN'
    ]
  },
  {
    sectionTitle: 'UNIVERSITIES',
    destinations: [
      'BROOKLYN LAW SCHOOL',
      'LONG ISLAND UNIVERSITY',
      'NYU TANDON SCHOOL OF ENGINEERING',
      'PRATT INSTITUTE'
    ]
  },
  {
    sectionTitle: 'ART & PERFORMING ARTS VENUES',
    destinations: [
      '315 GALLERY',
      'ALAMO DRAFTHOUSE CINEMA',
      'BROOKLYN ACADEMY OF MUSIC',
      'BAM FISHER',
      'BARCLAYS CENTER',
      'BRIC',
      'BROOKLYN BALLET',
      'BROOKLYN BOOK FESTIVAL',
      'MARK MORRIS DANCE',
      'THEATER FOR A NEW AUDIENCE',
      'URBAN GLASS'
    ]
  }
];

const travelTimes = {
  trainToManhattan: [
    {
      destination: 'WALL STREET',
      eta: '10 MIN'
    },
    {
      destination: 'UNION SQUARE',
      eta: '16 MIN'
    },
    {
      destination: 'PENN STATION',
      eta: '17 MIN'
    },
    {
      destination: 'ROCKEFELLER CENTER',
      eta: '20 MIN'
    },
    {
      destination: 'COLUMBUS CIRCLE',
      eta: '25 MIN'
    }
  ],
  trainToBrooklyn: [
    {
      destination: 'WILLIAMSBURG',
      eta: '15 MIN'
    },
    {
      destination: 'SUNSET PARK',
      eta: '15 MIN'
    },
    {
      destination: 'BAY RIDGE',
      eta: '20 MIN'
    },
    {
      destination: 'FLATBUSH',
      eta: '20 MIN'
    },
    {
      destination: 'CROWN HEIGHTS',
      eta: '20 MIN'
    }
  ],
  walkToBrooklyn: [
    {
      destination: 'BOERUM HILL',
      eta: '5 MIN'
    },
    {
      destination: 'BROOKLYN HEIGHTS',
      eta: '10 MIN'
    },
    {
      destination: 'COBBLE HILL',
      eta: '10 MIN'
    },
    {
      destination: 'DUMBO',
      eta: '10 MIN'
    },
    {
      destination: 'PARK SLOPE',
      eta: '15 MIN'
    }
  ],
  toAirports: [
    {
      destination: 'LAGUARDIA',
      eta: '30 MIN'
    },
    {
      destination: 'JFK',
      eta: '35 MIN'
    }
  ]
};

export { neighborhoodGallery, diningList, amenitiesList, travelTimes };
