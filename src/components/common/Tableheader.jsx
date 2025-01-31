import React, { Component } from 'react';


class Tableheader extends Component {
    raisesort=path=>{
        const upsortcolumn={...this.props.sortcolumn};
        if (upsortcolumn.path===path){
            upsortcolumn.order=(upsortcolumn.order==='asc'?'desc':'asc')
            }
        upsortcolumn.path=path;
        
        this.props.onsort(upsortcolumn)
    }

    rendersorticon=column=>{
        console.log(column)
        console.log(this.props.sortcolumn)
        if (column.path!==this.props.sortcolumn.path) return null;
        if (this.props.sortcolumn.order==='asc')return <i className='fa fa-sort-asc' />;
        return  <i className='fa fa-sort-desc' />;
    }




    render() { 
        return (
            <thead>
            <tr>
                {this.props.columns.map(column=><th key={column.path || column.key} style={{cursor:'pointer'}} onClick={()=>this.raisesort(column.path)}>{column.label} {this.rendersorticon(column)}</th>)}
            </tr>
        </thead>
        );
    }
}

export default Tableheader;