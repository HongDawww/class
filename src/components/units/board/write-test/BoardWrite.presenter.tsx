import PropTypes from "prop-types";
import { RedInput, BlueButton } from "./BoardWrite.style";

// props에 대한 타입 정의
interface BoardWriteUIProps {
  bbb: () => void; // 예시에서는 'bbb'를 함수로 가정하고 있습니다. 실제 타입에 맞게 수정하세요.
  ccc: () => void;
  ddd: () => void;
  aaa: () => void;
}

function BoardWriteUI(props: BoardWriteUIProps) {
  return (
    <div>
      <div> ### 여기는 프리젠터 ###</div>
      <div>
        작성자: <RedInput type="text" onChange={props.bbb} />
        제목: <input type="text" onChange={props.ccc} />
        내용: <input type="text" onChange={props.ddd} />
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
      </div>
      <div> ### 여기는 프리젠터 ###</div>
    </div>
  );
}

BoardWriteUI.propTypes = {
  bbb: PropTypes.func.isRequired,
  ccc: PropTypes.func.isRequired,
  ddd: PropTypes.func.isRequired,
  aaa: PropTypes.func.isRequired,
};

export default BoardWriteUI;
