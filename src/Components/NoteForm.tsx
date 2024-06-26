import { FormEvent, useRef, useState } from 'react'
import { Row, Col, Form, Stack, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag} from '../App'
import { v4 as uuidv4 } from 'uuid';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void,
  onAddTag: (newTag:Tag) => void,
  availableTags: Tag[]
}

const NoteForm = ({onSubmit, onAddTag, availableTags}:NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]) 
  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags
    })
    navigate('..')
  }


    return (
      <Form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Row>
            <Col>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='Tags'>
                <Form.Label>Tags</Form.Label>
                <CreatableReactSelect value={selectedTags.map(tag => {
                  return {label: tag.label, value: tag.id}
                })} onChange={tags => {
                  setSelectedTags(tags.map(tag => {
                    return {label: tag.label, id: tag.value}
                  }))
                }} onCreateOption={label => {
                  const newTag = {id: uuidv4(), label}
                  onAddTag(newTag)
                  setSelectedTags(prev => [...prev, newTag])
                }}
                options={availableTags.map(tag => {
                  return { label: tag.label, value: tag.id}
                })}
                 isMulti/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group controlId='Tags'>
              <Form.Label>Body</Form.Label>
              <Form.Control ref={markdownRef} required as="textarea" rows={15}/>
            </Form.Group>
            <Stack direction='horizontal' gap={2} className='justify-content-end mt-2'>
              <Button type="submit">Save</Button>
              <Link to="..">
                <Button type="button" variant='outline-secondary'>Cancel</Button>
              </Link>  
            </Stack>
          </Row>
        </Stack>
      </Form>
    )
}

export default NoteForm