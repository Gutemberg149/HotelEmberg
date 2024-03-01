import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { auth } from "../utils/FirebaseConfig";

export const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const db = getFirestore();

  const signUp = async (name, sobreNome, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await addDoc(collection(db, "myCollection"), {
        displayName: name,
        displaySobreNome: sobreNome,
      });

      localStorage.setItem("localStorageUserName", JSON.stringify(name));
    } catch (error) {
      console.log(error);
      throw new Error("Invalid email");
    }
  };

  // ---------------------------------------------------------------------

  //This code bellow is for login and capture the user's name than send it to localstore, to be displayed in navbar.
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userInfoName = user.providerData[0].displayName;
      localStorage.setItem("localStorageUserName", JSON.stringify(userInfoName));
    } catch (error) {
      setErrorSignIn(true);
      console.error("Error signing in:", error.message);
      throw new Error("Invalid email or password. Please try again.");
    }
  };

  // ---------------------------------------------------------------------

  const logOut = () => {
    localStorage.setItem("localStorageUserName", JSON.stringify(""));
    return signOut(auth);
  };
  // ---------------------------------------------------------------------
  //this code bellow is to check if the user is logged in or not.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      return setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // ---------------------------------------------------------------------
  return <userAuthContext.Provider value={{ signUp, signIn, logOut, user }}>{children}</userAuthContext.Provider>;
};

export default UserAuthContextProvider;

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
