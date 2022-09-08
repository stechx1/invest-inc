/* eslint-disable react/display-name */
import styled, {css} from 'styled-components';
import { forwardRef } from 'react';

const baseContainerStyles = css`
  margin: 0 auto;
  max-width: calc(1190px + 55px);
  padding: 20px 24px;
  width: 100%;

  @media (max-width: 499px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const StyledContainer = styled(
  forwardRef(({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  })
)`
  ${baseContainerStyles}
`;
