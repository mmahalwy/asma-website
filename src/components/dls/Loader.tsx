import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const animation = keyframes`
    0%, 80%, 100% {
      opacity: 0;
    }
    30%, 50% {
      opacity: 1;
    }
`;
const absolute = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const inline = css`
  display: inline-block;
`;

const LoaderContainer = styled.div<{ absolute?: boolean; inline?: boolean }>`
  margin: 0 auto;
  text-align: center;

  ${(props) => props.absolute && absolute}
  ${(props) => props.inline && inline}
`;

const large = css`
  width: 12px;
  height: 12px;
  margin-right: ${(props) => props.theme.base.px}px;
`;

const Dot = styled.span<{ large?: boolean }>`
  width: 6px;
  height: 6px;
  margin-right: ${(props) => props.theme.base.px / 2}px;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  background-color: #000;

  animation: ${animation} 0.8s linear infinite both;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.large && large}
`;

const Dot1 = styled(Dot)`
  animation-delay: -0.3s;
`;

const Dot2 = styled(Dot)`
  animation-delay: -0.15s;
`;

const Loader = ({ inline = false, static: isStatic = false, large = false }) => (
  <LoaderContainer inline={inline} absolute={!isStatic && !inline}>
    <Dot1 large={large} />
    <Dot2 large={large} />
    <Dot large={large} />
  </LoaderContainer>
);

export default Loader;
