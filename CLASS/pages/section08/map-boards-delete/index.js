import { useQuery, gql, useMutation } from "@apollo/client"

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

const DELETE_BOARD = gql`
	mutation deleteBoard($number: Int){
		deleteBoard(number: $number){
			message
		}
	}`


export default function StaticRoutingMovedPage(){
	
	const {data} = useQuery(FETCH_BOARDS)

	const [deleteBoard] = useMutation(DELETE_BOARD,{
		refetchQueries: [{query: FETCH_BOARDS}]
	})

	console.log(data?.fetchBoards) // 배열

	// const mystyles = {
	// 	margin: "10px",
	// 	padding: "0px"
	// }
	// <span style={mystyles}>{el.writer}</span> 


	const onClickDelete = (event) => {
		
		deleteBoard({	
			variables: {
				number: Number(event.target.id),
				// refetchQueries: [{query: FETCH_BOARDS}]
			}
		})
	}

	return(
		<div>
			{data?.fetchBoards.map(el => (
				<div key={el.number}>
					<span>
						<input type="checkbox" />
					</span>
					<span>{el.number}</span>
					<span style={{margin: "10px"}}>{el.writer}</span>
					<span style={{margin: "10px"}}>{el.title}</span>
					<span style={{margin: "10px"}}>{el.contents}</span>
					<span>
						<button id={el.number} onClick={onClickDelete}>X</button>
					</span>
					
				</div>
			))}
		</div>
	)
}