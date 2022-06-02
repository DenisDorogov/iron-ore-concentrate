<template>
    <Jspreadsheet :options="Options" />
</template>

<script>
import Jspreadsheet from "./Jspreadsheet";

export default {
    components: {
        Jspreadsheet,
    },
    props: ['tableData'],

    setup(props) {
        const Options = {
            worksheets: [
                {
                    search: true,
                    data: props.tableData,
                        // [ [42, 42, 42, 42],[42, 42, 42, 42],],
                    columns: [
                        { title: "Date", width: 250 },
                        { title: "Fe, %", width: 100 },
                        { title: "Si, %", width: 100 },
                        { title: "Al, %", width: 100 },
                        { title: "Ca, %", width: 100 },
                        { title: "S, %", width: 100 },
                    ],
                },
            ],
            license:
                "ZmQ4NWYyYjVmYTBjMDQwMDA3NjUwZjUwNTA4MDkwYWYzNWQ4OWE3MjQyZjJiZDU1YzM1MjA4OTI5OTEwZDlkMTNiMThkNzQ3YzNjZWI2ZGNjM2MyZGIwNDBmMzZmYzQwYWU1Y2EwOTEyMGE4MzU2M2Q2MjMzMTQ2MTUwNWEzOTIsZXlKdVlXMWxJam9pY0dGMWJDNW9iMlJsYkNJc0ltUmhkR1VpT2pFMk5qQTFNVGd3TURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpYW5Od2NtVmhaSE5vWldWMExtTnZiU0lzSW1OellpNWhjSEFpTENKMVpTNWpiMjB1WW5JaUxDSjFibWwwWldRdVpXUjFZMkYwYVc5dUlpd2liRzlqWVd4b2IzTjBJbDBzSW5Cc1lXNGlPaUl6SWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luQmhjbk5sY2lJc0luTm9aV1YwY3lJc0ltWnZjbTF6SWl3aWNtVnVaR1Z5SWl3aVptOXliWFZzWVNKZGZRPT0=",
        };
        return { Options };
    },
};
</script>
