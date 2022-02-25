const storage = {
    fatch () {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
                
            }
        }
        return arr;
    },
};

const state = {
    todoItems: storage.fatch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem (state, todoItem) {
        const obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    
    removeOneItem (state, payload) {
        console.log(payload);
        localStorage.removeItem(payload.todoItem);
        state.todoItems.splice(payload.index, 1);
    },
    
    toggleOneItem (stats, payload) {
        let todoItem = payload.todoItem;
        let index = payload.index;
    
        stats.todoItems[index].completed = !stats.todoItems[index].completed;
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    
    clearAll (stats) {
        localStorage.clear();
        stats.todoItems = [];
    }    
};

export default {
    state,
    getters,
    mutations
}