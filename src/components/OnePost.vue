<template >
        <h2 @click="show = !show">{{post.title}}</h2>
        <div v-if="show">
           <p>{{extract}}</p> 
           <div class="well">
               <span v-for="tag in post.tags" class="badge bg-primary me-3">#{{tag}}</span>
           </div>
           <div class="my-3">
               <router-link :to="{name: 'show-post', params: {id: post.id}}" class="btn btn-sm btn-info">Show</router-link>
               <button class="btn btn-sm btn-warning ms-3">Edit</button>
               <button @click="deletePost" class="btn btn-sm btn-danger ms-3">Delete</button>
           </div>
        </div>
</template>
<script>
import {ref,computed,onMounted,onUpdated,onUnmounted} from 'vue';
import {db} from './../firebase/config'
export default {
    props: ["post"],
    setup(props) {
        const show = ref(true);

        // methods
        const deletePost = async () =>{
            try {
              const  res = await db.collection('posts').doc(props.post.id).delete();
            } catch (error) {
                console.log(error.message);
            }
        }

        const extract = computed(() => props.post.content.substring(0,50) + ' ...');

        return {extract,show,deletePost}
    }
}
</script>
<style lang="">
    
</style>