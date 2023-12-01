
import ButtonChangeCategory from "../Button/button-change-category";
import SeaparatorTable from "../Seaparator/SeaparatorTable";

const CategoryAdminStatus = (props: { id: string; name: string }) => {
  return (
    <tbody>
      <tr className="text-hover">
        <td className="sorting">{props.id}</td>
        <td className="sorting">{props.name}</td>
        <td className="table-action sorting">
          <ButtonChangeCategory />
          {/* <ButtonDelete /> */}
        </td>
      </tr>
      <SeaparatorTable />
    </tbody>
  );
};

export default CategoryAdminStatus;
