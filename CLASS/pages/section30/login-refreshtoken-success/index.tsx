import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
// import axios from "axios";
// import { IQuery } from "../../../src/commons/types/generated/types";
// import { loginChk } from "../../../src/components/commons/hocs/loginchk";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  // 1. 페이지 접속하면 자동으로 data받아지고 리렌더링
  // 2. 버튼 클릭시 data에 받아지고 리렌더링
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);
  // 3. axios처럼 사용
  // const client = useApolloClient()
  // client.query() <==> axios.get()
  // return <>{data?.fetchUserLoggedIn.name}님 , 환영합니다</>;

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
  };

  return <button onClick={wrapAsync(onClickButton)}> 클릭 하세요 </button>;
}
