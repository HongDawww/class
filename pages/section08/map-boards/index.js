import { useQuery, gql } from "@apollo/client"

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

	// const mystyles = {
	// 	margin: "10px",
	// 	padding: "0px"
	// }
	// <span style={mystyles}>{el.writer}</span>

	return(
		<div>
			{data?.fetchBoards.map(el => (
				<div>
					<span>
						<input type="checkbox" />
					</span>
					<span style={{margin: "10px"}}>{el.writer}</span>
					<span style={{margin: "10px"}}>{el.title}</span>
					<span style={{margin: "10px"}}>{el.contents}</span>
				</div>
			))}
		</div>
	)
}