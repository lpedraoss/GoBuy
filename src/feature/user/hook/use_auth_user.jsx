import  { useState, useEffect, useContext } from 'react';
import useUserData from '../../../data/user/use_data_user';
import UserContext from '../context/user_context';





const UseAuthUser = () => {

  const { urlApi } = useUserData();
  const {setNameContext, setEmailContext} = useContext(UserContext)
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authenticatedEmail, setAuthenticatedEmail] = useState(null);
  
  const authenticateUser = async (email, password, onSuccess, onFailure,authEmail) => {

    try {
      
      // trae el api para usarlo en el hook create
      const response = await fetch(urlApi);
      const usersData = await response.json();
    
      //compara los valores ingresados con los que hay en el json, si se encuentra extrae el json de ese usuario
      const authenticateUser =  usersData.find(
        (user) => user.email === email && user.password === password
      );
      const authenticateEmail =  usersData.find(
        (user) => user.email === email
      );
     
      if(!authenticateEmail){
        setAuthenticatedEmail(authenticateEmail);
        console.log('usuario inexistente:',email);
        authEmail();
      }else  if (authenticateUser) {
        setAuthenticatedUser(authenticateUser);
        // ya autenticado el usuario, se extrae el nombre y el email de este mismo
        const { name,email } = authenticateUser; 
        setNameContext( name );
        setEmailContext( email );
        console.log("Usuario autenticado:", authenticateUser);
        onSuccess();
      } else {
        onFailure();
        console.log("Autenticación fallida");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { authenticateUser };
}

export default UseAuthUser;




