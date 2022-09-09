/* eslint-disable react/display-name */
import { forwardRef } from "react";

import { StyledContainer } from "./elements";

export const Container = forwardRef((props, ref) => {
  return <StyledContainer {...props} ref={ref} />;
});
