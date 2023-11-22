import React from "react";

const ProductSelling = () => {
  return (
    <table style={{ margin: "30px 0 30px 0", width: "100%" }}>
      <tbody>
        <tr style={{ textAlign: "left" }}>
          <td>
            <h5 className="table-text" style={{ width: "400px" }}>
              Laptop MSI Gaming GF65 Thin 10UE i5 10500H/16GB/512GB/6GB RTX3060
              Max-Q/144Hz/Balo/Win10 (286VN)
            </h5>
            <span className="text-muted" style={{ textAlign: "left" }}>
              2023-04-02 20:08:29
            </span>
          </td>
          <td style={{ width: "120px" }}>
            <h5 className="table-text">29,490,000đ</h5>
            <span className="text-muted">Price</span>
          </td>
          <td style={{ width: "100px" }}>
            <h5 className="table-text">2</h5>
            <span className="text-muted">Quantity</span>
          </td>
          <td style={{ width: "100px" }}>
            <h5 className="table-text">58,980,000đ</h5>
            <span className="text-muted">Amount</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductSelling;
