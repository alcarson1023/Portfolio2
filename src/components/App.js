import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import LawShield from "./pages/LawShield";
import CoursesPage from "./Portfolio";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import Background from "../resources/hm_background1.png";

function App() {
  const style={}
  const outerStyle={textAlign: 'center', alignContent: 'center', backgroundColor: 'lightgray', backgroundImage: "url(" + Background + ")", backgroundSize: 'cover'}
  const innerStyle = {
    maxWidth: '60vw', marginLeft: '20vw', backgroundColor: 'white', height: '100vh', boxShadow: '0px 0px 50px rgb(21,21,97)',
    // backgroundImage: "url(" + Background + ")",
  };
  return (
    <div style={outerStyle}>
    <div style={innerStyle}>
      <Header />
      <Switch>
        <Route style={style} path="/" exact component={HomePage} />
        <Route style={style} path="/about" component={AboutPage} />
        <Route style={style} path="/portfolio" component={CoursesPage} />
        <Route style={style} path="/lawshield" component={LawShield} />
        <Route
          style={style}
          path="/portfolio/:slug"
          component={ManageCoursePage}
        />
        <Route style={style} path="/portfolio" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    </div>
  );
}

export default App;
