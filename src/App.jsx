import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import Dropdown from './Components/Dropdown'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
      <Navbar />
      <Dropdown/>
    </ChakraProvider>
    </>
  )
}

export default App
