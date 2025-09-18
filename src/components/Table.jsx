import { View, StyleSheet } from "react-native";
import Row from "./Row";
import React, { useState } from "react";

export default function Table() {
  const [cellSelecionada, setCellSelecionada] = useState({
    row: null,
    col: null,
  });

  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
    preencher(initialBoard);
    return initialBoard;
  });

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function valido(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }

    let startRow = row - (row % 3);
    let startCol = col - (col % 3);

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }

    return true;
  }

  function preencher(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
          for (let num of numbers) {
            if (valido(board, row, col, num)) {
              board[row][col] = num;

              if (preencher(board)) {
                return true;
              }

              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  return (
    <View style={styles.table}>
      {Array.from({ length: 9 }).map((_, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          rowValue={board[rowIndex]}
          selectedCell={cellSelecionada}
          setSelectedCell={setCellSelecionada}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
