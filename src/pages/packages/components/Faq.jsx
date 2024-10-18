import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Faq({ faqs }) {
  const [index, setIndex] = useState(0);

  return (
    <Box id="package-faq" className="bg-section__bg_color py-10">
      <Box className="container px-4">
        <h2 className="text-section__title__size text-center">
          Your FAQs, answered.
        </h2>

        <Box className="max-w-[1024px] w-full mx-auto px-4 py-5 md:py-10">
          <Box>
            {faqs.map((faq, idx) => (
              <Accordion
                key={faq?.id}
                className="bg-transparent"
                sx={{
                  boxShadow: "none",
                }}
                expanded={index === idx}
                onChange={() => setIndex(idx)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      className={`${index === idx && "text-primary"}`}
                    />
                  }
                >
                  <Typography
                    className={`text-brand__font__size__md ${
                      index === idx ? "text-primary" : "text-text__gray"
                    }`}
                  >
                    {faq?.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-brand__font__size__sm text-text__gray text-justify">
                    {faq?.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
