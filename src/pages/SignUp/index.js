import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="LogoBarber" />
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha Secreta" />
        <button type="submit">Criar Conta</button>
      </form>
    </>
  );
}
