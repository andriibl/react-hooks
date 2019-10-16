import React from 'react';
import * as style from './index.module.scss';

export default function Pagination() {
    return (
        <div className={style.pagination}>
            <ul className={style.listItems}>
                <li className={style.item}>
                    <button className={style.btn}>1</button>
                </li>
                <li className={style.item}>
                    <button className={style.btn}>2</button>
                </li>
            </ul>
        </div>
    )
}