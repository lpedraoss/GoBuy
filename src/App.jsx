
import './App.css'
import AuthProvider from './feature/user/context/auth_provider'
import UserProvider from './feature/user/context/user_provider'
import CartProvider from './feature/cart/context/carrito_provider'


import RouteGobuy from './routes/route_gobuy'


function App() {

  return (
    <>
    
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
