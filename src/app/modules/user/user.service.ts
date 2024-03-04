import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user
  const user = await new User(payload); // User => class user => instance
  await user.save(); // build in intance method

  const fullName = user.fullName(); // Custom instance method
  console.log("Full Name => ", fullName);

  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

// Class => Attach => Method => Directly call using class
// user => new User
// user. instance method
// user.getAdminUsers()
