<template>
    <div ref="sheetEl"/>
</template>
<script>
import {ref, onMounted} from "vue";
import jspreadsheet from "jspreadsheet";
import "../../css/jspreadsheet.css";
import "../../css/jsuites.css";

export default {
    name: "Jspreadsheet",
    props: {
        data: Array,
        options: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {}
    },
    // mounted() {
    //     this.init();
    // },
    methods: {
        // init() {
        //     console.log('props: ', props);
        //     const options = props.options ? {...props.options} : {};
        //     console.log('options: ', options);
        //
        //     const sheetEl = ref(null);
        //     onMounted(() => {
        //         jspreadsheet(sheetEl.value, options);
        //     });
        //     return {sheetEl};
        // }
    },


    setup(props) {
        console.log('props: ', props);
        const options = props.options ? { ...props.options } : {};
        console.log('options: ', options);

        const sheetEl = ref(null);
        onMounted(() => {
            jspreadsheet(sheetEl.value, options);
        });
        return { sheetEl };
    },
    watch: {
        // data: this.$forceUpdate()
    }
};
</script>
