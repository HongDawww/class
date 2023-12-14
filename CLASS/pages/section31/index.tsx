import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트 렌더링");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // usememo : 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // usecallback : 함수 기억
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // usecallback - state 사용시 주의 / prev ***
  const onClickCountState = useCallback((): void => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // usememo 로 usecallback 만들기
  const onClickCountState2 = useMemo(() => {
    return (): void => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <>
      <div> 카운트: let 방식{countLet}</div>
      <button onClick={onClickCountLet}> +1 올리기</button>
      <div> 카운트: state 방식{countState} </div>
      <button onClick={onClickCountState}> +1 올리기</button>

      <div> usememo 로 usecallback 만들기{countState} </div>
      <button onClick={onClickCountState2}> +1 올리기</button>

      <div> 카운트: state 방식/ 유지보수 어려움 {countState} </div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        +1 올리기
      </button>
    </>
  );
}
