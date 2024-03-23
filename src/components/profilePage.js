import { useContext, useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import { TokenContext } from "../App";

const ProfilePage = () => {
  const { isLoading, setIsLoading } = useContext(TokenContext);
  const [userData, setUserData] = useState("");
  const localToken = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  //
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/users/${id}`);

      if (!response.ok) {
        alert("User details not found");
        console.log("error");
      } else {
        const data = await response.json();
        setUserData(data);
        console.log(data);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <h1>Profile Page</h1>
      {isLoading && <h1>Your data is Loading</h1>}
      <UserDetails userData={userData} />
    </>
  );
};
export default ProfilePage;
