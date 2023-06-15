
import './App.css'

import UserProvider from './feature/user/context/user_provider'
import CartProvider from './feature/cart/context/carrito_provider'


import RouteGobuy from './routes/route_gobuy'
import ViewComponentProvider from './feature/utils/view_component/context/view_component_provider'



function App() {

  return (
    <>
      <UserProvider>
        <ViewComponentProvider>
          <CartProvider>
            <RouteGobuy/>
          </CartProvider>
        </ViewComponentProvider>
      </UserProvider>
    </>
  )
}

export default App
