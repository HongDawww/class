import { useRouter } from "next/router";
import { useEffect } from "react";

export const loginChk =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능");
        void router.push("/section23/login-chk-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
