function Table({ data }) {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>MobileNo.</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((ele, index) => (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.password}</td>
                      <td>{ele.mobileNo}</td>
                      <td>{ele.address}</td>
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
