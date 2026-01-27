/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from 'AppRoutes';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { appStore } from 'AppSrc/store/index';

function App() {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <Provider store={appStore}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={'dark-content'} />
          <Routes />
          <Toast position="bottom" />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
