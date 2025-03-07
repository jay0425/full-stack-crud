export default function TableList({ onOpen }) {
  const clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'John.Doe@gmail.com',
      job: 'Developer',
      rate: '100',
      isactive: true,
    },
    {
      id: 2,
      name: 'John1 Doe',
      email: 'John1.Doe@gmail.com',
      job: 'Developer1',
      rate: '101',
      isactive: true,
    },
    {
      id: 3,
      name: 'John2 Doe',
      email: 'John2.Doe@gmail.com',
      job: 'Developer2',
      rate: '102',
      isactive: false,
    },
  ];

  return (
    <>
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
            {clients.map((client) => (
              <tr className="hover:bg-base-300">
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
                  <button onClick={onOpen} className="btn btn-secondary">
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
