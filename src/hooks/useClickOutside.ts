import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!domNode.current || !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });

  return domNode;
};

export default useClickOutside;
