import { MyEmail, MyEmailInput } from "../../../styles/emotion";

export default function EmotionPage() {
  return (
    <div>
      <MyEmail>이메일:</MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>클릭하세요!!</button>
      <img src="/next.svg" alt="" />
    </div>
  );
}
