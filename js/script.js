const { createApp } = Vue

createApp({
    data() {
        return {
            myEmailsArray: []
        }
    },
    mounted() {
        for (let index = 1; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {    
                    this.myEmailsArray.push(resp.data.response);
                })
        }
        }
}).mount('#app')