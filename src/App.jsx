
import './App.css'

import UserProvider from './feature/user/context/user_provider'
import CartProvider from './feature/cart/context/carrito_provider'


import RouteGobuy from './routes/route_gobuy'


function App() {

  return (
    <>

      <UserProvider>
        <CartProvider>
          <RouteGobuy/>
        </CartProvider>
      </UserProvider>

    
    </>
  )
}

export default App
