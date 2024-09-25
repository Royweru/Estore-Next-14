import { auth } from "@clerk/nextjs/server";


const whiteListed = [
  "user_2mYb9tEXupk2wj9Mmc9jz9xHout"

];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return whiteListed.indexOf(userId) !== -1;
};
