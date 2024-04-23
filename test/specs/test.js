describe("open device list",()=>{



    it("go to canary dashboard",async()=>{
        browser.url("https://canary.api.meld.cx/")
       await browser.pause(4000)
       await $('//input[@placeholder="Email"]').setValue("snigdha@meldcx.com")
       await $('//input[@placeholder="Password"]').setValue("456ays321#")
       await $('//button[@class="glow bg-main has-icon"]').click()
       await $('//a[@class="account-switcher-selected-account"]').click()
       await $('//li[4]//a[1]').click()
       await browser.pause(2000)
       await $('//*[@id="page"]/div/div[1]/div[1]/button').click()
       await $('//a[normalize-space()="Devices"]').click()
       await $('//div[normalize-space()="a few seconds ago"]').click()
       await $('//input[@name="name"]').clearValue()
        function Random() {
            return Math.floor(Math.random() * 10);
        }
       await $('//input[@name="name"]').setValue(Random())
       await $('//button[@class="glow-soft link c-success"]').click()
    //button[@class='nav-bar-burger ']
       
    })
})