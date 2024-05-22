import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import data from "../../data/faq.json";

export default function FAQ() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  // const [accordionIndexes, setAccordionIndexes] = useState({

  // })

  const handleExpansion = (i, accordionNo) => {
    if (accordionNo === 1) {
      setIndex(i);
    } else if (accordionNo === 2) {
      setIndex2(i);
    } else if (accordionNo === 3) {
      setIndex3(i);
    } else if (accordionNo === 4) {
      setIndex4(i);
    }
  };

  return (
    <Layout title="FAQ">
      <section id="faq">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">FAQ</h3>
        </div>
        <div className="container px-2 py-5 md:py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-5 pb-5 md:pb-10">
            <div className="basis-[100%] lg:basis-[60%] h-full w-full">
              <div className="text-[22px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                <h2>{data?.basicFaq?.title}</h2>
              </div>
              <div>
                {data?.basicFaq?.faqs.map((d, i) => (
                  <div key={d?.id}>
                    <Accordion
                      className="border-b"
                      sx={{
                        boxShadow: "none",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                      expanded={i === index}
                      onChange={() => handleExpansion(i, 1)}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            className={`${i === index && "text-primary"}`}
                          />
                        }
                      >
                        <Typography>
                          <span
                            className={`font-brand__font__semibold md:text-brand__font__size__md ${
                              i === index && "text-primary"
                            }`}
                          >{`${i + 1}. ${d?.question}`}</span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a]">
                            {d?.answer}
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-[100%] lg:basis-[40%] h-[68vh] xl:h-[62vh] w-full hidden lg:block">
              <img
                className="w-full h-full object-cover"
                src="https://photologo.co/wp-content/uploads/2022/07/Tom-Hill-Architecture-5-768x794.jpg"
                alt=""
              />
              {/* <figure>
                <img
                  className="w-full h-full"
                  src="https://photologo.co/wp-content/uploads/2022/07/Tom-Hill-Architecture-5-768x794.jpg"
                  alt=""
                />
              </figure> */}
            </div>
          </div>

          <div className="pt-5 md:pt-10">
            <div className="basis-[100%] lg:basis-[60%] h-full w-full">
              <div className="text-[25px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                <h2>{data?.paymentFaq?.title}</h2>
              </div>
              <div>
                {data?.paymentFaq?.faqs.map((d, i) => (
                  <div key={d?.id}>
                    <Accordion
                      className="border-b"
                      sx={{
                        boxShadow: "none",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                      expanded={i === index2}
                      onChange={() => handleExpansion(i, 3)}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            className={`${i === index2 && "text-primary"}`}
                          />
                        }
                      >
                        <Typography>
                          <span
                            className={`font-brand__font__semibold md:text-brand__font__size__md ${
                              i === index2 && "text-primary"
                            }`}
                          >{`${i + 1}. ${d?.question}`}</span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a]">
                            {d?.answer}
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 md:pt-10">
            <div className="basis-[100%] lg:basis-[60%] h-full w-full">
              <div className="text-[25px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                <h2>{data?.statusFaq?.title}</h2>
              </div>
              <div>
                {data?.statusFaq?.faqs.map((d, i) => (
                  <div key={d?.id}>
                    <Accordion
                      className="border-b"
                      sx={{
                        boxShadow: "none",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                      expanded={i === index3}
                      onChange={() => handleExpansion(i, 3)}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            className={`${i === index3 && "text-primary"}`}
                          />
                        }
                      >
                        <Typography>
                          <span
                            className={`font-brand__font__semibold md:text-brand__font__size__md ${
                              i === index3 && "text-primary"
                            }`}
                          >{`${i + 1}. ${d?.question}`}</span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a]">
                            {d?.answer}
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 md:pt-10">
            <div className="basis-[100%] lg:basis-[60%] h-full w-full">
              <div className="text-[25px] md:text-[35px] text-brand__black__color font-brand__font__600 p-4 border-b-4 border-primary leading-snug">
                <h2>{data?.revisionFaq?.title}</h2>
              </div>
              <div>
                {data?.revisionFaq?.faqs.map((d, i) => (
                  <div key={d?.id}>
                    <Accordion
                      className="border-b"
                      sx={{
                        boxShadow: "none",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                      expanded={i === index4}
                      onChange={() => handleExpansion(i, 4)}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            className={`${i === index4 && "text-primary"}`}
                          />
                        }
                      >
                        <Typography>
                          <span
                            className={`font-brand__font__semibold md:text-brand__font__size__md ${
                              i === index4 && "text-primary"
                            }`}
                          >{`${i + 1}. ${d?.question}`}</span>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <span className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a]">
                            {d?.answer}
                          </span>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
