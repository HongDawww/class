import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function wevEditorPage(): JSX.Element {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const { register, setValue, trigger, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어줌
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange + 에러검증
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    const { Modal } = await import("antd");
    Modal.success({ content: "등록 성공" });

    const boardId = result.data.createBoard._id;

    void router.push(`/section27/web-editor-xss-detail/${boardId}`);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
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
