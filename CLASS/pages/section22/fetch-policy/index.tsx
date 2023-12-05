import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyPage(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  console.log(data);

  // 1. 새로운 컴포넌트 등장에도 global state 값이 유지 되는지?
  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 유지되는지?
  const onClickMove = (): void => {
    void router.push("/section22/fetch-policy-moved");
  };
  return (
    <div>
      <button onClick={onClickIsOpen}>
        1.버튼을 클릭하면 새로운 컴포넌트가 나타남
      </button>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>2. 버튼을 클릭하면 페이지가 이동</button>
    </div>
  );
}
