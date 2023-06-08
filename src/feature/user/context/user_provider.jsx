

import UserContext from './user_context';

import UseGetUser from '../hook/use_get_user';
import UseLoggedUser from '../hook/use_logged_user';

const UserProvider = ({children}) => {
    const { name, setNameContext, email, setEmailContext } = UseGetUser();
    const  { login,logout, authenticated } = UseLoggedUser();



    return (
        <>
            <UserContext.Provider value={{ name, setNameContext, email, setEmailContext,  login,logout, authenticated  }} >
                {children}
            </UserContext.Provider>   
        </>
    );
}

export default UserProvider;
