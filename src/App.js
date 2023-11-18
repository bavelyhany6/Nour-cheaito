import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Consultation from './Component/Consultation/Consultation';
import Layout from './Component/Layout/Layout';
import Programs from './Component/Programs/Programs';
import Downloads from './Component/Downloads/Downloads';
import Contact from './Component/Contact/Contact';
import DownloadsSlider from './Component/DownloadsSlider/DownloadsSlider';
import DownloadsSlider1 from './Component/DownloadsSlider1/DownloadsSlider1';

function App() {
  const router =createHashRouter([
    {path:'', element: <Layout/>,children:[
      { path:'',element:<Home/>},
      { path:'Home',element:<Home/>},
    { path:'About',element:<About/>},
    { path:'Consultation',element:<Consultation/>},
    { path:'Programs',element:<Programs/>},
    { path:'Downloads',element:<Downloads/>},
    { path:'DownloadsSlider',element:<DownloadsSlider/>},
    { path:'DownloadsSlider1',element:<DownloadsSlider1/>},
    {path:'*' , element: <div >
      <h1>Not Found</h1>
    </div>},
    ]},
    { path:'Contact',element:<Contact/>},
  ])


  
  return <>
  
  
  <RouterProvider router={router}/>


  
  </>
}

export default App;
