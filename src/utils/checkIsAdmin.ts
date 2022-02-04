export const checkIsAdmin = ( values: {username: string, password: string}) => {
  const currentUsername = "admin";
  const currentPassword = "admin";
  if (values.username === currentUsername && values.password === currentPassword) {
    return true;
  }
};