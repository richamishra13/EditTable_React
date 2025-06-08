// import React from 'react';

// const TableRow = ({ row, isEditing, formData, onEditClick, onInputChange, onSave }) => {
//   return (
//     <tr>
//       <td>
//         {isEditing ? (
//           <input
//             value={formData.name}
//             onChange={(e) => onInputChange(e, 'name')}
//           />
//         ) : row.name}
//       </td>
//       <td>
//         {isEditing ? (
//           <input
//             value={formData.email}
//             onChange={(e) => onInputChange(e, 'email')}
//           />
//         ) : row.email}
//       </td>
//       <td>
//         {isEditing ? (
//           <input
//             value={formData.phone}
//             onChange={(e) => onInputChange(e, 'phone')}
//           />
//         ) : row.phone}
//       </td>
//       <td>
//         {isEditing ? (
//           <button onClick={onSave}>Save</button>
//         ) : (
//           <button onClick={() => onEditClick(row)}>Edit</button>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default TableRow;

const TableRow = ({
  row,
  formData,
  isEditing,
  onEditClick,
  onInputChange,
  onSave,
}) => {
  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={formData.name}
            onChange={(e) => onInputChange(e, "name")}
          />
        ) : (
          row.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={formData.email}
            onChange={(e) => onInputChange(e, "email")}
          />
        ) : (
          row.email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={formData.phone}
            onChange={(e) => onInputChange(e, "phone")}
          />
        ) : (
          row.phone
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={onSave}>Save</button>
        ) : (
          <button onClick={() => onEditClick(row)}>Edit</button>
        )}
      </td>
    </tr>
  );
};
export default TableRow;
