// import { RedInput, BlueButton } from "./BoardWrite.style";

// export default function BoardWriteUI(props) {
//   return (
//     <div>
//       <div> ### 여기는 프리젠터 ###</div>
//       <div>
//         작성자: <RedInput type="text" onChange={props.onChangeWriter} />
//         제목: <input type="text" onChange={props.onChangeTitle} />
//         내용: <input type="text" onChange={props.onChangecContents} />
//         <BlueButton
//           onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
//         >
//           {props.isEdit ? "수정" : "등록"}
//         </BlueButton>
//       </div>
//       <div> ### 여기는 프리젠터 ###</div>
//     </div>
//   );
// }
import React from "react";
import PropTypes from "prop-types";
import { RedInput, BlueButton } from "./BoardWrite.style";

const BoardWriteUI = (props) => {
  return (
    <div>
      <div> ### 여기는 프리젠터 ###</div>
      <div>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
        제목: <input type="text" onChange={props.onChangeTitle} />
        내용: <input type="text" onChange={props.onChangecContents} />
        <BlueButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"}
        </BlueButton>
      </div>
      <div> ### 여기는 프리젠터 ###</div>
    </div>
  );
};

BoardWriteUI.propTypes = {
  onChangeWriter: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangecContents: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
};

export default BoardWriteUI;
