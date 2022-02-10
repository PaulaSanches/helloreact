import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.."/>
        
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Person name.."/>
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write something.." className="textArea"></textarea>
        
        <label htmlFor="attach">Attach</label>
        <input type="file" id="attach" name="attach"/>
        
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}

export default App;
