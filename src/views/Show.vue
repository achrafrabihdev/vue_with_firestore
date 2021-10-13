<template>
    <div v-if="error" class="alert alert-danger my-3">
        <strong>{{error}}</strong>
    </div>
   <h1>{{post.title}}</h1>
   <p>{{post.content}}</p>
   <div class="my-3">
       <span v-for="(tag,index) in post.tags" :key=index class="badge bg-primary me-3">#{{tag}}</span>
   </div>
   <button @click="deletePost(post.id)" class="btn btn-danger mt-3">Delete</button>
</template>
<script>
import {useRoute,useRouter} from 'vue-router'
import loadPost from './../composables/posts/getOnePost'
import {db} from './../firebase/config'
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const {post, error ,load} = loadPost();

        const id = route.params.id;

        load(id);

        const deletePost = async (id) => {
            try {
                // ila ghina nsupprimiw chi doc (ligne) men lcollerction li kanpontiw 3liha kandiro ddelete obi nafs tari9a kandiro l update
              const  res = await db.collection('posts').doc(id).delete();
              router.push({name: 'Home'});
            } catch (err) {
                error.value = err.message;
            }
        }

        return {post,error,deletePost}
    }
}
</script>
<style lang="">
    
</style>