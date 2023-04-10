<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-task="$emit('toggle-add-task')" :text="showAddTask?'Close Task':'Add Task'"
         :color="showAddTask?'red':'green'"
        v-show="homePage"
         />
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name:'Header',
    props:['title','showAddTask'],
    components:{
        Button
    },
    computed:{
        homePage(){
            console.log(this.$route.path)
            return this.$route.path==='/'
        }
    }

}
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>