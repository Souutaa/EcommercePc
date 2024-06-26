import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";
import { Category } from "../FormChange/FormChange";
import API_ADDRESS from "../../Api_Address";
function SideBar() {
  const [sideBarCategory, setSideBarCategory] = useState<Category[]>([]);
  const navigate = useNavigate();
  const LinkToProductMore = (e: string) => {
    navigate(PATHS.HOME + `/${e}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://${API_ADDRESS}:8080/category/allOfCategoryBrand`
        );
        setSideBarCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="sidebar">
      {sideBarCategory.map((e) => {
        return (
          <div
            className="sidebar__item"
            onClick={() => {
              LinkToProductMore(e.name);
            }}
          >
            <span className="sidebar__link">
              <img alt="" className="category-img" src="/img/laptop.png"></img>
              <span className="category-text">{e.name}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
