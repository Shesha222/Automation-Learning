 // await autofillsearch(page)
 await searchbar(page)
 await productcount(page)
 // await discountprice(page)

 // await selectedColor(page)

 // await page.waitForSelector("a#color_20")
 // await page.click("a#color_20")
 // console.log(1)
 // await page.waitForSelector('button.exclusive')
 // await page.click('button.exclusive')
 // await page.waitForSelector("div.layer_cart_product.col-xs-12.col-md-6 > h2")
 // const txt = await page.$$eval('div.layer_cart_product.col-xs-12.col-md-6 > h2',links => links.map(el => el.textContent));
 // console.log(txt)
 // console.log(2)
 // const nameofproduct1 = await page.$$eval('span#layer_cart_product_title',links => links.map(el => el.textContent));
 // console.log("first"+nameofproduct1)
 // // await page.setViewport( { 'width' : 213, 'height' : 46 } )
 // const scrollable_section = '.section-listbox .section-listbox';
 // await page.waitForSelector('a.btn.btn-default.button.button-medium>span>i.icon-chevron-right.right')
 // // await page.waitForSelector('.section-listbox .section-listbox > .section-listbox');
 // await page.evaluate(selector => {
 //     const scrollableSection = document.querySelector('a.btn.btn-default.button.button-medium>span>i.icon-chevron-right.right');
   
 //     scrollableSection.scrollTop = scrollableSection.offsetHeight;
 //   }, scrollable_section);
 // await page.waitForSelector('a.btn.btn-default.button.button-medium>span>i.icon-chevron-right.right')
 // await page.click('a.btn.btn-default.button.button-medium>span>i.icon-chevron-right.right')
 // console.log(3)
 // const nameofproduct = await page.$$eval('td.cart_description > p > a',links => links.map(el => el.textContent));
 // // expect('Message2').to.be.a(nameofproduct1,nameofproduct);
 // console.log("second"+nameofproduct)
 
 // await page.evaluate(el => el.textContent, element)
  
     // // await page.waitFor(5000); 
     // await page.screenshot({path: 'Myntra.png'})
     
     // await click(page,'.button-search')
     
     

     // const count1 =  await count(page,'.clearfix')
     // console.log("Count p tag in the page: "+count1)

     // // await count(page,'.color-list-container'))
     // console.log('text : '+await getText(page,'#center_column > h1 > span.heading-counter'))


     // // await page.click('.button-search');
     // // await page.waitFor(5000);              //TypeError: page.waitFor is not a function
     // // await page.click("//input[@id='search_query_top']")