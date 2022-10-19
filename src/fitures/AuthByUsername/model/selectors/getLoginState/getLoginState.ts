import { StateScheme } from 'app/provider/StoreProvider';

export const getLoginState = (state: StateScheme) => state?.loginForm;
