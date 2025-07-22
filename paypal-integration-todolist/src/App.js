import { Todo } from "./Components/Todo";
import StopWatch from "./Components/StopWatch";
import Header from "./Components/Header";
import PayPal from './Components/PayPal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  const [checkout, setCheckOut] = useState(false);


  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/paypal" element={checkout ? (<PayPal />) : (<Button onClick={() => setCheckOut(true)} className="checkout-button" > Check out </Button>)} />
        <Route path="/stopwatch" element={<StopWatch /> } />
        <Route path="/todo" element={<Todo />} />


      </Routes>

    </Router>
  )

}
export default App;