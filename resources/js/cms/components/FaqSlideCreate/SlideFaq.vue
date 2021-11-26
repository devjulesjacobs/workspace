<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed inset-0 overflow-hidden z-50" aria-labelledby="slide-over-title" role="dialog"
         aria-modal="true">
        <div class="absolute inset-0 overflow-hidden bg-gray-500 bg-opacity-75 transition-opacity">
            <!-- Background overlay, show/hide based on slide-over state. -->
            <div class="absolute inset-0" aria-hidden="true">
                <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">

                    <div v-if="views.create" class="w-screen max-w-2xl">
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div class="px-6 mb-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-lg font-medium text-gray-900">
                                        Nieuwe FAQ
                                    </h2>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button @click="hideSlide" type="button"
                                                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="sr-only">Close panel</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <form method="post" enctype="multipart/form-data">
                                <div class="px-6 mb-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                                            Question
                                        </label>
                                        <div class="mt-1">
                                            <input v-model="form.create.question" type="text" required
                                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>
                                </div>
                                <div class="px-6 mb-6">
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                        Answer
                                    </label>
                                    <div class="mt-1">
                                        <textarea v-model="form.create.answer" rows="6"
                                                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">Het antwoord op de vraag.</p>
                                </div>

                                <div class="px-6">
                                    <button @click.prevent="createFaq" type="button"
                                            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Aanmaken
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div v-if="views.edit" class="w-screen max-w-2xl">
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div class="px-6 mb-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-lg font-medium text-gray-900">
                                        Edit FAQ
                                    </h2>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button @click="hideSlide" type="button"
                                                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="sr-only">Close panel</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <form method="post" enctype="multipart/form-data">
                                <div class="px-6 mb-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                                            Question
                                        </label>
                                        <div class="mt-1">
                                            <input v-model="editFaq.question" type="text" required
                                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>
                                </div>
                                <div class="px-6 mb-6">
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                        Answer
                                    </label>
                                    <div class="mt-1">
                                        <textarea v-model="editFaq.answer" rows="6"
                                                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">Het antwoord op de vraag.</p>
                                </div>

                                <div class="px-6">
                                    <button @click.prevent="updateFaq(editFaq.id)" type="button"
                                            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Opslaan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "SlideFaq",
    data() {
        return {
            form: {
                create: {
                    question: null,
                    answer: null
                }
            }
        }
    },
    mounted() {

    },
    methods: {
        createFaq() {
            axios.post('/api/faqs', this.form.create)
                .then((res) => {
                    this.$emit('refresh');
                    this.$emit('hide');
                }).catch((err) => {
            })
        },

        updateFaq(id) {
            axios.patch('/api/faq/'+id, this.editFaq)
                .then((res) => {
                    this.$emit('refresh');
                    this.$emit('hide');
                })
        },

        hideSlide: function () {
            this.$emit('hide');
        },
    },
    props: {
        views: {
            create: false,
            edit: false
        },
        editFaq: {
            question: null,
            answer: null
        }
    }
}
</script>

<style scoped>

</style>
