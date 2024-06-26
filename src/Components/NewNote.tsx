import React from 'react'
import NoteForm from './NoteForm'
import { NoteData, Tag } from '../App'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void,
  onAddTag: (newTag:Tag) => void,
  availableTags: Tag[]
}
const NewNote = ({onSubmit, onAddTag, availableTags}:NewNoteProps) => {
  return (
    <>
      <div className='mb-4'><h1>New Note</h1></div>
      <NoteForm onAddTag={onAddTag} onSubmit={onSubmit} availableTags={availableTags}/>
    </>
  )
}

export default NewNote