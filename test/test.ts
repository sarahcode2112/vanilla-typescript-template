import { runApp } from '../src/index';

describe('runApp function', () => {
  it('should return "Testing"', () => {
    const result = runApp();
    expect(result).toBe('Testing');
  });
});
