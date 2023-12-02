import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCountPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount()와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);
  // [] 는 배열에 들어간 값이 있을때만 재실행됨(의존성배열/dependency-array)

  //  componentDidMount + componentDidUpdate()와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  useEffect(() => {
    // componentWillUnmount()와 동일
    return () => {
      console.log("사라지기전에 실행");
    };
  }, []);

  // **** useEffect 하나로 합치기 ****
  // useEffect(() => {
  //   console.log("그려지고 나서 실행");
  //   return () => {
  //     console.log("사라지기전에 실행");
  //   };
  // });

  // ---- useEffect 잘못된 사용법 ----
  // useEffect(() => {
  //   setWriter();
  // }, [count]);
  // 렌더링 1회 + 리렌더링 됨
  //
  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
