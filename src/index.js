import internal from './internal';
import someJson from '../package.json';
import externalRequire from 'dot-object';

const hi = `${internal.hello()} ${externalRequire.pick('name', someJson)}`;
console.log(hi);

export default hi;
