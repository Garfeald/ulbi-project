import { counterReducer, counterActions } from './counterSlice';
import { CounterScheme } from '../types/counterScheme/counterScheme';

describe('counterSlice.test', () => {
    test('test decrement', () => {
        const state: CounterScheme = { value: 10 };
        expect(
            counterReducer(
                state as CounterScheme,
                counterActions.decrement(),
            ),
        ).toEqual({ value: 9 });
    });
    test('test increment', () => {
        const state: CounterScheme = { value: 10 };
        expect(
            counterReducer(
                state as CounterScheme,
                counterActions.increment(),
            ),
        ).toEqual({ value: 11 });
    });
    test('test undefined', () => {
        expect(
            counterReducer(
                undefined,
                counterActions.increment(),
            ),
        ).toEqual({ value: 1 });
    });
});
