import { StateScheme } from 'app/provider/StoreProvider';

export const getProfileReadonly = (state: StateScheme) => state.profile?.readonly;
