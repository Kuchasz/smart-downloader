import {Accounts} from './Accounts';

export const Files = () => { const accs = Accounts(); return [{
  id: 0,
  fileName: 'another-brick-in-the-wall(anniversary-version).raw',
  status: 'progress',
  speed: parseFloat(Math.random()*10).toFixed(2),
  estimatedTime: '0:24:20',
  progress: Math.floor(Math.random()*100),
  selected: Math.random()>0.5,
  account: accs[1]
},
{
  id: 1,
  fileName: 'mamma-mia-dvdrip-eurovision.mkv',
  status: 'finished',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 100,
  selected: Math.random()>0.5,
  account: accs[0]
},
{
  id: 2,
  fileName: 'arhn-eu-nice_by_mikke22.mkv',
  status: 'waiting',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 0,
  selected: Math.random()>0.5,
  account: accs[0]
},
{
  id: 3,
  fileName: 'promise-and-promise.mp4',
  status: 'canceled',
  speed: 0,
  estimatedTime: '0:00:00',
  progress: 23,
  selected: Math.random()>0.5,
  account: accs[1]
},
{
  id: 4,
  fileName: 'herodThe-billionaire-midas.rar',
  status: 'progress',
  speed: parseFloat(Math.random()*10).toFixed(2),
  estimatedTime: '0:33:10',
  progress: Math.floor(Math.random()*100),
  selected: Math.random()>0.5,
  account: accs[0]
}]};
