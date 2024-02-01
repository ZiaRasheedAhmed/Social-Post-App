import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import UpperLeftBar from './Components/LeftBars/UpperLeftBar';
import LowerLeftBar from './Components/LeftBars/LowerLeftBar';
import Bar from './Components/RightBars/Bar';
import TopBar from './Components/RightBars/TopBar';
import RightBar from './Components/RightBars/RightBar';
import PostComponent from './Components/MainPosts/PostComponent';
import Post from './Page/Post';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <div className='body'>
        <UpperLeftBar/>
        <PostComponent/>
        <RightBar/>
      </div> */}
      <Post/>
    </div>
  );
}

export default App;
