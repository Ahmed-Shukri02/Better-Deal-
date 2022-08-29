import React, { useRef } from "react";
import { useState, useEffect, useMemo } from "react";

type useIsInViewportType<T> = (
  ref: React.MutableRefObject<T | undefined>
) => boolean;
const useIsInViewport: useIsInViewportType<Element> = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const test = useRef();

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (!ref) {
      return;
    }
    observer.observe(ref.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInViewport;
