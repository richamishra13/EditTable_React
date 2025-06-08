import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = res.data.slice(0, 2).map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }));
        setData(users);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setFormData(row);
  };
  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleSave = () => {
    const updated = data.map((item) =>
      item.id === editRowId ? { ...item, ...formData } : item
    );
    setData(updated);
    setEditRowId(null);
    setFormData({});
  };

    return (
      <>
        <div style={{ padding: 20 }}>
          <h1>Table Editing</h1>
          <Table
            data={data}
            editRowId={editRowId}
            formData={formData}
            onSave={handleSave}
            onEditClick={handleEditClick}
            onInputChange={handleInputChange}
          />
        </div>
      </>
    );
  };
export default App;

//.........................................................................................
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Table from './components/Table';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [editRowId, setEditRowId] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//         // Take only first 2 users and map to required fields
//         const users = res.data.slice(0, 2).map(user => ({
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           phone: user.phone,
//         }));
//         setData(users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEditClick = (row) => {
//     setEditRowId(row.id);
//     setFormData(row);
//   };

//   const handleInputChange = (e, field) => {
//     setFormData({ ...formData, [field]: e.target.value });
//   };

//   const handleSave = () => {
//     const updated = data.map(item =>
//       item.id === editRowId ? { ...item, ...formData } : item
//     );
//     setData(updated);
//     setEditRowId(null);
//     setFormData({});
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Editable Table App (Fetch first 2 users)</h2>
//       <Table
//         data={data}
//         editRowId={editRowId}
//         formData={formData}
//         onEditClick={handleEditClick}
//         onInputChange={handleInputChange}
//         onSave={handleSave}
//       />
//     </div>
//   );
// };

// export default App;
