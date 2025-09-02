import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    marginTop: 25,
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 12,
    color: "#333",
  },
  searchControl: {
    marginTop: 5,
    borderWidth: 1.1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 15,
    backgroundColor: "white",
  },
  searchButton: {
    backgroundColor: "#f39923ff",
    borderRadius: 50,
    padding: 10,
  },
  filterGroup: {
    flexDirection: "row",
    padding: 10,
  },
  filterContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
  },
  listingContainer: {
    flex: 1,
  },
  paginationContainer: {
    padding: 10,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
  },
  showMoreButtonText: {
    color: "white",
  },
});

export { styles };
