import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Route, Routes, } from "react-router-dom";


// importo le pages
import PostPage from "./pages/PostPage.jsx";

// importo il global context
import GlobalContext from "./context/GlobalContext.jsx";


// importo il LAYOUT
import DefaultLayout from "./layout/DefaultLayout.jsx";





function App() {


  const [posts, setPost] = useState([]);


  //funzione di gestione chiamate API
  function fetchPosts() {
    axios.get("http://localhost:3000/posts/")
      .then((res) => {
        setPost(res.data);
      })
  }

  useEffect(fetchPosts, []);




  return (

    <>
      <GlobalContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<PostPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>

  )
}

export default App


