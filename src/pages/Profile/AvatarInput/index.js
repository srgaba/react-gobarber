import React, { useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../services/api';

import i from '../../../assets/images/photo.jpg';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);


  async function handleChange(e)
  {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
        <label htmlFor="avatar">
          <img src={i} alt="" />

          <input 
            type="file" 
            id="avatar"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
          />
        </label>
    </Container>
  );
}