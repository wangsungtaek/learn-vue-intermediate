const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    console.log(payload);
    localStorage.removeItem(payload.todoItem);
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (stats, payload) => {
    let todoItem = payload.todoItem;
    let index = payload.index;

    stats.todoItems[index].completed = !stats.todoItems[index].completed;
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const clearAll = (stats) => {
    localStorage.clear();
    stats.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAll }