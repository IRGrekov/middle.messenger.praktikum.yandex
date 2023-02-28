import { withStore } from '../../common/Store';
import { ProfilePage_red } from './profile_red';

const withUser = withStore((state) => ({ ...state.currentUser }));

export default withUser(ProfilePage_red);
