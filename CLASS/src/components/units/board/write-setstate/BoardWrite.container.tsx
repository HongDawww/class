// // import { useMutation } from "@apollo/client";
// import { useState } from "react";
// import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
// import BoardWriteUI from "./BoardWrite.presenter";

// export default function BoardWrite(props) {
//   const [isActive, setisActive] = useState(false);
//   const [writer, setWriter] = useState<string>("");
//   const [title, setTitle] = useState<string>("");
//   const [contents, setContents] = useState<string>("");

//   const [나의함수] = useMutation(나의그래프큐엘셋팅);

//   const onClickSubmit = async () => {
//     const result = await 나의함수({
//       variables: {
//         writer: writer,
//         title: title,
//         contents: contents,
//       },
//     });
//     console.log(result);
//   };

//   const onChangeWriter = (event) => {
//     setWriter(event.target.value);

//     if (event.target.value && title && contents) {
//       setisActive(true);
//     }
//   };

//   const onChangeTitle = (event) => {
//     setTitle(event.target.value);

//     if (writer && event.target.value && contents) {
//       setisActive(true);
//     }
//   };

//   const onChangecContents = (event) => {
//     setContents(event.target.value);

//     if (writer && title && event.target.value) {
//       setisActive(true);
//     }
//   };

//   return (
//     <div>
//       <div> ### 여기는 컨테이너 ###</div>
//       <BoardWriteUI
//         onClickSubmit={onClickSubmit}
//         onChangeWriter={onChangeWriter}
//         onChangeTitle={onChangeTitle}
//         onChangecContents={onChangecContents}
//         isActive={isActive}
//       />
//       <div> ### 여기는 컨테이너 ###</div>
//     </div>
//   );
// }

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(): JSX.Element {
  const [isActive, setisActive] = useState(false);
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && title && contents) {
      setisActive(true);
    }
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) {
      setisActive(true);
    }
  };

  const onChangecContents = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);

    if (writer && title && event.target.value) {
      setisActive(true);
    }
  };

  return (
    <div>
      <div> ### 여기는 컨테이너 ###</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangecContents={onChangecContents}
        isActive={isActive}
      />
      <div> ### 여기는 컨테이너 ###</div>
    </div>
  );
}
