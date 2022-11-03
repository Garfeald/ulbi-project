import { StateScheme } from 'app/provider/StoreProvider';

export const getProfileIsLoading = (state: StateScheme) => state.profile?.isLoading;
