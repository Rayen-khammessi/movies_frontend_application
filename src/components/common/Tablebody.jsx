import React, { Component } from 'react';
import _ from 'lodash';

class Tablebody extends Component {
    rendercell=(item,column)=>{
        if (column.content) return column.content(item);
        return _.get(item,column.path);
    }
    render() { 
        const {columns,data}=this.props;
        return (
            <tbody>
                {data.map(item =>
                <tr key={item._id}>
                    {columns.map(column=><td key={item._id+(column.path || column.key)}>{this.rendercell(item,column)}</td>)}
                </tr>)}
            </tbody>  
        );
    }
}
 
export default Tablebody;