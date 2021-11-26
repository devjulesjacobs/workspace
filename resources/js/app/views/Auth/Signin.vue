<template>
    <div id="SignIn">
        <div class="min-h-screen flex">
            <div
                class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
            >
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img class="h-12 w-auto" src="/img/system/company-logo.png" alt="Workflow" />
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p class="mt-2 text-sm text-gray-600">
                            Or
                            <a
                                href="#"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >start your 14-day free trial</a>
                        </p>
                    </div>

                    <div class="mt-8">
                        <div class="mt-6">
                            <!-- LOGIN -->
                            <Login></Login>

                            <!-- Register -->
                            <!--                        <Register></Register>-->

                            <!-- ResetPassword -->
                            <!--                        <ResetPassword></ResetPassword>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block relative w-0 flex-1">
                <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src="/img/system/auth-background.jpeg"
                    alt
                />
            </div>

            <div>
                <!-- <Login v-if="views.Login"></Login> -->
                <Register v-if="views.Register"></Register>
                <ResetPassword v-if="views.ResetPassword"></ResetPassword>
            </div>
        </div>

<!--        <installation-screen></installation-screen>-->
    </div>
</template>

<script>
import Login from "../../components/Auth/Login.vue";
import Register from "../../components/Auth/Register.vue";
import ResetPassword from "../../components/Auth/ResetPassword.vue";
import InstallationScreen from "../../components/InstallationScreen/InstallationScreen";

import axios from "axios";
import { mapActions } from "vuex";

export default {
    name: "SignIn",
    data() {
        return {
            form: {
                email: "jules@gmail.com",
                password: "password",
            },
            views: {
                Login: true,
                Register: false,
                ResetPassword: false,
            },
        }
    },
    mounted() {
        this.checkInstallationStatus();
    },
    components: {
        Login,
        Register,
        ResetPassword,
        InstallationScreen
    },
    methods: {
        checkInstallationStatus() {
            if (window.matchMedia('(display-mode: standalone)').matches) {
                return true
            } else {
                return false;
            }
        }
    }
};
</script>
