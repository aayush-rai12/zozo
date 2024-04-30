import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Registration from "./components/Registration_UI";


function App() {
  const router=createBrowserRouter([
 {
    path:"/register",
    element:<Registration/>
  },
]);
  return (
    <section>
      <div className="App">
        {/* <h1>Wellcome zozO</h1> */}
        <RouterProvider router={router}/>
      </div>
    </section>
  );
}
export default App;
