# blockchaininfo

## Usage:

### Install package:

```sh
npm install bsord-blockchaininfo
```
### Add to react:
```
import React, {useState} from 'react';
import { SimpleAddressCheck } from 'bsord-blockchaininfo'

function App() {
  const [address, setAddress] = useState('')
  const resultHandler = (result) =>{
    console.log(result)
  }
  return (
    <>
      <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
      <SimpleAddressCheck address={address} onResults={resultHandler}/>
    </>
  );
}

export default App;

```


## Contributing:

Start develop environment
1. git clone https://github.com/bsord/blockchaininfo
2. cd blockchaininfo
3. npm install
4. npm run storyboook
4. navigate to localhost:6006

to build and publish
1. update package.json version
2. npm run build-lib
3. npm publish
