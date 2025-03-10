import axios from 'axios';
import { useState } from 'react';

export default function TableList({ handleOpen, tableData, setTableData, searchTerm }) {
  const [error, setError] = useState(null);

  // const clients = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'John.Doe@gmail.com',
  //     job: 'Developer',
  //     rate: '100',
  //     isactive: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'John1 Doe',
  //     email: 'John1.Doe@gmail.com',
  //     job: 'Developer1',
  //     rate: '101',
  //     isactive: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'John2 Doe',
  //     email: 'John2.Doe@gmail.com',
  //     job: 'Developer2',
  //     rate: '102',
  //     isactive: false,
  //   },
  // ];

  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this client?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData((prevData) => prevData.filter((client) => client.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>job</th>
              <th>rate</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client) => (
              <tr key={client.id} className="hover:bg-base-300">
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}
                  >
                    {client.isactive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleOpen('edit', client)} className="btn btn-secondary rounded-md">
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent rounded-md" onClick={() => handleDelete(client.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
