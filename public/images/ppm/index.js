import ppm1 from "./ppm1.png";
import ppm2 from "./ppm2.png";

const ppmImages = [ppm1, ppm2];

export const ppmImagesCount = ppmImages.length;
export const ppmImagesByIndex = (index) => ppmImages[index % ppmImagesCount];
