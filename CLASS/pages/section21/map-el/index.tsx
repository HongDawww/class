export default function MapElPasge(): JSX.Element {
  // 1. 기본
  ["철수", "영희", "훈이"].map((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });
  // 결과
  //   el:  철수
  //  index:  0
  //  el:  영희
  //  index:  1
  //  el:  훈이
  //  index:  2

  // 2. 매개변수 변경
  ["철수0", "철수1", "철수2"].map((aa, bb) => {
    console.log("aa: ", aa);
    console.log("bb: ", bb);
  });

  // 3.함수 선언식 방법
  ["영희0", "영희1", "영희2"].map(function (cc, dd) {
    console.log("cc: ", cc);
    console.log("dd: ", dd);
  });

  // 4. el - index 바꾸기
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });
  return <></>;
}
