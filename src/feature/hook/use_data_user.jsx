import { useState, useEffect } from "react";

const useUserData = () => {
  const [users, setUsers] = useState([]);

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

  return {
    users,
    createUser,
  };
};

export default useUserData;
