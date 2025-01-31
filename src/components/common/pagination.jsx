import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemscount,pagesize,currentpage,onpagechange}=props;
    const pagecount=Math.ceil(itemscount/pagesize);
    const pages= _.range(1,pagecount+1);
    if (pagecount===1) {
        return null;
    }
    else{
        return (
            <nav>
                <ul className="pagination">
                {pages.map( page =>(
                        <li key={page} className={page === currentpage ? 'page-item active' : 'page-item'}>
                            <a onClick={()=> onpagechange(page)} className="page-link" >{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>                            
        );
    }
}

 
export default Pagination;
