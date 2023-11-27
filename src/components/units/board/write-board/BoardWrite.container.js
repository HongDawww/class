import { useMutation } from "@apollo/client"
import { useState } from "react"
import {나의그래프큐엘셋팅, UPDATE_BOARD} from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"
import { useRouter } from "next/router"

export default function BoardWrite(props){

	const router = useRouter()

	const [writer, setWriter] = useState()
	const [title, setTitle] = useState()
	const [contents, setContents] = useState()

	const [나의함수] = useMutation(나의그래프큐엘셋팅)
	const [updateBoard] = useMutation(UPDATE_BOARD)


	const onClickSubmit = async () => {
		const result = await 나의함수({
			variables: { 				// variables = $역할
				writer: writer,
				title: title,
				contents: contents
			}
		});
		console.log(result);
		router.push(`/section09/boards/${result.data.createBoard.number}`)
		//result.data.createBoard.number // 게시글 번호
	  };

	const onClickUpdate = async() => {
		//수정하기
		const result = await updateBoard({
			variables: {
				number: Number(router.query.number),
				writer: writer,
				title: title,
				contents: contents
			}
		})
		console.log(result);
		router.push(`/section09/boards/${result.data.updateBoard.number}`)

	}

	const onChangeWriter = (event) => {
		setWriter(event.target.value)
		
	}

	const onChangeTitle = (event) => {
		setTitle(event.target.value)
	}

	const onChangecContents = (event) => {
		setContents(event.target.value)
	}

	return(
		<div>
			<div> ### 여기는 컨테이너 ###</div>
			<BoardWriteUI 
				onClickSubmit={onClickSubmit}
				onClickUpdate={onClickUpdate} 
				onChangeWriter={onChangeWriter}
				onChangeTitle={onChangeTitle}
				onChangecContents={onChangecContents}
				isEdit={props.isEdit}
			/>
			<div> ### 여기는 컨테이너 ###</div>
		</div>
	)
}