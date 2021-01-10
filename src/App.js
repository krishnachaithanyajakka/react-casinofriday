import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Environment: {process.env.REACT_APP_API_ENV}</p>
        <p>Site URL: {process.env.REACT_APP_siteUrl}</p>
        <p>API URL: {process.env.REACT_APP_apiUrl}</p>
        <p>Game URL: {process.env.REACT_APP_gamePath}</p>
        <p>Vimeo URL: {process.env.REACT_APP_vimeoUrl}</p>
        <p>Website Name: {process.env.REACT_APP_websiteName}</p>
        <p>Website Code: {process.env.REACT_APP_websiteCode}</p>
        <p>Default Langauge: {process.env.REACT_APP_defaultLang}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
