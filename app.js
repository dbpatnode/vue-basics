// vm is short for view model
const vm = Vue.createApp({
    data() {
        return {
            header: 'First Vue Instance',
            firstName: 'Daniel',
            lastName: 'Patnode',
            message: 'this has an id of app1.',
            myUrl: 'https://www.google.com/search?q=daniel+patnode&safe=off&rlz=1C5CHFA_enUS726US727&ei=Vbm2YPWMMY2A3_QPu8yqoAQ&oq=Daniel+patnode&gs_lcp=Cgdnd3Mtd2l6EAEYADICCAAyBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgUIABCxAzoLCC4QsQMQxwEQowI6CAgAELEDEIMBOgoIABCxAxCDARBDOgQIABBDOgoILhCxAxCDARBDOgQILhBDOhAILhCxAxCDARDHARCjAhBDOgIILjoFCC4QsQM6CAguELEDEIMBOgcILhCxAxBDOggILhDHARCjAjoKCC4QsQMQQxCTAjoLCC4QsQMQgwEQkwI6CAguELEDEJMCOggIABAWEAoQHlDiEliYIWD7LGgBcAJ4AYABxwOIAdUgkgEJMC4yLjcuNC4xmAEAoAEBqgEHZ3dzLXdpesgBCcABAQ&sclient=gws-wiz'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app1')
