import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Stats from '../Stats/Stats';
import Partners from '../Partners/Partners';
import Features from '../Features/Features';
function App() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Stats />
      <Partners />
      <Features />
    </div>
  );
}

export default App;
