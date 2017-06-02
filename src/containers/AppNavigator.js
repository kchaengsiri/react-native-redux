import { StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen'

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
})

export default AppNavigator