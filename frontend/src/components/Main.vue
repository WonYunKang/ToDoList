<template>
    <div class="Main">
        <vue-header/>
        <JoinLogin/>

        <Footer/>
    </div>
</template>
<script>
import JoinLogin from '@/components/JoinLogin'
import VueHeader from'@/components/header'
import Footer from'@/components/footer'

export default {
    name : "Main",
    components: {
        JoinLogin : JoinLogin,
        vueHeader : VueHeader,
        Footer : Footer,
       
    }
}
</script>
<style scoped>
    .Main{background-color: aquamarine};
</style>


