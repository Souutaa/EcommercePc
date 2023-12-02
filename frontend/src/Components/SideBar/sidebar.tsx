import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../FormChange/FormChange";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../Constants/path";

function SideBar() {
  const [sideBarCategory, setSideBarCategory] = useState<Category[]>([]);
  const navigate = useNavigate();
  // const [url, setUrl] = useState(
  //   t.brandName
  //     ? PATHS.MORE + `/${e.name}/${t.brandName}`
  //     : PATHS.MORE + `/${e.name}`
  // );
  const LinkToProductMore = (e: string) => {
    navigate(PATHS.MORE + `/${e}`);
  };

  useEffect(() => {
    console.log("get brands data from api");
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/category/allOfCategoryBrand"
          // "http://localhost:8080/category/all/simple?active=true"
        );
        console.log("sideBar=> ", res);
        setSideBarCategory(res.data);
      } catch (error) {
        console.log("error=> ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {sideBarCategory.map((e) => {
        return (
          <div
            className="category-item"
            onClick={() => {
              LinkToProductMore(e.name);
            }}
          >
            <img className="category-img" src="/img/laptop.png"></img>
            <span className="category-text">{e.name}</span>
          </div>
        );
      })}
    </>
  );
}

export default SideBar;
