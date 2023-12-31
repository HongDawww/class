import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { RecoilRoot, useRecoilValueLoadable } from "recoil";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// import { GraphQLClient, gql } from "graphql-request";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // 1. 기존 방식
    // const result = localStorage.getItem("accessToken");

    // 2. refreshToken 이후 방식
    aaa.toPromise().then((newAccessToken) => {
      void setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // const RESTORE_ACCESS_TOKEN = gql`
  //   mutation {
  //     restoreAccessToken {
  //       accessToken
  //     }
  //   }
  // `;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-1. 토큰 만료 에러인지 확인
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 accesstoken으로 실패한 쿼리 재요청
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`, // accesstoken 덮어쓰기
                },
              });
            })
            // 4. 수정한 쿼리 재요청
          ).flatMap(() => forward(operation));
        }

        // 2. refreshtoken으로 accesstoken 재발급 받기

        // *** 재사용될 가능성 높음 -> 함수로 분리 ***
        // const graphQLClient = new GraphQLClient(
        //   "http://backend-practice.codebootcamp.co.kr/graphql"
        // );
        // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        // const newAccessToken = result.restoreAccessToken.accessToken
        //  **************************************************
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
   
      <RecoilRoot>
        <ApolloProvider client={client}>
          {props.children}
        </ApolloProvider>
      </RecoilRoot>
  
    )
}
