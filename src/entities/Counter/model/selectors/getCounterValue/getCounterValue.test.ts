import { StateScheme } from 'app/provider/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('get value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });
});
