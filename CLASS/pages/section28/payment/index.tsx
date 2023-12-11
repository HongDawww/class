declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp85780712");
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20231211-00zz011",
        name: "웨딩토퍼",
        amount: 49900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          //   createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
