import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Image from '../components/Image';
import uxDesignCard from '../../public/ux-design-card.jpg';
import AsmaBottom from '../components/AsmaBottom';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';

const GraphicDesign = () => {
  return (
    <>
      <PageTitle title="GRAPHIC DESIGN" />
      <Container fluid>
        <Row>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
          <Col md={6}>
            <Image src={uxDesignCard} width="100%" />
          </Col>
        </Row>
      </Container>
      <Banner primary>
        <AsmaBottom />
      </Banner>
    </>
  );
};

export default GraphicDesign;
