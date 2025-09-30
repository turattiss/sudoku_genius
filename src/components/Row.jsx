import { View, StyleSheet } from "react-native";
import Cell from "./Cell";

export default function Row({
  rowIndex,
  rowValue,
  selectedCell,
  setSelectedCell,
  celulasEditaveis,
  solution,
}) {
  return (
    <View style={styles.row}>
      {rowValue.map((cellValue, colIndex) => {
        const estaErrada = cellValue !== 0 && cellValue !== solution[colIndex];

        return (
          <Cell
            key={colIndex}
            colIndex={colIndex}
            rowIndex={rowIndex}
            value={cellValue}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            celulasEditaveis={celulasEditaveis}
            erro={estaErrada} 
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 0,
  },
});
