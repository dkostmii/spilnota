import type { FC } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useState } from 'react'

import styles from './CopyInput.module.scss'


interface Props {
  value: string
}


const CopyInput: FC<Props> = ({ value }) => {
  const [copied, setCopied] = useState(false)

  const clickHandler = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
  }

  return (
    <div className={styles.container}>
      <InputGroup onClick={clickHandler}>
        <Form.Control
          className={styles.input}
          type="text"
          value={value}
          readOnly />
        <Button className={styles.button}>
          {copied ? (
            <i className="bi bi-clipboard-check"></i>
          ) : (
            <i className="bi bi-clipboard-fill"></i>
          )}
        </Button>
      </InputGroup>
    </div>
  )
}

export default CopyInput
