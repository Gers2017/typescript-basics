"use strict";
class Friend {
    constructor(n, ft, fst) {
        this.name = n;
        this.friendType = ft;
        this.friendString = fst;
    }
    get cssClass() {
        return this.friendString.toLowerCase().split(" ").join("-");
    }
}
const friendship = ["Best friend", "Friend", "Known"];
function getFriendString(type) {
    return friendship[type];
}
const list = document.querySelector("#friends");
const addFriendBtn = document.querySelector("#addFriend");
const friendNameInput = document.querySelector("#friendName");
const friendTypeSelect = document.querySelector("#friendType");
addFriendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = friendNameInput.value;
    const friendType = parseInt(friendTypeSelect.value);
    if (name !== "" && friendType !== null) {
        const newFriend = new Friend(name, friendType, getFriendString(friendType));
        addFriend(newFriend);
    }
});
function addFriend(friend) {
    const li = createListItem(friend);
    list.append(li);
}
function createListItem({ name, friendType, friendString, cssClass }) {
    const li = document.createElement("li");
    li.textContent = `${name} - ${friendString}`;
    li.dataset.type = friendType.toString();
    li.classList.add(cssClass);
    return li;
}
