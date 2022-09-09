const { afterEach } = require('mocha');
const puppeteer = require('puppeteer');
const expect = require('chai').expect

const { click1, moreBnt,getListOfElement, wishlist, discountprice, getText, count, typeText, waitfortext,shouldNotExist,searchbar ,productcount ,stringtoint ,selectedColor ,autofillsearch , signin}= require('../lib/helpers.js')
let page,browser
describe('test search page',()=> {
    beforeEach(async () => { 
         browser = await puppeteer.launch({headless:false})
    
        page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        // await signin(page)
    })
    it('launch browser',async () => {
        // await signin(page)
        const txt1=await waitfortext(page,'.info-account')
        console.log(txt1)
})
it('launch browser2',async () => {
        // await signin(page)
        // const txt1=await waitfortext(page,'.info-account')
        // console.log(txt1)

        // await autofillsearch(page)
        await searchbar(page)
        await productcount(page)
        await page.waitForTimeout(2000)
        console.log('the text is',await getText(page,'.layer_cart_cart.col-xs-12.col-md-6 .layer_cart_row:nth-child(2)'))
        await page.waitForTimeout(5000)
        console.log('the text is',await getText(page,'#layer_cart_product_attributes'))
        var ab = await getListOfElement(page,'.ajax_block_products_total')
        console.log('the text is',ab)
        // await discountprice(page)

        // await selectedColor(page)

        //     await page.screenshot({path: 'Myntra.png'})
        // await browser.close();

    })

    it.only('launch browser3',async () => {
        await discountprice(page)
    })
    it('Buttons on plp page(more bnt, wishlist bnt, compare bnt)',async () => {
        await wishlist(page)

        // await moreBnt(page)
    })

    afterEach(async () => { 
        await page.screenshot({path: 'Myntra.png'})
        // await browser.close();
    })
})