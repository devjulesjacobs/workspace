<template>
    <div class="state-home">
        <h1 class="page-title text-3xl font-bold px-5 pt-5">Home</h1>
        <p class="px-5 text-gray-400">Welcome, {{ user.name }}</p>

        <news-feed></news-feed>

        <submitted-emballages class="px-5"></submitted-emballages>

        <div class="px-5">
            <a href="/cms" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Go to CMS
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import SubmittedEmballages from "../../components/SubmittedEmballages/SubmittedEmballages";

export default {
    name: 'Home',

    components:{SubmittedEmballages, NewsFeed},

    mounted() {
        window.LoadingScreen('hide');
    },

    computed: {
        ...mapGetters({
            authenticated: "auth/authenticated",
            user: "auth/user",
        }),
    }
};
</script>
