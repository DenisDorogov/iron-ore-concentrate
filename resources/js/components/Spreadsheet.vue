<template>
    <div ref="sheetEl" />
</template>

<script>
import { ref, onMounted } from "vue";
import jspreadsheet from "jspreadsheet";
import "../../css/jspreadsheet.css";
import "../../css/jsuites.css";

export default {
    name: "Jspreadsheet",
    props: {
        options: {
            type: Object,
            require: true,
        },
    },
    setup(props) {
        const options = props.options ? { ...props.options } : {};
        const sheetEl = ref(null);
        onMounted(() => {
            jspreadsheet(sheetEl.value, options);
        });
        return { sheetEl };
    },
};
</script>
