import { useState, useEffect } from "react";

const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const urlApi = "https://646d4d739c677e232189e51a.mockapi.io/user";

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(urlApi);
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional cuando el usuario autenticado cambie
    console.log("Usuario autenticado:", authenticatedUser);
  }, [authenticatedUser]);

  const createUser = async (user) => {
    try {
      const name  = user.name;
      const email = user.email;
      const password = user.password;

      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({name,email,password,}),
      });
      const newUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);

      console.log("datos enviados:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const authenticateUser = (email, password) => {
    const authenticatedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    } else {
      console.log("Autenticación fallida");
    }
  };

  return {
    users,
    authenticatedUser,
    createUser,
    authenticateUser,
  };
};

export default useUserData;
