import React from 'react';
import Header from './Header';
import Pagination from './Pagination';
import Table from './Table';

import * as style from './index.module.scss';

function App() {
  return (
      <div className={style.wrapper}>
        <Header/>
        <Table/>
        <Pagination/>
      </div>
  );
}

export default App;
