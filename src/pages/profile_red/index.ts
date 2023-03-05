import { withStore } from '../../common/Store';
import { ProfilePageRed } from './profile_red';

const withUser = withStore((state) => ({ ...state.currentUser }));

export default withUser(ProfilePageRed);
