export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

/**
 * 
 * @param a 第一個參數
 * @param b 第二個參數
 * @returns 返回兩個參數的和
 */
export const numSum = (a: number, b: number) => {
  return a + b;
}