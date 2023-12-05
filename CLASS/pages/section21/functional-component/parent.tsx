import ChildPage from "./child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={10}/> */}
      {ChildPage({ count: 30 })}
    </>
  );
}
