import { Fragment } from "react";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

const NAVIGATION_MENUS = [
  { name: "나의파이어베이스", page: "/myfirebase" },
  { name: "라이브강아지", page: "/openapis" },
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigation() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMoveToPage(el.page)}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
