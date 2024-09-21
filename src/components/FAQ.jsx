import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  return (
    <Box sx={{ marginBottom: 8 }}>
      {' '}
      {/* Увеличенный нижний отступ */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions (FAQ)
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How long does the car scrapping process take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The process usually takes 1-2 days, depending on your location and tow truck
            availability.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I get a quote without sending pictures of my car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can receive a quote without pictures, but having pictures can help us give you
            a more accurate estimate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do I need to sign any documents during car pick-up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you will need to sign ownership transfer documents and hand over the keys to the
            vehicle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What should I do with my license plates and personal belongings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Make sure to remove your license plates and all personal belongings from the car. We do
            not accept vehicles with garbage or leftover items.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Is the towing service really free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the towing service is completely free, and it is included in our service when you
            scrap your car with us.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
