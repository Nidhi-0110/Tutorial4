import Table from "./Table";
import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobileNo: "",
    address: "",
  });

  const [data, setData] = useState([]);

  function handleChange(e) {
    setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setData((preval) => [...preval, formData]);
    setFormData({
      username: "",
      email: "",
      password: "",
      mobileNo: "",
      address: "",
    });
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <label for="Username" class="form-label">
                Username
              </label>
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
              <label for="Email-address" class="form-label">
                Email-Address
              </label>
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
              <label for="Password" class="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control mb-3"
                placeholder="Enter your Password"
                aria-describedby="passwordHelpBlock"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label for="Phone No." class="form-label">
                Phone No.
              </label>
              <div className="input-group mb-3">
                <input
                  type="Phone No"
                  className="form-control"
                  placeholder="Enter your Phone No."
                  aria-label="Phone No."
                  aria-describedby="basic-addon1"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                />
              </div>
              <label for="inputAddress2" class="form-label">
                Address
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  name="address"
                  value={formData.address}
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
