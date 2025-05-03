import {useUserContext } from "@/context/UserContext/UserContext";

const Header = () => {
  const {loggedInUser} = useUserContext()
  return (
    <>
      <p>This is the header</p>
      <p>{loggedInUser?.firstName}</p>
    </>
  );
};

export default Header;
