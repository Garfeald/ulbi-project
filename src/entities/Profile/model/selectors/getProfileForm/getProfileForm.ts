import { StateScheme } from 'app/provider/StoreProvider';

export const getProfileForm = (state: StateScheme) => state.profile?.form;