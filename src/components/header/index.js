import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logoH.svg'

import Notifications from '../notifications';
import { Container, Content, Profile } from './styles';

import i from '../../assets/images/photo.jpg';

export default function header() {
  return (
    <Container>
        <Content>
            <nav>
                <img src={logo} alt="goBarber" />
                <Link to="/dashboard">DASHBOARD</Link>
            </nav>

            <aside>
                <Notifications />
                <Profile>
                    <div>
                        <strong>Gabriel Cerqueira</strong>
                        <Link to="/profile">Meu perfil</Link>
                    </div>
                    <img src={i} alt="Gabriel Cerqueira" />
                </Profile>
            </aside>
        </Content>
    </Container>
  );
}
