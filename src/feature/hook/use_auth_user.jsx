import React, { useState, useEffect } from 'react';
import useUserData from './use_data_user';


const UseAuthUser = () => {

  const { urlApi } = useUserData();
;
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional cuando el usuario autenticado cambie
    console.log("Usuario autenticado:", authenticatedUser);
  }, [authenticatedUser]);

  const authenticateUser = async (email, password) => {
    try {
      const response = await fetch(urlApi);
      const usersData = await response.json();
      const authenticatedUser = usersData.find(
        (user) => user.email === email && user.password === password
      );

      if (authenticatedUser) {
        setAuthenticatedUser(authenticatedUser);
      } else {
        console.log("Autenticación fallida");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {authenticateUser};
}

export default UseAuthUser;
