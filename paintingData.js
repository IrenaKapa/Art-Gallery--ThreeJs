export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Claude Monet ${i + 1}`,
      artist: 'Claude Monet',
      description: `This is one of the masterpieces by Claude Monet, showcasing his unique style of Impressionism and Realism with emotional honesty. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `1868`,
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Claude Monet ${i + 5}`,
      artist: 'Claude Monet',
      description: `Artwork ${
        i + 5
      } Claude Monet's artworks, such as Lane in Normandy, embody the essence of Impressionism, capturing fleeting moments of light and atmosphere with delicate brushstrokes and vibrant colors. His landscapes often reflect a harmonious interplay between nature and emotion, immersing viewers in serene, dynamic settings.`,
      year: `1868`,
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Claude Monet ${i + 9}`,
      artist: 'Claude Monet',
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Claude Monet artistic revolution.`,
      year: `1868`,
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Claude Monet ${i + 13}`,
      artist: 'Claude Monet',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Claude Monet, reflecting his distinctive style and deep passion for art.`,
      year: `1868`,
    },
  })),
];
