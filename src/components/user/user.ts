import User from '../../models/user';
import { IUserRegistration } from './interface';

const userRegister = async (userDetails: IUserRegistration) => {
  try {
    const user = await User.findOne({ email: userDetails.email });
    if (user) {
      return 'Email already exists.';
    }
    await User.create(userDetails);
    return 'User registered.';
  } catch (err) {
    console.log(err);
    throw new Error('Error registering user.');
  }
};

export default userRegister;
