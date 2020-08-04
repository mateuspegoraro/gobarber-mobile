import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import logoimg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoimg} />
      </Container>
    </>
  );
};

export default SignIn;
