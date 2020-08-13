import styled, { css } from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const inputBase = css`
background: #ffffff;
  border: 1px solid ${(props) => props.theme.border.color};
  border-radius: 4px;
  padding: ${(props) => props.theme.base.padding};
  min-width: 300px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.raleway};
  height: 2.75rem;
  &:focus {
    border-color: #000000;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  ${(props) => props.error && errorState}
  ${(props) => props.textAlignOnSm && textAlignOnSm}
  ${(props) => props.muted && muted}
`;

const textAlignOnSm = css`
  ${media.xs`
  text-align: center;
  width: 100%;
  `}
`;

const errorState = css`
  border-color: ${(props) => props.theme.colors.red};
`;

const muted = css`
  background: #f6f6f6;
  border-color: #f6f6f6;
`;

const Input = styled.input<{ textAlignOnSm?: boolean; error?: boolean }>`
  ${inputBase}
`;

export const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  margin-right: 0.5rem;
  vertical-align: middle;
`;

export const Select = styled.select`
  ${inputBase}
`;

export default Input;
