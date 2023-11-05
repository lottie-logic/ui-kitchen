import styles from "./HorizontalScroll.module.scss";

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { RightArrow } from "../Icons/RightArrow";

interface HorizontalScrollProps {
  children: ReactNode;
  blueFade?: boolean;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
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

  return (
    <div className={styles.horizontalScrollWrapper}>
      {canScrollLeft && (
        <button
          className={`${styles.scrollArrow} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          <RightArrow theme="currentColor" />
        </button>
      )}
      <div
        className={`${styles.horizontalScrollFades} ${
          styles.left
        } ${fadeClass} ${isScrolled ? styles.visible : styles.invisible}`}
      ></div>
      <div
        className={styles.horizontalScroll}
        onScroll={handleScroll}
        ref={scrollContainerRef}
      >
        {children}
      </div>
      <div
        className={`${styles.horizontalScrollFades} ${
          styles.right
        } ${fadeClass} ${canScrollRight ? styles.visible : styles.invisible}`}
      ></div>
      {canScrollRight && (
        <button
          className={`${styles.scrollArrow} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          <RightArrow theme="currentColor" />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
