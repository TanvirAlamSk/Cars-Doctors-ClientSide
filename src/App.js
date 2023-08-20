import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
