import Btn from "../../Components/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../../Constants/path";
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
