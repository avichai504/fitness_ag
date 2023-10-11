import React from "react";
import { Stack } from "@mui/material";
import { Triangle } from "react-loader-spinner";



const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
    zIndex={3}
  >
    <Triangle color={"var(--primary-color"} height={190} width={90} />
  </Stack>
);

export default Loader;
