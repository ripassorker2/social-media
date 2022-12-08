import "./App.css";
import Bannar from "./components/Bannar/Bannar";
import Navbar from "./components/Navbar/Navbar";
import PostCard from "./components/PostSection/PostCard/PostCard";
import PostManu from "./components/PostSection/PostManu/PostManu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bannar />
      <PostManu />
    </div>
  );
}

export default App;
