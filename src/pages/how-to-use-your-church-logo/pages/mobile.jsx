import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../../components/common/Layout";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";

export default function Mobile() {
  useAutoScrollWithOffset("mobile");

  return (
    <Layout title="How to apply your Church Logo in Apple Watch">
      <Box id="mobile">
        <Box className="max-w-[1024px] w-full h-full mx-auto px-4 py-5 lg:py-10">
          <Box className="h-[300px] rounded-md">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHx3ZWJzaXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="church_logo"
            />
          </Box>

          <Box className="max-w-[768px] mx-auto py-10 leading-relaxed">
            <Box className="flex flex-col gap-5">
              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__lg mb-2">
                  How to apply your Church Logo on Mobile
                </h2>
                <Box className="flex flex-col gap-y-2.5">
                  <Typography>
                    Applying your Church Logo on mobile devices is a great way
                    to ensure your branding is consistent across all platforms.
                    Here’s a step-by-step guide to help you get started:
                  </Typography>
                  <ul className="list-decimal p-4 flex flex-col gap-y-2.5">
                    <li>
                      <Typography>
                        <strong>Prepare Your Logo Files</strong>
                      </Typography>
                      <Typography>
                        Make sure you have your Church Logo files ready in PNG
                        format with a transparent background. This will ensure
                        that your logo looks clean and professional on any
                        image.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Choose a Mobile App</strong>
                      </Typography>
                      <Typography>
                        There are several mobile apps you can use to add your
                        logo to images. Some popular options include:
                        <ul className="list-disc p-4 flex flex-col gap-y-1.5">
                          <li>
                            <Typography>
                              <strong>Canva:</strong>
                              Great for designing and adding logos to images.
                            </Typography>
                          </li>
                          <li>
                            <Typography>
                              <strong>Adobe Spark Post:</strong>
                              Offers powerful tools for adding logos and text to
                              images.
                            </Typography>
                          </li>
                          <li>
                            <Typography>
                              <strong>Over:</strong>A user-friendly app for
                              adding logos and other design elements to photos.
                            </Typography>
                          </li>
                        </ul>
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Import Your Image</strong>
                      </Typography>
                      <Typography>
                        Open the app of your choice and import the image you
                        want to add your logo to. This is usually done by
                        tapping an “Import” or “Add Image” button.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Add Your Logo</strong>
                      </Typography>
                      <Typography>
                        Look for an option to add an image or graphic. In Canva,
                        for example, you can tap on the “+” button and select
                        “Images” to add your logo. In Adobe Spark Post, you can
                        tap on the “Add” button and choose “Photo” to import
                        your logo.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Position and Resize Your Logo</strong>
                      </Typography>
                      <Typography>
                        Once your logo is added to the image, you can move it
                        around by dragging it with your finger. To resize it,
                        pinch in or out with two fingers. Make sure to place
                        your logo in a spot where it’s visible but not
                        intrusive.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Adjust Opacity and Effects</strong>
                      </Typography>
                      <Typography>
                        If you want your logo to blend more naturally with the
                        image, you can adjust its opacity. Most apps have an
                        opacity slider that you can use to make your logo more
                        transparent. You can also add effects like shadows or
                        outlines to make your logo stand out.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Save and Export</strong>
                      </Typography>
                      <Typography>
                        Once you’re happy with how your logo looks on the image,
                        save your work. Most apps will have a “Save” or “Export”
                        button that allows you to save the image to your device
                        or share it directly to social media.
                      </Typography>
                    </li>
                  </ul>

                  <Box>
                    <Typography>
                      And there you have it! Your images are now branded with
                      your Church Logo, ready to be shared and admired.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
