export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ playList: [1, 2, 3] });
    }, 200);
  });
}
