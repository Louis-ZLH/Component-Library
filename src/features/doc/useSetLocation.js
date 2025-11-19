import { useContext, useEffect } from "react";
import { locationContext } from "../../pages/Docs";

export function useSetLocation(location) {
  const { setLocation } = useContext(locationContext);
  useEffect(() => {
    setLocation(location);
  }, [setLocation, location]);
}
