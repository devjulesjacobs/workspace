<template>
    <div>
        <!-- News Feed -->
        <div class="news-feed mb-5 py-5 pl-5">
            <div class="news-feed-scroll">
                <div class="news-item" @click="showDetail">
                    <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="News-1">
                    <div class="image-overlay"></div>
                    <div class="news-header">
                        <h1 class="news-title">Voorbeeld titel voor een news post!</h1>
                        <div class="details-row">
                            <span class="details-icon material-icons-outlined">calendar_today</span>
                            <span class="details-text">24 november</span>
                        </div>
                    </div>
                </div>

                <div class="news-item" @click="showDetail">
                    <img src="https://images.pexels.com/photos/955405/pexels-photo-955405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="News-2">
                    <div class="image-overlay"></div>
                    <div class="news-header">
                        <h1 class="news-title">Voorbeeld titel</h1>
                        <div class="details-row">
                            <span class="details-icon material-icons-outlined">calendar_today</span>
                            <span class="details-text">24 november</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- News Feed Details Page -->
        <div class="news-feed-detail">

            <div class="detail-header mb-3">
<!--                <span class="font-bold text-blue-800">News</span>-->
                <div @click="closeNewsDetail">
                    <span class="float-right">
                    <span class="material-icons-outlined">close</span>
                    </span>
                </div>
            </div>

            <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none news-post">
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div class="flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
                    </div>
                    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-indigo-600">
                                <a href="#" class="hover:underline">
                                    Article
                                </a>
                            </p>
                            <a href="#" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    Boost your conversion rate
                                </p>
                                <p class="mt-3 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                                </p>
                            </a>
                        </div>
                        <div class="mt-6 flex items-center">
                            <div class="flex-shrink-0">
                                <a href="#">
                                    <span class="sr-only">Roel Aufderehar</span>
                                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                </a>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-gray-900">
                                    <a href="#" class="hover:underline">
                                        Roel Aufderehar
                                    </a>
                                </p>
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <time datetime="2020-03-16">
                                        Mar 16, 2020
                                    </time>
                                    <span aria-hidden="true">
                                          &middot;
                                        </span>
                                    <span>
                                          6 min read
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "NewsFeed",
    data() {
        return {
            posts: []
        }
    },

    mounted() {
    },

    methods: {
        fetchPosts() {
            axios.get('/api/posts')
                .then((res) => { console.log(res) })
                .catch((e) => { console.log('Error:', e) })
        },

        showDetail() {
            $('.news-feed-detail').addClass('show');
        },

        closeNewsDetail() {
            $('.news-feed-detail').removeClass('show');
        }
    }
}
</script>

<style scoped>

</style>
