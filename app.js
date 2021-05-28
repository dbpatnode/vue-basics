Vue.createApp({
    data() {
        return {
            header: 'First Vue Instance',
            firstName: 'Daniel',
            lastName: 'Patnode',
            message: 'this has an id of app1.'
        }
    }
}).mount('#app1')

Vue.createApp({
    data() {
        return {
            header: 'Second Vue Instance',
            firstName: 'Yasmine',
            lastName: 'El Tabib',
            message: 'this has an id of app2.'
        }
    }
}).mount('#app2')