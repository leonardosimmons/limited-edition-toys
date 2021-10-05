import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

interface ElevationScroll {
  trigger: boolean;
}

type Props = {
  children: React.ReactElement;
};

function ElevationScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default ElevationScroll;
