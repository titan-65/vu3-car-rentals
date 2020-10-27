<template>
  <div class="row g-3">

      <CheckoutForm/>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>

        <form  @submit.prevent="submitPaymentInfo">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" required="" v-model.trim="firstName">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" required="" v-model.trim="lastName">
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required="" v-model.trim="username">
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" v-model.trim="email">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" v-model="address">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" v-model="address2">
            </div>

            <div class="col-md-9">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="" v-model="country">
                <option value="">Choose...</option>
                <option value="USA">United States</option>
                <option value="JAM">Jamaica</option>
                <option value="ENG">England</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="" v-model="zipCode">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

<!--          <div class="form-check">-->
<!--            <input type="checkbox" class="form-check-input" id="same-address">-->
<!--            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>-->
<!--          </div>-->

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" v-model="saveInfo">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" value="credit"  checked="" required="" v-model="paymentMethod">
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" value="debit" required="" v-model="paymentMethod">
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" value="paypal" required="" v-model="paymentMethod">
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="" v-model.trim="cardName">
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="" v-model="cardNumber">
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" v-model="expiration">
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" v-model="ccv">
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="btn btn-primary btn-lg btn-block" type="submit" >Continue to checkout</button>
        </form>
      </div>
    </div>
</template>

<script>
import CheckoutForm from './CheckoutForm.vue'
export default {
    name: 'Form',
    components: {
        CheckoutForm
    },
    data() {
        return {
          invalidInput: false,
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          address: '',
          address2: '',
          country: 'JAM',
          zipCode: '',
          saveInfo: false,
          paymentMethod: null,
          cardName: '',
          cardNumber: '',
          expiration: '',
          ccv: ''
        }
    },
    emits: ['submit-payment'],
    methods: {
        submitPaymentInfo() {
          if (this.firstName === '' && this.lastName === '' && this.username === '' && this.email === '' && this.address === ''
              && this.country === '' && this.zipCode === '' && !this.saveInfo &&  this.paymentMethod === ''
              && this.cardName === '' && this.cardNumber === '' && this.expiration === '' && this.ccv === '') {
            this.invalidInput = true;
            return;
          }
          this.invalidInput = false;

          this.$emit('submit-payment', {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            address: this.address,
            address2: this.address2,
            country: this.country,
            zipCode: this.zipCode,
            saveInfo: this.saveInfo,
            paymentMethod: this.paymentMethod,
            cardName: this.cardName,

          })
              this.firstName = '',
              this.lastName = '',
              this.username = '',
              this.email = '',
              this.address = '',
              this.address2 = '',
              this.country = 'JAM',
              this.zipCode = '',
              this.saveInfo = false,
              this.paymentMethod = null,
              this.cardName = '',
              this.cardNumber = '',
              this.expiration = '',
              this.ccv = ''

        }
    }
}
</script>

<style>

</style>
