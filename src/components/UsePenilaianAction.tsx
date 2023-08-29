import { useRecoilState } from "recoil";
import { penialainState } from "./PenilaianAtom";
import { Penilaian } from "../types";

export interface usePenilaianActionType {
  gantiNilai: (nilaiId: number, aspekKe: number, aspekNilai: number) => void;
  // gantiNilai2: (nilaiId: number, aspekNilai: number) => void;
  // gantiNilai3: (nilaiId: number, aspekNilai: number) => void;
  // gantiNilai4: (nilaiId: number, aspekNilai: number) => void;
}

export const usePenilaianAction = (): usePenilaianActionType => {
  const [hasilPenilaian, setHasilPenilian] = useRecoilState(penialainState);
  const gantiNilai = (
    nilaiId: number,
    aspekKe: number,
    aspekNilai: number
  ): void => {
    const nilaiSementara: Penilaian[] = hasilPenilaian.map((nilai) =>
      nilai.id == nilaiId && aspekKe == 1
        ? { ...nilai, aspek1: aspekNilai }
        : nilai.id == nilaiId && aspekKe == 2
        ? { ...nilai, aspek2: aspekNilai }
        : nilai.id == nilaiId && aspekKe == 3
        ? { ...nilai, aspek3: aspekNilai }
        : nilai.id == nilaiId && aspekKe == 4
        ? { ...nilai, aspek4: aspekNilai }
        : nilai
    );
    setHasilPenilian(nilaiSementara);
    console.log(aspekKe);
  };
  // const gantiNilai2 = (nilaiId: number, aspekNilai: number): void => {
  //   const nilaiSementara: Penilaian[] = hasilPenilaian.map((nilai) =>
  //     nilai.id == nilaiId ? { ...nilai, aspek2: aspekNilai } : nilai
  //   );
  //   setHasilPenilian(nilaiSementara);
  // };
  // const gantiNilai3 = (nilaiId: number, aspekNilai: number): void => {
  //   const nilaiSementara: Penilaian[] = hasilPenilaian.map((nilai) =>
  //     nilai.id == nilaiId ? { ...nilai, aspek3: aspekNilai } : nilai
  //   );
  //   setHasilPenilian(nilaiSementara);
  // };
  // const gantiNilai4 = (nilaiId: number, aspekNilai: number): void => {
  //   const nilaiSementara: Penilaian[] = hasilPenilaian.map((nilai) =>
  //     nilai.id == nilaiId ? { ...nilai, aspek3: aspekNilai } : nilai
  //   );
  //   setHasilPenilian(nilaiSementara);
  // };

  return {
    gantiNilai,
    // gantiNilai2,
    // gantiNilai3,
    // gantiNilai4,
  };
};
