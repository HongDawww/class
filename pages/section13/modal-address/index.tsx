import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsopen] = useState(false);

  const showModal = (): void => {
    setIsopen(true);
  };

  const handleOk = (): void => {
    setIsopen(false);
  };

  const handleCancel = (): void => {
    setIsopen(false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
    </>
  );
}
