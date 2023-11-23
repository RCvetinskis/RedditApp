import dbUsers from "../schemas/dbUsers";

export const validateUser = async (email, username) => {
  const users = await dbUsers.find({}, { email: 1, username: 1, _id: 0 });

  if (users) {
    const usersUsernames = users.map(({ username }) => username);
    if (usersUsernames.includes(username))
      return {
        message: "username already exists",
        status: 500,
        name: "ValidationError",
        error: true,
      };

    const usersEmails = users.map(({ email }) => email);
    if (usersEmails.includes(email))
      return {
        message: "Email already exists",
        status: 500,
        name: "ValidationError",
        error: true,
      };
  }
};
