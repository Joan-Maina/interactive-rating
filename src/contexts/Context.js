import React, { useState, createContext } from "react";
import Text from "../components/Text/Text";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};
const withUser = (Text) => (props) =>
  (
    <UserContext.Consumer>
      {(context) => <Text {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );

export { UserProvider, withUser };
