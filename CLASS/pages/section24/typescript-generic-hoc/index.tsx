import { useRouter } from "next/router";
import { useEffect, type ReactElement } from "react";

// prettier-ignore
export const loginChk = (Component: () => JSX.Element) => <P extends Record<string,unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능");
        void router.push("/section23/login-chk-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
