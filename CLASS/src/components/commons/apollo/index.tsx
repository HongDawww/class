import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    // 포폴용 주소

    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    // 연습용 주소
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
  });

  // prettier-ignore
  return (
		<ApolloProvider client={client}>
			{props.children}
		</ApolloProvider>
	)
}
