import { useLocation } from "react-router";
import { useSetLocation } from "../../../features/doc/useSetLocation";
import Introduction from "./Introduction.mdx";
import Button from "./Button.mdx";
import { memo } from "react";

const content = {
  introduction: Introduction,
  button: Button,
};

function Index() {
  const { pathname } = useLocation();
  const location = pathname.split("/").pop();
  useSetLocation(location);
  const Content = content[location] || Introduction;

  return (
    <>
      <Content />
    </>
  );
}
export default memo(Index);
