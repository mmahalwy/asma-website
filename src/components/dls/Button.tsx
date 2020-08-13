import styled, { css } from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { resetButton } from '../../styles';

const blockOnSm = css`
  ${media.xs`
  width: 100%;
  `}
`;

const block = css`
  width: 100%;
`;

const small = css`
  padding: 0.75rem 1rem;
`;

const mini = css`
  padding: 0.5rem 0.75rem;
`;

type ButtonBaseProps = { blockOnSm?: boolean; block?: boolean; small?: boolean; mini?: boolean };

export const buttonBase = css<ButtonBaseProps>`
  ${resetButton}
  background: #00ADB5;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 15px 25px;
  font-family: ${(props) => props.theme.fonts.raleway};
  border-width: 1px;
  border-style: solid;
  border-color: #00ADB5;
  color: #fff;
  line-height: 16px;

  ${(props) => props.blockOnSm && blockOnSm}
  ${(props) => props.block && block}
  ${(props) => props.small && small}
  ${(props) => props.mini && mini}
`;

const Button = styled.button.attrs((props: { href?: string }) => ({
  as: props.href ? 'a' : 'button',
}))<
  { outline?: boolean; muted?: boolean; primary?: boolean; secondary?: boolean } & ButtonBaseProps
>`
  ${buttonBase}

  &:hover {
    opacity: 0.75;
  }
`;

export default Button;
