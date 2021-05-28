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


// we dont need use vm.data.firstName (because proxying)
// this waits for two seconds before changing firtName Value.
// setTimeout(() => {
//     vm.firstName = 'NEW NAME!!!'
// }, 2000)

// Vue.createApp({
//     data() {
//         return {
//             header: 'Second Vue Instance',
//             firstName: 'Yasmine',
//             lastName: 'El Tabib',
//             message: 'this has an id of app2.'
//         }
//     }
// }).mount('#app2')