import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import faqs from "../../../data/categoryFaqs.json";

export default function Faq({ category }) {
  const [index, setIndex] = useState(0);
  const filteredFaqs = faqs.filter((f) => f.category === category);

  return (
    <Box id="package-faq" className="bg-section__bg_color py-10">
      <Box className="container px-4">
        <h2 className="text-section__title__size text-center">
          Your FAQs, answered.
        </h2>

        <Box className="max-w-[1024px] w-full mx-auto px-4 py-5 md:py-10">
          <Box>
            {filteredFaqs.map((faq) => (
              <Accordion
                key={faq?.id}
                className="bg-transparent"
                sx={{
                  boxShadow: "none",
                }}
                expanded={index === faq?.id}
                onChange={() => setIndex(faq?.id)}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      className={`${index === faq?.id && "text-primary"}`}
                    />
                  }
                >
                  <Typography
                    className={`text-brand__font__size__md ${
                      index === faq?.id ? "text-primary" : "text-text__gray"
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
