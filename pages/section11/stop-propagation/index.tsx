import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react"

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

	
	const qqq2 = () => {
		alert("2번 클릭")
	}

	
	const qqq3 = (event) => {
		event.stopPropagation()
		alert("3번 클릭")
	}

	
	const qqq4 = (event) => {
		event.stopPropagation()
		alert("4번 클릭")
	}
	
	return(
		<div>
			{data?.fetchBoards.map((el: any) => (
				<div id={el.writer} onClick={qqq1}>
					<span onClick={qqq2}>
						<input type="checkbox" onClick={qqq3}/>
					</span>
					<span style={{margin: "10px"}} onClick={qqq4}>{el.number}</span>
					<span style={{margin: "10px"}}>{el.writer}</span>
					<span style={{margin: "10px"}}>{el.title}</span>
					<span style={{margin: "10px"}}>{el.contents}</span>
				</div>
			))}
		</div>
	)
}