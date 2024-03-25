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
    dimensions: {
      artist: GuernicaArtist.src,
      gallery: GuernicaGallery.src,
      heroLarge: GuernicaHeroLarge.src,
      heroSmall: GuernicaHeroSmall.src,
      thumbnail: GuernicaThumbnail.src,
    },
  },
];
