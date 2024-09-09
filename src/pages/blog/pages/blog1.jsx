import Box from "@mui/material/Box";

import Layout from "../../../components/common/Layout";

export default function Blog1() {
  return (
    <Layout title="Analyzing Spotify Music UI/UX">
      <Box id="analyzing-spotify-music-ui-ux">
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
              <p>
                After years of freelancing, Cindy Smith was a pretty big name in
                the world of SEO. Every week, she received messages on LinkedIn
                from young marketers looking to break into the industry, and she
                tried to give back as much as possible.
              </p>
              <p>
                It started with hosting some free webinars – a space to air the
                answers to her most frequently asked questions. Then a friend at
                a marketing blog asked her to whip up her ‘10 Tips for Success’.
                As her reputation as a helpful SEO veteran grew, so too did her
                LinkedIn inbox until one day, she received the most compelling
                pitch she had in months.
              </p>
              <p className="font-brand__font__semibold">
                ‘Why not go all in on this?’ her husband asked. ‘Set up a
                coaching business?’
              </p>
              <p>
                It wasn’t until she heard someone else say it that Cindy was
                able to push her doubts aside. She really enjoyed mentorship.
                Loved it even. But the thought of starting from scratch at this
                stage of her career was… well, kind of terrifying.
              </p>
              <p>This is when Cindy came to us.</p>
            </Box>

            <Box className="mt-10">
              <p className="text-brand__font__size__lg font-brand__font__semibold">
                The Process
              </p>
              <p className="font-brand__font__semibold text-brand__font__size__md mt-3">
                Strategy:
              </p>
              <p>
                The team got to work developing a comprehensive strategy to take
                care of Cindy’s branding needs. The first step was crafting her
                very own Signature Logo which would be the centerpiece of the
                entire branding strategy.
              </p>
              <Box className="px-2 py-4">
                <img
                  src="https://photologo.co/wp-content/uploads/2024/08/01_Email-Signature-1024x540.png"
                  alt="church_logo"
                />
              </Box>
              <p>
                After some back and forth with Cindy, we agreed that her
                branding should be professional and warm. She wanted to showcase
                her expertise while also incorporating the supportive elements
                of mentorship. The brand was to be authoritative, yet
                approachable. Just like Cindy herself. Once our incredible
                calligraphers had drawn up the perfect Photologo, we recommended
                the All-Access Bundle. This includes 13 of our best-selling
                products at 50% off and would give Cindy everything she needed
                to establish her new brand.
              </p>
              <p className="font-brand__font__semibold text-brand__font__size__md mt-5">
                Design:
              </p>
              <p>
                Next, it was time to put the bundle together. Our team of
                talented designers expertly wove Cindy’s Signature Logo through
                each of the 13 elements to create a strong, cohesive brand
                package that was uniquely Cindy Smith.
              </p>
              <p className="font-brand__font__semibold">
                Check out some of their work below.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
