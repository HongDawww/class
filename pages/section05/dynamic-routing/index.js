import { useRouter } from "next/router"


export default function DynamicRoutingPage(){
	const router = useRouter()
	
	const onClickMove1 = () => {
		router.push("/section05/dynamic-routing-moved/1")
	}

	const onClickMove2 = () => {
		router.push("/section05/dynamic-routing-moved/2")
	}

	const onClickMove3 = () => {
		router.push("/section05/dynamic-routing-moved/3")
	}

	return(
		<div>
			<button onClick={onClickMove1}>1번 게시글로 이동</button>
			<button onClick={onClickMove2}>2번 게시글로 이동</button>
			<button onClick={onClickMove3}>3번 게시글로 이동</button>
		</div>
	)
}