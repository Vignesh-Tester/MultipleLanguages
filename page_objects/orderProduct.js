const { expect } = require('@playwright/test');
exports.orderProduct = class OrderProduct {
    /**
       * @param {import('@playwright/test').Page} page
       */
    constructor(page) {

        this.page = page;
        this.signInLinK = page.locator("div[class='panel header'] li[data-label='or'] a");
        this.emailID = page.locator('#email');
        this.password = page.locator("body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)");
        this.signInbutton = page.locator('body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)');
        this.orderSelectProduct = page.locator("a[title='Hero Hoodie']");
        this.orderedProductSize = page.locator("#option-label-size-143-item-170");
        this.orderedProductcolor = page.getByRole('option', { name: 'Gray' });
        this.quantity = page.locator("#qty");
        this.addcartButton = page.locator("#product-addtocart-button");
        this.myCarticon = page.getByRole('link', { name: ' My Cart ' });
        this.message = page.getByText('You added Hero Hoodie to your shopping cart.');
        this.proceedToCheckout = page.locator('#top-cart-btn-checkout');
        this.updateNewAddress = page.locator('.action.action-show-popup');
        this.company = page.locator("input[name='company']");
        this.street = page.locator("input[name='street[0]']");
        this.city = page.locator("input[name='city']");
        this.state = page.locator("select[name='region_id']");
        this.country = page.locator("select[name='country_id']");
        this.postalcode = page.locator("input[name='postcode']");
        this.phoneNumber = page.locator("input[name='telephone']");
        this.addressbook = page.locator("#shipping-save-in-address-book");
        this.shipHere = page.locator(".action.primary.action-save-address");
        this.next = page.locator(".button.action.continue.primary");
        this.applydiscountlink = page.getByRole('heading', { name: 'Apply Discount Code ' });
        this.discountCode = page.locator('#discount-code');
        this.applydiscountButton = page.getByRole('button', { name: 'Apply Discount' });
        this.placeOrder = page.getByRole('button', { name: 'Place Order' });
        this.discountError = page.locator("div[data-ui-id='checkout-cart-validationmessages-message-error']");
        this.myAccountIcon = page.locator("div[class='panel header'] button[type='button']");
        this.orderNumber = page.locator("a[class='order-number'] strong");
        this.MyAccountPageToViewMyOrder = page.getByRole('link', { name: 'My Account' });
        this.MyOrderLink = page.getByRole('link', { name: 'My Orders' });
        this.stroedOrderID = page.locator('tbody tr:nth-child(1) td:nth-child(1)');

    }

    async goto(){
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    async signInAccountLink(){
        await this.signInLinK.click();
    }

    async regEmailId(enterregEmailId){
        await this.emailID.fill(enterregEmailId)
    }

    async regpassword(enterregPassword){
        await this.password.fill(enterregPassword)
    }

    async clickSignInButton(){
        await this.signInbutton.click()
    }
    async clickOrderedProduct() {

        await this.orderSelectProduct.click();
    }

    async clickOrderedProductSize() {

        await this.orderedProductSize.click();
    }

    async clickOrderedProductColor() {

        await this.orderedProductcolor.click();
    }

    async updateQuantity(reqquantity) {
        await this.quantity.fill(reqquantity);
    }

    async clickAddCartbutton() {
        await this.addcartButton.click();
    }
    async clickMyCart() {
        await this.myCarticon.click()
    }

    async clickproceedtoCheckout() {
        await this.proceedToCheckout.click()
    }

    async clickUpdateNewAddress() {
        await this.updateNewAddress.click()
    }

    async setCompany(enterCompanyName) {
        await this.company.fill(enterCompanyName)
    }

    async setStreetAddress(enterStreetName) {
        await this.street.fill(enterStreetName)
    }

    async setCity(enterCityName) {
        await this.city.fill(enterCityName)
    }

    async setCountry() {
        await this.country.selectOption("IN")
    }

    //563

    async setstate() {
        await this.state.selectOption("563")
    }

    async setPostalCode(enterPostalCode) {
        await this.postalcode.fill(enterPostalCode)
    }

    async setPhoneNumber(enterPhoneNumber) {
        await this.phoneNumber.fill(enterPhoneNumber)
    }

    async saveAddressbookuncheck() {
        await this.addressbook.uncheck();
    }

    async clickShipHere() {
        await this.shipHere.click()
    }

    async clickNextButton() {
        await this.next.click();
    }

    async verifyText() {
        await this.message.isVisible()
    }

    async clickApplyDiscountLink() {
        await this.applydiscountlink.click();
    }

    async setDiscountCode(discountcodeEnter) {
        await this.discountCode.type(discountcodeEnter)
    }

    async clickApplyDiscountButton() {
        await this.applydiscountButton.click()
    }

    async clickPlaceOrder() {
        await this.placeOrder.click();
    }

    async getErrorMessage() {
        await expect(this.discountError).toBeVisible();
    }

    async getOrderNumber() {
        await this.orderNumber.textContent()
    }


    async clickMyAccountIcon() {
        await this.myAccountIcon.first().click()
    }
    async getMyAccountView() {
        await this.MyAccountPageToViewMyOrder.click();
    }

    async getMyOrders() {
        await this.MyOrderLink.click();
    }

    async getStoredNumber() {
        await this.stroedOrderID.textContent()
    }











}