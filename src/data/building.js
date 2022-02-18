// src={`${srcPath}.jpg`}
// srcSet={`${srcPath}_400.jpg 400w, ${srcPath}_600.jpg 600w, ${srcPath}_800.jpg 800w, ${srcPath}_1100.jpg 1100w, ${srcPath}_1500.jpg 1500w, ${srcPath}_2000.jpg 2000w, ${srcPath}_2500.jpg 2500w`}

// building1.jpg
// building1_400.jpg
// building1_square_400.jpg

const sizes = ["400","600","800","1100", "1500", "2000","2500"]
const buildingGallery = [
  {
    src: '/images/building/building1',
    alt:
      'Rendering of One Wiloughby Square Exterior with east river in background'
  },
  {
    src: '/images/building/building2',
    alt: 'Close up rendering of One Wiloughby Square Exterior with park'
  },
  {
    src: '/images/building/building3',
    alt: 'Aerial rendering of One Wiloughby Square Exterior'
  },
  {
    src: '/images/building/building4',
    alt: 'Rendering of One Wiloughby Square Lobby'
  },
  {
    src: '/images/building/lobby',
    alt: 'Rendering of One Wiloughby Square Lobby'
  },  
  {
    src: '/images/building/building5',
    alt: 'Rendering of multilevel office space'
  },
  {
    src: '/images/building/building6',
    alt: 'Rendering of sunset view over the east river'
  },
  {
    src: '/images/building/building7',
    alt: 'Rendering of open office space'
  },
  {
    src: '/images/building/building8',
    alt: 'Rendering of lounge area with patio at dusk'
  },
  { src: '/images/building/building9', alt: 'Rendering of rooftop view' }
];

// buildingGallery.forEach((building)=>{
//   const { src } = building
//   const square = sizes.map(size=>{
//     `${src}_square_${size}.jpg`
//   })
//   const nonSquare = sizes.map(size=>{
//     `${src}_${size}.jpg`
//   })

//   building.square = square
//   building.nonSquare = nonSquare
// })

export { buildingGallery };
