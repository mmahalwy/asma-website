import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Image from '../components/Image';
import uxDesignCard from '../../public/ux-design-card.jpg';
import { Title2 } from '../components/dls/Title';
import { Text } from '../components/dls/Text';
import Banner from '../components/Banner';
import AsmaBottom from '../components/AsmaBottom';
import Spacing from '../components/dls/Spacing';
import PageTitle from '../components/PageTitle';

const UxDesign = () => {
  return (
    <>
      <PageTitle title="UX DESIGN" />
      <Container fluid>
        <Row>
          <Col>
            <Image src={uxDesignCard} width="100%" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Spacing my={4}>
              <Title2 raleway>Design Process</Title2>
              <Text>
                To provide the best solution, you need to deep dive into the problem statement and
                understand the end user’s needs. Here’s the design method which I follow
              </Text>
            </Spacing>
          </Col>
        </Row>
        <Banner secondary>
          <Spacing px={4} pb={4} pt={2}>
            <Row>
              <Col md={4}>
                <Title2 raleway mt={2}>
                  Project Description
                </Title2>
                <Text>
                  The problem and it’s impact. where is the problem appearing and when? Who has the
                  problem? What form could the solution be?
                </Text>
              </Col>
              <Col md={4}>
                <Title2 raleway mt={2}>
                  Research
                </Title2>
                <Text>
                  User Interviews User Interviews - Insights Identifying your personas Information
                  Architecture User Flow
                </Text>
              </Col>
              <Col md={4}>
                <Title2 raleway mt={2}>
                  Design
                </Title2>
                <Text>Sketches Usability testing wireframe Invision UI and style guide lines</Text>
              </Col>
            </Row>
          </Spacing>
        </Banner>
        <Row>
          <Col></Col>
          <Col>
            <Spacing my={4}>
              <Title2 raleway mt="0px">
                Project Overview
              </Title2>
              <Text>
                Designing an app to help connecting flights travelers explore the city in few hours
                by allowing them to: 1.Explore top attractions, food and drink, and shopping areas.
                2.Customize their trip by selecting the sites they want to visit. 3.Develop the most
                optimal route based on the transit option they choose.
              </Text>
            </Spacing>
          </Col>
        </Row>
        <Spacing mb={4}>
          <Row>
            <Col md={6}>
              <Title2 raleway mt={4}>
                Problem
              </Title2>
              <Text>
                There is a lack of coordination and guidance in transit apps, resulting traveler’s
                frustration as they can’t find an easy way to explore the city, in a quick efficient
                and affordable way. The problem appears either while the traveler books his flight
                and choosing his transit city, or after arriving to the airport and thinking about
                visiting the city during transit.
              </Text>
            </Col>
            <Col md={6}>
              <Title2 raleway mt={4}>
                Solution
              </Title2>
              <Text>
                Explore list of attractions: Allows users to choose between a variety of attractions
                they are interested in and add them to “My trip”. Transit options: Allows users to
                choose between different transit options and the most optimal route. Including the
                time needed for each trip. “Nearby” pin: Travelers will have the option to add more
                attractions using “Nearby” pin during their trip.provides suggested list of nearby
                attractions and most visited places to the traveler location.
              </Text>
            </Col>
          </Row>
        </Spacing>
      </Container>
      <Banner secondary>
        <Container fluid>
          <Row>
            <Col>
              <Spacing my={4}>
                <Title2 raleway mt="0px">
                  User Interviews
                </Title2>
                <Text>
                  Interviewee screener criteria: 1. Frequent traveler . 2. Explorer. Example
                  Questions: What do you prefer, direct flights or transit flights?and why? What
                  would you like to explore in the city during your transit trip?and why? What kind
                  of transit do you usually prefer to use when traveling to a new city and why?
                  Personas
                </Text>
              </Spacing>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Container fluid>
        <Row>
          <Col>
            <Spacing my={4}>
              <Title2 raleway mt="0px">
                Personas
              </Title2>
              <Image src={uxDesignCard} width="100%" />
            </Spacing>
          </Col>
        </Row>
      </Container>
      <Banner secondary>
        <Container fluid>
          <Row>
            <Col>
              <Spacing my={4}>
                <Title2 raleway mt="0px">
                  Information Architecture
                </Title2>
                <Image src={uxDesignCard} width="100%" />
              </Spacing>
            </Col>
          </Row>
        </Container>
      </Banner>
      <Container fluid>
        <Row>
          <Col>
            <Spacing my={4}>
              <Title2 raleway mt="0px">
                User Flow
              </Title2>
              <Image src={uxDesignCard} width="100%" />
            </Spacing>
          </Col>
        </Row>
      </Container>
      <Banner secondary>
        <Container fluid>
          <Row>
            <Col>
              <Spacing my={4}>
                <Title2 raleway mt="0px">
                  Wireframes
                </Title2>
                <Image src={uxDesignCard} width="100%" />
              </Spacing>
            </Col>
          </Row>
        </Container>
      </Banner>
      <AsmaBottom />
    </>
  );
};

export default UxDesign;
