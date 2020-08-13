import styled from 'styled-components';
import { space, SpaceProps, MarginProps, PaddingProps, LayoutProps, layout } from 'styled-system';

const Spacing = styled.div<MarginProps & PaddingProps & SpaceProps & LayoutProps>`
  ${layout}
  ${space}
`;

export default Spacing;
