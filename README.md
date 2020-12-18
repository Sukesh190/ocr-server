Server instalation step

1. Install node libraries

   $ npm install

2. Create .env file

   $ nano .env

   add following fields to .env file

   PORT="server-port"
   IMG_DIR="image storage path"

3. Build OCR-Server

   $ npm run build

   Copy .env file to build/

   $ cp .env build/

4. Start Server

   Install process manager
   $ npm install pm2 -g

   $ pm2 start build/app.js

   For more information about PM2 please visit https://pm2.keymetrics.io/
