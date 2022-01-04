import slackclone1 from "./slackclone1.png";
import slackclone2 from "./slackclone2.png";

const slackcloneImages = [slackclone1, slackclone2];

export const slackcloneImagesCount = slackcloneImages.length;
export const slackcloneImagesByIndex = (index) => slackcloneImages[index % slackcloneImagesCount];
