export interface FunctionCard {
  id: number;
  equation: string;
  nextFunction: number | null;
}

export interface Point {
  x: number;
  y: number;
}

export interface Connection {
  from: string;
  to: string;
}

export interface Position {
  x: number;
  y: number;
}