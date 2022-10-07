import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/provider/StoreProvider/config/store';
import { StateScheme } from 'app/provider/StoreProvider/config/StateScheme';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateScheme>;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
