import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// api-docs 만들기
const typeDefs = `#graphql
  input createBoardInput {
    writer: String
    title: String
    contents: String
  }
  type myBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [myBoard]
  }
  type Mutation {
    # 연습용
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용
    createBoard(createBoardInput: createBoardInput): String
  }
`;

// api 만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두 꺼내기
      const result = await Board.find();
      // const result = await Board.find({where: {isDeleted: false}}); 소프트 딜리트 삭제

      console.log(result);

      // number 3인 게시글 1개
      // const result = await Board.find({ where: { number: 3 } });
      // console.log(result);

      return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록 성공"!!;
    },

    // 3번 게시글 영희로 변경
    // updateBoard: async () => {
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // 3번 게시글 삭제
    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 });
    // await Board.update({ number: 3 }, { isDeleted: true }); 소프트 딜리트 삭제
    // await Board.update({number: 3 },{deletedAt: new Date()}) deletedAt 초기값이 null 이면 삭제되지 않음 new Date() 값이 있으면 삭제됨
    // },
  },
};

// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // cors: true,

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin: ["http://naver.com", "http://http://coupang.com"],
  // },
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.244.122", //IP주소
  port: 5432, // DB port
  username: "postgres",
  password: "postgre2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속 성공");
    startStandaloneServer(server).then(() => {
      console.log("서버가 실행됨"); // 포트 4000
    });
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("원인", error);
  });
