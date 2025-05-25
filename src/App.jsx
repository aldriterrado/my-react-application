import Layout from "./pages/Layout"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="our-profile" element={<About />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App 
