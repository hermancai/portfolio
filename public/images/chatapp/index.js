import chatapp1 from "./chatapp1.png";
import chatapp2 from "./chatapp2.png";

const chatappImages = [chatapp1, chatapp2];

export const chatappImagesCount = chatappImages.length;
export const chatappImagesByIndex = (index) => chatappImages[index % chatappImagesCount];
