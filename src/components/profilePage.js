import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const localToken = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  //
  useEffect(() => {
    setIsLoading(true);
    (async function () {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();

      if (!response.ok) {
        alert("User details not found");
        console.log("error");
      } else {
        setUserData(data);
        console.log(data);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <h1>Profile Page</h1>
      {isLoading && <h1>Requested data is loading....</h1>}
      <UserDetails userData={userData} />
    </>
  );
};
export default ProfilePage;
