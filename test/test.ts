import { runApp } from '../src/index';

describe('App Test', () => {
  it('should return "Testing"', () => {
    const result = runApp();
    expect(result).toBe('Testing');
  });
});
