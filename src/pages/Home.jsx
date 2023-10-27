import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [username, setUsername] = useState(null);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // Access the user's profile to get the username
        const displayName = user.displayName;
        setUsername(displayName); // Set the username in the component's state
        console.log("uid", uid);
      } else {
        // User is signed out
        setUsername(null); // Reset the username when the user signs out
        console.log("user is logged out");
      }
    });
  }, [auth]);

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
