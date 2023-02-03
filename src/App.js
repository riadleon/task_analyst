import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import UserDetails from './Components/Users/UserDetails';
import Users from './Components/Users/Users';
import Main from './layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/users',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
       
        {
          path:'/users',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users></Users>
        },
        {
          path:'/users/:id',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          element:<UserDetails></UserDetails>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
