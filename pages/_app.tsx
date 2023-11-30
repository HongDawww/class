// 모든 페이지에서의 공통 설정을 여기서 진행
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/layout/apollo";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
    </div>
  );
}
