// import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
// import Ejemplo4 from './hooks/ejemplo4';
// import ContactDetail from './components/challenge1/contact_detail';
// import { Contact } from './models/challenge1/contact.class';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Father from './components/container/father';
// import OptionalRender from './components/pure/optionalRender';

function App() {
  // const defaultContact = new Contact("John", "Doe", "johndoe@email.com", true);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <ContactDetail contact={ defaultContact }></ContactDetail> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre={"John"}>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* </header> */}

      {/* <Father></Father> */}

      {/* <OptionalRender></OptionalRender> */}
      
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
