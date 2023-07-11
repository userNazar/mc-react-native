import { StyleSheet, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux/es/exports';
import { store } from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main';
import Item from './pages/Item';
import Header from './components/Header';
import { RootStackParamList } from './types/navigation';



export default function App() {

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (

      <Provider store={store}>
        <NavigationContainer>
        <Header />
          <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Item' component={Item} />
          </Stack.Navigator>

        </NavigationContainer>

      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
