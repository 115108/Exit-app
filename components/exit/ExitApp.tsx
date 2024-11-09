import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import Toast, { BaseToast, ToastShowParams } from 'react-native-toast-message';

export default function ExitApp() {
  const [lastPress, setLastPress] = useState<number>(0); 
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        const timeNow = new Date().getTime();
        if (timeNow - lastPress < 2000) {
          BackHandler.exitApp();
        } else {
          Toast.show({
            type: 'info',
            text1: 'try again',
            position: 'bottom',
          });
          setLastPress(timeNow);
        }

        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => backHandler.remove();
    }, [lastPress])  
  );

  const toastConfig = {
    info: (props: ToastShowParams) => (
      <BaseToast
        {...props}
        style={styles.toast}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333333',
        }}
      />
    ),
  };

  return <Toast config={toastConfig} />;
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    zIndex: 100,
    bottom: -30,
    width: 200,
    height: 50,
    borderLeftColor: '#ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});
