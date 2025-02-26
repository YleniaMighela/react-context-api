
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importo i componenti


// importo le pages
import PostPage from "./components/PostPage.jsx";


// importo il LAYOUT
import DefaultLayout from "./layout/DefaultLayout.jsx";


function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<PostPage />} />
            {/* <Route path="/post" element={<PostsLista />} />
            <Route path="/aggiungipost/:id" element={<PostsDetailsPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
