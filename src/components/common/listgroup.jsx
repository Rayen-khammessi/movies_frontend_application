import React, { Component } from 'react';


const Listgroup = props => {
    const {Allgenre,genres,ongenre,textproperty,valueproperty,selectedgenre}=props;
        return (
            <ul className="list-group">
                {genres.map(genre=> 
                    <li key={genre[valueproperty]} style={{cursor:'pointer'}} onClick={()=> ongenre(genre[valueproperty])} className={genre[valueproperty]===selectedgenre ? "list-group-item active" :"list-group-item" }>{genre[valueproperty]}</li>
                )}
            </ul>
        )
    }

Listgroup.defaultProps={
    textproperty:"_id",
    valueproperty:"name"
}

 
export default Listgroup;