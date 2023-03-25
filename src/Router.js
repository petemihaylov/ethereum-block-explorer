import React, { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

//Pages
const Home = () => {
  return <></>;
};

const About = () => {
  return <></>;
};
const Blog = () => {
  return <></>;
};
const Contact = () => {
  return <></>;
};

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Router;
