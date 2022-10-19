import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme, StoreProvider } from 'app/provider/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
