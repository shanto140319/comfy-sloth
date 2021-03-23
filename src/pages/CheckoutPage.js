import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <Wrapper>
    <PageHero title="checkout"></PageHero>
    <div className="page">
      <h2>Checkout functionality will be coming here</h2>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
div{
  display:flex;
  align-items:center;
  justify-content:center;
}
`
export default CheckoutPage
