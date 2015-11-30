import internal from './internal';
import externalRequire from 'dot-object';
//import externalEsNext 'a-module-with-esnext';

const obj = {
  hello: {
    world: 'Hello world.'
  }
};

internal.hello();
console.log(externalRequire.pick('hello.world', obj));
