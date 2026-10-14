import { forwardRef } from "react";

export const PortalVideo = forwardRef(({ imageMap, ...rest }, ref) => {
  return (
    <video tabIndex={0} ref={ref} {...rest} loop muted>
      <source src={imageMap} type="video/mp4" />
    </video>
  );
});
