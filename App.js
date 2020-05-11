import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import IndexScreen from "./src/screens/IndexScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DrawerComponent from "./src/components/DrawerComponent";

//If there is multiple provider, I can do this:
//import { Provider as ImageProvider } from "../context/ImageContext";
//import { Provider } from "./src/context/BlogContext";

const Drawer = createDrawerNavigator(
  {
    Index: {
      screen: IndexScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: "Index",
    //Destroys every screen you leave.
    unmountInactiveRoutes: true,
    //Removes the default header space.
    headerMode: "none",
    //This property takes care of our sidebar list menu.
    contentComponent: (props) => <DrawerComponent {...props} />,
  }
);

const navigator = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    unmountInactiveRoutes: true,
  }
);

export default createAppContainer(navigator);
// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// };
