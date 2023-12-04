// import { RedInput, BlueButton } from "./BoardWrite.style";

// export default function BoardWriteUI(props) {
//   return (
//     <div>
//       <div> ### 여기는 프리젠터 ###</div>
//       <div>
//         작성자: <RedInput type="text" onChange={props.onChangeWriter} />
//         제목: <input type="text" onChange={props.onChangeTitle} />
//         내용: <input type="text" onChange={props.onChangecContents} />
//         <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
//           GRAPHQL-API 요청하기
//         </BlueButton>
//       </div>
//       <div> ### 여기는 프리젠터 ###</div>
//     </div>
//   );
// }
import PropTypes from "prop-types";
import { RedInput, BlueButton } from "./BoardWrite.style";

function BoardWriteUI(props) {
  return (
    <div>
      <div> ### 여기는 프리젠터 ###</div>
      <div>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
        제목: <input type="text" onChange={props.onChangeTitle} />
        내용: <input type="text" onChange={props.onChangecContents} />
        <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
          GRAPHQL-API 요청하기
        </BlueButton>
      </div>
      <div> ### 여기는 프리젠터 ###</div>
    </div>
  );
}

BoardWriteUI.propTypes = {
  onChangeWriter: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangecContents: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default BoardWriteUI;
