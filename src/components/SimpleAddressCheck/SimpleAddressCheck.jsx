import '../../styles.css';
import { CheckMark } from '../CheckMark';
import { XMark } from '../XMark';
import { CautionSign } from '../CautionSign';
import React, { useCallback, useEffect, useState } from 'react';
import checkAddress from '../../lib/checkAddress'

export const SimpleAddressCheck = ({
    address,
    onResults,
  }) => {

  const resultHandlerCb = useCallback(onResults, []);
  const [resultData, setResultData] = useState({})

  // when address is updated, check against api
  // TODO: add cooldown so api doesn't get overloaded with each keystroke as well as optimize for mobile users
  useEffect(() => {
    if(address !== ''){
      
      checkAddress(address).then(results =>{
          setResultData(results)
          resultHandlerCb(results)
      }).catch(error => {
        setResultData({result: 'error', message:'Unable to check address'})
        resultHandlerCb(results)
      })
      
    }
  }, [address, resultHandlerCb]);


  const { result, message } = resultData
  return (
    <>
      { result === 'pass'? <CheckMark /> : null }
      { result === 'fail'? <XMark /> : null }
      { result === 'caution'? <CautionSign/> : null }
      { result === 'error'? <XMark /> : null }

      <>{message}</>
    
    </>
  );
};




