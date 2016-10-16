const _defaultPredefinedWords: string[] = ['allies', 'youtube', 'yellow', 'dragon', 'bone', 'cpu', 'kylio', 'travis', 'react', 'brother', 'wedding', 'photo', 'video', 'lopez', 'diary'];
const _defaultFileNameLength: number = 5;
const _defaultMaxInt: number = 1000;

export const getRandomWord = (predefinedWords: string[] = _defaultPredefinedWords): string => _defaultPredefinedWords[Math.floor(Math.random() * _defaultPredefinedWords.length)];
export const getRandomFileName = (length: number = _defaultFileNameLength): string => Array.apply(null, {length: Math.floor(Math.random() * length) + 1}).map(getRandomWord).reduce((fn, w)=>(`${w}${fn}`), '.jpg');
export const getRandomInt = (max: number = _defaultMaxInt): number => Math.floor(Math.random() * max);
export const getRandomDate = (): Date => new Date(getRandomInt(new Date().getFullYear()), getRandomInt(12), getRandomInt(31), getRandomInt(24), getRandomInt(60), getRandomInt(60), getRandomInt(100));
export const getRandomDateRange = (start: Date = getRandomDate()): ({start: Date, end: Date}) => ({ start, end: (new Date(start.valueOf()).setDate(start.getDate() + getRandomInt(31)))});