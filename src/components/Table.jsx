import { View, StyleSheet } from "react-native";
import Row from "./Row";
import React, { useState, useEffect } from "react";
import { preencher, celulasEditaveis } from "../utils/sudoku";

export default function Table() {
  const [cellSelecionada, setCellSelecionada] = useState({
    row: null,
    col: null,
  });

  const [celulasJogo, setCelulasJogo] = useState([]);

  useEffect(() => {
    setCelulasJogo(celulasEditaveis());
  }, []);

  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoard = Array(9)
      .fill(0)
      .map(() => Array(9).fill(0));

    preencher(newBoard);
    setBoard(newBoard);
  }, []);

  return (
    <View style={styles.table}>
      {board.length > 0 &&
        board.map((rowValue, rowIndex) => (
          <Row
            key={rowIndex}
            rowIndex={rowIndex}
            rowValue={rowValue}
            selectedCell={cellSelecionada}
            setSelectedCell={setCellSelecionada}
            celulasEditaveis={celulasJogo}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
