import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../../components/common/Layout";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function Lightroom() {
  useAutoScrollWithOffset("lightroom");
  return (
    <Layout title="How to apply your Church Logo in Light room">
      <Box id="lightroom">
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
                  How to apply your Church Logo in Lightroom
                </h2>
                <Box className="flex flex-col gap-y-2.5">
                  <Typography>
                    So, your brand new Church Logo has landed in your inbox, and
                    you’re excited to start signing your precious photographs,
                    but you’re not sure where to begin?
                  </Typography>
                  <Typography>
                    If you’re used to editing your images in Lightroom but
                    aren’t familiar with watermarking, don’t worry! I’ve put
                    together an easy tutorial to show you the simplest way to
                    apply your Church Logo to your digital creations using
                    Lightroom’s Watermark tool.
                  </Typography>
                  <Typography>
                    In just a few quick steps, I’ll guide you on how to protect
                    your photographs from unauthorized use and start building
                    your personal brand. Let’s get started!
                  </Typography>
                </Box>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  STEP BY STEP
                </h2>
                <Typography>
                  First, install and launch Lightroom. For this tutorial, I’m
                  using Lightroom Classic CC. Next, click on the Import button
                  located in the bottom left corner. Lightroom supports JPEG,
                  PNG, and RAW files.
                </Typography>
                <br />
                <Typography>
                  Here’s a quick guide of the tools you’ll need:
                </Typography>
                <img
                  className="mt-2 border w-full h-full object-cover"
                  src={getImgUrl(
                    "image/blog/how-to-use-your-church-logo/how_to_use_your_church_logo_with_lightroom.png"
                  )}
                  alt="how_to_use_your_church_logo_with_lightroom"
                />
              </Box>

              <Box>
                <Typography>
                  Now it’s time to open the Watermark Editor.
                </Typography>
                <Box className="py-5 flex flex-col gap-y-2">
                  <Box className="flex flex-col gap-y-2">
                    <Typography>
                      1. Go to the top left corner in the main menu:{" "}
                      <strong>Lightroom menu &gt; Edit Watermarks</strong> (Mac)
                      or <strong>Edit menu &gt; Edit Watermarks</strong>{" "}
                      (Windows).
                    </Typography>
                    <Typography>
                      2. The Watermark Editor window is pretty small by default.
                      I suggest clicking and dragging the top right corner of
                      the window to enlarge it. This will make applying and
                      editing your Church Logo much quicker and easier.
                    </Typography>
                    <Typography>
                      3. <strong>In the Watermark Editor</strong>, select
                      <strong> Graphic</strong> as the Watermark Style. A
                      message should pop up prompting you to choose the file you
                      need to sign your photographs. Go to the folder where you
                      have your Church Logo files stored and choose the one that
                      fits best. Your custom Church Logo is made to fit a wide
                      variety of cases, so the file you received from our studio
                      contains multiple different versions to choose from:
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
                    <Typography>
                      4. For darker or color-saturated images, we suggest using
                      a white Church Logo. For images with light tones or bright
                      backgrounds, choose the black version of your logo.
                    </Typography>
                    <Typography>
                      5.{" "}
                      <strong>
                        Expand the Watermark Effect drop-down menu
                      </strong>
                      : You can now use the panel to resize your signature
                      Church Logo and choose an anchor point to place it on your
                      photo. If you want to keep your logo more subtle, simply
                      adjust the opacity level in the same menu.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex flex-col gap-y-2.5">
                <Typography>
                  Once you have adjusted your watermark settings to your liking,
                  go to the drop-down menu in the upper left of the window where
                  it says <strong>Custom</strong>, and select{" "}
                  <strong>Save Current Settings as a New Preset</strong>. Enter
                  a preset name for the current settings (e.g.,
                  My-name_WhiteChurchLogo) and tap save.
                </Typography>
                <Typography>
                  The good news is that you can save several watermark presets
                  using, for example, both the white and black versions with
                  different anchor points. Just repeat the steps above,
                  selecting a different Church Logo and choosing a different
                  placement.
                </Typography>
                <Typography>
                  <strong>IMPORTANT</strong>: You will not see your Church Logo
                  on your photos while in Lightroom. The watermarking feature is
                  only applied upon exporting. To do that, go to{" "}
                  <strong>File &gt; Export</strong> and open the Export dialog
                  box. Scroll down to the Watermarking section and select the
                  watermark preset you previously saved from the drop-down menu,
                  then tap the <strong>Export</strong> button in the bottom
                  right of the window.
                </Typography>
                <Typography>
                  Your photographs are now signed and ready to go!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
