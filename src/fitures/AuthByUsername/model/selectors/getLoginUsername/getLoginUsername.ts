import { StateScheme } from 'app/provider/StoreProvider';

export const getLoginUsername = (state: StateScheme) => state?.loginForm?.username || '';
