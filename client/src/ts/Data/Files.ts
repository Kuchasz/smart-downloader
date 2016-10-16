import { createAccounts } from './Accounts';
import { File, Status } from '../Models/File';
import { Account } from "../Models/Account";
import { getRandomFileName, getRandomFloat, getRandomInt, getRandomBool } from "./Common";

const _accounts: Account[] = createAccounts();

const _predefinedStatuses: Status[] = ['Progress', 'Finished', 'Waiting', 'Canceled'];

const _getRandomAccount = (): Account => _accounts[Math.floor(Math.random() * _accounts.length)];
const _getRandomStatus = (): Status => _predefinedStatuses[Math.floor(Math.random() * _predefinedStatuses.length)];

let _initialFileId: number = 0;

export const createFile = (): File => ({
	id: _initialFileId++,
	fileName: getRandomFileName(),
	status: _getRandomStatus(),
	speed: getRandomFloat(),
	estimatedTime: `${getRandomInt(24)}:${getRandomInt(60)}:${getRandomInt(60)}`,
	progress: getRandomInt(100),
	selected: getRandomBool(),
	accountId: _getRandomAccount().id
});

export const createFiles = (): File[] => [
	createFile(),
	createFile(),
	createFile(),
	createFile(),
	createFile(),
	createFile(),
	createFile(),
	createFile()
];
