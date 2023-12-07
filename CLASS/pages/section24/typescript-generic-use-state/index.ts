// 제공자가 제공해주는 방식
export function useState<S>(초기값: S): [S, (변경값: S) => void] {
  const state = 초기값;

  const setState = (변경값: S): void => {
    console.log(`${state}에서 ${변경값}으로 값을 변경`);
    console.log(`변경된 ${변경값}을 사용해서 컴포넌트를 리렌더링`);
  };

  return [state, setState];
}

// 사용자가 사용하는 방식
const [count, setCount] = useState(10);
