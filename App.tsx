import React from 'react';
import appboxosdk from '@appboxo/react-native-sdk';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {

  React.useEffect(() => {
    appboxosdk.setConfig('[client_id]');  //set your Appboxo client_id
  }, [])

  const onLoadMiniApp = () => {
    appboxosdk.openMiniApp('[miniapp_id]', '[auth_payload]');  //launch miniapp by id with auth payload
  }

  return (
    <View style={styles.container}>
      <Button
        color="#841584"
        title="Load miniapp"
        onPress={onLoadMiniApp}
        accessibilityLabel="Load miniapp"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

