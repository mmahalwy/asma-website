import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Title1, Title5 } from '../components/dls/Title';
import asmaaBw from '../../public/asma-profile-bw.jpg';
import dUiDesignPortfolioCard from '../../public/d-ui-design-portfolio-card.jpg';
import mUiDesignPortfolioCard from '../../public/m-ui-design-portfolio-card.jpg';
import uxDesignCard from '../../public/ux-design-card.jpg';
import uxDesignCover from '../../public/ux-design-cover.jpg';
import brandingCover from '../../public/branding-cover.jpg';

import Spacing from '../components/dls/Spacing';
import Div from '../components/dls/Div';
import Button from '../components/dls/Button';
import Card, { CardContent } from '../components/dls/Card';
import Image from '../components/Image';
import { Text } from '../components/dls/Text';
import Link from 'next/link';
import Anchor from '../components/dls/Anchor';
import Banner from '../components/Banner';
import Divider from '../components/dls/Divider';
import AsmaBottom from '../components/AsmaBottom';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row justifyContent="center">
          <Col md={6}>
            <Spacing py={20}>
              <Div textAlign="center">
                <Title1
                  mt="0px"
                  mb={6}
                  textAlign="center"
                  fontWeight={400}
                  fontSize={56}
                  black
                  lineHeight="normal"
                  vollkorn
                >
                  Asma Khalifa
                  <br />
                  Design • UI • Photography
                </Title1>
                <Title5
                  textAlign="center"
                  mb={4}
                  style={{
                    borderTop: `1px solid #979797`,
                    borderBottom: `1px solid #979797`,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: 'fit-content',
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                >
                  Toronto, Canada
                </Title5>
                <Button href="mailto:INFO@ASMAKHALIFA.COM">GET IN TOUCH</Button>
              </Div>
            </Spacing>
          </Col>
          <Col
            hiddenSmDown
            md={6}
            style={{
              minHeight: '50vh',
              background: `url(${asmaaBw}) center center no-repeat`,
              backgroundSize: 'cover',
            }}
          />
        </Row>
      </Container>
      <Banner primary>
        <Container fluid>
          <Row>
            <Col>
              <Divider mt={10} mb={5} />
              <Link href="/ui-design" passHref>
                <Card>
                  <Div display={['none', 'block']}>
                    <Image src={dUiDesignPortfolioCard} width="100%" />
                  </Div>
                  <Div display={['block', 'none']}>
                    <Image src={mUiDesignPortfolioCard} width="100%" />
                  </Div>
                  <CardContent>
                    <Text textAlign="center">
                      UI DESIGN
                      <br />
                      <Link href="/ui-design" passHref>
                        <Anchor>Read More {'>'}</Anchor>
                      </Link>
                    </Text>
                  </CardContent>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
        <Spacing mt={2} pb={5}>
          <Container fluid>
            <Row>
              <Col md={4}>
                <Link href="/graphic-design" passHref>
                  <Card>
                    <Image src={uxDesignCover} width="100%" />
                    <CardContent>
                      <Text textAlign="center">
                        GRAPHIC DESIGN
                        <br />
                        <Link href="/graphic-design" passHref>
                          <Anchor>Read More {'>'}</Anchor>
                        </Link>
                      </Text>
                    </CardContent>
                  </Card>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/brand" passHref>
                  <Card>
                    <Image src={brandingCover} width="100%" />
                    <CardContent>
                      <Text textAlign="center">
                        BRANDING
                        <br />
                        <Link href="/brand" passHref>
                          <Anchor>Read More {'>'}</Anchor>
                        </Link>
                      </Text>
                    </CardContent>
                  </Card>
                </Link>
              </Col>
              <Col md={4}>
                <Link href="/ux-design" passHref>
                  <Card>
                    <Image src={uxDesignCard} width="100%" />
                    <CardContent>
                      <Text textAlign="center">
                        UX DESIGN
                        <br />
                        <Link href="/ux-design" passHref>
                          <Anchor>Read More {'>'}</Anchor>
                        </Link>
                      </Text>
                    </CardContent>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </Spacing>
      </Banner>
      <Banner secondary>
        <AsmaBottom />
      </Banner>
    </>
  );
};

export default Home;
