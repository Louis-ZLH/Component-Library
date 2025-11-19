import { useNavigate } from "react-router";
import { Button } from "component-lib-core";

export default function LinkButton({ href, children, ...props }) {
  const navigate = useNavigate();
  return (
    <Button
      variant="link"
      {...props}
      onClick={() => {
        navigate(href);
      }}
    >
      {children}
    </Button>
  );
}
