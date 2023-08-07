import readline from 'node:readline/promises';
import { Server } from 'socket.io';
import http from 'node:http';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

server.listen(3001);

async function askAltitude() {
  return rl.question('ENTER ALTITUDE between 0 to 3000: ');
}

async function askHIS() {
  return rl.question('ENTER HIS between 0 to 360: ');
}

async function askADI() {
  return rl.question('ENTER ADI 100 / -100 / 0: ');
}

async function askConfirmation() {
  return rl.question('sure? (1/0) ');
}

async function main() {
  try {
    const Altitude = await askAltitude();
    const HIS = await askHIS();
    const ADI = await askADI();
    const sure = await askConfirmation();

    if (sure === '1') {
      io.emit('send_data', {
        Altitude,
        HIS,
        ADI
      });
      console.log(' your Message sent');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}
main();
