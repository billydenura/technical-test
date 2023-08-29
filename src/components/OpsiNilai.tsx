import { CSSProperties } from "../types";
import { useState } from "react";
import { usePenilaianAction } from "./UsePenilaianAction";

export interface opsiNilaiProps {
  nilaiId: number;
  aspekKe: number;
}

const OpsiNilai = ({ nilaiId, aspekKe }: opsiNilaiProps) => {
  const [value, setValue] = useState("0");
  const { gantiNilai } = usePenilaianAction();

  return (
    <select
      onChange={(event) => {
        setValue(event.target.value);
        gantiNilai(nilaiId, aspekKe, parseInt(event.target.value));
        // console.log(event.target.value);
        // console.log(nilaiId);
      }}
      defaultValue={value}
      style={stlye.column}
    >
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  );
};

const stlye: CSSProperties = {
  columnTitle: {
    display: "flex",
  },
  column: {
    width: "130px",
    height: "40px",
    margin: "0 10px",
  },
};

export default OpsiNilai;
