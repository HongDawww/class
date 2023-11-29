// import { useState } from "react"

// export default function signUpStatePage(){
// 	const [email, setEmail] = useState("")
// 	const [password, setPassword] = useState("")
// 	const [emailErr, setEmailErr] = useState("")

// 	function onChangeEmail(event){
// 		// 이벤트 핸들러 함수
// 		// 행동 console.log(event)
// 		// 작동된 태그 console.log(event.target)
// 		// 작동된 태그의 입력값 console.log(event.target.value)

// 		setEmail(event.target.value)
// 	}

// 	function onChangePassword(event){
// 		setPassword(event.target.value)
// 	}

// 	function onClickSignUp(event){
// 		// console.log(email)
// 		// console.log(password)
// 		// 1. 검증
// 		if(email.includes("@") === false){
// 			setEmailErr("이메일 형식이 올바르지 않습니다")
// 		} else {
// 			// 2. 백엔드에 보내기(api) => 우선 생략

// 			// 3. 성공 알림 출력
// 			alert("회원가입을 축하합니다!!")
// 		}
// 	}

// 	return (
// 		<div>
// 			이메일: <input type="text" onChange={onChangeEmail} />
// 			<div>{emailErr}</div>
// 			비밀번호: <input type="password" onChange={onChangePassword}/>
// 			<button onClick={onClickSignUp}>회원가입</button>
// 		</div>
// 	)
// }
