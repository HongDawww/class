import { RedInput, BlueButton } from "./BoardWrite.style"
import { IBoardWriteUIProps } from "./BoardWrite.types"

export default function BoardWriteUI(props: IBoardWriteUIProps){

	return(
		<div>
			<div> ### 여기는 프리젠터 ###</div>
			<div>
				작성자: <RedInput type="text" onChange={props.onChangeWriter} />
				제목: <input type="text" onChange={props.onChangeTitle} />	
				내용: <input type="text" onChange={props.onChangecContents} />
				<BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit }>
					{props.isEdit ? "수정" : "등록"}
				</BlueButton>
			</div>
			<div> ### 여기는 프리젠터 ###</div>
		</div>

	)
}