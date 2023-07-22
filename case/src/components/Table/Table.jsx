import React from "react";

const Table = () => {
  return (
    <div className="list-tabel">
      <div class="d-flex">
        <div class="p-2 flex-fill ps-4">
          <caption className="text-dark fs-4">Data</caption>
        </div>
        <div class="p-2 flex-fill pe-4">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              //   value={search}
              //   onChange={handleSearch}
            />
          </form>
        </div>
      </div>

      <div className="table-responsive shadow-lg">
        <table className="table table-striped mt-3" id="table">
          <thead className="text-white">
            <tr style={{ fontSize: "16px" }}>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Stock</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody id="table-body">
            <tr>
              <td></td>
              <td>caca</td>
              <td>caca</td>
              <td>caca</td>
              <td>caca</td>
              <td
                className="text-align-justify"
                style={{ wordWrap: "break-word" }}
              >
                cas
              </td>
              <td>caca</td>
              <td>caca</td>
              <td>caca</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
