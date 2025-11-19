import { useLocation } from "react-router";
import { useSetLocation } from "../../features/doc/useSetLocation";
import IntroductionPage from "./Introduction.mdx";
import ButtonPage from "./Button.mdx";
import renderPropsPatternPage from "./RenderPropsPattern1.mdx";
import { memo } from "react";

const content = {
  introduction: IntroductionPage,
  button: ButtonPage,
  renderPropsPattern: renderPropsPatternPage,
};

function Index() {
  const { pathname } = useLocation();
  const location = pathname.split("/").pop();
  useSetLocation(location);
  const Content = content[location] || IntroductionPage;

  return (
    <>
      <Content />
    </>
  );
}
export default memo(Index);
