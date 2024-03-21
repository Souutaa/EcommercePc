import { IconHome } from "@tabler/icons-react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from ".//Breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = currentLink + `/${crumb}`;
      return (
        <div className={styled.crumb} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <>
      <div className={styled.breadcrumbs}>
        <IconHome /> {crumbs}
      </div>
    </>
  );
}

export default Breadcrumbs;
