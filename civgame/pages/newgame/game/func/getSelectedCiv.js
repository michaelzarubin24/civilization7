export const getSelectedCiv = () => {
  const selectedCivString = localStorage.getItem("selectedCiv");
  if (selectedCivString) {
    const selectedCiv = JSON.parse(selectedCivString);

    return selectedCiv;
  }
  return null;
};
