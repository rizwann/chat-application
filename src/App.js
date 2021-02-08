import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css';

function App() {

       if(!localStorage.getItem('username')) return <LoginForm />;


  return (
    <ChatEngine
    height="100vh"
    projectID="3c129853-ef86-4644-90a1-449db73e2e9d"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
