function debounce(fn, wait = 0, options = {}) {
  let currentBatchProcess;
  return function modifiedVersion() {
    if (currentBatchProcess) {
      clearTimeout(currentBatchProcess);
      currentBatchProcess = setTimeout(fn, wait);
      return;
    }
    currentBatchProcess = setTimeout(fn, wait);
  };
}

module.exports = debounce;
