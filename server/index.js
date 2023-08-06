import readline from 'node:readline/promises';
import { Server } from 'socket.io';
import http from 'node:http';

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

server.listen(3001);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

while (true) {
  const altitude = await rl.question('ENTER ALTITUDE between 0 to 3000: '),
    HIS = await rl.question('ENTER HIS between 0 to 360: '),
    ADI = await rl.question('ENTER ADI  100 / -100 / 0: '),
    areYouSure = await rl.question('Are you sure? (Y/n) ');

  if (areYouSure !== 'n') {
    io.emit('send_data', {
      altitude,
      HIS,
      ADI
    });
    console.log('Message has been sent');
  }
}

