import Table from "./Table";
import { useState } from "react";
function Home() {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const [data, setData] = useState([]);

  function handleChange(e) {
    setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }));
  }
  function handlesubmit(e) {
    e.preventDefault();
    setData((prev) => [...prev, formData]);
    setFormData({username: "", email: "" })
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handlesubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>

            <div>
              <Table data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
