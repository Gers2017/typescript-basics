interface User {
  name: String;
  id: number;
  birthday: Date;
  pet?: string;
}

//inherits the User interface
const user1: User = {
  name: "Jimmy",
  id: 200453,
  birthday: new Date("11-17-2000"),
};
const user2: User = {
  name: "Jommy",
  id: 22001430,
  birthday: new Date("12-06-2001"),
  pet: "cat", //using optional parameter
};

interface Moderator {
  status: "admin" | "doge";
  users: User[];
}

const Thomas: Moderator = {
  status: "admin",
  users: [user1, user2],
};
