import styles from "./VerticalScroll.module.scss";

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { RightArrow } from "../Icons/RightArrow";

interface VerticalScrollProps {
  children: ReactNode;
  blueFade?: boolean;
}

const VerticalScroll: React.FC<VerticalScrollProps> = ({
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
      const maxScrollTop = el.scrollHeight - el.clientHeight;
      const canScrollUp = el.scrollTop > 0;
      const canScrollDown = el.scrollTop < maxScrollTop;
      // Update your state with canScrollUp and canScrollDown as needed
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

  //   const scroll = (direction: "left" | "right") => {
  //     if (scrollContainerRef.current) {
  //       const scrollAmount = 100;
  //       scrollContainerRef.current.scrollBy({
  //         left: direction === "left" ? -scrollAmount : scrollAmount,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  //   const fadeClass = blueFade ? "blue-fade" : "white-fade";

  return (
    <div className={styles.verticalScrollWrapper}>
      {/* {canScrollLeft && (
        <button
          className={`${styles.scrollArrow} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          <RightArrow theme="currentColor" />
        </button>
      )} */}
      {/* <div
        className={`${styles.verticalScrollFades} ${styles.left} ${fadeClass} ${
          isScrolled ? styles.visible : styles.invisible
        }`}
      ></div> */}
      <div
        className={styles.verticalScroll}
        // onScroll={handleScroll}
        // ref={scrollContainerRef}
      >
        {children}
      </div>
      {/* <div
        className={`${styles.verticalScrollFades} ${
          styles.right
        } ${fadeClass} ${canScrollRight ? styles.visible : styles.invisible}`}
      ></div> */}
      {/* {canScrollRight && (
        <button
          className={`${styles.scrollArrow} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          <RightArrow theme="currentColor" />
        </button>
      )} */}
    </div>
  );
};

export default VerticalScroll;
