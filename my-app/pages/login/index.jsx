import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import loginUser from '../../services/loginUser';
import loginAdmin from '../../services/loginAdmin';
import { ROUTES } from '../../utils/constants';
import { Button } from '../../components/common/Button';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await loginUser({
      email: login,
      password,
    });

    if (data.success) {
      localStorage.setItem('auth_token', data.user.auth_token);
      Router.replace(ROUTES.PROFILE);
    }
  };

  const handleClickAdmin = async () => {
    const data = await loginAdmin({
      email: login,
      password,
    });

    if (data.success) {
      localStorage.setItem('auth_token', data.user.auth_token);
      Router.replace(ROUTES.ADMIN);
    }
  };

  return (
    <Container>
      <Head>
        <title>VSpace - Профиль</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form onSubmit={handleClick}>
        <Title>Авторизация</Title>

        <StyledInput
          type="email"
          value={login}
          placeholder={'Введите логин'}
          onChange={handleChangeLogin}
        ></StyledInput>

        <StyledInput
          type="password"
          value={password}
          placeholder={'Введите пароль'}
          onChange={handleChangePassword}
        ></StyledInput>

        <Button type="submit" fontSize="14px" lineHeight="17px" width={140} onClick={handleClick}>
          Продолжить
        </Button>

        <Button onClick={handleClickAdmin}>Войти как Администратор</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  background-color ${(props) => props.theme.colors.background};
  min-height: calc(100vh - 64px);
`;

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 36px 48px 48px;
  width: 440px;
  min-height: 330px;
  background: #ffffff;
  border-radius: 14px;
  gap: 24px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #5865f2;
  margin: 0;
`;

const StyledInput = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 12px 24px;
  width: 344px;
  height: 43px;
  background: #f5f3fa;
  border-radius: 14px;
`;

export default Login;
