import { ChangeEvent, MouseEvent } from "react";

// 객체 타입 생성
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangecContents: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: any;
}
