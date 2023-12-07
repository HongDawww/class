import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/kakao-map-routing-moved");
  };
  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>

      {/* 매 페이지를 새로 다운로드 받음  SPA 활용 x */}
      <a href="/section25/kakao-map-routing-moved">페이지 이동하기</a>

      <Link href="/section25/kakao-map-routing-moved">
        <a>페이지 이동하기</a>
      </Link>
    </>
  );
}
