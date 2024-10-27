import axios from "axios";
import { env } from "../config/env";

const multipleImageUploader = async (images, path) => {
  const form = new FormData();
  form.append("upload_preset", env.cloud_upload_preset);
  form.append("cloud_name", env.cloud_upload_name);
  form.append("folder", `church-logo/${path}`);

  const uploadedImages = [];

  for (const img of images) {
    if (img.url) {
      form.append("file", img.url);

      // Await the result of each upload
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${env?.cloud_upload_name}/upload`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Push the uploaded image data to the array
      uploadedImages.push(data);
    }
  }

  return uploadedImages;
};

const singleImageUploader = async (image, path) => {
  const form = new FormData();
  form.append("upload_preset", env.cloud_upload_preset);
  form.append("cloud_name", env.cloud_upload_name);
  form.append("folder", `church-logo/${path}`);

  if (image.originFileObj) {
    form.append("file", image.originFileObj);

    // Await the result of each upload
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${env?.cloud_upload_name}/upload`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  }
};

export { multipleImageUploader, singleImageUploader };
