import React from 'react';
import './styles.css';

let datetime = ()=>
{
    let showdate = new Date();
    let displaytodaysdate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();


  return (
    <div className='container-data'>
        <input type="text" value={displaytodaysdate} readOnly="true" />
    </div>
    );
}

export default datetime;