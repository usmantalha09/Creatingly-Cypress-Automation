import Constants from '../fixtures/constants.json';
import Home from '../pages/home.json';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

describe('Artboard Functionality', () => {
  it('Testcase #01:- Login and Perform art Board functionality', () => {
    cy.allure().step(`Visit the website URL: ${Constants.url}`);
    cy.visit(Constants.url, { timeout: 120000 });

    cy.allure().step('Enter username/Email: '+Constants.email);
    cy.xpath(Home.LoginEmailLocator).should('be.visible').type(Constants.email);

    cy.allure().step('Enter password: '+Constants.password);
    cy.xpath(Home.LoginPasswordLocator).should('be.visible').type(Constants.password);

    cy.allure().step('Submit login form');
    cy.xpath(Home.LoginSubmitButton).should('be.visible').click();

    cy.allure().step(`Visit the website URL: ${Constants.urlToVisitDashboard}`);
    cy.visit(Constants.urlToVisitDashboard, { timeout: 240000 });

    cy.wait(12000);

    cy.xpath(Home.yesButton, { timeout: 10000 }).then(($elements) => {
      if($elements.length>0){
        cy.wrap($elements).click();
      }
    });

    cy.allure().step('Click On Yes Button');
    cy.xpath(Home.yesButton).click();

    cy.allure().step('Click On ArtBoard');
    cy.xpath(Home.homeArtBoard, { timeout: 12000 }).should('be.visible').click();

    cy.allure().step('Click On Desktop Icon');
    cy.xpath(Home.desktopTempletes, { timeout: 12000 }).should('be.visible').click();

    cy.allure().step('Click On Desktop First ArtBoard');
    cy.xpath(Home.desktopTempleteOne, { timeout: 12000 }).should('be.visible').click();

    cy.allure().step('Click On Setting');
    cy.xpath(Home.settingIcon_RightNav,{ timeout: 12000 }).should('be.visible').click();


    cy.allure().step('Selecting Height Type: %');
    cy.xpath(Home.heightValueType,{ timeout: 12000 }).should('be.visible').select('px');

    cy.allure().step('Enter Height: 70');
    cy.xpath(Home.heightValueInput,{ timeout: 12000 }).should('be.visible').clear().type('1000');

    cy.allure().step('Selecting Width Type: %');
    cy.xpath(Home.widthValueType,{ timeout: 12000 }).should('be.visible').select('px');

    cy.allure().step('Enter Width: 50');
    cy.xpath(Home.widthValueInput,{ timeout: 12000 }).should('be.visible').clear().type('800');
    cy.xpath(Home.titleValueInput,{ timeout: 12000 }).should('be.visible').click();
    cy.wait(5000);
    cy.allure().step('Click On Action Button');
    cy.xpath(Home.actionButtonElement,{ timeout: 12000 }).should('be.visible').click();
    cy.wait(5000);

    cy.xpath(Home.actionButtonElement).then(($element) => {
      // Trigger the mouseover event to simulate hovering
      cy.wrap($element).trigger('mouseover');
    });
    cy.wait(5000);
    cy.allure().step('Click On Action Button');
    cy.xpath(Home.actionButtonElement,{ timeout: 12000 }).should('be.visible').click();
    cy.wait(5000);
    
    
    cy.allure().step('Click On Circle Action Button');
    cy.xpath(Home.circleActionButton,{ timeout: 12000 }).should('be.visible').scrollIntoView().click();
    cy.wait(5000);
    cy.allure().step('Click On Layout Icon');
    cy.xpath(Home.layoutIcon_RightNav,{ timeout: 12000 }).scrollIntoView().should('be.visible').click();
    

    cy.allure().step('Click On C|C button to Center the Element');
    cy.xpath(Home.centerButton,{ timeout: 12000 }).scrollIntoView().should('be.visible').click();

    cy.allure().step('Click On Stretch Vertically');
    cy.xpath(Home.stretchVertically,{ timeout: 12000 }).scrollIntoView().should('be.visible').click();

    cy.allure().step('Click On Stretch Horizontally');
    cy.xpath(Home.stretchHorizontally,{ timeout: 12000 }).scrollIntoView().should('be.visible').click();


    

  })



  it('Testcase #02:- Register With Username and Password', () => {
    cy.allure().step(`Visit the website URL: ${Constants.url}`);
    cy.visit(Constants.url, { timeout: 120000 });

    cy.allure().step('Click on SignUp Button On Login Page');
    cy.xpath(Home.SignUpButton_LoginPage).should('be.visible').click();

    cy.allure().step('Enter Full Name: '+Constants.fullName);
    cy.xpath(Home.fullNameInput).should('be.visible').type(Constants.fullName);

    cy.allure().step('Enter Email: '+getRandomInt(1,10000)+Constants.registeredEmail);
    cy.xpath(Home.emailInput).should('be.visible').type(getRandomInt(1,10000)+Constants.registeredEmail);

    cy.allure().step('Enter Account Name: '+Constants.accountName);
    cy.xpath(Home.accountNameInput).should('be.visible').type(Constants.accountName);

    cy.allure().step('Enter password: '+Constants.password);
    cy.xpath(Home.passwordInput).should('be.visible').type(Constants.password);

    cy.allure().step('Submit signUp form');
    cy.xpath(Home.submitSignUpButton).should('be.visible').click();
    
    cy.allure().step('Verifying: SignUp Success Message is Displaying');
    cy.xpath(Home.signUpSuccessMessage).should('be.visible');
    cy.allure().step('Verified: SignUp Success Message is Displaying');

  })


  it('Testcase #03:- Verify SignUp Screen Error Messages ', () => {
    cy.allure().step(`Visit the website URL: ${Constants.SignUpUrl}`);
    cy.visit(Constants.SignUpUrl, { timeout: 120000 });

    cy.allure().step('Click on SignUp Button On Login Page');
    cy.xpath(Home.submitSignUpButton).scrollIntoView().should('be.visible').click();

    cy.allure().step('Verifying Error Message : Username is required');
    cy.xpath(Home.signUpEmailErrorMessage).should('be.visible');

    cy.allure().step('Verifying Error Message : Account Name is required');
    cy.xpath(Home.signUpAccountNameErrorMessage).should('be.visible');

    cy.allure().step('Verifying Error Message : Password is required');
    cy.xpath(Home.signUpPasswordErrorMessage).should('be.visible');

  })


  it('Testcase #04:- Verify Login Screen Error Messages ', () => {
    cy.allure().step(`Visit the website URL: ${Constants.url}`);
    cy.visit(Constants.url, { timeout: 120000 });

    cy.allure().step('Click on Login Button On Login Page');
    cy.xpath(Home.LoginSubmitButton).should('be.visible').click();

    cy.allure().step('Verifying Error Message : Username is required');
    cy.xpath(Home.emailErrorMessage).should('be.visible');

    cy.allure().step('Verifying Error Message : Password is required');
    cy.xpath(Home.passwordErrorMessage).should('be.visible');

    cy.allure().step('Enter username/Email: '+Constants.email);
    cy.xpath(Home.LoginEmailLocator).should('be.visible').type(Constants.email);

    cy.allure().step('Enter password: '+Constants.password);
    cy.xpath(Home.LoginPasswordLocator).should('be.visible').type(Constants.password);

    cy.allure().step('click on "Login" Button');
    cy.xpath(Home.LoginSubmitButton).should('be.visible').click();

    cy.allure().step('Verifying Error Message : Password is required');
    cy.xpath(Home.robotCheckBoxErrorMessage).should('be.visible');

  })

  it('Testcase #05:- Verify Forget Password Screen Error Messages ', () => {
    cy.allure().step(`Visit the website URL: ${Constants.forgetPasswordUrl}`);
    cy.visit(Constants.forgetPasswordUrl, { timeout: 120000 });

    cy.allure().step('Click on Submit Button On Forget Password Page');
    cy.xpath(Home.forgetPasswordSubmitButton).should('be.visible').click();

    cy.allure().step('Verifying Error Message : Email is required');
    cy.xpath(Home.forgetPassword_EmailErrorMessage).should('be.visible');

  })



})