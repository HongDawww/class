import { useMutation } from "@apollo/client"
import { useState, ChangeEvent } from "react"
import {나의그래프큐엘셋팅, UPDATE_BOARD} from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"
import { useRouter } from "next/router"
import{IBoardWriteProps, IMyvariables} from "./BoardWrite.types"


export default function BoardWrite(props: IBoardWriteProps){

	const router = useRouter()

	const [writer, setWriter] = useState("")
	const [title, setTitle] = useState("")
	const [contents, setContents] = useState("")

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
		router.push(`/section10/ts-boards/${result.data.createBoard.number}`)
		//result.data.createBoard.number // 게시글 번호
	  };
	
	const onClickUpdate = async() => {

		const myvariables: IMyvariables = {
			number: Number(router.query.number)
		}

		if(writer) myvariables.writer = writer
		if(title) myvariables.title = title
		if(contents) myvariables.contents = contents

		const result = await updateBoard({
			variables: myvariables
		})

		console.log(result)
		router.push(`/section10/ts-boards/${result.data.updateBoard.number}`)

	}

	const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
		setWriter(event.target.value)
	}

	const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	const onChangecContents = (event: ChangeEvent<HTMLInputElement>) => {
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
				data={props.data}
			/>
			<div> ### 여기는 컨테이너 ###</div>
		</div>
	)
}