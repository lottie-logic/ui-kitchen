// import styles from "./HorizontalScroll.module.scss";

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface HorizontalScrollProps {
  children: ReactNode;
  blueFade?: boolean;
}

const HorizontalScrollSimple: React.FC<HorizontalScrollProps> = ({
  children,
  blueFade = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkForScrollPosition = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < maxScrollLeft);
      setIsScrolled(el.scrollLeft > 0);
    }
  }, []);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      checkForScrollPosition();
    },
    [checkForScrollPosition]
  );

  useEffect(() => {
    checkForScrollPosition();
  }, [checkForScrollPosition]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const fadeClass = blueFade ? "blue-fade" : "white-fade";

  return <div className="overflow-y-scroll flex flex-row ">{children}</div>;
};

export default HorizontalScrollSimple;
