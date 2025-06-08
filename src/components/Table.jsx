import TableRow from "./TableRow";

const Table = ({data, editRowId, formData, onEditClick, onInputChange, onSave}) =>{
    return(
        <table  border="1"  cellPadding="10"cellSpacing="0" width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row)=> (
                    <TableRow
                    key={row.id}
                    row={row}
                    isEditing={editRowId === row.id}
                    formData={formData}
                    onEditClick={onEditClick}
                    onInputChange={onInputChange}
                    onSave={onSave}/>

                ))}
            </tbody>
        </table>
    )

}
export default Table;


{/* // // components/Table.jsx
// import React from 'react';
// import TableRow from './TableRow';

// const Table = ({ data, editRowId, formData, onEditClick, onInputChange, onSave }) => {
//   return (
//     <table border="1" cellPadding="10" cellSpacing="0" width="100%">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <TableRow
//             key={row.id}
//             row={row}
//             isEditing={editRowId === row.id}
//             formData={formData}
//             onEditClick={onEditClick}
//             onInputChange={onInputChange}
//             onSave={onSave}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table; */}
