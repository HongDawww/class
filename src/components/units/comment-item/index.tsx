import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <button onClick={onClickEdit}>수정</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
