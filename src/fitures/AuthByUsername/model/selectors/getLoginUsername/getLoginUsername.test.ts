import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/provider/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
