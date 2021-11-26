<template>
    <div class="BottomNav">
        <div class="flex">
            <router-link v-for="item in navItems" :key="item.to" :to="{ name: item.to }" class="nav-item block flex-auto text-center">
                <div class="icon material-icons">{{ item.icon }}</div>
                <div class="title">{{ item.title }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "BottomNav",
    data() {
        return {
            navItems: [
                {
                    to: 'Home',
                    title: 'Home',
                    icon: 'home'
                },
                {
                    to: 'Cables',
                    title: 'Kabels',
                    icon: 'search'
                },
                {
                    to: 'Emballage',
                    title: 'Emballage',
                    icon: 'note_add'
                },
                {
                    to: 'Cpr',
                    title: 'CPR',
                    icon: 'calculate'
                },
                {
                    to: 'Account',
                    title: 'Account',
                    icon: 'person'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
