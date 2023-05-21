import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectKraj({ setFilter }) {
  const handleChange = (event: SelectChangeEvent) => {
    setFilter((prev) => {
      return { ...prev, name: event.target.value };
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={""}>Brak</MenuItem>
          <MenuItem value={"id"}>Id</MenuItem>
          <MenuItem value={"kraj"}>Kraj</MenuItem>
          <MenuItem value={"kod_kraju"}>Kod Kraju</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
