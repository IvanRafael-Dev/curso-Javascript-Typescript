// structural typing

type VerifyUserFn = (user: User, data: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, data) => {
  return user.username === data.username && user.password === data.password;
};

const dbUser = { username: 'Paty', password: 'Fifi2021' };
const sentUser = { username: 'Paty', password: 'Fifi2021', role: 'admin' };

console.log(verifyUser(dbUser, sentUser));
