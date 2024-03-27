import GirlWithPearlEarringArtist from "../assets/girl-with-pearl-earring/artist.jpg";
import GirlWithPearlEarringGallery from "../assets/girl-with-pearl-earring/gallery.jpg";
import GirlWithPearlEarringHeroLarge from "../assets/girl-with-pearl-earring/hero-large.jpg";
import GirlWithPearlEarringHeroSmall from "../assets/girl-with-pearl-earring/hero-small.jpg";
import GirlWithPearlEarringThumbnail from "../assets/girl-with-pearl-earring/thumbnail.jpg";

import StarryNightArtist from "../assets/starry-night/artist.jpg";
import StarryNightGallery from "../assets/starry-night/gallery.jpg";
import StarryNightHeroLarge from "../assets/starry-night/hero-large.jpg";
import StarryNightHeroSmall from "../assets/starry-night/hero-small.jpg";
import StarryNightThumbnail from "../assets/starry-night/thumbnail.jpg";

import GuernicaArtist from "../assets/guernica/artist.jpg";
import GuernicaGallery from "../assets/guernica/gallery.jpg";
import GuernicaHeroLarge from "../assets/guernica/hero-large.jpg";
import GuernicaHeroSmall from "../assets/guernica/hero-small.jpg";
import GuernicaThumbnail from "../assets/guernica/thumbnail.jpg";

export interface ImageSource {
  name: string;
  author: string;
  year: number;
  paintDescription: string;
  dimensions: ImageSourceDimensions;
}

export interface ImageSourceDimensions {
  artist: string;
  gallery: string;
  heroSmall: string;
  heroLarge: string;
  thumbnail: string;
}

export const imagesSources: ImageSource[] = [
  {
    name: "Starry Night",
    author: "Vincent Van Gogh",
    year: 1889,
    paintDescription: `Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, 
    it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, 
    including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."`,
    dimensions: {
      artist: StarryNightArtist.src,
      gallery: StarryNightGallery.src,
      heroLarge: StarryNightHeroLarge.src,
      heroSmall: StarryNightHeroSmall.src,
      thumbnail: StarryNightThumbnail.src,
    },
  },
  {
    name: "Girl with a Pearl Earring",
    author: "Johannes Vermeer",
    year: 1665,
    paintDescription: `The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.`,
    dimensions: {
      artist: GirlWithPearlEarringArtist.src,
      gallery: GirlWithPearlEarringGallery.src,
      heroLarge: GirlWithPearlEarringHeroLarge.src,
      heroSmall: GirlWithPearlEarringHeroSmall.src,
      thumbnail: GirlWithPearlEarringThumbnail.src,
    },
  },
  {
    name: "Guernica",
    author: "Pablo Picasso",
    year: 1937,
    paintDescription: `The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.`,
    dimensions: {
      artist: GuernicaArtist.src,
      gallery: GuernicaGallery.src,
      heroLarge: GuernicaHeroLarge.src,
      heroSmall: GuernicaHeroSmall.src,
      thumbnail: GuernicaThumbnail.src,
    },
  },
];
