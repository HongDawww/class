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

	const qqq = () => {
		alert("클릭 타이틀")
	}
	
	return(
		<div>
			{data?.fetchBoards.map((el: any) => (
				<div id={el.writer} onClick={onClickAlert}>
					<span>
						<input type="checkbox" />
					</span>
					<span style={{margin: "10px"}}>{el.number}</span>
					<span style={{margin: "10px"}}>{el.writer}</span>
					<span style={{margin: "10px"}}>{el.title}</span>
					<span style={{margin: "10px"}}>{el.contents}</span>
				</div>
			))}
		</div>
	)
}