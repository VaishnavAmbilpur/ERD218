import React from 'react'

function accordian(props){
  return (
    <><div class="faq1" key={props.id}>
    <div class="plus">&#43;</div>
    <div class="chamber">{props.question}</div>
  </div>
  <div class="ch">{props.answer}</div>
  </>
  )
}
export default accordian
