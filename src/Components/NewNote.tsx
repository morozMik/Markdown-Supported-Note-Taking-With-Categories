import React from 'react'
import NoteForm from './NoteForm'
import { NoteData } from '../App'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
}
const NewNote = ({onSubmit}:NewNoteProps) => {
  return (
    <>
      <div className='mb-4'><h1>New Note</h1></div>
      <NoteForm onSubmit={onSubmit}/>
    </>
  )
}

export default NewNote