import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Informe o Endereço de Email'),
  password: Yup.string().required('Informe a Senha'),
});
export default function SignIn() {
  const dispacth = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  function handlerForm({ email, password }) {
    dispacth(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="LogoBarber" />
      <Form schema={schema} onSubmit={handlerForm}>
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar Conta Gratuita</Link>
      </Form>
    </>
  );
}
