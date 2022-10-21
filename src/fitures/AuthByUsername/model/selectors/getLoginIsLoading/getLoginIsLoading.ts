import { StateScheme } from 'app/provider/StoreProvider';

export const getLoginIsLoading = (state: StateScheme) => state?.loginForm?.isLoading || false;
