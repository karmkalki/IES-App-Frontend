import Header from "./components_home/Header";
import Service from "./components_home/Service";
import Officials from "./components_home/Officials";
import Footer from "./components_home/Footer";
import "./Home.css"
const Home = () =>{
     return <div className="Home">
         <Header></Header>
         <Service></Service>
         <Officials></Officials>
         <Footer></Footer>
         </div>

}
export default Home;