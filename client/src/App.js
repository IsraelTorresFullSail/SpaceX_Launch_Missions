import './App.css'
import logo from './logo.png'
import { ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={logo}
          alt='SpaceX'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
      </div>
    </ApolloProvider>
  )
}

export default App
