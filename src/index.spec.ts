import hello from './index';

describe('testing', () => {
  it('the test', () => {
    expect(hello()).toEqual("Hello");
  })
})