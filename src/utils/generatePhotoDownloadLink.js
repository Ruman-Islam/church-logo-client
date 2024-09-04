const generatePhotoDownloadLink = (url) => {
  const splittedUrl = url.split("upload");
  return splittedUrl[0] + "upload/fl_attachment" + splittedUrl[1];
};

export default generatePhotoDownloadLink;
