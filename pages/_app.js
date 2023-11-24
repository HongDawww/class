// 모든 페이지에서의 공통 설정을 여기서 진행
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} /> // Component : 페이지
}
