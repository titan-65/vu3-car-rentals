<template>
  <TheNavbar/>
  <div class="container">
    <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h2>Checkout form</h2>
        <p class="lead">Please take the time to review all the information below.</p>
      </div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto" v-for="payment in storePayments" :key="payment.id">
            <h1 class="font-weight-light">{{payment.firstName}}</h1>
            <p class="lead text-muted">{{ payment.email }}</p>
            <p class="lead text-muted">{{ payment.address }}</p>
            <p class="lead text-muted">{{ payment.zipCode }}</p>

            <p>
              <a href="#" class="btn btn-primary my-2">Review Payment</a>
              <a href="#" class="btn btn-secondary my-2">Request Refund</a>
            </p>
          </div>
        </div>
    </section>
<!--    This is from previous code refactor-->
<!--    <Form @submit-payment="handlePayments"/>-->
    <Form />
  </div>

</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import Form from './components/Form.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    TheNavbar,
    Form
  },
  data() {
    return {
      storePayments: [],
      error: null,
    }
  },
  methods: {
    /**
     * @anme handlePayments
     * @desc
     * @param payment
     */
    // handlePayments(payment) {
    //   const paymentData = {
    //     firstName: payment.firstName,
    //     lastName: payment.lastName,
    //     username: payment.username,
    //     country: payment.country,
    //     zipCode: payment.zipCode,
    //     email: payment.email,
    //     paymentMethod: payment.paymentMethod
    //   }
    //   console.log(paymentData)
    //   this.storePayments.push(paymentData)
    // }
    async retrievePayments() {
      try {
        const response = await axios('https://vequiem-24e43.firebaseio.com/payment.json')
        if (response) {
          const data = await response.data
          // TODO: Add loading spinner to implementation
          const results = []
          for (const id in data) {
            results.push({
              id: id,
              firstName: data[id].firstName,
              lastName: data[id].lastName,
              address: data[id].address,
              username: data[id].username,
              country: data[id].country,
              zipCode: data[id].zipCode,
              email: data[id].email,
              paymentMethod: data[id].paymentMethod

            })
          }
          this.storePayments = results;
          console.log(this.storePayments)
        }
      } catch (e) {
        // FIXME: Add errorHandler to check if no data is present
        console.log(e)
        this.error = 'Failed to fetch data from server'
      }
    }
  },
  created() {
    this.retrievePayments()
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
