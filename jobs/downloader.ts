import {QueueClient} from "../lib/kuku/client";
import {FileAddedMessage} from "../messages/Files/queueMessages/FileAddedMessage";
const _queueClient = new QueueClient();
_queueClient.subscribe(FileAddedMessage, (f: FileAddedMessage) => {
    console.log(`[Client] received: ${f.file.name}`);
});