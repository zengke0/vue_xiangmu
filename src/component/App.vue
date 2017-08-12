<template>
    <section>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </section>
</template>
<script>
// 导入头部和底部组件
import Cheader from"./home/header.vue";
import Cfooter from "./home/footer.vue";
export default {
//   把上面的组件嵌套进跟组件中,因为头部和底部是不变
    components:{
        "v-header":Cheader,
        "v-footer":Cfooter
    }
}
</script>
<style>
    @import url("../style/index.less");
</style>
