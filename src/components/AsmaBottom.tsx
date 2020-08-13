import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Div from './dls/Div';
import Image from './Image';
import Divider from './dls/Divider';
import { Title4 } from './dls/Title';
import profilePic from '../../public/profile-pic.png';

const AsmaBottom = () => (
  <Container fluid>
    <Row justifyContent="center">
      <Col>
        <Div textAlign="center">
          <Divider mt={10} mb={5} />
          <Image src={profilePic} width={230} />
          <Title4 mb={10}>INFO@ASMAKHALIFA.COM</Title4>
        </Div>
      </Col>
    </Row>
  </Container>
);

export default AsmaBottom;
