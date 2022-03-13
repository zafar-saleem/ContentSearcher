import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.REACT_APP_URI,
	cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
				<h1>COntents</h1>
			</ApolloProvider>
    </div>
  );
}

export default App;
