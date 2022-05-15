import weather1 from "./weather1.png";

const weatherImages = [weather1];

export const weatherImagesCount = weatherImages.length;
export const weatherImagesByIndex = (index) =>
  weatherImages[index % weatherImagesCount];
