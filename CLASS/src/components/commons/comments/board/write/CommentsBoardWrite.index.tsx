import * as S from "./CommentsBoardWrite.styles";
import { useForm } from "react-hook-form";
import { useBoardComment } from "../../../hooks/customs/useBoardComment";
import { useQueryIdChecker } from "../../../hooks/customs/useQueryIdChecker";
import { IBoardComment } from "../../../../../commons/types/generated/types";

interface ICommentsBoardWriteProps {
  isEdit?: boolean;
  onToggleEdit?: () => void;
  el?: IBoardComment;
}

export default function CommentsBoardWrite(props: ICommentsBoardWriteProps) {
  const { id } = useQueryIdChecker("boardId");
  const { onClickWrite, onClickUpdate } = useBoardComment({
    boardId: id,
    boardCommentId: props.el?._id,
    onToggleEdit: props.onToggleEdit,
  });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      writer: props.el?.writer ?? "",
      password: "",
      contents: props.isEdit ? props.el?.contents : "",
      star: 0,
    },
  });

  return (
    <S.Wrapper>
      {!props.isEdit && (
        <>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input placeholder="작성자" {...register("writer")} />
        <S.Input
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <S.Star />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
        />
        <S.BottomWrapper>
          <S.ContentsLength>0/100</S.ContentsLength>
          <S.Button
            onClick={handleSubmit(props.isEdit ? onClickUpdate : onClickWrite)}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
