import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  const [username, setUsername] = useState("");

  const url = `https://react-firebase-authentic-ba936-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url);
      const userData = await response.json();

      if (userData) {
        // if userData exists set states with values from userData (data from firestore)
        setUsername(userData.username);
      }
    }
    getUser();
  }, [auth.currentUser, url]); // dependencies: useEffect is executed when auth.currentUser changes

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out", error);
        console.log("Error signing out");
      });
  };

  return (
    <nav>
      <p>Welcome Home, {username} </p>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Home;
