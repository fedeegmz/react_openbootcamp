import logo from './logo.svg';
import './App.css';
import ContactDetail from './components/container/contact_detail';
import { Contact } from './models/contact.class';

function App() {
  const defaultContact = new Contact("John", "Doe", "johndoe@email.com", true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ContactDetail contact={ defaultContact }></ContactDetail>
      </header>
    </div>
  );
}

export default App;
