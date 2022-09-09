const expect = require('chai').expect

module.exports ={
    click1: async function(page, selector){
        try {
            await page.waitForSelector('a.login');
        await page.click('a.login');
            // await page.waitForSelector(selector)
            // await page.click(selector)
        } catch (error) {
            throw new Error(error)
        }
    },

    inputText: async function(page, selector, value){
        try {
            await page.$eval(selector, el => el.inputvalue = value)
        } catch (error) {
            throw new Error('input text action could not performed for selector :- '+ selector) 
        }
    },

    getText: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, element => element.content)
            // async function getHrefs(page, selector) {
                // return await page.$$eval(selector, anchors => [].map.call(anchors, a => a.href));
            //   }
            
        } catch (error) {
            throw new Error('connot get text from selector : '+ selector)
        }
    },
    count: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector, anch => [].map.call(anch, a => a.lenght));
        } catch (error) {
            throw new Error('connot count of selector : '+ selector)
        }
    },
    typeText: async function(page, selector, text){
        try {
            await page.waitForSelector(selector)
            await page.type(selector,text)
        } catch (error) {
            throw new Error('connot type Text on selector : '+ selector)
        }
    },
    waitfortext: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            return page.$eval(selector,el=>el.innerHTML)
            // await page.waitForFunction((selector, text) => {
            //     document.querySelector(selector).innerText.includes(text),{},selector,text
            // });
        } catch (error) {
            throw new Error('connot find text '+ text +' on selector : '+ selector)
        }
    },
    shouldNotExist: async function(page, selector){
        try {
            
            await page.waitForSelector(selector,{hidden:true})
           
        } catch (error) {
            throw new Error('selector : '+ selector + 'should not exist')
        }
    },
    //signin, email, password, login
    signin: async function(page){
        try {
            await page.waitForSelector('a.login');
            await page.click('a.login');
            await page.waitForSelector('#email');
            await page.type('#email', 'anushashivshe@gmail.com');
            await page.waitForSelector('#email');
            await page.type('#passwd', 'myntra');
            await page.waitForSelector('#SubmitLogin');
            await page.click('#SubmitLogin');

            
        } catch (error) {
            throw new Error('..Cannot performed signin ')
            
        }

    },

    searchbar: async function(page){
        try {
            await page.waitForSelector('#search_query_top');
            await page.type('#search_query_top','printed DRESSES')
            await page.keyboard.press('Enter')
        } catch (error) {
            throw new Error
        }
    },
    autofillsearch: async function(page){
        try {
            await page.waitForSelector('#search_query_top');
            await page.type('#search_query_top','DRE')
            await page.waitForSelector('div.ac_results > ul > li');
            const hrefs = await page.$$eval('li.ac_even',links => links.map(el => el.textContent));
            console.log(hrefs)
            const hre = await page.$$eval('li.ac_odd',links => links.map(el => el.textContent));
            console.log(hre)
        } catch (error) {
            throw error
        }
    },

    itemcount: async function(page){

    },

    productcount: async function(page){
        try {
            await page.waitForSelector('span.heading-counter')
            const txt = await page.$eval('span.heading-counter' , el => el.innerText)

            console.log(parseInt(txt.substring(0,1)))

            await page.waitForSelector('.ajax_block_product')
            // console.log(1)
            console.log(await page.$$('.ajax_block_product').length);
            // console.log(2)
        } catch (error) {
            throw new Error(error)
        }
    },

    discountprice: async function(page){
        
        module.exports.searchbar(page)
            // await productcount(page)
            let original = await module.exports.stringtoint(page ,'span.old-price.product-price')
            let discount = await module.exports.stringtoint(page ,'span.price.product-price')
            console.log('txt1:- ',original)
            console.log('txt2:- ',discount)
            await page.waitForSelector('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
            
            await page.click('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
            await page.waitForTimeout(2000)
            await page.waitForSelector('.ajax_block_products_total');
            var abc=await module.exports.getListOfElement(page ,'.ajax_block_products_total')
            // console.log(await module.exports.getListOfElement(page ,'.ajax_block_products_total'))
            console.log(typeof abc)
            var abcd=JSON.stringify(abc)
            abcd=abcd.slice(2) 
            // abcd=abcd.slice(3)
            // abcd=abcd.slice(4)
            // abcd=abcd.slice(5)
            // console.log(typeof abcd)
            console.log('text:- ',abcd)
            // console.log(await module.exports.stringtoint(page ,'.ajax_block_cart_total'))
            console.log(1)
            // await page.waitForSelector('#product_price_5_20_737584');
            // const hrefs = await page.$('.layer_cart_cart.col-xs-12.col-md-6').innerHTML
            
            // await module.exports.getText(page,'.ajax_block_products_total')
            // await page.$eval(selector, element => element.innerHTML)
            // const l = String(hrefs[1])
            // console.log(parseFloat(l.substring(1)))
            // console.log(hrefs)
    },
    stringtoint: async function(page,selector){
        await page.waitForSelector(selector);
        const hrefs = await page.$$eval(selector,links => links.map(el => el.innerText));
        const l = String(hrefs[1])
        return(parseFloat(l.substring(1)))
    }, 

    selectedColor: async function(page){
        try {
            await page.waitForSelector('ul.color_to_pick_list.clearfix')
            const colors1 = await page.$eval("a#color_20", element=> element.getAttribute("style"))
            console.log(colors1)
            await page.waitForSelector("a#color_20")
            await page.click("a#color_20")
            await page.waitForSelector('li.selected>a')
            const colors2 = await page.$eval("li.selected>a", element=> element.getAttribute("style"))
            console.log(colors2)
            expect('Message').to.be.a(colors1,colors2);
        } catch (error) {
            throw new Error(error)
        }
    },

    moreBnt: async function(page){
        
        console.log(await page.$('title').innerHTML)
        // module.exports.searchbar(page)
        await page.waitForSelector(".button.lnk_view.btn.btn-default")
        await page.click('.button.lnk_view.btn.btn-default')
        await page.waitForSelector("#product_reference")
        console.log(await page.$('title').innerHTML)

    },

    wishlist: async function(page){
        module.exports.searchbar(page)
        await page.waitForSelector(".addToWishlist.wishlistProd_5")
        await page.click('.addToWishlist.wishlistProd_5')
        // await page.waitfortext('Added to your wishlist.')
        await page.waitForSelector(".fancybox-error");
        console.log(module.exports.getText(page,'.fancybox-error'))
        await page.waitForSelector(".fancybox-item.fancybox-close")
        await page.click('.fancybox-item.fancybox-close')
        await page.click('.account')
        await page.click('#center_column > div > div:nth-child(2) > ul > li > a > span')
        await page.click('View', '#wishlist_52643 > td:nth-child(5) > a')
        console.log(module.exports.getText(page,'#s_title'))
    },
    getListOfElement: async function(page,selector){
        


        const value = selector
        var arrayData = await page.evaluate((value) => {
      var arr=Array.from(document.querySelector(value).innerText)
    //   return Array.from(document.querySelector(value).innerText)
      var arr1=arr.slice(14, 20)
      return arr1
    //   1.toString();
    //   (document.querySelector(value), element => element.innerText)
      }, value)
      console.log(typeof arrayData)
    return arrayData.toString();
    // .slice(14, 20)
    },



}