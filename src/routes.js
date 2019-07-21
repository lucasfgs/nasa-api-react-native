import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Apod from "./pages/Apod";
import Asteroids from "./pages/Asteroids";
import Mars from "./pages/Mars";

import Header from "./components/DrawerHeader";

const sideBar = createDrawerNavigator(
  {
    "Astronomy Picture of the Day": Apod,
    Asteroids,
    Mars
  },
  {
    contentComponent: Header,
    drawerBackgroundColor: "#30336b",
    contentOptions: {
      activeBackgroundColor: "#130f40",
      activeTintColor: "#E23934",
      inactiveTintColor: "white",
      labelStyle: {
        fontSize: 18
      }
    }
  }
);

const App = createAppContainer(sideBar);

export default App;
