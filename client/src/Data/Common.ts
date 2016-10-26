const _defaultPredefinedWords: string[] = ['allies', 'youtube', 'yellow', 'dragon', 'bone', 'cpu', 'kylio', 'travis', 'react', 'brother', 'wedding', 'photo', 'video', 'lopez', 'diary'];
const _defaultFileNameLength: number = 5;
const _defaultFloatPrecision: number = 2;
const _defaultMaxNumber: number = 1000;
const _defaultPredefinedColors: string[] = ['#FA9461', '#FFE491', '#5F997C', '#3F4A44', '#C9D665'];

export const getRandomInt = (max: number = _defaultMaxNumber): number => Math.floor(Math.random() * max);
export const getRandomBool = () => Math.random() > 0.5;
export const getRandomFloat = (max: number = _defaultMaxNumber, precision: number = _defaultFloatPrecision) => parseFloat((Math.random() * max).toFixed(precision))
export const getRandomElementFromArray = <T>(array: T[]): T => array[getRandomInt(array.length)];
export const getRandomWord = (predefinedWords: string[] = _defaultPredefinedWords): string => getRandomElementFromArray(predefinedWords);
export const getRandomFileName = (length: number = _defaultFileNameLength): string => Array.apply(null, {length: Math.floor(Math.random() * length) + 1}).map(getRandomWord).reduce((fn, w)=>(`${w}${fn}`), '.jpg');
export const getRandomColor = (predefinedColors: string[] = _defaultPredefinedColors): string => getRandomElementFromArray(predefinedColors);
export const getRandomDate = (): Date => new Date(getRandomInt(new Date().getFullYear()), getRandomInt(12), getRandomInt(31), getRandomInt(24), getRandomInt(60), getRandomInt(60), getRandomInt(100));
export const getRandomDateRange = (start: Date = getRandomDate()): {start: Date, end: Date} => ({	start,	end: new Date(start.valueOf() + getRandomInt(100000000))});