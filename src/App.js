import { RouterProvider } from 'react-router';
import {router} from '../src/Routes/Routes/Routes';

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
