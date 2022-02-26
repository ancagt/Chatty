import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className='appBody'>
        <div className='Sidebar'><Sidebar /></div>
        <div className='Chat'> <Chat /></div>

      </div>
    </div>
  );
}

export default App;
