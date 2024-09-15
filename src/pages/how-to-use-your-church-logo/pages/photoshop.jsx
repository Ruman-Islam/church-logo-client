import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../../components/common/Layout";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function Photoshop() {
  useAutoScrollWithOffset("photoshop");

  return (
    <Layout title="How to apply your Church Logo in Photoshop">
      <Box id="photoshop">
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
                  How to apply your Church Logo in Photoshop
                </h2>
                <Box className="flex flex-col gap-y-2.5">
                  <Typography>
                    So, you’ve got your brand new Church Logo and you’re super
                    excited to start signing your photos, but you’re not quite
                    sure where to begin? No worries, I’ve got your back!
                  </Typography>
                  <Typography>
                    So, you’ve got your brand new Church Logo and you’re super
                    excited to start signing your photos, but you’re not quite
                    sure where to begin? No worries, I’ve got your back!
                  </Typography>
                  <Typography>
                    In this quick tutorial, I’ll walk you through the easiest
                    way to add your logo to your digital photos using Adobe
                    Photoshop. In just a few simple steps, you’ll be able to
                    protect your work from unauthorized use and start building
                    your personal brand. Let’s dive in!
                  </Typography>
                  <Typography>
                    If you already have some experience using Photoshop, this
                    will be a breeze.
                  </Typography>
                  <Typography>
                    If not, don’t worry! The complex interface can seem
                    intimidating, but it’s easier than it looks.
                  </Typography>
                  <Typography>
                    Even though Photoshop isn’t specifically designed for this,
                    you can still manually insert your watermark into each image
                    using the same tools you use to add photos and text.
                    (SPOILER: With Photopolish, you can watermark many pictures
                    with a single click, enjoy lightning-fast processing, and
                    access a whole lot of awesome features.)
                  </Typography>
                </Box>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  STEP BY STEP
                </h2>
                <Typography>
                  First, launch Photoshop and drag and drop the image you want
                  to sign into the dashboard. Alternatively, you can click on
                  <strong className="italic"> File &gt; Open</strong> in the
                  main menu and select your image.
                </Typography>
                <br />
                <Typography>
                  Here’s a quick guide of the tools you’ll need:
                </Typography>
                <img
                  className="mt-2 border w-full h-full object-cover"
                  src={getImgUrl(
                    "image/blog/how-to-use-your-church-logo/how_to_use_your_church_logo_with_photoshop.png"
                  )}
                  alt="how_to_use_your_church_logo_with_photoshop"
                />
              </Box>

              <Box>
                <Typography>
                  Now, there are two ways you can insert your Church Logo:
                </Typography>
                <Box className="p-5 flex flex-col gap-y-2">
                  <Box>
                    <Typography className="font-brand__font__semibold">
                      1. Copy and Paste Method
                    </Typography>
                    <Typography className="pl-4">
                      Open the image with your signature in Photoshop{" "}
                      <strong className="italic">File &gt; Open</strong>. Press
                      <strong className="italic"> Ctrl+A</strong> to select it,
                      then <strong className="italic">Ctrl+C</strong> to copy
                      it. Go to the tab with the image you want to sign and
                      paste your logo using{" "}
                      <strong className="italic">Ctrl+V</strong>.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="font-brand__font__semibold">
                      2. Drag and Drop Method
                    </Typography>
                    <Typography className="pl-4">
                      Open the folder where your Church Logo is saved on your
                      computer. Simply drag and drop the signature file into the
                      image you have open in Photoshop’s workspace.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex flex-col gap-y-2.5">
                <Typography>
                  For darker or color-saturated images, we suggest using a white
                  Church Logo. For images with light tones or bright
                  backgrounds, choose the black version of your logo.
                </Typography>
                <Typography>
                  The good news is that your custom Church Logo is designed to
                  fit a wide variety of cases. The file you received from our
                  studio contains multiple versions to choose from:
                </Typography>
                <ul className="list-disc pl-5">
                  <li>
                    <Typography className="font-brand__font__semibold">
                      Black and White versions
                    </Typography>
                  </li>
                  <li>
                    <Typography className="font-brand__font__semibold">
                      High and Low resolution (for both colors)
                    </Typography>
                  </li>
                  <li>
                    <Typography className="font-brand__font__semibold">
                      PNG file format
                    </Typography>
                  </li>
                  <li>
                    <Typography className="font-brand__font__semibold">
                      Transparent background, ready to be applied
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box className="flex flex-col gap-y-2.5">
                <Typography>Just pick the one that fits best.</Typography>
                <Typography>
                  If you followed the previous steps correctly, your logo should
                  now be placed on top of the image, in a separate layer. Now,
                  you can adjust it to best fit the context of the picture you
                  are signing.
                </Typography>
                <Typography>
                  <strong>Adjust the position</strong> by using the Move tool
                  (on the toolbar, at the left side of the workspace) and move
                  it around the image.
                </Typography>
                <Typography>
                  To <strong>resize your signature logo</strong>, go to the
                  upper menu and click{" "}
                  <strong className="italic">
                    Edit &gt; Transform &gt; Scale
                  </strong>
                  . You can make your signature bigger or smaller by clicking
                  and dragging the corners of the bounding box around it (but
                  don’t forget to press and hold the Shift key while dragging
                  it, to keep the correct aspect ratio) and press the Enter key
                  when you’ve chosen the perfect size.
                </Typography>
                <Typography>
                  You can also <strong>adjust the opacity</strong>. To do that,
                  select the correct layer and slide the opacity bar in the
                  Layers tab (on the bottom right corner of the workspace) to
                  make your signature semi-transparent.
                </Typography>
                <Typography>
                  And there you go! When you’re done editing, go to the upper
                  menu and click{" "}
                  <strong className="italic">File &gt; Save As</strong>, choose
                  the file format, and hit the Save button.
                </Typography>
                <Typography>
                  Your masterpiece is now signed and ready to go!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
