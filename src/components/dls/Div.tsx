import styled from 'styled-components';
import {
  layout,
  flexbox,
  LayoutProps,
  FlexboxProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

const Div = styled.div<FlexboxProps & LayoutProps & TextAlignProps>`
  ${layout}
  ${flexbox}
  ${textAlign}
`;

export default Div;
