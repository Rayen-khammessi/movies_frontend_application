import React, { Component } from 'react';
import Tableheader from './Tableheader';
import Tablebody from './Tablebody';

const Table = (props) => {
    const {columns , sortcolumn, onsort,data}=props;
    return (
        <table className="table">
        <Tableheader 
        columns={columns}
        sortcolumn={sortcolumn}
        onsort={onsort}
        />
        <Tablebody 
        columns={columns}
        data={data}
        />
    </table>
    );
}
export default Table;