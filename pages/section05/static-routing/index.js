import { useRouter } from "next/router"

export default function SataticRoutingPage(){
	const router = useRouter()
	
	const onClickMove = () => {
		router.push("/section05/static-routing-moved")
	}

	return(
		<div>
			<button onClick={onClickMove}>페이지 이동</button>
		</div>
	)
}