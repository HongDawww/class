import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "성공성공성공!!",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      content: "실패 실패 실패 !!!",
    });
  };
  return (
    <>
      <button onClick={onClickSuccess}>성공 모달</button>
      <button onClick={onClickError}>실패 모달</button>
    </>
  );
}
