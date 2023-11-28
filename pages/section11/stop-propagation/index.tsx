import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react"
import CheckBox from "./checkbox"

const FETCH_BOARDS = gql`
	query{
		fetchBoards{
			number
			writer
			title
			contents
		}
	}
`
export default function StaticRoutingMovedPage(){
	
	const {data} = useQuery(FETCH_BOARDS)
	console.log(data?.fetchBoards) // 배열


	const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
		alert(event.currentTarget.id)
	}

	const qqq1 = () => {
		alert("1번 클릭")
	}

	


	
	const qqq4 = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
		alert("4번 클릭")
	}
	
	return(
		<div>
			{data?.fetchBoards.map((el: any) => (
				<div id={el.writer} onClick={qqq1}>
					<CheckBox />
					<span style={{margin: "10px"}} onClick={qqq4}>{el.number}</span>
					<span style={{margin: "10px"}}>{el.writer}</span>
					<span style={{margin: "10px"}}>{el.title}</span>
					<span style={{margin: "10px"}}>{el.contents}</span>
				</div>
			))}
		</div>
	)
}