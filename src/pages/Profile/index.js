import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../redux/modules/auth/actions';
import { updateProfileRequest } from '../../redux/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data)
  {
    dispatch(updateProfileRequest(data));
  }

  function handleExit()
  {
      dispatch(signOut());
  }
  
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id"/>

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email"/>
  
        <hr />
        
        <Input name="oldPassword" type="password" placeholder="Sua senha atual" />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input name="confirmPassword" type="password" placeholder="Confirmação de senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleExit}>Sair do GoBarber</button>
    </Container>
  );
}
