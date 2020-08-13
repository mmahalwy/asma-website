import styled, { css } from 'styled-components';

const primary = css`
  background: #f6f9f8;
`;

const secondary = css`
  background: #ebebeb;
`;

const Banner = styled.div<{ primary?: boolean; secondary?: boolean }>`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  width: 100%;

  ${(props) => props.primary && primary}
  ${(props) => props.secondary && secondary}
`;

export default Banner;
