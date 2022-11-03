import { StateScheme } from 'app/provider/StoreProvider';

export const getProfileData = (state: StateScheme) => state.profile?.data;
