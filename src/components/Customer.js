import React from 'react'; 
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Customer(props){
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"></img></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    );
  }

// function CustomerProfile(props){
//     return (
//         <div>
//             <img src={props.image} alt="profile"/>
//             <h2>{props.name}({props.id})</h2>
//         </div>
//     )
// }

// function CustomerInfo(props){
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>{props.birthday}</p>
//             <p>{props.gender}</p>
//             <p>{props.job}</p>
//         </div>
//     )
// }

export default Customer;