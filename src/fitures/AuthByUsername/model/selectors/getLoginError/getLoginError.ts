import { StateScheme } from 'app/provider/StoreProvider';

export const getLoginError = (state: StateScheme) => state?.loginForm?.error;
