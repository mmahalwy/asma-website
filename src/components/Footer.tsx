import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Behance } from '@styled-icons/evaicons-solid/Behance';
import { Linkedin } from '@styled-icons/evaicons-solid/Linkedin';
import { Text } from './dls/Text';
import Div from './dls/Div';
import Anchor from './dls/Anchor';
import Spacing from './dls/Spacing';

const FooterContainer = styled.footer`
  background: #333333;
  color: #fff;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row justifyContent="center">
        <Col md={6}>
          <Text inverse>ASMA KHALIFA</Text>
          <Text small inverse>
            Copyrights c 2020 All rights reseved
          </Text>
        </Col>
        <Col md={6}>
          <Div textAlign="right">
            <Spacing mr={1} display="inline">
              <Anchor>
                <Behance color="#04acb5" size="2rem" />
              </Anchor>
            </Spacing>
            <Anchor>
              <Linkedin color="#04acb5" size="1rem" />
            </Anchor>
          </Div>
        </Col>
      </Row>
    </Container>
  </FooterContainer>
);

export default Footer;
