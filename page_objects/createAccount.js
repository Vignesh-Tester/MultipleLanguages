const { expect } = require('@playwright/test');

exports.createAccount =  class createAccount {
/**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.createAccountlink = page.getByRole('link', { name: 'Create an Account'});
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.isNewspapaerSubscribed = page.getByRole('checkbox', {name : 'Sign Up for Newsletter'})
        this.emailAddress = page.locator("#email_address")
        this.setpassword = page.locator('#password')
        this.setconfirmpassword = page.locator('#password-confirmation')
        this.clickcreateAccountButton = page.locator("button[title='Create an Account']")
        this.successMessage = page.getByText('Thank you for registering with Fake Online Clothing Store.')
    }

    async goto(){
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    async createAnAccountLink(){
        await this.createAccountlink.click();
    }


    /*async createNewAccount(userFirstName, userLastName, userEmailId, userPassword, userConfirmPassword) {
       
        await this.firstName.type(userFirstName)
        await this.lastName.type(userLastName)
        await this.isNewspapaerSubscribed.check()
        await this.emailAddress.type(userEmailId)
        await this.setpassword.type(userPassword)
        await this.setconfirmpassword.type(userConfirmPassword)
        await this.clickcreateAccountButton.click()
    }*/

    async enterFirstName(userFirstName){
        await this.firstName.type(userFirstName);
    }

    async enterLastName(userLastName){
        await this.lastName.fill(userLastName);
    }

    async isNewspaperSubscription(){
        await this.isNewspapaerSubscribed.check();
    }

    async enterEmailID(userEmailId){
        await this.emailAddress.fill(userEmailId);
    }

    async enterNewPassword(newPassword){
         await this.setpassword.fill(newPassword);
    }

    async enterConfirmPassword(confirmPassword){
        await this.setconfirmpassword.fill(confirmPassword);
    }

    async createAccountButton(){
        await this.clickcreateAccountButton.click();
    }

    async getSuccessMessage(){
        await expect(this.successMessage).toBeVisible();
    }

}
