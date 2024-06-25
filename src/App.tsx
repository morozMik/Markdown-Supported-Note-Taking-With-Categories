import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import NewNote from "./Components/NewNote"
import LandPage from "./Components/LandPage"

export type Note = {
  id: string
} & NoteData


export type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[]
}
export type Tag = {
  id: string,
  label: string
}


function App() {
  
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<LandPage/>}/>
        <Route path="/new" element={<NewNote/>}/>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}/>
          <Route path="edit" element={<h1>Edit</h1>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Container>

  )
}

export default App 
