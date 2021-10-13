<template >
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form @submit.prevent="persistPost(post)">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="post.title" id="title" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <textarea v-model="post.content" class="form-control" id="content" cols="30" rows="3"></textarea>
                </div>
                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {reactive,ref} from 'vue';
import {db} from './../firebase/config'
export default {
    setup() {
        const post = reactive({
            title: '',
            content: '',
            tags: ['javascript']
        })
        const error = ref(null);
        const router = useRouter();

        // methods
        const persistPost = async (post) => {
            try {
                // .add bach kanzido doc (ligne) jdid fi lcollection li kanpointiw 3liha
                const res = await db.collection('posts').add(post);
                router.push({name: 'Home'});
            } catch (err) {
                error.value = err.message;
            }
        }

        return {post,persistPost}
    }
}
</script>
<style lang="">
    
</style>