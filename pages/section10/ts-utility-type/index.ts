export interface Iprofile {
	name: string
	age: number
	school: string
	hobby?: string
}

// 1. Partial 타입
type aaa = Partial<Iprofile>

// 2. Required 타입
type bbb = Required<Iprofile>

// 3. Pick 타입
type ccc = Pick<Iprofile, "name" | "age">

// 4. Omit 타입
type ddd = Omit<Iprofile,"school">

// 5. Recode 타입
type eee = "철수" | "영희" | "훈이" // union 타입
let child: eee = "영희"
let child2: string = "사과" 

type fff = Record<eee,Iprofile>

// 6. 객체의 key로 union 타입 생성
type ggg = keyof Iprofile // keyof - "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby"


// 7. type vs interface 차이? (interfage의 선언 병합)
export interface Iprofile{
	candy: number // 선언병합을 추가됨
}

// 응용
let profile: Partial<Iprofile> = {
	candy: 10
}

