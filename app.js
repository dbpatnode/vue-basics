// vm is short for view model
const vm = Vue.createApp({
    data() {
        return {
            header: 'First Vue Instance',
            firstName: 'Daniel',
            lastName: 'Patnode',
            message: 'this has an id of app1.'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app1')
