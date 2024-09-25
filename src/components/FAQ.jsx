import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        paddingY: { xs: 4, md: 6 },
      }}>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: { xs: 2, md: 4 } }}>
        Frequently Asked Questions
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What types of vehicles do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept cars, trucks, SUVs, and vans in any condition—whether they’re running or not.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do I need to have the title for the car?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, proof of ownership, such as the vehicle title, is required to sell your car.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How long does the process take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The process is quick and can be completed in as little as 24 hours, from quote to
            pickup.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you buy cars that are still drivable?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, even if your car is still running, we’ll purchase it for scrap.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What if my car is still in good condition?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We buy cars for scrap and recycling, regardless of their condition.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default FAQ;
