import formatPrice from "../../Helper/formatPrice";
import { TopEmployee } from "../../PagesAdmin/Dashboard";

const EmployeeOfTheMonth = (props: { employee: TopEmployee }) => {
  const { employee } = props;
  return (
    <table style={{ margin: "30px 0 30px 0", width: "100%" }}>
      <tbody>
        <tr style={{ textAlign: "left" }}>
          <td>
            <h5 className="table-text" style={{ width: "400px" }}>
              {employee.employeeName}
            </h5>
            <span className="text-muted">Employee name</span>
          </td>
          <td style={{ width: "240px" }}>
            <h5 className="table-text">
              {formatPrice(employee.subTotalOrder)}
            </h5>
            <span className="text-muted">Total revenue made</span>
          </td>
          <td style={{ width: "100px" }}>
            <h5 className="table-text">{employee.totalConfirmedOrder}</h5>
            <span className="text-muted">Total confirmed order</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeOfTheMonth;
