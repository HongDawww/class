import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";

import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 - process.browser
  // if (process.browser) {
  //   alert("반가워요");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("프론트서버");
  // }
  // 1. 프리렌더링 - typeof window
  // if (typeof window !== "undefined") {
  //   console.log("브라우저다");
  // } else {
  //   console.log("프론트 서버다");
  // }

  // 3. 프리렌더링 무시 - useEffect
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
