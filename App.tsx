import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/navigation/rootNavigator';
import {colors} from './src/theme/colors';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.palette.White,
      }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
