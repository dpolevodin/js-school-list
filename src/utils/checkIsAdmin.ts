export const checkIsAdmin = ( username: string | number, password: string | number) => {
  const currentUsername = "admin";
  const currentPassword = "admin";
  if (username === currentUsername && password === currentPassword) {
    return true;
  }
};