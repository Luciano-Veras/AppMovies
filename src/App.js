import './App.css';
import 'bulma/css/bulma.css'
import { Component } from 'react';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';


// function App() {

//   return (
//     <div className="App">
//       <Title>Search Movie</Title>
//       <div className='SearchForm-wrapper'>
//         <SearchForm />
//       </div>
//     </div>
//   );
// }

class App extends Component {


  render() {
     const url = new URL(document.location)
     const Page = url.searchParams.has('id')
       ? <Detail id={url.searchParams.get('id')} />
       : <Home />

    return (
      <div className="App">
        {Page}
      </div>
    );
  }

}

export default App;
