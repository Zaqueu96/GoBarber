import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe a Nome Completo'),
  email: Yup.string().email().required('Informe o Endereço de Email'),
  password: Yup.string().required('Informe a Senha'),
});
export default function SignUp() {
  const dispacth = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  function handlerForm({ email, password, name }) {
    dispacth(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="LogoBarber" />
      <Form schema={schema} onSubmit={handlerForm}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Criar Conta'}
        </button>
      </Form>
    </>
  );
}
