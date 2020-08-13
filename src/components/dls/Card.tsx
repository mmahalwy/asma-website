import styled from 'styled-components';
import { ReactNode } from 'react';

const Card = styled.div`
  width: 100%;
  /* border: 1px solid ${(props) => props.theme.colors.gray}; */
  background: #EBEBEB;

  ${(props) => props.href && 'cursor: pointer;'}
`;

const CardContentContainer = styled.div`
  padding: 1rem;
`;

type CardContentProps = {
  children: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
};

export const CardContent = ({ children, before, after }: CardContentProps) => {
  return <CardContentContainer>{children}</CardContentContainer>;
};

export default Card;
