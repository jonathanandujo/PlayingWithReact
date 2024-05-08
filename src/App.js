import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';
import { ClickHandler } from './components/ClickHandler';
import { Form } from './components/Form';
import { Greet } from './components/Greet'
import { Inline } from './components/Inline';
import Login from './components/Login';
import { Message } from './components/Message';
import { NameList } from './components/NameList';
import { ParentComponent } from './components/ParentComponent';
import { Stylesheet } from './components/Stylesheets';
import { UserGreeting } from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <Form></Form>
      {/* <Greet name='Yey' heroName='Batman'>
        <p> hi </p>
      </Greet>
      <Greet name='aet' heroName='supman'> <button>Click me</button> </Greet>
      <Greet name='yiie' heroName='Batiman'/>
      <Message/>
      <Login />
      <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>error here</h1> */}
      {/* <h1 className={styles.success}>success</h1> */}
    </div>
  );
}

export default App;
