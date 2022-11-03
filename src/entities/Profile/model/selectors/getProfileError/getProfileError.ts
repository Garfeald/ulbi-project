import { StateScheme } from 'app/provider/StoreProvider';

export const getProfileError = (state: StateScheme) => state.profile?.error;
