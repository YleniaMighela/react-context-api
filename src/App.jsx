import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importo i componenti


// importo le pages
import PostPage from "./components/PostPage.jsx";


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
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
