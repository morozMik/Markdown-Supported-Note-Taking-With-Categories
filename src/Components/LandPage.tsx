import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NoteList from './NoteList'
const LandPage = () => {
  return (
    <>
      <h1>Heloo World</h1>
      <Link to="/new">
        <Button type="button">Create new note</Button>
      </Link>
      <NoteList/>
    </>
  )
}

export default LandPage