// import { useState } from "react";
// import Table from "./About"

function Table({ data }) {
  // const [formData, setFormData] = useState({ username: "", email: "" });
  // const [data, setData] = useState([]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((ele, index) => (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
