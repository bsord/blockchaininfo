import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { SimpleAddressCheck } from '../components/SimpleAddressCheck'

const stories = storiesOf ('BlockchainInfo', module);

stories.add('SimpleAddressCheck', () => {
  
  const [address, setAddress] = useState('');

  const resultHandler = (result) => {
    console.log(result)
  }
  
  return (
    <>
      <input type='text' onChange={(e)=>{setAddress(e.target.value)}} value={address}/>
      <SimpleAddressCheck
        address={address}
        onResults={resultHandler}
      />
    </>
  );
})
