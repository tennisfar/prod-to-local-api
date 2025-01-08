# Prod to local API

## Description
This project sets up a local proxy server to make production data available locally without encountering CORS and similar issues. It uses an Express server to fetch data from the production API and serves it locally. Additionally, `browser-sync` is used to proxy the local server, making it accessible from a specific domain.

## Execution
1. Run the combined script to start both the Express server and `browser-sync`:
   ```sh
   npm start
   ```
2. Access the available endpoints served locally from:
   ```
   https://web.develop.danskespil.dk:1337
   ```
   This page will display a list of all available endpoints, including the "lobby" endpoint and any future endpoints.

## Usage
To use the endpoint in your code, you can create a function like this:
```javascript
export const getLobbyData = async () => {
  return await ApiRequest({ url: 'https://web.develop.danskespil.dk:1337/dli/scapi/danskespil/gamevendorgvc/lobby' });
};
```

### Troubleshooting
If the port is wrong, try killing all stuck or running localhosts:
```sh
npm run reset
```
