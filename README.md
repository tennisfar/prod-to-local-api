# ProdToLocalApi

## Requirements
To make `web.develop.danskespil.dk` point to your local machine, you need to update your hosts file.

### On Windows:
1. Open Notepad as Administrator.
2. Open the file `C:\Windows\System32\drivers\etc\hosts`.
3. Add the following line:
   ```
   127.0.0.1 web.develop.danskespil.dk
   ```

## Installation
1. Install the dependencies:
   ```sh
   npm install
   ```

## Execution
1. Run the combined script to start both the Express server and `browser-sync`:
   ```sh
   npm start
   ```
2. Access the Prod Bingo Lobby data served locally from:
   ```
   https://web.develop.danskespil.dk:1337/dli/scapi/danskespil/gamevendorgvc/lobby
   ```

### Troubleshooting
If the port is wrong, try killing all stuck or running localhosts:
```sh
npm run reset
```