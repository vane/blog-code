import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


const Test = () => {

  const [msg, setMessage] = useState('Loading...');

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql?'
  });

  client.query({
    query: gql`
    query {
      test
    }
  `,
  }).then(data => {
    setMessage(data.data.test);
  })
  .catch(error => console.error(error));
  return (<h1>{msg}</h1>)
}

ReactDOM.render(<Test />, document.getElementById('app'));
