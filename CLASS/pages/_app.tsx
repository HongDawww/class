// 모든 페이지에서의 공통 설정을 여기서 진행
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/layout/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
