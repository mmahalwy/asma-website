import styled, { css } from 'styled-components';
import { typography, space, SpaceProps, TypographyProps } from 'styled-system';

const ralewayCss = css`
  font-family: ${(props) => props.theme.fonts.raleway};
`;
const vollkornCss = css`
  font-family: ${(props) => props.theme.fonts.vollkorn};
`;

const commonStyles = css<
  SpaceProps &
    TypographyProps & { black?: boolean; fontWeight?: string | number; raleway?: boolean }
>`
  letter-spacing: 0px;
  margin: 1rem 0rem;
  font-weight: ${(props) => props.fontWeight || '600'};
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.vollkorn};
  ${(props) => props.raleway && ralewayCss}
  ${(props) => props.vollkorn && vollkornCss}
  ${typography}
  ${space}
`;

export const Title1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3.5rem;
  font-weight: bold;

  ${commonStyles}
`;
export const Title2 = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;

  ${commonStyles}
`;
export const Title3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.75rem;

  ${commonStyles}
`;
export const Title4 = styled.h4`
  font-size: 1.5rem;

  ${commonStyles}
`;
export const Title5 = styled.h5`
  font-size: 1.25rem;

  ${commonStyles}
`;

export const Title6 = styled.h6`
  font-size: 1rem;

  ${commonStyles}
`;
