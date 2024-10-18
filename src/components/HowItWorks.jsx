import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const steps = [
  { title: 'Step 1: Get a Quote', description: `Call or fill out our online form to get an instant quote for your car based on its condition, make, model, and year. We pride ourselves on offering a fast, obligation-free estimate.` },
  { title: 'Step 2: Arrange Pickup', description: `Once you accept the offer, we will arrange a convenient time to pick up your vehicle. You choose the date and time, and we’ll be there to collect your car. We offer free towing services.` },
  { title: 'Step 3: Get Paid', description: `On the spot, we’ll pay you cash when we collect your vehicle. Our team will do a quick inspection to verify the information and check your vehicle documents before we take it away.` },
];

function HowItWorks() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState([]);
  const sectionRefs = useRef(steps.map(() => React.createRef()));

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = true;
              return newVisible;
            });
            controls.start('visible');
          } else {
            setIsVisible((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = false;
              return newVisible;
            });
            controls.start('hidden');
          }
        },
        { threshold: 1.0 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [controls]);

  return (
    <Container sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 } }}>
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 4 }}>
        How to Sell Your Scrap Car
      </Typography>

      {steps.map((step, index) => (
        <motion.div
          key={index}
          ref={sectionRefs.current[index]}
          initial="hidden"
          animate={isVisible[index] ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2, duration: 1.5 }} // Увеличиваем продолжительность анимации
        >
          <Box mb={3}>
            <Typography variant="h6">{step.title}</Typography>
            <Typography variant="body1">{step.description}</Typography>
          </Box>
        </motion.div>
      ))}
    </Container>
  );
}

export default HowItWorks;
