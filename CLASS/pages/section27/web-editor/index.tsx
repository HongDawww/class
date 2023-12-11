import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

// import ReactQuill from "react-quill";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function wevEditorPage(): JSX.Element {
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  //   useEffect(() => {
  //     async function aaa(): Promise<void> {
  //       const { Modal } = await import("antd"); // code-splitting
  //       Modal.success({ content: "등록 성공" });
  //     }
  //     aaa();
  //   }, []);

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting
    Modal.success({ content: "등록 성공" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자 : <input type="text" />
      <br />
      비밀번호 : <input type="password" />
      <br />
      제목 : <input type="text" />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
