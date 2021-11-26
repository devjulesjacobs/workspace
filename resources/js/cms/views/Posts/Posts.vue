<template>
    <div id="Posts">

        <button @click="modals.showModalCreate = true"  type="button" class="float-right mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-theme">
            Nieuwe Post
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
        </button>
        <h1 class="text-3xl page-title leading-8 font-bold tracking-tight text-gray-900 mb-5">Posts</h1>


        <div>
            <h1 class="text-2xl page-title leading-8 font-bold tracking-tight text-gray-900 mb-3">Recent toegevoegd</h1>
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="relative">
                <div class="relative">
                    <div class="mx-auto grid gap-5 grid-cols-4">

                        <div v-for="post in posts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div class="flex-shrink-0">
                                <img class="h-48 w-full object-cover"
                                     :src="'/img/posts/'+post.image"
                                     alt="post.title">
                            </div>
                            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div class="flex-1">
                                    <p class="text-sm font-medium text-blue-800">
                                        <a href="#" class="hover:underline">
                                            Nieuws
                                        </a>
                                    </p>
                                    <a href="#" class="block mt-2">
                                        <p class="text-xl font-semibold text-gray-900">
                                            {{ post.title }}
                                        </p>
                                        <p class="mt-3 text-base text-gray-500">
                                            {{ post.body }}
                                        </p>
                                    </a>
                                </div>
                                <div class="mt-6 flex items-center">
                                    <button @click="getPost(post.id)" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Bewerken
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <ModalPostCreate v-show="modals.showModalCreate"
                         v-model="modals.showModalCreate"
                         @refreshPostsList="getPosts"
                         @hideModal="hideModalCreate"/>
    </div>
</template>

<script>
import ModalPostCreate from "../../components/ModalPostCreate/ModalPostCreate";

export default {
    name: "Posts",
    data() {
        return {
            modals: {
                showModalCreate: false
            },
            posts: [],
            currentPost: []
        }
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        hideModalCreate() {
            this.modals.showModalCreate = false;
        },

        getPosts() {
            axios.get('/api/posts')
                .then((res) => {
                    this.posts = res.data
                });
        },

        getPost(id) {
            axios.get('/api/post/' + id)
                .then((res) => {
                    this.currentPost = res.data
                })
        }
    },
    components: {
        ModalPostCreate
    },
}
</script>

<style scoped>

</style>
