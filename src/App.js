import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { SearchPage } from './pages/Search/';
import { EventDispatcher } from './EventDispatcher/';

window['ContentSearcherApp'] = {};
window.ContentSearcherApp.events = EventDispatcher()();

const client = new ApolloClient({
	uri: process.env.REACT_APP_URI,
	cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
      	<ChakraProvider>
      		<SearchPage />
    		</ChakraProvider>
			</ApolloProvider>
    </div>
  );
}

export default App;
