import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/navigation';

export default function App() {
  return (
    <>
      <NavigationContainer>
          <RootNavigator />
          <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}
