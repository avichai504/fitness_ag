import { useEffect } from 'react';
import { Stack } from '@mui/material';
import "../App.css"

const Welcome = () => {
  useEffect(() => {
    const welcomeElement = document.getElementById('welcome');

    function fadeOutIn() {
      welcomeElement.style.opacity = 0;
      setTimeout(() => {
        welcomeElement.style.opacity = 1;
      }, 100);

      setTimeout(fadeOutIn, 8000);
    }

    // Start the animation
    fadeOutIn();
  }, []);

  return (
    <Stack id="welcome" padding={20} pl={120} sx={{ color: 'wheat', fontSize: '200px' }}>
      Welcome
    </Stack>
  );
};

export default Welcome;
