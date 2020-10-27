<template>
  <TheNavbar/>
  <div class="container">
    <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h2>Checkout form</h2>
        <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="font-weight-light">Album example</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" class="btn btn-primary my-2">Main call to action</a>
              <a href="#" class="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
    </section>
    <Form @submit-payment="handlePayments"/>
  </div>

</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import Form from './components/Form.vue'
export default {
  name: 'App',
  components: {
    TheNavbar,
    Form
  },
  data() {
    return {
      storePayments: []
    }
  },
  methods: {
    handlePayments(payment) {
      const paymentData = {
        firstName: payment.firstName,
        lastName: payment.lastName,
        username: payment.username,
        country: payment.country,
        zipCode: payment.zipCode,
        email: payment.email,
        paymentMethod: payment.paymentMethod
      }
      console.log(paymentData)
      this.storePayments.push(paymentData)
    }
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
