import React, { useState, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Divider from './dls/Divider';
import { Title5 } from '../components/dls/Title';

const TabNavList = styled.ul`
  padding: 0;
`;

const selectedCss = css<{ selected: boolean }>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const TabNavItem = styled.li<{ selected: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  margin-right: ${({ theme }) => theme.base.unit * 1}rem;
  margin-bottom: 0px;
  cursor: pointer;
  ${(props) => props.selected && selectedCss}
`;

type TabsProps = {
  initial?: number;
  children: ReactElement[];
  withinContainer?: boolean;
};

const Tabs = ({ initial, children, withinContainer }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(initial || 0);

  const navList = (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <nav role="tablist">
        <TabNavList>
          {React.Children.map(children, (child, i) => {
            const selected = currentTab === i;

            return (
              <TabNavItem selected={selected} onClick={() => setCurrentTab(i)}>
                <Title5 mb={1}>
                {child?.props?.title}
                </Title5>
              </TabNavItem>
            );
          })}
        </TabNavList>
      </nav>
    </>
  );

  return (
    <div>
      <section role="tabpanel">
        {withinContainer ? (
          <Container>
            <Row>
              <Col md={12}>{navList}</Col>
            </Row>
          </Container>
        ) : (
          navList
        )}
        <Divider style={{ marginTop: -1, marginBottom: 0 }} />
        {children[currentTab]}
      </section>
    </div>
  );
};

type TabProps = {
  title: ReactNode;
  children: ReactNode;
};

export const Tab = ({ children }: TabProps) => <>{children}</>;

export default Tabs;
