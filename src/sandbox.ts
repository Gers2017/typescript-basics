class Friend {
  name: string;
  friendType: number;
  friendString: string;

  constructor(n: string, ft: number, fst: string) {
    this.name = n;
    this.friendType = ft;
    this.friendString = fst;
  }

  public get cssClass(): string {
    return this.friendString.toLowerCase().split(" ").join("-");
  }
}
const friendship = ["Best friend", "Friend", "Known"];
function getFriendString(type: number): string {
  return friendship[type];
}

const list = document.querySelector("#friends") as HTMLUListElement;
const addFriendBtn = document.querySelector("#addFriend") as HTMLInputElement;
const friendNameInput = document.querySelector(
  "#friendName"
) as HTMLInputElement;
const friendTypeSelect = document.querySelector(
  "#friendType"
) as HTMLSelectElement;

addFriendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = friendNameInput.value;
  const friendType = parseInt(friendTypeSelect.value);
  if (name !== "" && friendType !== null) {
    const newFriend = new Friend(name, friendType, getFriendString(friendType));
    addFriend(newFriend);
  }
});

function addFriend(friend: Friend) {
  const li = createListItem(friend);
  list.append(li);
}

function createListItem({ name, friendType, friendString, cssClass }: Friend) {
  const li = document.createElement("li");
  li.textContent = `${name} - ${friendString}`;
  li.dataset.type = friendType.toString();
  li.classList.add(cssClass);
  return li;
}
