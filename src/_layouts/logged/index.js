import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header';

import { Wrapper } from './styles';

export default function loggedLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

loggedLayout.propTypes = {
    children: PropTypes.element.isRequired
};
