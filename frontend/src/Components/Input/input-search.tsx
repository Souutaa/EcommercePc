import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { PATHS } from "../../Constants/path";

function InputSearch() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <div className="search">
      <Autocomplete
        className="input-size"
        size="xl"
        leftSection={<IconSearch className="icon-search" />}
        radius="md"
        placeholder="Search"
        value={search}
        style={{ fontSize: "1.6rem" }}
        onChange={setSearch}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            navigate(PATHS.SEARCH + `/${search}`);
          }
        }}
        data={["MSI", "Macbook", "Asus", "Acer"]}
      />
    </div>
  );
}

export default InputSearch;
