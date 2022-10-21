import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/provider/StoreProvider/config/store';
import { StateScheme } from 'app/provider/StoreProvider/config/StateScheme';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateScheme>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState as StateScheme,
        asyncReducers as ReducersMapObject<StateScheme>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
