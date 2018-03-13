import { UppercaPipe } from './upperca.pipe';

describe('UppercaPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaPipe();
    expect(pipe).toBeTruthy();
  });
});
