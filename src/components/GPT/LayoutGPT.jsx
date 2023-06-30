import React from 'react'
import Display from './Display'
import GPT from './GPT'

export default function LayoutGPT(props) {

  return (
    <div>
      <Display text={props.text} setText={props.setText} />
    </div>
  )
}
