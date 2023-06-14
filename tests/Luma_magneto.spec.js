const { test } = require('@playwright/test');
const { createAccount } = require('../page_objects/createAccount')
const { addToWishList } = require('../page_objects/addToWishList')
const { orderProduct } = require('../page_objects/orderProduct')
const crdataset = JSON.parse(JSON.stringify(require('../testDatas/createAccount.json')));
const whdataset = JSON.parse(JSON.stringify(require('../testDatas/addToWishList.json')));
const opdataset = JSON.parse(JSON.stringify(require('../testDatas/prderProduct.json')));
import assert from 'node:assert'

test('simpletestCase/CreateAnAccount', async ({ page }) => {
    var random = Math.floor(Math.random() * 1000 + 1)
    const crPage = new createAccount(page);
    const whpage = new addToWishList(page);
    await crPage.goto();
    await crPage.createAnAccountLink();
    await crPage.enterFirstName(crdataset.userFirstName);
    await crPage.enterLastName(crdataset.userLastName);
    await crPage.isNewspaperSubscription();
    await crPage.enterEmailID(crdataset.userEmailId +  random + crdataset.userEmailend);
    await crPage.enterNewPassword(crdataset.newPassword);
    await crPage.enterConfirmPassword(crdataset.confirmPassword);
    await crPage.createAccountButton();
    await crPage.getSuccessMessage();
    page.close()
})

test('MediumTestCase/AddToWishlist', async ({ page }) => {
    const whpage = new addToWishList(page);
    await whpage.goto();
    await whpage.signInAccountLink();
    await whpage.regEmailId(whdataset.enterregEmailId);
    await whpage.regpassword(whdataset.enterregPassword);
    await whpage.clickSignInButton();
    await whpage.clickProduct();
    await whpage.clickProductSize();
    await whpage.clickProductColor();
    await whpage.clickAddCartbutton();
    await whpage.clickShoppingcartLink();
    await whpage.clickmoveToWishList();
    await whpage.getMessage();
    await page.waitForLoadState('networkidle');
    await whpage.clickMyAccountIcon();
    await whpage.clickMyWishList();
    await page.hover("img[alt= 'Radiant Tee']");
    await page.getByRole('link', { name: ' Remove item' }).click()
    await whpage.getMessage();
    page.close()

})

test('ComplexTestCase/OrderProduct', async ({ page }) => {

    const orderPage = new orderProduct(page);
    await orderPage.goto();
    await orderPage.signInAccountLink();
    await orderPage.regEmailId(opdataset.enterregEmailId);
    await orderPage.regpassword(opdataset.enterregPassword);
    await orderPage.clickSignInButton();
    await orderPage.clickOrderedProduct();
    await orderPage.clickOrderedProductSize();
    await orderPage.clickOrderedProductColor();
    await orderPage.updateQuantity(opdataset.reqquantity);
    await orderPage.clickAddCartbutton();
    await page.waitForLoadState('networkidle');
    await orderPage.clickMyCart();
    await orderPage.clickproceedtoCheckout();
    await orderPage.clickUpdateNewAddress();
    await orderPage.setCompany(opdataset.enterCompanyName);
    await orderPage.setStreetAddress(opdataset.enterStreetName);
    await orderPage.setCity(opdataset.enterCityName);
    await orderPage.setCountry();
    await orderPage.setstate();
    await orderPage.setPostalCode(opdataset.enterPostalCode);
    await orderPage.setPhoneNumber(opdataset.enterPhoneNumber);
    await orderPage.saveAddressbookuncheck();
    await orderPage.clickShipHere();
    await orderPage.clickNextButton();
    await orderPage.clickApplyDiscountLink();
    await orderPage.setDiscountCode(opdataset.discountcodeEnter);
    await orderPage.clickApplyDiscountButton();
    await orderPage.getErrorMessage();
    await orderPage.clickPlaceOrder();
    const orderIDgenerated = await orderPage.getOrderNumber();
    await orderPage.clickMyAccountIcon();
    await orderPage.getMyAccountView();
    await orderPage.getMyOrders();
    const storedOrderID = await orderPage.getStoredNumber();
    assert.equal(orderIDgenerated, storedOrderID);
    page.close()

})


