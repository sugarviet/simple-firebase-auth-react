import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import inititalizedAuthentication from "./Firebase/firebase.init";
import { useState } from "react";

inititalizedAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Login with Google</button> <br />
      {user.email && (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt="user-img" />
        </div>
      )}
    </div>
  );
}

export default App;
