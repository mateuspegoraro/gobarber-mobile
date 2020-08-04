import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import logoimg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoimg} />
        <Title>Faça seu logon</Title>
      </Container>
    </>
  );
};

export default SignIn;
