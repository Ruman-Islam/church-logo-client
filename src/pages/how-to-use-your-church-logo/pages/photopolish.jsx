import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../../components/common/Layout";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";

export default function Photopolish() {
  useAutoScrollWithOffset("photopolish");
  return (
    <Layout title="How to apply your Church Logo in Photopolish">
      <Box id="photopolish">
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
                  How to apply your Church Logo in Photopolish
                </h2>
                <Box className="flex flex-col gap-y-2.5">
                  <Typography>
                    So, you’ve received your brand new Church Logo and can’t
                    wait to start signing your photos, but watermarking seems
                    complicated and time-consuming? Photopolish is the perfect
                    tool to streamline your process and get more done in much
                    less time.
                  </Typography>
                  <Typography>
                    In this quick tutorial, I’ll show you the easiest way to
                    apply your logo to your digital photos using Photopolish. In
                    just a few steps, you’ll learn the fastest way to protect
                    your photographs from unauthorized use and start building
                    your personal brand.
                  </Typography>
                </Box>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-2">
                  STEP BY STEP
                </h2>
                <Box className="flex flex-col gap-y-4">
                  <Box>
                    <Typography>
                      <strong>1. Install and Launch Photopolish</strong>
                    </Typography>
                    <Typography>
                      First, install and launch Photopolish. Next, import up to
                      50 images you want to sign into the workspace. The Import
                      button is located in the bottom left corner. Photopolish
                      supports JPEG and PNG, with more formats coming in future
                      versions.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <strong>
                        2. Add Your Signatures and Logos to the Watermark Wallet
                      </strong>
                    </Typography>
                    <Typography>
                      suggest storing both the white and black versions of your
                      Church Logo in your watermark wallet for faster
                      watermarking. For darker or color-saturated images, use a
                      white Church Logo. For images with light tones or bright
                      backgrounds, choose the black version of your logo. The
                      good news is that your custom Church Logo is designed to
                      fit a wide variety of cases. The file you received from
                      our studio contains multiple different versions to choose
                      from:
                      <ul className="list-disc my-2 ml-4">
                        <li>
                          <Typography>Black and White versions</Typography>
                        </li>
                        <li>
                          <Typography>
                            High and Low resolution (for both colors)
                          </Typography>
                        </li>
                        <li>
                          <Typography>PNG file format</Typography>
                        </li>
                        <li>
                          <Typography>
                            Transparent background, ready to be applied
                          </Typography>
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <strong>3. Apply Your Logo to a Single Photo</strong>
                    </Typography>
                    <Typography>
                      If you want to sign just one photograph, select the image
                      in the left column. Tap your preferred watermark in the
                      right column, and it will be instantly added to your
                      photo. Click on the logo to enter Edit mode, where you can
                      drag, rotate, and resize it using the handles on the
                      corners of the bounding box. Adjust the opacity using the
                      Opacity tool in the bottom menu.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <strong>4. Bulk Watermarking</strong>
                    </Typography>
                    <Typography>
                      If you have a large number of images to sign, Photopolish
                      will save you hours and many headaches that come with
                      manually applying watermarks using other tools. It
                      features a Bulk Watermarking function (located on the
                      bottom menu) that automatically watermarks all of your
                      images at once, speeding up your workflow. How to use it:
                      Simply apply and edit your Church Logo on the first photo
                      of the set. When you’re done editing, click the Bulk
                      Watermarking button, and ta-da! All the imported images
                      will be watermarked with the exact same settings and
                      position as the first one.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <strong>5. Export Your Photos</strong>
                    </Typography>
                    <Typography>
                      Your masterpieces are now signed and ready to be exported
                      in JPG or PNG formats. Bulk Exporting is even easier than
                      Bulk Watermarking. Just go to the top left corner, in the
                      main upper menu, and click on{" "}
                      <strong>
                        Photopolish &gt; Export Watermarked Photos
                      </strong>
                      . Done!
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Your photographs are now ready to go!
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
