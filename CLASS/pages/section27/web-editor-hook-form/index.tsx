import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function wevEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어줌
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange + 에러검증
    void trigger("contents");
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd");
    Modal.success({ content: "등록 성공" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
