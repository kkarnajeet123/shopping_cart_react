import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import RegisterForm from "./Components/RegisterForm";
import AddItem from "./Components/AddItem";
import ForgetPassword from "./Components/ForgetPassword";
import List from "./Components/List";
import Edit from "./Components/Edit";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ListTesting from "./Components/ListTesting";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/home" component={Home}>
          <Home />
        </Route>
        <Route exact path="/register" exact component={RegisterForm}>
          <RegisterForm />
        </Route>
        <Route path="/addItem" component={AddItem}>
          <AddItem />
        </Route>
        <Route path="/forgetPassword" component={ForgetPassword}>
          <ForgetPassword />
        </Route>
        <Route path="/list" exact component={List}>
          <List />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/listTesting" component={ListTesting}>
          <ListTesting />
        </Route>
        <Route exact path="/edit-userInfo/:userId" component={Edit}>
          <Edit />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
