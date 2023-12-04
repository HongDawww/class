import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "철수",
      title: "안녕",
      contents: "방가",
    });
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());

    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록</button>
      <button onClick={onClickFetch}>조회</button>
    </>
  );
}
