import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useTracking from "../../hooks/useTracking";
import { useAppSelector } from "../../services/hook";

export default function FAQScreen() {
  useTracking();

  const {
    system: { generalFaqs, faqThumbnail, isLoading },
  } = useAppSelector((state) => state);

  const faqs = generalFaqs || [];

  // Create an array to track expanded states of FAQs
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleChange = (faqIndex, innerFaqIndex) => {
    setExpandedIndices((prevExpandedIndices) => {
      // Create a copy of the expanded state
      const updatedIndices = [...prevExpandedIndices];

      // Toggle the state for the current index
      if (updatedIndices[faqIndex] && updatedIndices[faqIndex][innerFaqIndex]) {
        updatedIndices[faqIndex][innerFaqIndex] = false; // Collapse if it's already expanded
      } else {
        // Initialize the array for the faqIndex if it doesn't exist
        updatedIndices[faqIndex] = updatedIndices[faqIndex] || [];
        updatedIndices[faqIndex][innerFaqIndex] = true; // Expand it
      }

      return updatedIndices;
    });
  };

  return (
    <Layout
      title="Church Logo FAQ - All Your Logo Design Questions Answered"
      description="Got questions about our church logo design process? Check out our FAQ for quick answers and all the information you need before getting started."
    >
      <section id="faq">
        <SectionBanner heading="FAQ" desc="" />
        {isLoading ? (
          <div className="container px-4 py-5 md:py-10 flex flex-col gap-2">
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md w-full h-[40px]"
            />
          </div>
        ) : (
          <div className="container px-4 py-5 md:py-10 flex flex-col gap-10">
            {faqs.map((faq, faqIndex) => {
              return (
                <div
                  key={faqIndex}
                  className="flex flex-col xl:flex-row justify-between gap-10"
                >
                  <div className="basis-[100%] h-full w-full">
                    <div className="text-[22px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                      <h2>{faq?.title}</h2>
                    </div>
                    <div>
                      {faq?.faqs.map((d, innerFaqIndex) => (
                        <div key={innerFaqIndex}>
                          <Accordion
                            className="border-b"
                            sx={{
                              boxShadow: "none",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                            expanded={
                              expandedIndices[faqIndex]?.[innerFaqIndex] ||
                              false
                            } // Control expanded state for each faq
                            onChange={() =>
                              handleChange(faqIndex, innerFaqIndex)
                            } // Toggle on click
                          >
                            <AccordionSummary
                              expandIcon={
                                <ExpandMoreIcon
                                  className={`${
                                    expandedIndices[faqIndex]?.[
                                      innerFaqIndex
                                    ] && "text-primary"
                                  }`}
                                />
                              }
                            >
                              <Typography>
                                <span
                                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                                    expandedIndices[faqIndex]?.[innerFaqIndex]
                                      ? "text-primary"
                                      : "text-text__gray"
                                  }`}
                                >{`${innerFaqIndex + 1}. ${d?.question}`}</span>
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <span
                                  className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify"
                                  dangerouslySetInnerHTML={{
                                    __html: d?.answer,
                                  }}
                                />
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      ))}
                    </div>
                  </div>

                  {faqIndex === 0 && (
                    <div className="basis-[50%] w-full h-[600px] hidden xl:block">
                      <figure className="w-full h-full rounded-xl">
                        <img
                          className="w-full h-full object-cover rounded-xl"
                          src={faqThumbnail}
                          alt="church_logo_faq"
                        />
                      </figure>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
}
