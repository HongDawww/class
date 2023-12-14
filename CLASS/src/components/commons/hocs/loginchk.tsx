import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
import { useRecoilValueLoadable } from "recoil";

export const loginChk =
  (Component: any) =>
  (props: any): any => {
    const router = useRouter();

    const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

    // 1. 로그인 체크 (기존 방식)
    // useEffect(() => {
    //   if (localStorage.getItem("accessToken") === null) {
    //     alert("로그인 후 이용 가능");
    //     void router.push("/section23/login-chk-hoc");
    //   }
    // }, []);

    // 2. refreshToken 이후 방식 -> 2번 요청하게 됨
    // useEffect(() => {
    //   void getAccessToken().then((newAccessToken) => {
    //     if (newAccessToken === undefined) {
    //       // alert("로그인 후 이용 가능");
    //       // void router.push("/section23/login-chk-hoc");
    //     }
    //   });
    // }, []);

    // 3. refreshToken 이후 방식 -> 함수 공유 / 1번 요청
    useEffect(() => {
      aaa.toPromise().then((newAccessToken) => {
        if (newAccessToken === undefined) {
          alert("로그인 후 이용 가능");
          void router.push("/section23/login-chk-hoc");
        }
      });
    }, []);
    return <Component {...props} />;
  };
