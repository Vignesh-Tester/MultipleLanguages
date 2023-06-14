const { expect } = require('@playwright/test');
exports.addToWishList = class addToWishList {
    /**
       * @param {import('@playwright/test').Page} page
       */
    constructor(page) {
        this.page = page;
        this.signInLinK = page.getByRole('link', { name: ' Sign In ' });
        this.emailID = page.locator('#email');
        this.password = page.locator("body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)");
        this.signInbutton = page.locator('body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > fieldset:nth-child(2) > div:nth-child(4) > div:nth-child(1) > button:nth-child(1)');
        this.selectProduct = page.locator("a[title='Radiant Tee']");
        this.productSize = page.locator("#option-label-size-143-item-170");
        this.productColor = page.locator("#option-label-color-93-item-50");
        this.addcartButton = page.locator("#product-addtocart-button");
        this.shoppingCartLink = page.getByRole('link', { name: ' shopping cart ' });
        this.moveToWishList = page.getByText('Move to Wishlist');
        this.successMessage = page.locator('.message-success.success.message');
        this.myAccountIcon = page.locator("div[class='panel header'] button[type='button']");
        this.MyWishListpage = page.getByRole('link', { name: 'My Wish List' });
        this.hoverProduct = page.hover("img[alt= 'Radiant Tee']");
        this.removeProduct = page.getByRole('link', { name: ' Remove item' })
    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }
    async signInAccountLink() {
        await this.signInLinK.click();
    }

    async regEmailId(enterregEmailId) {
        await this.emailID.fill(enterregEmailId)
    }

    async regpassword(enterregPassword) {
        await this.password.fill(enterregPassword)
    }

    async clickSignInButton() {
        await this.signInbutton.click()
    }

    async clickProduct() {
        await this.selectProduct.click();
    }

    async clickProductSize() {
        await this.productSize.click();
    }

    async clickProductColor() {
        await this.productColor.click();
    }

    async clickAddCartbutton() {
        await this.addcartButton.click();
    }

    async clickShoppingcartLink() {
        await this.shoppingCartLink.click()
    }

    async clickmoveToWishList() {
        await this.moveToWishList.click();
    }

    async getMessage() {
        await expect(this.successMessage).toBeVisible();
    }

    async clickMyAccountIcon() {
        await this.myAccountIcon.click()
    }

    async clickMyWishList() {
        await this.MyWishListpage.click()
    }

    async clickRemove() {
        await this.hoverProduct
    }

    async clickProductRemove() {
        await this.removeProduct.click();
    }

}