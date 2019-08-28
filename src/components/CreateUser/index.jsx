import React from 'react';

import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

function CreateUser() {
  //const text = { name: 'Name', submit: 'Submit' };
  return (
    <div className='ui form'>
      <Input />
      <Checkbox />
      <Button />
    </div>
  );
}

export default CreateUser;
