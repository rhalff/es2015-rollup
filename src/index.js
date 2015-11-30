import internal from './internal';
import someJson from '../package.json';
import externalRequire from 'dot-object';
//import externalEsNext 'a-module-with-esnext';

console.log(`${internal.hello()} ${externalRequire.pick('name', someJson)}`);
