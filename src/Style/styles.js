import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  itemHeader: {
    color: "#000",
    fontSize: 24,
  },
  itemImage: {
    backgroundColor: "transparent",
    height: 50,
    width: 50,
  },
});

export default styles;
