import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const localToken = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  //
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://dummyjson.com/users/${id}`);

      if (!response.ok) {
        alert("User details not found");
        console.log("error");
      } else {
        const data = await response.json();
        setUserData(data);
        console.log(data);
      }
    })();
  }, []);
  return (
    <>
      <h1>Profile Page</h1>
      <UserDetails userData={userData} />
    </>
  );
};
export default ProfilePage;
