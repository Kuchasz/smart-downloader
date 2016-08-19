import {Accounts} from './Accounts';
const accs = Accounts();

const _words = ['allies', 'youtube', 'yellow', 'dragon', 'bone', 'cpu', 'kylio', 'travis', 'react', 'brother', 'wedding', 'photo', 'video', 'lopez', 'diary'];
const _statuses = ['progress', 'finished', 'waiting', 'canceled'];
const _randomWord = () => _words[Math.floor(Math.random()*_words.length)];
const _randomFileName = () => {
    const _length = Math.floor(Math.random()*_words.length)+1;
    var _fileName = '.jpg';
    for (let i=0; i<_length; i++) _fileName = `${_randomWord()}-${_fileName}`;
    return _fileName;
}
const _randomAccount = () => accs[Math.floor(Math.random()*accs.length)];
const _randomStatus = () => _statuses[Math.floor(Math.random()*_statuses.length)];

export const CreateFile = () => ({
  id: Math.floor(Math.random()*10000),
  fileName: _randomFileName(),
  status: _randomStatus(),
  speed: parseFloat(Math.random()*10).toFixed(2),
  estimatedTime: `${Math.floor(Math.random()*24)}:${Math.floor(Math.random()*60)}:${Math.floor(Math.random()*60)}`,
  progress: Math.floor(Math.random()*100),
  selected: Math.random()>0.5,
  account: _randomAccount()
});



export const Files = () => [
  CreateFile(),
  CreateFile(),
  CreateFile(),
  CreateFile(),
  CreateFile(),
  CreateFile(),
  CreateFile(),
  CreateFile()
];
