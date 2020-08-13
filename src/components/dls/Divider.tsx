import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const Divider = styled.hr<SpaceProps>`
  border: 0;
  width: 44px;
  border-top: 2px solid #04acb5;
  ${space};
`;

export default Divider;
