import mod from '../src/index'
import pkg from '../package.json'

describe('Test', () => {
  it('Should work', () => {
    expect(mod).toEqual(`Hello ${pkg.name}`);
  })
})