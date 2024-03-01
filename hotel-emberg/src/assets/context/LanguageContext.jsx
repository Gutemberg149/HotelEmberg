import { createContext, useState, useContext } from "react";

// This context is to change the language of all website.

export const LanguageToggleContext = createContext();

const LanguageToggleProvider = ({ children }) => {
  const [portugues, setPortugues] = useState(false);

  return <LanguageToggleContext.Provider value={{ portugues, setPortugues }}>{children}</LanguageToggleContext.Provider>;
};

export default LanguageToggleProvider;

export const languageUserAuth = () => {
  return useContext(LanguageToggleContext);
};
