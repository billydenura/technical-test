export interface Penilaian {
    id:number
    aspek1:number
    aspek2:number
    aspek3:number
    aspek4:number
}

export interface CSSProperties {
    [key:string]: React.CSSProperties
}

export interface usePenilaianActionType {
    gantiNilai1: (nilaiId: number, aspekNilai: number) => void
}