import React from 'react';
import styled, { css } from 'styled-components';
import { Title4 } from './dls/Title';
import { Text } from './dls/Text';
import { Check } from '@styled-icons/boxicons-regular/Check';
import { media } from 'styled-bootstrap-grid';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #04acb5;
    top: 0;
    bottom: 0;
    left: 30px;
    margin-left: -3px;

    ${media.sm`
    left: 50%;
    `}
  }
`;

const Icon = styled(Check)`
  color: #04acb5;
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translateX(50%);
  color: white;
  border: 2px solid white;
  background: #04acb5;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.sm`
  width: 56px;
  height: 56px;
  border: 4px solid white;
  `}
`;

const containerLeft = css`
left: 15px;

${media.sm`
  left: 0px;
`}

  & ${Icon} {
    transform: translateX(-50%);
    left: 15px;

    ${media.sm`
    transform: translateX(50%);
    right: 0px;
    left: initial;
    `}
  }
`;

const containerRight = css`
left: 15px;

${media.sm`
  left: 50%;
  `}

  & ${Icon} {
    transform: translateX(-50%);
    left: 15px;

    ${media.sm`
    left: 0px;
    `}
  }
`;

const Container = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 100%;

  ${media.sm`
  width: 50%;
  `}

  ${(props) => props.left && containerLeft}
  ${(props) => props.right && containerRight}
`;

const Content = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
`;

const Timeline = () => (
  <TimelineContainer>
    <Container left>
      <Icon />
      <Content>
        <Title4>UI DESIGN CERTIFICATION (BRAINSTATION)</Title4>
        <Text>
          Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc klndicijkm njadifjijdvnk nsd
          njdji ednkndcijsdfkn nndjipdcnk pisndi nade ipjaenp nipaednn. Glkfvknfvk
          vsdfvk;mkcxk;sdkfmmk. Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc klndicijkm
          njadifjijdvnk nsd njdji Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc{' '}
        </Text>
      </Content>
    </Container>
    <Container right>
      <Icon />
      <Content>
        <Title4>MARKETING AND DIGITAL MEDIA DIPLOMA</Title4>
        <Text>
          Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc klndicijkm njadifjijdvnk nsd
          njdji ednkndcijsdfkn nndjipdcnk pisndi nade ipjaenp nipaednn. Glkfvknfvk
          vsdfvk;mkcxk;sdkfmmk. Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc klndicijkm
          njadifjijdvnk nsd njdji Type something sdvfbb lsd lkjndc kdj lkdjijc ni lkdjiklc{' '}
        </Text>
      </Content>
    </Container>
  </TimelineContainer>
);

export default Timeline;
