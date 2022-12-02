import React from "react";
import "../App.css";

const Users = ({ users }) => {
  const { data } = users;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
