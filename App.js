import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Menu from "./Menu";
import Greet from "./Greet";
import Footer from "./Footer";
import UserRegistration from"./UserRegistration";
import LoginComponent from "./LoginComponent";
import Comment from "./Comment";
function App() {
  return (
    <div>
    <Greet></Greet>
    <UserRegistration></UserRegistration>
    <LoginComponent></LoginComponent>
    <Comment></Comment>
    <Footer></Footer>
    </div>
        );
}

export default App;
