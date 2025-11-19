import { useLocation } from "react-router";
import { useSetLocation } from "../../features/doc/useSetLocation";
import IntroductionPage from "./Introduction.mdx";
import ButtonPage from "./Button.mdx";
import RenderPropsPatternPage from "./RenderPropsPattern.mdx";
import HOCPage from "./Hoc.mdx";
import ComPoundComponentPage from "./CompoundComponent.mdx";
import { memo } from "react";

const content = {
  introduction: IntroductionPage,
  button: ButtonPage,
  renderPropsPattern: RenderPropsPatternPage,
  hoc: HOCPage,
  compoundComponent: ComPoundComponentPage,
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
