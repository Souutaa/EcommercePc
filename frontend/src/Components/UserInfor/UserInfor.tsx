import { rem } from "@mantine/core";
import { IconArrowBarRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

function UserInfor() {
  const authContext = useAuthContext();
  return (
    <>
      <div className="user-info">
        <div className="user-name">{authContext.auth.sub}</div>
        <span className="user-email">{authContext.auth.mail}</span>
      </div>
    </>
  );
}

export default UserInfor;
