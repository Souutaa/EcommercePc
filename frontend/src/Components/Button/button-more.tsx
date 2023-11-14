import Btn from "../../Components/Button";
import { PATHS } from "../../Contants/path";
import { Link } from "react-router-dom";
function ButtonMore() {
  return (
    <>
      <Link to={PATHS.MORE}>
        <Btn
          maintine="a"
          customStyle={{ margin: "16px 0", color: "black" }}
          color="#E5E7EB"
        >
          Xem thêm
        </Btn>
      </Link>
    </>
  );
}

export default ButtonMore;
