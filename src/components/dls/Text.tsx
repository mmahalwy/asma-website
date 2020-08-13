import styled, { css } from 'styled-components';
import { textAlign, TextAlignProps, space, SpaceProps } from 'styled-system';

const bold = css`
  font-weight: 600;
`;

const inverse = css`
  color: ${(props) => props.theme.colors.white};
`;

const italic = css`
  font-style: italic;
`;

const large = css`
  font-size: 1.25rem;
`;

const small = css`
  font-size: 0.875rem;
`;

const mini = css`
  font-size: 0.75rem;
`;

const inline = css`
  display: inline;
`;

const vollkornCss = css`
  font-family: ${(props) => props.theme.fonts.vollkorn};
`;

export const Text = styled.p<
  SpaceProps &
    TextAlignProps & {
      mini?: boolean;
      small?: boolean;
      large?: boolean;
      bold?: boolean;
      inverse?: boolean;
      italic?: boolean;
      inline?: boolean;
    }
>`
  ${textAlign}
  ${space}
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.base.unit}rem;
  font-family: ${(props) => props.theme.fonts.raleway};
  line-height: 1.5rem;
  word-break: break-word; /* This prevents a bug with the reading progress bar. Leave this style here unless you are removing the reading progress bar. */

  ${(props) => props.bold && bold}
  ${(props) => props.inverse && inverse}
  ${(props) => props.italic && italic}
  ${(props) => props.large && large}
  ${(props) => props.small && small}
  ${(props) => props.mini && mini}
  ${(props) => props.inline && inline}
  ${(props) => props.vollkorn && vollkornCss}
`;

export const ErrorText = styled.p<TextAlignProps>`
${textAlign}
  color: ${(props) => props.theme.colors.red};
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

export const SecondaryText = styled(Text)`
  color: ${(props) => props.theme.colors.secondary};
`;
