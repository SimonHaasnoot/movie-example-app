import { expect, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { fetch } from 'cross-fetch';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

global.fetch = fetch;

afterEach(() => {
    cleanup();
});
