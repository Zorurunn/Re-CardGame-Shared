"use client";
import { createContext, useContext, useEffect, useState } from "react";
import styles from "../page.module.css";
import { Board } from "./Board";

const images = {
  1: "/1.jpg",
  2: "/pop2.jpg",
  3: "/3.jpg",
  4: "/pop4.jpg",
  5: "/5.jpg",
  6: "/6.jpg",
  7: "/7.jpg",
  8: "/minions.jpg",
};

const generateBoard = () => {
  const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  const board = [];
  for (let i = 0; i < 16; i++) {
    const value = values.splice(
      Math.floor(Math.random() * (values.length - 1)),
      1
    )[0];
    board.push({
      id: i,
      value,
      src: images[value],
    });
  }
  return board;
};
const GameContext = createContext();
export const Game = () => {
  const [data, setData] = useState(() => generateBoard());
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [isRunning, setIsRunnig] = useState(true);

  useEffect(() => {
    if (solved.length == 16) {
      alert("You win Boy ");
    }
  }, [solved.length]);
  useEffect(() => {
    if (flipped.length == 2) {
      setIsRunnig(false);
      setTimeout(() => {
        const [second, first] = flipped;
        if (data[first].value === data[second].value) {
          setSolved((solved) => [...solved, first, second]);
        }
        setFlipped([]);
        setIsRunnig(true);
      }, 800);
    }
  }, [flipped]);
  return (
    <GameContext.Provider
      value={{
        data,
        setData,
        solved,
        setSolved,
        flipped,
        setFlipped,
        isRunning,
        setIsRunnig,
      }}
    >
      <div className={styles.container}>
        <Board />
      </div>
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
