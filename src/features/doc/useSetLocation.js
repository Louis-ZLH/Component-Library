import { useContext, useEffect } from "react";
import { locationContext } from "../../pages/doc/Docs";

export function useSetLocation(location) {
  const { setLocation } = useContext(locationContext);
  useEffect(() => {
    setLocation(location);
  }, [setLocation, location]);
}
