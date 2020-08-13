import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../styles';
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import { X } from '@styled-icons/boxicons-regular/X';
import Link from 'next/link';
import Anchor from './dls/Anchor';
import Div from './dls/Div';
import Spacing from './dls/Spacing';
import FullLogo from './FullLogo';
import { useRouter } from 'next/router';
import { Title3 } from './dls/Title';

const Brand = styled.a`
  font-family: ${theme.fonts.raleway};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  text-decoration: none;
`;

const noBorder = css`
  border-bottom: none;
`;

const Nav = styled.nav<{ noBorder?: boolean }>`
  background: #303941;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  ${(props) => props.noBorder && noBorder}

  ${media.sm`
  background: #fff;
  `}
`;

const MobileNav = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #303941;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.sm`
  display: none;
  `}
`;

const activeNavLink = css`
  color: #04acb5;

  ${media.sm`
border-bottom: 2px solid #04acb5;
  padding-bottom: 4px;
  color: #706f6f;
`}
`;

const NavLink = styled(Anchor)`
  color: #dcd9d9;
  padding-bottom: 2px;

  ${media.sm`
  color: #706f6f;
  `}

  ${(props) => props.active && activeNavLink}
`;

function ActiveLink({ children, href, onClick = () => {} }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    onClick();
  };

  return (
    <NavLink href={href} onClick={handleClick} active={router.pathname === href}>
      {children}
    </NavLink>
  );
}

export type NavbarProps = {
  noBorder?: boolean;
};

const Navbar = ({ noBorder = false }: NavbarProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const links = [
    <ActiveLink onClick={() => setShowMobileNav(false)} href="/portfolio">
      PORTFOLIO
    </ActiveLink>,
    <ActiveLink onClick={() => setShowMobileNav(false)} href="/about">
      ABOUT ME
    </ActiveLink>,
    <NavLink onClick={() => setShowMobileNav(false)} href="mailto:INFO@ASMAKHALIFA.COM">
      CONTACT
    </NavLink>,
  ];

  return (
    <>
      <Nav noBorder={noBorder}>
        <Container fluid>
          <Row>
            <Col md={6}>
              <Div
                height="100%"
                alignItems="center"
                display="flex"
                justifyContent={['center', 'start']}
              >
                <Link href="/" as="/" passHref>
                  <Brand onClick={() => setShowMobileNav(!showMobileNav)}>
                    <FullLogo height={32} width={32} />
                  </Brand>
                </Link>
              </Div>
            </Col>
            <Col md={6} hiddenSmDown>
              <Div height="100%" alignItems="center" justifyContent="flex-end" display="flex">
                {links.map((link, index) => (
                  <Spacing mx={2} key={index}>
                    {link}
                  </Spacing>
                ))}
              </Div>
            </Col>
          </Row>
        </Container>
      </Nav>
      {showMobileNav && (
        <MobileNav>
          <X
            size="3rem"
            color="#979797"
            style={{ position: 'absolute', top: 15, left: 15 }}
            onClick={() => setShowMobileNav(false)}
          />

          <Title3 mb={2}>
            <ActiveLink onClick={() => setShowMobileNav(false)} href="/">
              HOME
            </ActiveLink>
          </Title3>

          {links.map((link, index) => (
            <Title3 mb={2} key={index}>
              {link}
            </Title3>
          ))}
        </MobileNav>
      )}
    </>
  );
};

export default Navbar;
