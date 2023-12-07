import { useRouter } from "next/router";
import { useMoveToPage } from "../../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./BoardDetailBodyBottom.styles";

export default function BoardDetailBodyBottom() {
  const router = useRouter();
  const boardId = router.query.boardId;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.BottomWrapper>
      <S.Button onClick={onClickMoveToPage("/boards")}>목록으로</S.Button>
      <S.Button onClick={onClickMoveToPage(`/boards/${boardId}/edit`)}>
        수정하기
      </S.Button>
      <S.Button>삭제하기</S.Button>
    </S.BottomWrapper>
  );
}
