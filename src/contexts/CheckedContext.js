import { createContext, useState } from "react";

export const CheckedContext = createContext({
  checkedClass: false,
  setCheckedClass: () => {},
});

export const CheckedContextProvider = ({ children }) => {
  const [checkedClass, setCheckedClass] = useState(false);

  const value = { checkedClass, setCheckedClass };

  return (
    <CheckedContext.Provider value={value}>{children}</CheckedContext.Provider>
  );
};
