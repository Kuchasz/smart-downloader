import {Socket} from 'net';

const _client = new Socket();

_client.on('connect', () => {
    console.log('[Client] Connected to queue!')
});

_client.on('data', (data) => {
    const _messageJson = data.toString();
    console.log(`[Client] Received: ${_messageJson}`);
});

_client.connect(6666, 'localhost');