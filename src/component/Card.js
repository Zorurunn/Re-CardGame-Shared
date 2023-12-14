import { useGame } from "./Game";
import styles from "../page.module.css";
import Image from "next/image";

export const Card = ({ id, value, src }) => {
  const { flipped, setFlipped, isRunning, solved } = useGame();
  const isFlipped = flipped.includes(id);
  const isSolved = solved.includes(id);

  const handleClick = () => {
    if (isFlipped || !isRunning || isSolved) {
      return;
    }
    setFlipped((flipped) => {
      if (flipped.length === 2) {
        return [id];
      }
      return [...flipped, id];
    });
  };
  return (
    <div
      className={styles.boxes}
      style={{ opacity: isSolved ? 0 : 1 }}
      onClick={handleClick}
    >
      {isFlipped && <img src={src} />}
      {src}
    </div>
  );
};
