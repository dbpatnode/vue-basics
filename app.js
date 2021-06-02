// vm is short for view model
const vm = Vue.createApp({
    data() {
        return {
            header: 'First Vue Instance',
            firstName: 'Daniel',
            middleName: '',
            lastName: 'Patnode',
            message: 'this has an id of app1.',
            myUrl: 'https://www.google.com/search?q=daniel+patnode&safe=off&rlz=1C5CHFA_enUS726US727&ei=Vbm2YPWMMY2A3_QPu8yqoAQ&oq=Daniel+patnode&gs_lcp=Cgdnd3Mtd2l6EAEYADICCAAyBggAEBYQHjIGCAAQFhAeOgcIABBHELADOgcIABCwAxBDOgUIABCxAzoLCC4QsQMQxwEQowI6CAgAELEDEIMBOgoIABCxAxCDARBDOgQIABBDOgoILhCxAxCDARBDOgQILhBDOhAILhCxAxCDARDHARCjAhBDOgIILjoFCC4QsQM6CAguELEDEIMBOgcILhCxAxBDOggILhDHARCjAjoKCC4QsQMQQxCTAjoLCC4QsQMQgwEQkwI6CAguELEDEJMCOggIABAWEAoQHlDiEliYIWD7LGgBcAJ4AYABxwOIAdUgkgEJMC4yLjcuNC4xmAEAoAEBqgEHZ3dzLXdpesgBCcABAQ&sclient=gws-wiz',
            rawURL: '<a href="https://www.w3schools.com">Visit W3Schools</a>',
            age: 30,
            favoriteFood: 'Pizza',
            favoriteColor: 'Blue'
        }
    },
    methods: {
        // when using methods use this.whateveryourchanging
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        increaseAge() {
            return this.age++;
        },
        decreaseAge() {
            return this.age--;
        },
        updateLastName(e) {
            this.lastName = e.target.value
        },
        updateFirstName(e) {
            this.firstName = e.target.value
        },
        updateFavoriteFood(message, e) {
            e.preventDefault()
            this.favoriteFood = e.target.value
            console.log(message)
        },
        updatFavoriteColorWithoutPreventDefault(message, e) {
            this.favoriteColor = e.target.value
            console.log(message)
        },
        updateMiddleName(e) {
            this.middleName = e.target.value
        }
    }
}).mount('#app1')
