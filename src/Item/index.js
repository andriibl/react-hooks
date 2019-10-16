import React, { useState, useEffect } from 'react';

export default function Item(props) {
  console.log('Props', props)
  const { id, title, isCompleted} = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td><input type='checkbox'/></td>
    </tr>
  )
}