import { Penilaian } from "../types";
import OpsiNilai from "./OpsiNilai";
import { penialainState } from "./PenilaianAtom";
import { useRecoilValue } from "recoil";
// import { usePenilaianAction } from "./UsePenilaianAction";
import { CSSProperties } from "../types";

const BarisAspek = () => {
  const hasilPenilaian = useRecoilValue(penialainState);
  // const { gantiNilai1, gantiNilai2, gantiNilai3, gantiNilai4 } =
  //   usePenilaianAction();
  return (
    <div>
      {hasilPenilaian.map((nilai: Penilaian) => {
        return (
          <div style={stlye.wrapper} key={nilai.id}>
            <p style={stlye.column}>{"mahsiswa" + nilai.id}</p>
            <OpsiNilai nilaiId={nilai.id} aspekKe={1} />
            <OpsiNilai nilaiId={nilai.id} aspekKe={2} />
            <OpsiNilai nilaiId={nilai.id} aspekKe={3} />
            <OpsiNilai nilaiId={nilai.id} aspekKe={4} />
          </div>
        );
      })}
    </div>
  );
};

const stlye: CSSProperties = {
  wrapper: {
    display: "flex",
    border: "1px black solid",
    margin: "5px",
    height: "50px",
    alignItems: "center",
  },
  column: {
    width: "150px",
    marginLeft: "5px",
  },
};

export default BarisAspek;
