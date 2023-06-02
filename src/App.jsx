
import './App.css'
import Header from './feature/components/pure/header'
import AuthProvider from './feature/context/auth/auth_provider'
import CartProvider from './feature/context/cart/cart_provider'
import UserProvider from './feature/context/user/user_provider'


import RouteGobuy from './routes/route_gobuy'


function App() {

  return (
    <>
    <Header></Header>
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <RouteGobuy/>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
    
    </>
  )
}

export default App
