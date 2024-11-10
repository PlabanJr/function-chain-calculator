import type { FunctionCard as FunctionCardType } from '../types';

export const INITIAL_FUNCTIONS: FunctionCardType[] = [
    { id: 1, equation: 'x^2', nextFunction: 2 },
    { id: 2, equation: '2x+4', nextFunction: 4 },
    { id: 3, equation: 'x^2+20', nextFunction: null },
    { id: 4, equation: 'x-2', nextFunction: 5 },
    { id: 5, equation: 'x/2', nextFunction: 3 },
];

export const EXECUTION_ORDER = [1, 2, 4, 5, 3];

export const CONNECTIONS = [
    { from: 'input', to: '1' },
    { from: '1', to: '2' },
    { from: '2', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '3' },
    { from: '3', to: 'output' }
]
