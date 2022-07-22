<template>
    <BookDetailsTemplate />
</template>

<script>
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
    layout: 'ibook',
    async asyncData({ params }) {
        await books.show({ id: params.id })
    },
    head() {
        return {
            title: books.$single.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: books.$single.description
                }
            ]
        }
    }
})

</script>

<style lang="scss" scoped>
</style>