<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div :key="todo.id" v-for="todo in allTodos" class="todo">
        {{ todo.title }}
        <font-awesome-icon
          icon="trash-alt"
          class="icon"
          @click="deleteTodo(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

export default {
  name: "Todos",
  data() {
    return {
      "[trash-alt]": faTrashAlt,
    }
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos()
  },
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
