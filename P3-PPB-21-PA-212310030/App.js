import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './component/Friends/MyFriends';
import Home from './src/Latihan-prak-3/Homes/Home';


export default function App() {
  return (
    //  <MyFriends/>

    <Home/>
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
