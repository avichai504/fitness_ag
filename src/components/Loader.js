// import React from 'react';
// import { Stack, Box } from '@mui/material';
// import {
//   Audio, BallTriangle, Bars, Circles, CirclesWithBar, Grid, Hearts, LineWave,
//   MutatingDots, Oval, Plane, Puff, RevolvingDot, RotatingSquare, Rings, TailSpin,
//   ThreeDots, ThreeCircles, Triangle, Watch, RotatingLines, FallingLines, InfinitySpin
// } from 'react-loader-spinner';

// const Loader = () => (
//   <Box>
//     {[Audio, BallTriangle, Bars, Circles, CirclesWithBar, Grid, Hearts, LineWave,
//       MutatingDots, Oval, Plane, Puff, RevolvingDot, RotatingSquare, Rings, TailSpin,
//       ThreeDots, ThreeCircles, Triangle, Watch, RotatingLines, FallingLines, InfinitySpin].map((LoaderComponent, idx) => (
//       <Stack key={idx} justifyContent="center" alignItems="center" width="100%">
//         <LoaderComponent color="white" height={190} width={190} />
//       </Stack>
//     ))}
//   </Box>
// );

// export default Loader;



import React from 'react';
import { Stack } from '@mui/material';
import { Triangle } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <Triangle color="white" height={190} width={190} />
  </Stack>
);

export default Loader;