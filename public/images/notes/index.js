import notes1 from "./notes1.png";
import notes2 from "./notes2.png";

const notesImages = [notes1, notes2];

export const notesImagesCount = notesImages.length;
export const notesImagesByIndex = (index) =>
  notesImages[index % notesImagesCount];
