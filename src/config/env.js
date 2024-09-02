export const env = {
  env: import.meta.env.VITE_ENV,
  app_url:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_APP_URL_PROD
      : import.meta.env.VITE_APP_URL_DEV,
  app_route_url:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_APP_ROUTE_URL_PROD
      : import.meta.env.VITE_APP_ROUTE_URL_DEV,
  cloud_upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  cloud_upload_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
};
