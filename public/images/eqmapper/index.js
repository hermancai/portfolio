import eqmapper1 from "./eqmapper1.png";
import eqmapper2 from "./eqmapper2.png";

const eqmapperImages = [eqmapper1, eqmapper2];

export const eqmapperImagesCount = eqmapperImages.length;
export const eqmapperImagesByIndex = (index) => eqmapperImages[index % eqmapperImagesCount];
