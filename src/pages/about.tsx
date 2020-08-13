import React from 'react';
import Banner from '../components/Banner';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Text } from '../components/dls/Text';
import AsmaBottom from '../components/AsmaBottom';
import PageTitle from '../components/PageTitle';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <>
      <Banner primary>
        <PageTitle title="ABOUT ME" />
        <Container fluid>
          <Row>
            <Col>
              <Text textAlign={['center', 'left']} mb={4} vollkorn>
                When talent, knowledge, and passion meet together in one place, this place would be
                my world. I'm Asmaa Khalifa, a Multimedia designer located in Toronto Canada. My
                greatest passion is exploring and designing to Solve Problems. User experience
                design is my favorite part of all; It’s where I can keep researching, finding
                solutions, and communicating with more people to solve design problems and make
                others’ lives easier and more entertaining. My educational background includes a
                bachelor's degree in Art and Design from the Faculty of Applied Arts. I got a
                Graduate Certificate in User Experience design from Brain Station, Toronto, Canada,
                and recently finished my Marketing and Digital Media Diploma Degree from CBC in
                Toronto, Canada. I'm currently enrolled in the UI design course at Brain station. If
                I'm asked about one thing I will never stop doing, it will be exploring and learning
                new things to improve my and others’ lives and make it more useful and entertaining.
              </Text>
            </Col>
          </Row>
        </Container>
      </Banner>

      <Banner secondary>
        <PageTitle title="EDUCATION AND EXPERIENCE" />
        <Timeline />
      </Banner>
      <Banner primary>
        <AsmaBottom />
      </Banner>
    </>
  );
};

export default Home;
