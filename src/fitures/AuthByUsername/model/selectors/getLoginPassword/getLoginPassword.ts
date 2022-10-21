import { StateScheme } from 'app/provider/StoreProvider';

export const getLoginPassword = (state: StateScheme) => state?.loginForm?.password || '';
