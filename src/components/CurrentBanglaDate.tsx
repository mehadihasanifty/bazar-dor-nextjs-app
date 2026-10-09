import { connection } from "next/server";

const Header = async () => {
  await connection();

  const date = new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return <span>{date}</span>;
};

export default Header;