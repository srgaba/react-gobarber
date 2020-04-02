import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import authLayout from '../_layouts/auth';
import loggedLayout from '../_layouts/logged';

import { store } from '../redux';


export default function RouteWrapper({
    component: Component,
    isPrivate = false, 
    ...rest
}) {
    const { signed } = store.getState().auth;

    if(!signed && isPrivate)
    {
        return <Redirect to="/" />;
    };

    if (signed && !isPrivate)
    {
        return <Redirect to="/dashboard" />;
    };

    const Layout = signed ? loggedLayout : authLayout;

    return (
        <Route 
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />

    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
    isPrivate: false, 
};