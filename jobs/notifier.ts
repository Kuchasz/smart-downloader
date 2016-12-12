import {QueueClient} from "../lib/kuku/client/QueueClient";
import {SubscribeMessage} from "../lib/kuku/messages/SubscribeMessage";
import {FileAddedMessage} from "../messages/Files/queueMessages/FileAddedMessage";
const _queueClient = new QueueClient();
_queueClient.push(new SubscribeMessage(FileAddedMessage));