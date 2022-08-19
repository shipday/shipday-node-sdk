# Shipday Node.js SDK

The Shipday node sdk provides easier access to the from applications written in server-side JavaScript.

## Documentation

See the [shipday api](https://docs.shipday.com) docs for Node.js

## Requirements
Node 10 or higher

## Installation
```markdown
npm install shipday --save
# or 
yarn add shipday
```

## Usage

You need to provide the shipday api-key in order to use the library. Example usages looks like following:-

```javascript
const Shipday = require('shipday/integration')
const shipdayClient = new Shipday('**** api key', 10000);
shipdayClient.carrierService.getCarriers().then(r => console.log(r[0]));
```

The first parameter is your api key, second parameter is timeout for request in millisecond.

And it will look like following in the console:-

```json5
{
  id: 48767,
  personalId: '',
  name: 'John Doe',
  codeName: '',
  phoneNumber: '1-650-550-2975',
  companyId: 13808,
  areaId: 13807,
  isOnShift: false,
  email: 'john.doe@shipday.com',
  carrierPhoto: null,
  device: 'iPhone12,5',
  osInfo: '15.6',
  isActive: true,
  carrrierLocationLat: 22.328689,
  carrrierLocationLng: 91.783807,
  isAppLocationServiceOn: false
}
```

## Run Tests
To run the tests, first resolve all dependencies by using
```npm
npm install
```
and then execute the following
```npm
npm run test
```
