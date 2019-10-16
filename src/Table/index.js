import React, { useState, useEffect } from 'react';
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

        </tbody>
      </table>
    )
}