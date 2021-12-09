const users = ['user1', 'user2'];

export const checkUser = (user: string) =>
    Promise.resolve(users.includes(user));