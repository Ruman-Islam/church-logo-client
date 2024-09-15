import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Layout from "../../../components/common/Layout";
import useAutoScrollWithOffset from "../../../hooks/useAutoScrollWithOffset";

export default function AppleWatch() {
  useAutoScrollWithOffset("applewatch");

  return (
    <Layout title="How to apply your Church Logo in Apple Watch">
      <Box id="applewatch">
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
                  How to customize your Apple Watch with Church Logo
                </h2>
                <Box className="flex flex-col gap-y-2.5">
                  <Typography>
                    Customizing your Apple Watch with your Church Logo is a
                    great way to make your device uniquely yours. Here’s a
                    step-by-step guide to help you get started:
                  </Typography>
                  <ul className="list-decimal p-4 flex flex-col gap-y-2.5">
                    <li>
                      <Typography>
                        <strong>Create Your Custom Watch Face</strong>
                      </Typography>
                      <Typography>
                        First, you’ll need an image of your Church Logo. Make
                        sure it’s in a compatible format like PNG with a
                        transparent background. You can use graphic design tools
                        like Photoshop or Canva to create this.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Transfer the Image to Your iPhone</strong>
                      </Typography>
                      <Typography>
                        Save the image of your Church Logo to your iPhone. You
                        can do this by emailing it to yourself, using AirDrop,
                        or saving it directly from a cloud service.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Open the Apple Watch App</strong>
                      </Typography>
                      <Typography>
                        On your iPhone, open the Apple Watch app. Tap on the
                        <strong> Face Gallery</strong> tab at the bottom of the
                        screen.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Choose a Photo Watch Face</strong>
                      </Typography>
                      <Typography>
                        Scroll down to find the <strong>Photos</strong> watch
                        face. Tap on it, then tap <strong>Add</strong>.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Select Your Church Logo Image</strong>
                      </Typography>
                      <Typography>
                        Tap on <strong>Photos</strong> under the{" "}
                        <strong>Content</strong>
                        section. Select the album where you saved your Church
                        Logo image. Choose the image you want to use.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Customize the Watch Face</strong>
                      </Typography>
                      <Typography>
                        You can customize the watch face further by adjusting
                        the time position and adding complications (small
                        widgets that show extra information like battery
                        percentage, reminders, etc.). Tap <strong>Add</strong>{" "}
                        when you’re done.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <strong>Set the Watch Face</strong>
                      </Typography>
                      <Typography>
                        Go back to the <strong>My Watch</strong> tab, find the
                        new watch face you created, and tap{" "}
                        <strong>Set as current Watch Face</strong>. And there
                        you have it! Your Apple Watch now proudly displays your
                        Church Logo, making it a unique accessory that reflects
                        your brand.
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
