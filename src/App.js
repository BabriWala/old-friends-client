import Blog from "./Pages/Blog/Blog";
import Discount from "./Pages/Home/Discount/Discount";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound/NotFound";


function App() {
  return (
    <>
    <NotFound></NotFound>
    <Login></Login>
    <Discount></Discount>
    <Footer></Footer>
    <Blog></Blog>
    </>
  );
}

export default App;
