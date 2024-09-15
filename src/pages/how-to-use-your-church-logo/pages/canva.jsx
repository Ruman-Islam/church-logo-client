import Box from "@mui/material/Box";
import Layout from "../../../components/common/Layout";
import Typography from "@mui/material/Typography";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";

export default function Canva() {
  useAutoScrollWithOffset("canva");

  return (
    <Layout title="How to Use Your Church Logo with Canva in 5 Easy Steps">
      <Box id="canva">
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
                  How to Apply Your Church Logo with Canva in 5 Easy Steps-
                </h2>
                <Typography>
                  Ready to share your Church Logo with the world? One tool that
                  makes this super easy is Canva. Canva has become an
                  increasingly popular graphic design tool, especially for those
                  who aren’t familiar with more complex tools like Photoshop. It
                  makes editing graphics as easy as drag and drop.
                </Typography>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  1. Download your Church Logo to your computer
                </h2>
                <Typography>
                  First things first, make sure you have your Church Logo
                  downloaded to your computer. Just grab it from the email we
                  sent you. You’ll get different versions of your logo—one black
                  and one white, with various resolution sizes.
                </Typography>
                <Typography>
                  As a general rule, use the high-resolution logo for larger
                  graphics like website headers and big prints. The
                  low-resolution version is perfect for social media posts,
                  profile photos, and stationery.
                </Typography>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  2. Choose a design on Canva
                </h2>
                <Typography>
                  Next, head over to Canva.com on your browser. You can pick a
                  design template or start from scratch. There are tons of
                  designs to choose from, so just go with whatever catches your
                  eye. For this example, let’s use a social media graphic.
                </Typography>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  3. Upload your Church Logo to Canva
                </h2>
                <Typography>
                  Now, click on “Uploads” on the left sidebar, right under
                  “Elements.” Then, hit the “upload media” button and select
                  your Church Logo from your computer.
                </Typography>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  4. Drag your logo onto your chosen design
                </h2>
                <Typography>
                  Once your Church Logo is uploaded, you’ll see it on the left
                  side of your screen under the “Uploads” tab. Just drag it onto
                  your graphic on the right. You should now see it in your
                  chosen design.
                </Typography>
              </Box>

              <Box>
                <h2 className="font-brand__font__semibold text-brand__font__size__md mb-1">
                  5. Adjust it the way you want
                </h2>
                <Typography>
                  This is the fun part! Canva makes it super easy—no coding or
                  complicated tools needed. Just drag your Church Logo around,
                  resize it, or even flip it if you want. Use the tiny circles
                  on the corners of your logo to experiment with different
                  looks. It’s all up to you!
                </Typography>
                <Typography>
                  And that’s it! Once you’re happy with the placement of your
                  logo, you can download it. Just click “Download” on the upper
                  right, choose the file type you want, and voila! You have a
                  new graphic or photo with your Church Logo on it. Now you have
                  a professional, clean, and uniquely you graphic.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
