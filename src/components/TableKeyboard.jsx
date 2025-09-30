import { View, StyleSheet } from "react-native";
import Row from "./Row";
import React, { useState, useEffect } from "react";
import {
  preencher,
  celulasEditaveis,
  preencherCelulaNoBoard,
} from "../utils/sudoku";
import Keyboard from "./Keyboard";
import Lifes from "./Lifes";
import LostWarn from "./LostWarn";
import BackButton from "./BackButton";
import ExitButton from "./ExitButton";
import WinWarn from "./WinWarn";

export default function TableKeyboard() {
  const [cellSelecionada, setCellSelecionada] = useState({
    row: null,
    col: null,
  });

  const [celulasJogo, setCelulasJogo] = useState([]);
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [vidas, setVidas] = useState(3);
  const [completou, setCompletou] = useState(false);


  useEffect(() => {
    const newBoard = Array(9)
      .fill(0)
      .map(() => Array(9).fill(0));

    preencher(newBoard);

    setSolution(newBoard.map((row) => [...row]));

    const editaveis = celulasEditaveis();
    setCelulasJogo(editaveis);

    editaveis.forEach((c) => {
      newBoard[c.row][c.col] = 0;
    });

    setBoard(newBoard);
  }, []);

  function preencherCelula(valor) {
    if (cellSelecionada.row === null || cellSelecionada.col === null) return;

    const { row, col } = cellSelecionada;

    const isEditable = celulasJogo.some((c) => c.row === row && c.col === col);
    if (!isEditable) return;

    setBoard((prevBoard) => {
      const newBoard = preencherCelulaNoBoard(prevBoard, row, col, valor);

      const estaErrada = valor !== solution[row][col];
      if (estaErrada) {
        setVidas((v) => v - 1);
      }

      return newBoard;
    });
  }

  function desfazerJogada() {
    if (cellSelecionada.row === null || cellSelecionada.col === null) return;

    const { row, col } = cellSelecionada;

    const isEditable = celulasJogo.some((c) => c.row === row && c.col === col);
    if (!isEditable) return;

    setBoard((prevBoard) => {
      const newBoard = preencherCelulaNoBoard(prevBoard, row, col, 0);

      return newBoard;
    });
  }

  useEffect(() => {
    const venceu = board.every((row, rowIndex) =>
      row.every(
        (cellValue, colIndex) => cellValue == solution[rowIndex][colIndex]
      )
    );
    setCompletou(venceu);
  }, [board, solution]);

  return (
    <View style={styles.jogo}>
      <LostWarn visible={vidas <= 0} />
      <WinWarn visible={completou} />
      <Lifes vidas={vidas} />
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
              solution={solution[rowIndex]}
            />
          ))}
      </View>
      <Keyboard preencherCelula={preencherCelula} />
      <View style={styles.backExit}>
        <BackButton onPress={desfazerJogada} />
        <ExitButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  jogo: {
    flexDirection: "column",
    gap: 7,
  },
  backExit: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
