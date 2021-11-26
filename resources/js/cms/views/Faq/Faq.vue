<template>
    <div id="Faq">
        <button @click="showSlide('create')"  type="button" class="bg-blue-theme float-right mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-theme">
            Nieuwe FAQ
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
        </button>

        <h1 class="text-3xl page-title leading-8 font-bold tracking-tight text-gray-900 mb-5">Frequently asked questions</h1>

        <section aria-labelledby="faq-wrapper" class="flex">
            <div v-for="faq in faqs" :key="faq.id" class="mr-4 rounded-lg overflow-hidden">
                <div class="bg-white p-4">
                    <dt class="text-base font-medium text-gray-900">
                        {{ faq.question }}
                    </dt>
                    <dd class="mt-3 text-sm text-gray-500">
                        {{ faq.answer }}
                    </dd>
                </div>
                <div class="bg-gray-100 p-4">
                    <button @click="setEditFaq(faq.id)" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Bewerken
                    </button>
                </div>
            </div>
        </section>

        <SlideFaq v-show="slide.show"
                  :views="slide.views"
                  :editFaq="editFaq"
                  @refresh="getFaqs"
                  @hide="hideSlide('create')" />
    </div>
</template>

<script>
import SlideFaq from "../../components/FaqSlideCreate/SlideFaq";

export default {
    name: "Faq",
    data() {
        return {
            faqs: [],
            editFaq: [],
            slide: {
                show: false,
                views: {
                    create: false,
                    edit: false
                }
            }
        }
    },
    mounted() {
        this.getFaqs()
    },
    methods: {
        getFaqs() {
            axios.get('/api/faqs')
            .then((res) => {
                this.faqs = res.data
            })
        },
        showSlide(type) {
            // Set defaults
            this.slide.views.create = false;
            this.slide.views.edit = false;
            // Set show
            this.slide.views[type] = true;
            // Show slide
            this.slide.show = true;
        },
        setEditFaq(id) {
            axios.get('/api/faq/'+id)
            .then((res) => {
                this.editFaq = res.data;
                this.showSlide('edit');
            })
        },
        hideSlide() { this.slide.show = false }
    },
    components: {
        SlideFaq
    }
}
</script>

<style scoped>

</style>
