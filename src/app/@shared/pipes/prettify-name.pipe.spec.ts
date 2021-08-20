import { PrettifyNamePipe } from './prettify-name.pipe';

describe('PrettifyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PrettifyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
