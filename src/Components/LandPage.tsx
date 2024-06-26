import React from 'react'
import NoteList from './NoteList'

type LandPageProps = {
  availableTags: Tag[]
}
const LandPage = ({availableTags}:LandPageProps) => {
  return (
    <>
      <NoteList availableTags={availableTags}/>
    </>
  )
}

export default LandPage