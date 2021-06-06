const App = {
    data() {
      return { 
        message: 'Tasks you have:',
        placeholderString: 'Add a note',
        inputValue: '', 
        counter: 0,
        todos: [ 'Learn JavaScript', 'Learn Vue', 'Learn React' ]
        }
    },
    methods: {
        // заменяем этот блок дерективой v-model
        // inputChangeHandler(event){
        //     this.inputValue = event.target.value
        // },
        addNewNote(){
            if(this.inputValue !== ''){ 
                this.todos.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(i){
            this.todos.splice(i, 1)
        }
    },
    computed: {
        doubleCountComputed(){
            return this.todos.length * 2 //решаем проблему производительности через computed
        }
    },
    watch:{
        // inputValue(value){
            
        // }
    }
}
Vue.createApp(App).mount('#app')