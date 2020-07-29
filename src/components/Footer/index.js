import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img height={46} src={Logo} alt="Logo DynFlix" />
      </a>
      <p>
        Feito por Dykson Santos :)
      </p>
    </FooterBase>
  );
}

export default Footer;
