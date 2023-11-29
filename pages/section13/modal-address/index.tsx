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
    setIsopen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      {/* <Modal
        title="모달 숨기기"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}
      {isOpen && (
        <Modal
          open={true}
          title="모달 삭제 / 종료"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
