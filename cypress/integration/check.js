describe('Google Store', () => {
  it('check Chromecast w/ Netflix availability', () => {
    const itemUrl = 'https://store.google.com/us/config/chromecast_google_tv_netflix?hl=en-US'
    const colorButtons = '#mqn-config-controller > div > div.mqn-product-collection.mqn-product-collection--stack-mobile.ng-scope > div > div.mqn-product-collection__gallery.mqn-product-collection__gallery--centered.mqn-product-collection__gallery--single-product.slick-initialized.slick-slider > div > div > div > div.mqn-product-collection__card__inner.ng-scope.mqn-product-collection__card__inner--active > div.mqn-product-collection__card__meta.mqn-product-collection__card__meta--active > div:nth-child(1) > div.mqn-product-collection__card__selector > div.mqn-product-collection__card__selector__item'
    const addToCartButton = '#mqn-config-controller > div > div.mqn-product-collection.mqn-product-collection--stack-mobile.ng-scope > div > div.mqn-product-collection__gallery.mqn-product-collection__gallery--centered.mqn-product-collection__gallery--single-product.slick-initialized.slick-slider > div > div > div > div.mqn-product-collection__card__inner.ng-scope.mqn-product-collection__card__inner--active > div.mqn-product-collection__card__meta.mqn-product-collection__card__meta--active > div.mqn-product-collection__card__buttons > button'

    cy.visit(itemUrl)
    cy.get(colorButtons)
      .each(el => {
        el.click()
        cy.get(addToCartButton).should('be.disabled')
      })
  })
})

