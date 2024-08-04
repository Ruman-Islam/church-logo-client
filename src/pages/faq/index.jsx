import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import data from "../../data/faq.json";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function FAQScreen() {
  const [faqs] = useState(data);

  const initializeIndexes = (faqs) => {
    const initialIndexes = {};
    for (const faq of faqs) {
      initialIndexes[faq?.faqName] = faq?.uniqueId;
    }
    return initialIndexes;
  };

  const [indexes, setIndexes] = useState(() => initializeIndexes(faqs));

  const handleChange = (data) => {
    const { faqName, uniqueId } = data;
    setIndexes((prev) => ({
      ...prev,
      [faqName]: uniqueId,
    }));
  };

  // const replaceUrlAndLineBreaks = (text) => {
  //   const urlRegex = /(https?:\/\/[^\s]+)/g;
  //   // Replace URLs with anchor tags
  //   const withAnchors = text.replace(urlRegex, (url) => {
  //     return `<a href="${url}" target="_blank" rel="noopener noreferrer">Church Logo</a>`;
  //   });
  //   // Replace newlines with <br> tags
  //   return withAnchors.replace(/\n/g, "<br>");
  // };

  return (
    <Layout title="FAQ">
      <section id="faq">
        <SectionBanner heading="FAQ" desc="" />
        <div className="container px-4 py-5 md:py-10">
          {faqs.map((faq) => {
            return (
              <div
                key={faq?.uniqueId}
                className="flex flex-col xl:flex-row justify-between gap-5"
              >
                <div
                  className={`basis-[100%] ${faq?.imgUrl && "basis-[50%]"} ${
                    !faq?.imgUrl && "pt-5 md:pt-10"
                  } h-full w-full`}
                >
                  <div className="text-[22px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                    <h2>{faq?.title}</h2>
                  </div>
                  <div>
                    {faq?.faqs.map((d, i) => (
                      <div key={d?.uniqueId}>
                        <Accordion
                          className="border-b"
                          sx={{
                            boxShadow: "none",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          }}
                          expanded={d?.uniqueId === indexes[faq?.faqName]}
                          onChange={() =>
                            handleChange({
                              faqName: faq?.faqName,
                              uniqueId: d?.uniqueId,
                            })
                          }
                        >
                          <AccordionSummary
                            expandIcon={
                              <ExpandMoreIcon
                                className={`${
                                  d?.uniqueId === indexes[faq?.faqName] &&
                                  "text-primary"
                                }`}
                              />
                            }
                          >
                            <Typography>
                              <span
                                className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                                  d?.uniqueId === indexes[faq?.faqName]
                                    ? "text-primary"
                                    : "text-text__gray"
                                }`}
                              >{`${i + 1}. ${d?.question}`}</span>
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

                {faq?.imgUrl && (
                  <div className="basis-[50%] w-full h-[600px] hidden xl:block">
                    <figure className="w-full h-full rounded-xl">
                      <img
                        className="w-full h-full object-cover rounded-xl"
                        src={getImgUrl(faq?.imgUrl)}
                      />
                    </figure>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
