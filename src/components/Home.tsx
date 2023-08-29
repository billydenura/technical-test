import BarisAspek from "./BarisAspek";
import { penialainState } from "./PenilaianAtom";
import { useRecoilValue } from "recoil";
import { CSSProperties } from "../types";

const Home = () => {
  const hasilPenilaian = useRecoilValue(penialainState);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(hasilPenilaian)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div style={stlye.container}>
      <h1 style={stlye.title}>Aplikasi Penilaian Mahasiswa</h1>
      <div className="column-title" style={stlye.columnTitle}>
        <p style={stlye.column}>Aspek Penilaian 1</p>
        <p style={stlye.column}>Aspek Penilaian 2</p>
        <p style={stlye.column}>Aspek Penilaian 3</p>
        <p style={stlye.column}>Aspek Penilaian 4</p>
      </div>
      <div>
        <BarisAspek />
      </div>
      <button onClick={exportData} style={stlye.button}>
        Simpan
      </button>
    </div>
  );
};

const stlye: CSSProperties = {
  columnTitle: {
    display: "flex",
    marginLeft: "160px",
  },
  column: {
    width: "150px",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
  container: {
    width: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "100px",
    height: "50px",
  },
};

export default Home;
