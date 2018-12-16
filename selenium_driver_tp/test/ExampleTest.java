import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.ExpectedCondition.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import static org.junit.Assert.*;

import org.junit.*;

public class ExampleTest {
    WebDriver driver;
    @Before
    public void createDriver() {
    	System.setProperty("webdriver.chrome.driver", "C:\\geckodriver");
    	driver = new ChromeDriver();
    }

    @After
    public void freeDriver() {
       driver.quit();
    }
    
    @Test
    public void test_add_same_curr() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");
	
        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        element = driver.findElement(By.xpath("//input[@type='button']"));
        element.click();

        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
			public Boolean apply(WebDriver d) {
			   return d.findElement(By.id("res")).isDisplayed();
			}
        });

		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("/tmp/screenshot_add_same_curr.png"));
	
		assertEquals(driver.findElement(By.id("res")).getText(),"Result : 34 (EUR)");
		new File("/tmp/test_add_same_curr.png").delete();
    }
    
    @Test
    public void test_add_equiv_curr() throws java.io.IOException{
        driver.get("http://localhost:8080");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");
	
        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("eUR");

        element.submit();

        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
       
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_add_equiv_curr.png"));

		assertEquals(driver.findElement(By.id("res")).getText(),"Result : 34 (EUR)");
		new File("/tmp/screenshot_add_equiv_curr.png").delete();
    }
    
}
