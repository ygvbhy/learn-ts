interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }
// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "google.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: DropdownItem<string | number>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag?.appendChild(item);
});

numberOfProducts.forEach(function (number) {
  const item = createDropdownItem(number);
  const selectTag = document.querySelector("#product-dropdown");
  selectTag?.appendChild(item);
});
