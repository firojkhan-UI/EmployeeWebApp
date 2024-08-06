import { useState } from 'react';
import './App.css';
import BannerComponent from './common-components/Banner';
import ListEmployee from './pages/ListEmployee';
import FormData from './common-components/FormData';

function App() {
  const [isOpen, setOpen] = useState(false)

  console.log(isOpen,"isOPen:::::")

  return (
    <div className="App">
      <h4>Employee App</h4>
      {isOpen && <FormData />}
      <BannerComponent isOpenFormData = {() => setOpen(prev => !prev)} />
      <ListEmployee />
     
    </div>
  );
}

export default App;
