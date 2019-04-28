<template>
    <div class="">
        Type: {{type}}
        <!-- {{items}} -->
        <Item 
            v-for="(item, index) in items"
            v-bind:key="index"
            v-bind:passed-item="item"
            v-bind:type="type"
        />
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    data() {
        return {
            type: this.$route.params.type,
            //the above pulls the $route, made available by vue-router, which is the URL path
            // the params object is the most useful, and then we access the type within the path
            // the params object will have the query string we want to read dynamically as links in the app are clicked
            items: []
        }
    },
    // Below watch function will monitor the URL path for changes
    watch: {
        //'$route': 'change' //whenever the URL path or route changes, the defined function will be called
        '$route': 'fetchItems'
    },
    methods: {
        change() { //simple method to show that when the link is clicked the type variable is dynamically captured and changed
            this.type = this.$route.params.type
        },
        fetchItems() {
            this.items = [] // start from a blank slate
            this.type = this.$route.params.type
            let initial_ids = [1, 13, 14]

            for (let i in initial_ids) {
                let id = initial_ids[i]
                console.log('id',id) //check devtools console to check API calls
                fetch(`https://swapi.co/api/${this.type}/${id}`,{
                    method: 'GET'
                })
                .then(response => response.json())
                .then(json => this.items.push(json))
            }
        },
        created() {
            this.fetchItems()
        }
    },
    components: {
        Item
    }
}
</script>

