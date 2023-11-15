import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import Btn from "../Button";
import { PATHS } from "../../Constants/path";

function InputSearch() {
  return (
    <div className="search">
      <Autocomplete
        className="input-size"
        size="sm"
        leftSection={<IconSearch className="icon-search" />}
        radius="md"
        placeholder="Search"
        data={["MSI", "Macbook", "Asus", "Acer"]}
      />
      <Link to={PATHS.SEARCH}>
        <Btn maintine="a">Tìm kiếm</Btn>
      </Link>
    </div>
  );
}

export default InputSearch;
