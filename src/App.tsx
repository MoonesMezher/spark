import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './layout/Layout'
import About from './pages/About/About'
import Learn from './pages/Learn/Learn'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Welcome from './pages/Welcome/Welcome'
import { useEffect } from 'react'
import Courses from './pages/Courses/Courses'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import Error from './pages/Error/Error'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const { pathname } = useLocation();

  const helmetContext = {};

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);
  
  return (
    <HelmetProvider context={helmetContext}>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/:section-services' element={<ServicesPage/>}/>
            <Route path='/services' element={<Welcome/>}/>
            <Route path='/learn' element={<Learn/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/course/:id' element={<CourseDetails/>}/>
            <Route path='/error' element={<Error/>}/>
        </Routes>
      </Layout>
    </HelmetProvider>
  )
}

export default App
