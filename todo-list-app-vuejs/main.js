Vue.component('todo-input', {
    methods: {
        addTodo: function () {
            this.$emit('clickedadd', this.newTodo);
        }
    },
    data: function () {
        return {
            newTodo: '',
        }
    },
    template: `
        <div>
            <input v-model="newTodo">
            <button v-on:click="addTodo">Add</button>        
        </div>
      `
})

Vue.component('todo-item', {
    props: ['todo'],
    data: function () {
        return {
          item: this.todo
        }
    },
    methods: {
        removeTodo: function () {
            this.$emit('clickedremoved', this.item.id);
        }
    },
    template: `
        <div>    
            <span class="item">{{ todo.text }}</span>
            <button v-on:click="removeTodo">Remove</button>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    methods: {
        addItemToList: function (item) {
            const todo = {
                id: this.index,
                text: item,
            };
            this.todoList.push(todo);
            this.index += 1;
        },
        removeItemFromList: function (itemToDeleteId) {            
            this.todoList = this.todoList.filter(item => item.id !== itemToDeleteId);
        }
    },
    data: {
        message: 'todo-list-app-vuejs',
        todoList: [],
        index: 0,
    }
})