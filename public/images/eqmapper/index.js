import eqmapper1 from "./eqmapper1.png";
import eqmapper2 from "./eqmapper2.png";
import eqmapper3 from "./eqmapper3.png";

const eqmapperImages = [eqmapper1, eqmapper2, eqmapper3];

export const eqmapperImagesCount = eqmapperImages.length;
export const eqmapperImagesByIndex = (index) => eqmapperImages[index % eqmapperImagesCount];
