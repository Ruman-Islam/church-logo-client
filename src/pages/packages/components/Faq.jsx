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

  const handleChange = (i) => {
    setIndex(i);
  };

  return (
    <section className="bg-section__bg_color py-10">
      <div className="container px-4">
        <h2 className="text-section__title__size">
          Your branding FAQs, answered.
        </h2>

        <div className="flex justify-between gap-4">
          <div className="basis-[100%] md:basis-[50%]">
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 1}
              onChange={() => handleChange(1)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 1 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 1 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 1
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 2}
              onChange={() => handleChange(2)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 2 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 2 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 2
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 3}
              onChange={() => handleChange(3)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 3 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 3 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 3
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 4}
              onChange={() => handleChange(4)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 4 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 4 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 4
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 5}
              onChange={() => handleChange(5)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 5 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 5 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 5
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="basis-[100%] md:basis-[50%]">
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 6}
              onChange={() => handleChange(6)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 6 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 6 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 6
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 7}
              onChange={() => handleChange(7)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 7 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 7 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 7
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 8}
              onChange={() => handleChange(8)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 8 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 8 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 8
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 9}
              onChange={() => handleChange(9)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 9 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 9 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 9
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="bg-transparent"
              sx={{
                boxShadow: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              expanded={index === 10}
              onChange={() => handleChange(10)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={`${index === 10 && "text-primary"}`}
                  />
                }
              >
                <Typography>
                  <span
                    className={`font-brand__font__semibold md:text-brand__font__size__md  ${
                      index === 10 ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    Question 10
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This branding package includes a custom logo design, a
                  business card design, plus a letterhead, envelope and Facebook
                  cover to show it all off.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
