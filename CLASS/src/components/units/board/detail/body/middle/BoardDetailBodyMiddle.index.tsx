import { useBoardLike } from "../../../../../commons/hooks/customs/useBoardLike";
import { useQueryIdChecker } from "../../../../../commons/hooks/customs/useQueryIdChecker";
import * as S from "./BoardDetailBodyMiddle.styles";
import { IBoardDetailBodyProps } from "./BoardDetailBodyMiddle.types";

export default function BoardDetailBodyMiddle(props: IBoardDetailBodyProps) {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { onClickLike, onClickDislike } = useBoardLike({
    boardId,
  });
  return (
    <S.Body>
      <S.Title>{props.data?.fetchBoard?.title}</S.Title>
      <S.ImageWrapper>
        {props.data?.fetchBoard.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </S.ImageWrapper>
      <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
      {props.data?.fetchBoard.youtubeUrl && (
        <S.Youtube
          url={props.data?.fetchBoard.youtubeUrl}
          width="486px"
          height="240px"
        />
      )}
      <S.LikeWrapper>
        <S.IconWrapper>
          <S.LikeIcon onClick={onClickLike} />
          <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.DislikeIcon onClick={onClickDislike} />
          <S.DislikeCount>{props.data?.fetchBoard.dislikeCount}</S.DislikeCount>
        </S.IconWrapper>
      </S.LikeWrapper>
    </S.Body>
  );
}
