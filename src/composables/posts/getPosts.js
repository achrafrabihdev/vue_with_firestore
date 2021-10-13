import {ref} from 'vue';
import {db} from './../../firebase/config'

const loadPosts = () => {
        
        const posts = ref([]);
        const error = ref(null);

        const load = async () =>{
            try {   
                await db.collection('posts').onSnapshot(snap =>{
                    posts.value = snap.docs.map(doc => {
                        return {...doc.data(),id: doc.id}
                    })
                });
            } catch (err) {
                error.value = err.message;
            }
    }
    return {posts,error,load}
}

export default loadPosts;