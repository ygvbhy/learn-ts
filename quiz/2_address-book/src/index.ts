interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve: Function) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  // constructor 는 기본적으로 타입이 선언되지 않는다.
  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    // 기본적으로 response 의 타입이 정해져 있기 때문에 선언할 필요는 없지만 해도 됨
    // 아래의 주석은 프리티어 관련 오류로 선언 해둔거
    // eslint-disable-next-line prettier/prettier
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string) {
    return this.contacts.filter((contact: Contact) => contact.name === name);
  }

  findContactByAddress(address: string) {
    return this.contacts.filter(
      (contact: Contact) => contact.address === address
    );
  }

  findContactByPhone(phoneNumber: number, phoneType: string) {
    return this.contacts.filter(
      (contact: Contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  displayListByName() {
    return this.contacts.map((contact: Contact) => contact.name);
  }

  displayListByAddress() {
    return this.contacts.map((contact: Contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
