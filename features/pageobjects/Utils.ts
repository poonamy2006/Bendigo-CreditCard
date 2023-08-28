class Utils {

  
/**
 * @Desc Switch to Window
 */
public async SwitchToWindow(Title:string) {
 await browser.switchWindow(Title);
}


  /**
   * waits untils page is loaded
   */
  public async waitForPageLoad() {
    await browser.waitUntil(
      async () =>
        await browser.execute(() => document.readyState === 'complete')
    ),
    {
      timeout: 80 * 1000, // 80 seconds
      timeoutMsg: 'Page Failed to load'
    }
  }

  /**
  * @Desc scrolls  into the element
  * @param element
  * @return None
  * 
  */
  public async scrollIntoElementView(element: string) {
    await browser.$(element).scrollIntoView({ block: 'center', inline: 'center' });
  }

  /**
* @Desc wait for element to be clickable and clicks on the element

*/

  public async clickOnElement(element: string) {
    try {
      await browser.$(element).waitForDisplayed({ timeout: 20000 })
    } catch (err) { }
    expect(await browser.$(element).isDisplayed());
    await browser.$(element).waitForClickable();
    await browser.$(element).click();
  }

  // Utility method to maximize the window
  public async maximizeWindow() {
    await browser.maximizeWindow();
  };

  /**
   * @Desc Inputs the value to the elements
   * @param element
   * @param value
   * @return None
   */
  public async setInputField(element: string, value: string) {
    await (await browser.$(element)).waitForDisplayed({ timeout: 20000 });
    (await browser.$(element)).addValue(value);
  }


  /**
  * @Desc select the dropdown value by visible text
  * @param element
  * @param text
  * @return None
  */

  public async selectDropdownByVisibleText(element: string, text: string) {
    await browser.$(element).selectByVisibleText(text);
  }


  /**
   * @Desc Waits for the element to the displayed
   * @param element
   */
  public async waitForElementDisplayed(element: string) {
    await browser.$(element).waitForDisplayed();
  }

/**
   * @Desc Verify element actual text value with expected value
     */
  public async VerifyElementText(element: string, value: string) {
    const ActualTextValue = await (await browser.$(element)).getText();
    await expect(ActualTextValue).toEqual(value);
  }


  /**
   * @Desc Waits for the element to the displayed
   * @param element
   */

  public async VerifyElementPresent(element: string) {
    return await browser.$(element).isDisplayed();
  }



}
export default new Utils();