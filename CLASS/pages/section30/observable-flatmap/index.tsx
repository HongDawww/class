import { Observable } from "@apollo/client";
import { from } from "zen-observable";
export default function ObservableFlatMapPage() {
  const onclickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observer) => {});
    from(["1번", "2번", "3번"]);
  };
  return <button onClick={onclickButton}>클릭</button>;
}
