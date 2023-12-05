import { useRecoilState } from "recoil";
import BoardWrite from "../../../src/components/units/recoil-state/BoardWriteContainer";
// import { useState } from "react";
import { isEditState } from "../../../src/commons/stores";
import { useEffect } from "react";

export default function GlobalStateWithREcoilPage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  console.log(isEdit);
  useEffect(() => {
    setIsEdit(true);
  });
  return <BoardWrite />;
}
