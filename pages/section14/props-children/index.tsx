import Example from "../../../src/components/units/props-children";

export default function PropsChildrenPage() {
  return (
    <div>
      <div>+++++++++빨간색 파란색 초록색+++++++++</div>
      <Example school="다람쥐초">
        <div>
          <input type="text"></input>
          <div>저는 철수</div>
          <button>클릭!</button>
        </div>
      </Example>
      <div>+++++++++빨간색 파란색 초록색+++++++++</div>
    </div>
  );
}
