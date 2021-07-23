# Welcome to p-logger! Your preferred Axios Logger!

The purpose of this library is to easily read response and request logs with a cool collapsed feature where you can see the response data, configs, headers and what not.

## Installation

You can either:

```bash
yarn add @knivesq/p-logger --dev 
```
or

```bash
npm install @knivesq/p-logger --dev 
```

## Usage

```javascript
import { customLogger } from "@knivesq/p-logger";

// axios interceptors for success response and error
axios.interceptors.response.use(customLogger.success, customLogger.error);

// or add multiple apis from axios.create
   [api, api2, api3].map((api) => {
        api.interceptors.response.use(customLogger.success, customLogger.error);
        return api;
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/knivesq/p-logger/blob/main/LICENSE)
