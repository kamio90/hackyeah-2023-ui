import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import Form from './components/form/Form';
import XmlToJsonViewer from './components/XmlToJsonViewer/XmlToJsonViewer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form></Form> */}
      <XmlToJsonViewer />
      {/* <Form /> */}
    </>
  )
}

export default App
