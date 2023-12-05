import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authoriztion: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    // 포폴용 주소

    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    // 연습용 주소
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시 저장
  });

  // prettier-ignore
  return (
		<ApolloProvider client={client}>
			{props.children}
		</ApolloProvider>
	)
}
