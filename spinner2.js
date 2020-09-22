const spinnerSymbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner = () => {
  let timer = 100;
  for (let i = 0; i < spinnerSymbols.length; i++) {
    timer += 200
    setTimeout(() => {
      process.stdout.write(spinnerSymbols[i]);
    }, timer);
  }
};

console.log(spinner());