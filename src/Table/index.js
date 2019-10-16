import React, { useState, useEffect } from 'react';
import Item from '../Item';
import * as style from './index.module.scss';
import { UseFetch } from '../utils/UseFetch';
import { start, limitSize } from '../constants';

export default function Table() {
  const [data, loading] = UseFetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limitSize}`);

  console.log(data, loading);

    return (
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return <Item id={item.id} title={item.title}  isCompleted={item.completed} />
            })
          }
        </tbody>
      </table>
    )
}