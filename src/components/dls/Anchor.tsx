import styled from 'styled-components';
import { OutboundLink } from 'react-ga';

const Anchor = styled.a`
  color: #04acb5;
  font-weight: initial;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    text-decoration: underline;
  }
`;

export const OutboundAnchor = styled(OutboundLink)`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.text};
    text-decoration: underline;
  }
`;

export default Anchor;
