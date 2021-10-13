<template>

    <div class="row">
        <div class="col-md-6"><h4>List of posts</h4></div>
        <div class="col-md-6">
            <router-link :to="{name: 'create-post'}" class="btn btn-success">New</router-link>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-6" v-for="post in posts" :key="post.id">
            <OnePost :post="post" />
        </div>
    </div>
</template>
<script>
    import {ref} from 'vue';
    import OnePost from '../components/OnePost';
    // import {db} from '../firebase/config'
    import loadPosts from './../composables/posts/getPosts';
    
export default {
    components: {OnePost},
    setup() {
        // const posts = ref([]);

        // const load = async () =>{
        //     // hnaya anjibo lcollection li smitha posts
        //     const res = await db.collection('posts').get();
        //     // hnaya darna boucle 3la ga3 docs (les lignes) fi had lcollection o rotouena data li fihom + id dyal kola ligne o7atina hadchi fi table li 3adna smito posts
        //     posts.value = res.docs.map(doc => {
        //         return {...doc.data(),id: doc.id}
        //     })
        // }

        // hnaya nadamna lcode dyalna o7atinah fi fichier smito getPosts li darna lih import okayn wast dossier criyinah saminah composables ohnaya 3ayatna 3la lmethede li criyina fih o7atina dakchi li katrotourni fi des variables hnaya bach nkhadmo bihom
        const {posts, error, load} = loadPosts();
        
        load();

        return {posts}
    }
}
</script>
<style lang="">
    
</style>