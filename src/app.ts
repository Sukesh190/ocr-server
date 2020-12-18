import Server from './server';

const port = parseInt(process.env.PORT || '9090', 10);
const server = new Server()
  .start(port)
  .then((portNum) => {
    console.log(`OCR-Server running on ${portNum}`);
  })
  .catch((err) => {
    console.log(err);
    console.log('Failed to start OCR-Server');
  });

export default server;
