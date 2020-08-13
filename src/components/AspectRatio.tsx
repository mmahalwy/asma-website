import React from 'react';
import styled, { css } from 'styled-components';

const crop = css`
  overflow: hidden;
`;

const circle = css`
  border-radius: 50%;
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Container = styled.div<{ ratio: number; crop?: boolean }>`
  width: 100%;
  height: 0;
  padding-bottom: ${(props) => props.ratio * 100}%;
  position: relative;

  ${(props) => props.crop && crop}
  ${(props) => props.circle && circle}
`;

const AspectRatio = ({ ratio = 1, crop = false, circle = false, children }) => (
  <Container ratio={ratio} crop={crop} circle={circle}>
    <InnerWrapper>{children}</InnerWrapper>
  </Container>
);

export default AspectRatio;
