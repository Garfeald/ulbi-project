import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from 'app/provider/StoreProvider/config/StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'fitures/AuthByUsername';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateScheme>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
