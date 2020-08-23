import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.3em;
  background: var(--bg-bluegradient-);
`;

const Footer = (probs) => {
  return <FooterContainer>{probs.children}</FooterContainer>;
};

export default Footer;
