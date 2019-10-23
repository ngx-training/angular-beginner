import { FunnyPipe } from './funny.pipe';

describe('FunnyPipe', () => {
  it('create an instance', () => {
    const pipe = new FunnyPipe();
    expect(pipe).toBeTruthy();
  });
});
