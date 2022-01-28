export interface TwoBar {
  name: string,
  data: Array<Array<string | number>>,
  axisIndex: string,
}
export interface target {
  [key: string]: string
}

export interface GantterData {
  name: string,
  total?: number,
  data: Array<GantterItem>
}

export interface GantterItem {
  name: string,
  level?: number,
  value: Array<string>
}

export interface Pie3D {
  name: string,
  value: number,
  startRatio: number,
  endRatio: number,
}