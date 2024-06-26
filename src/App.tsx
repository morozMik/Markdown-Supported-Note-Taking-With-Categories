import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import NewNote from "./Components/NewNote"
import LandPage from "./Components/LandPage"
import useLocalStorage from "./useLocalStorage"
import { useMemo } from "react"
import { v4 as uuidv4 } from 'uuid';
export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData
export type RawNoteData = {
  title: string,
  markdown: string,
  tagId: string[]
}

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
  const [notes, setNotes] = useLocalStorage<RawNote[]>("notes", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("tag", [])

  const notesWithTags = useMemo(() => {
  return notes.map(note => {
    return {...note, tags: tags.filter(tag => note.id.includes(tag.id))}
  })
}, [notes,tags])

  const onCreateNote = ({tags, ...data}: NoteData) => {
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidv4(), tagIds: tags.map(tag => tag.id)
      }]
    })
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<LandPage/>}/>
        <Route path="/new" element={<NewNote onSubmit={onCreateNote}/>}/>
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
