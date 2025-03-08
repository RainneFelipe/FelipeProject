let registeredUser = null;

export const saveUser = (user) => {
  registeredUser = user;
};

export const getUser = () => {
  return registeredUser;
};