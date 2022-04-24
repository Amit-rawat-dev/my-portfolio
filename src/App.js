import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import SinglePost from './Components/SinglePost';
import Post from './Components/Post';
import Project from './Components/Project';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about'/>
          <Route component={SinglePost} path='/post/:slug'/>
          <Route component={Post} path='/post'/>
          <Route component={Project} path='/project'/>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
