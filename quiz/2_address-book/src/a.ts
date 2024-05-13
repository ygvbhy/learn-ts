function fetchItems(): string[] {
  let items = ["a", "b", "c"];
  return items;
}
let result = fetchItems();
console.log(result);

function fetchItems1(): Promise<string[]> {
  let items = ["a", "b", "c"];
  // new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems1();
