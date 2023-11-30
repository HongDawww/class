import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = ["/boards", "/itsload", "/slider", "/signup-state"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log("--------------");
  console.log(router.asPath);
  console.log("--------------");

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenHeader && <LayoutBanner />}
      {!isHiddenHeader && <LayoutNavigation />}
      <div style={{ height: "500px", display: "flex" }}>
        {!isHiddenHeader && (
          <div style={{ width: "30%", backgroundColor: "orange" }}>
            사이드바
          </div>
        )}
        <div style={{ width: "79%" }}>{props.children}</div>
      </div>
      {!isHiddenHeader && <LayoutFooter />}
    </>
  );
}
