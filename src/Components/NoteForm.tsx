import { FormEvent, useRef, useState } from 'react'
import { Row, Col, Form, Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag} from '../App'

type NoteFormProps = {
  omSubmit: (data: NoteData) => void
}

const NoteForm = ({onSubmit}:NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]) 
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: []
    })
  }


    return (
      <Form>
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
                }} isMulti/>
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