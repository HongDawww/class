This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 설치 방법

0. node.js LTS 버전 설치 
- node.js를 설치하면 npm은 자동으로 설치된다
1. yarn 설치 
** 관리자 권한으로 cmd창을 열어야 한다
- sudo npm install -g yarn

1-1 폴더 생성
- npx create-next-app
- 폴더명
- 전부 No 


2. 폴더에 Next.js 프로젝트 설치
- Next.js를 설치하면 React.js는 자동으로 설치된다

** 최신버전으로 설치된  React 18 버전을 React 17 버전으로 교체
> yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact

2-1.  불필요한 폴더 삭제 
- api 폴더
- _document.js 파일
- pages폴더에 _app.js 파일 안에 import 부분 삭제
- pages 폴더에 index.js 파일 안에 두 번째줄 import ~ const 까지 삭제
- pages 폴더에 index.js 파일 안에 Head 부분 제외하고 하단 모두 삭제

3. 폴더에 emotion 설치
- yarn add @emotion/react
- yarn add @emotion/style

4. 폴더에 Apollo-Client, Graphql 설치
- yarn add @apollo/client graphql

5. 폴더에  Ant-Design 설치
- yarn add antd

6. 폴더에 Axios 설치
- yarn add axios