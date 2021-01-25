// web app takes too long bc of images
// reduce img size to increase speed

export const smallImage = (imagePath, size) => {
  if (!imagePath) return null;
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
  return image;
};
