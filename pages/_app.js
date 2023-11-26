// 모든 페이지에서의 공통 설정을 여기서 진행
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    // uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} /> 
    </ApolloProvider>
  )
}
