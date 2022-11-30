<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import useSignup from '@/composables/useSignup';
import { ref } from '@vue/reactivity'
export default {
    setup(props,context){
        // REFS
        const displayName = ref('');
        const email = ref('');
        const password = ref('');
        const {error,signup} = useSignup();
        
        const handleSubmit = async  () => {
            await signup(email.value,password.value,displayName.value);
            if(!error.value){
              context.emit('signup');
            }
        }

        return {displayName,email,password,handleSubmit,error};

    }

}
</script>

<style>

</style>