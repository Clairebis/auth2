import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = ({ username }) => {
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

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

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Email: " + profile.email);
      //console.log("  Photo URL: " + profile.photoURL);
      console.log(" Username: " + profile.displayName);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
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
