import { useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트 렌더링");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountLet = (): void => {
    console.log(countLet + 1);
    countLet += 1;
  };

  const onClickCountState = (): void => {
    console.log(countState + 1);
    setCountState(countState + 1);
  };
  return (
    <>
      <div> 카운트: let 방식{countLet}</div>
      <button onClick={onClickCountLet}> +1 올리기</button>
      <div> 카운트: state 방식{countState} </div>
      <button onClick={onClickCountState}> +1 올리기</button>
    </>
  );
}
