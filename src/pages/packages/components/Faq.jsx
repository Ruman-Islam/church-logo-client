import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Faq() {
  const [index, setIndex] = useState(0);

  return (
    <section id="package-faq" className="bg-section__bg_color py-10">
      <div className="container px-4">
        <h2 className="text-section__title__size text-center">
          Your branding FAQs, answered.
        </h2>

        <div className="max-w-[1024px] w-full mx-auto px-4 py-5 md:py-10">
          <div>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 1}
              onChange={() => setIndex(1)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 1 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 1 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 2}
              onChange={() => setIndex(2)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 2 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 2 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 2
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 3}
              onChange={() => setIndex(3)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 3 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 3 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 3
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 4}
              onChange={() => setIndex(4)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 4 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 4 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 4
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 5}
              onChange={() => setIndex(5)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 5 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 5 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 5
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
              }}
              expanded={index === 6}
              onChange={() => setIndex(6)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 6 && "text-primary"}`}
                  />
                }
              >
                <Typography
                  className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                    index === 6 ? "text-primary" : "text-text__gray"
                  }`}
                >
                  Question 6
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-brand__font__size__sm md:text-brand__font__size__base font-brand__font__light text-[#7a7a7a] text-justify">
                  Our logo designers are vetted, creative professionals with
                  verified industry experience who take the time to understand
                  your business.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
