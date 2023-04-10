<template>
    <div :class="[task.reminder? 'reminder': '','task']" @dblclick="$emit('toggle-reminder')">
        <h3>{{ task.text }}</h3>
        <p>{{ task.day }}</p>
        <button @click="$emit('delete-task',task.id)" class="fas fa-times">Eliminar</button>
    </div>

    
</template>

<script>
import Button from './Button.vue'

export default{
  components: { Button },
    name:'Task',
    props:{
        task:Object
    }

}
</script>
<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>