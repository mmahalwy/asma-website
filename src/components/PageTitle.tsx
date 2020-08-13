import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Title3 } from './dls/Title';
import Divider from './dls/Divider';

const PageTitle = ({ title }) => (
  <Container fluid>
    <Row>
      <Col>
        <Title3 mt={10} as="h1" textAlign="center">
          {title}
        </Title3>
        <Divider mb={5} />
      </Col>
    </Row>
  </Container>
);

export default PageTitle;
