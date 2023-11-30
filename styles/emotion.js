import styled from "@emotion/styled";

export const MyEmail = styled.span`
  color: blue;
  font-size: 25px;
`;

export const MyEmailInput = styled.input`
  border-color: red;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px;
`;
export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
    color: #000;
  }
`;
export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
`;
export const Modal = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ModalContents = styled.div`
  font-size: 18px;
`;
export const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
