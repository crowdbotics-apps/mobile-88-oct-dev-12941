import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen311922Navigator from '../features/BlankScreen311922/navigator';
import BlankScreen211921Navigator from '../features/BlankScreen211921/navigator';
import BlankScreen111920Navigator from '../features/BlankScreen111920/navigator';
import BlankScreen011919Navigator from '../features/BlankScreen011919/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen311922: { screen: BlankScreen311922Navigator },
BlankScreen211921: { screen: BlankScreen211921Navigator },
BlankScreen111920: { screen: BlankScreen111920Navigator },
BlankScreen011919: { screen: BlankScreen011919Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
