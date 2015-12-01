import internal from './internal';
import someJson from '../package.json';
import externalRequire from 'dot-object';
//import externalEsNext 'a-module-with-esnext';

const hi = `${internal.hello()} ${externalRequire.pick('name', someJson)}`;
console.log(hi);

export default hi;
