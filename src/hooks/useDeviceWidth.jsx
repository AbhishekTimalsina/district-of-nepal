import { useState, useEffect } from "react";

function useDeviceWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function onResizeFunction() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResizeFunction);

    return () => {
      window.removeEventListener("resize", onResizeFunction);
    };
  }, []);

  return innerWidth;
}

export default useDeviceWidth;
