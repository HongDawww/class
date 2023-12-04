// export default function TypescriptPage(){

// 	// 타입추론
// 	let aaa = "안녕하세요"

// 	// 타입명시
// 	let bbb: string = "반갑습니다"

// 	// 타입 명시가 필요한 상황
// 	let ccc: number | string = 1000
// 	ccc = "1000원"
// 	ccc = 1000

// 	// 타입 종류
// 	// 1. 숫자 타입
// 	let ddd:number = 10

// 	// 2. boolean 타입
// 	let eee:boolean = true
// 	eee = false

// 	// 3. 배열타입
// 	let fff:number[] = [1,2,3,4,5]
// 	let ggg:string[] = ["철수","영희","훈이"]
// 	let hhh = ["철수","영희",10]

// 	// 4. 객체타입
// 	interface Iprofile {
// 		name: string
// 		age: number | string
// 		school: string
// 		hobby?: string
// 	}
// 	const profile:Iprofile = {
// 		name: "철수",
// 		age: 8,
// 		school: "다람쥐초"
// 	}
// 	profile.name = "훈이"
// 	profile.hobby = "수영"

// 	// 5. 함수타입
// 	function add(num1:number, num2:number, unit:string):string{
// 		return num1 + num2 + unit
// 	}
// 	const result = add(1000,2000,"월")

// 	// 5-1. 화살표 함수
// 	const add2 = (num1:number, num2:number, unit:string):string =>{
// 		return num1 + num2 + unit
// 	}
// 	const result2 = add2(1000,2000,"월")

// 	// 6. any타입 - 자바스크립트와 동일
// 	let qqq: any = "철수"
// 	qqq = 123
// 	qqq = true

// 	return <></>
// }
