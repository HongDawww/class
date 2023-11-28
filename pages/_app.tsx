// 모든 페이지에서의 공통 설정을 여기서 진행
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"

export default function App({ Component }: AppProps) {

  const client = new ApolloClient({
    // 포폴용 주소
    
    // uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    // 연습용 주소
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
  })

  return (
    <ApolloProvider client={client}>
      <Component  /> 
    </ApolloProvider>
  )
}