import { useRecoilState } from "recoil";
import { penialainState } from "./PenilaianAtom";
import { Penilaian } from "../types";

export interface usePenilaianActionType {
  gantiNilai: (nilaiId: number, aspekKe: number, aspekNilai: number) => void;
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
    console.log(nilaiSementara);
    console.log(hasilPenilaian);
  };

  return {
    gantiNilai,
  };
};
