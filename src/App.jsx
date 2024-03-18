import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClientProvider,QueryClient } from 'react-query'
import ProductList from './Product.js/Product'
import AddProduct from './Product.js/Addproduct'


const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <div>
        <ProductList />
        <AddProduct />
      </div>
    </QueryClientProvider>
    </>
  )
}

export default App
