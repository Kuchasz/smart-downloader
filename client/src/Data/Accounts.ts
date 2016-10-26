import { Account} from "../Models/Account";
import { getRandomWord, getRandomDate, getRandomInt, getRandomColor} from "./Common";

let _initialAccountId: number = 0;

export const createAccount = (): Account => ({
	id: _initialAccountId++,
	nick: getRandomWord(),
	daysLeft: getRandomInt(30) + 1,
	currentTransfer: getRandomInt(100),
	maxTransfer: 100,
	registrationDate: getRandomDate().toDateString(),
	endPremium: getRandomDate().toDateString(),
	amountData: getRandomInt(1000),
	color: getRandomColor()
});

export const createAccounts = (): Account[] => [
	createAccount(),
	createAccount(),
	createAccount(),
	createAccount(),
	createAccount(),
	createAccount()
];