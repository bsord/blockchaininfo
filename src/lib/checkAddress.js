// fetch address data from api
const fetchAddressData = (address) => {
  
  const responseData = fetch('https://blockchain.info/rawaddr/' + address)
    .then(response => response.json())
    .then(data => {
      return data
    })

  return responseData
}

const checkAddress = (address) => {
  
  // get data for address and verif
  const resultData = fetchAddressData(address).then((addressData) =>{

    // Unable to locate address or other api error.
    if(addressData.error){
      return { result: 'fail', message: addressData.error.toString(), data: addressData }
    }

    // check if address has transactions
    if(addressData.n_tx < 10){
      return { result: 'warn', message: 'Few recent transactions', data: addressData }
    }

    // PROPOSED IDEAS:
    // total sent is greater than total received
    // first transaction older than 3 days ago

    // all conditions pass
    return { result: 'pass', message: 'Looks good!', data: addressData }

  }).catch(error => {
    // return error
    return { result: 'error', message: 'Unable to fetch data' }
  })

  return resultData
}

export default checkAddress