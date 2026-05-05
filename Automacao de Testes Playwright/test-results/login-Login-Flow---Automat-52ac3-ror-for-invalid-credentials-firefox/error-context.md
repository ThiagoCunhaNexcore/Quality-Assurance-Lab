# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login Flow - Automation Practice >> @negative should show error for invalid credentials
- Location: tests\login.spec.js:23:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.invalid_input')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.invalid_input')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - paragraph [ref=e8]:
        - text: Promoções especiais disponíveis.
        - link [ref=e9] [cursor=pointer]:
          - /url: /shop
          - text: Aproveitar...
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /order-tracking
            - generic [ref=e15]: 
            - text: Acompanhe seu pedido
        - listitem [ref=e16] [cursor=pointer]:
          - img [ref=e17]
          - text: invalid@test.com
          - generic [ref=e18]: 
    - banner [ref=e19]:
      - generic [ref=e24]:
        - link [ref=e27] [cursor=pointer]:
          - /url: /
          - img [ref=e28]
        - navigation [ref=e30]:
          - list [ref=e31]:
            - listitem [ref=e32]:
              - link [ref=e33] [cursor=pointer]:
                - /url: "#!"
                - text: Home
                - generic [ref=e34]: 
            - listitem [ref=e35]:
              - link [ref=e36] [cursor=pointer]:
                - /url: "#!"
                - text: Shop
                - generic [ref=e37]: 
            - listitem [ref=e38]:
              - link [ref=e39] [cursor=pointer]:
                - /url: "#!"
                - text: Pages
                - generic [ref=e40]: 
        - list [ref=e41]:
          - listitem [ref=e42]:
            - link [ref=e43] [cursor=pointer]:
              - /url: "#offcanvas-wishlish"
              - generic [ref=e44]: 
              - generic [ref=e45]: "4"
          - listitem [ref=e46]:
            - link [ref=e47] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e48]: 
              - generic [ref=e49]: "3"
          - listitem [ref=e50]:
            - link [ref=e51] [cursor=pointer]:
              - /url: "#search"
              - img [ref=e52]
    - text:   
    - generic [ref=e53]:
      - button [ref=e55] [cursor=pointer]:
        - img [ref=e56]
      - generic [ref=e57]:
        - list [ref=e60]:
          - listitem [ref=e61]:
            - link [ref=e62] [cursor=pointer]:
              - /url: "#!"
              - text: Home
          - listitem [ref=e63]:
            - link [ref=e64] [cursor=pointer]:
              - /url: "#!"
              - text: Shop
          - listitem [ref=e65]:
            - link [ref=e66] [cursor=pointer]:
              - /url: "#!"
              - text: Feature
          - listitem [ref=e67]:
            - link [ref=e68] [cursor=pointer]:
              - /url: "#!"
              - text: Blogs
          - listitem [ref=e69]:
            - link [ref=e70] [cursor=pointer]:
              - /url: "#!"
              - text: Pages
        - generic [ref=e71]:
          - link [ref=e73] [cursor=pointer]:
            - /url: /
            - img [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76]: "Address: Your address goes here."
            - generic [ref=e77]: "Call Us: 0123456789, 0123456789"
            - generic [ref=e78]: "Email: demo@example.com"
          - list [ref=e79]:
            - listitem [ref=e80]:
              - link [ref=e81] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e82]: 
            - listitem [ref=e83]:
              - link [ref=e84] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e85]: 
            - listitem [ref=e86]:
              - link [ref=e87] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e88]: 
            - listitem [ref=e89]:
              - link [ref=e90] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e91]: 
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link [ref=e94] [cursor=pointer]:
                - /url: /wishlist
                - text: Wishlist
            - listitem [ref=e95]:
              - link [ref=e96] [cursor=pointer]:
                - /url: /cart
                - text: Cart
            - listitem [ref=e97]:
              - link [ref=e98] [cursor=pointer]:
                - /url: /checkout-one
                - text: Checkout
    - generic [ref=e99]:
      - button [ref=e101] [cursor=pointer]:
        - img [ref=e102]
      - generic [ref=e103]:
        - generic [ref=e104]:
          - img [ref=e105]
          - generic [ref=e106]: "Address: Your address goes here."
          - generic [ref=e107]: "Call Us: 0123456789, 0123456789"
          - generic [ref=e108]: "Email: demo@example.com"
        - list [ref=e109]:
          - listitem [ref=e110]:
            - link [ref=e111] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e112]: 
          - listitem [ref=e113]:
            - link [ref=e114] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e115]: 
          - listitem [ref=e116]:
            - link [ref=e117] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e118]: 
          - listitem [ref=e119]:
            - link [ref=e120] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e121]: 
        - list [ref=e122]:
          - listitem [ref=e123]:
            - link [ref=e124] [cursor=pointer]:
              - /url: /wishlist
              - text: Wishlist
          - listitem [ref=e125]:
            - link [ref=e126] [cursor=pointer]:
              - /url: /cart
              - text: Cart
          - listitem [ref=e127]:
            - link [ref=e128] [cursor=pointer]:
              - /url: /checkout-one
              - text: Checkout
    - generic [ref=e129]:
      - button [ref=e131] [cursor=pointer]:
        - img [ref=e132]
      - generic [ref=e133]:
        - heading [level=4] [ref=e134]: Shopping Cart
        - list [ref=e135]:
          - listitem [ref=e136]:
            - generic [ref=e137]:
              - link [ref=e138] [cursor=pointer]:
                - /url: /product-details-one/5
                - img [ref=e139]
              - generic [ref=e140]:
                - link [ref=e141] [cursor=pointer]:
                  - /url: /product-details-one/5
                  - text: Fit-Flare Dress
                - generic [ref=e142]:
                  - generic [ref=e143]: 1 x
                  - generic [ref=e144]: $52
            - link [ref=e146] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e147]: 
          - listitem [ref=e148]:
            - generic [ref=e149]:
              - link [ref=e150] [cursor=pointer]:
                - /url: /product-details-one/6
                - img [ref=e151]
              - generic [ref=e152]:
                - link [ref=e153] [cursor=pointer]:
                  - /url: /product-details-one/6
                  - text: Midi Dress
                - generic [ref=e154]:
                  - generic [ref=e155]: 1 x
                  - generic [ref=e156]: $14
            - link [ref=e158] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e159]: 
          - listitem [ref=e160]:
            - generic [ref=e161]:
              - link [ref=e162] [cursor=pointer]:
                - /url: /product-details-one/7
                - img [ref=e163]
              - generic [ref=e164]:
                - link [ref=e165] [cursor=pointer]:
                  - /url: /product-details-one/7
                  - text: Tulip Dress
                - generic [ref=e166]:
                  - generic [ref=e167]: 1 x
                  - generic [ref=e168]: $41
            - link [ref=e170] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e171]: 
        - generic [ref=e172]:
          - generic [ref=e173]: "Subtotal:"
          - generic [ref=e174]: $107.00
        - list [ref=e175]:
          - listitem [ref=e176]:
            - link [ref=e177] [cursor=pointer]:
              - /url: /cart
              - text: View Cart
          - listitem [ref=e178]:
            - link [ref=e179] [cursor=pointer]:
              - /url: /checkout-one
              - text: Checkout
    - generic [ref=e180]:
      - button [ref=e182] [cursor=pointer]:
        - img [ref=e183]
      - generic [ref=e184]:
        - heading [level=4] [ref=e185]: Wishlist
        - list [ref=e186]:
          - listitem [ref=e187]:
            - generic [ref=e188]:
              - link [ref=e189] [cursor=pointer]:
                - /url: /product-details-one/9
                - img [ref=e190]
              - generic [ref=e191]:
                - link [ref=e192] [cursor=pointer]:
                  - /url: /product-details-one/9
                  - text: Boho Tops for Girls
                - generic [ref=e193]: 1 x46
            - link [ref=e195] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e196]: 
          - listitem [ref=e197]:
            - generic [ref=e198]:
              - link [ref=e199] [cursor=pointer]:
                - /url: /product-details-one/10
                - img [ref=e200]
              - generic [ref=e201]:
                - link [ref=e202] [cursor=pointer]:
                  - /url: /product-details-one/10
                  - text: Skater Dress
                - generic [ref=e203]: 1 x74
            - link [ref=e205] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e206]: 
          - listitem [ref=e207]:
            - generic [ref=e208]:
              - link [ref=e209] [cursor=pointer]:
                - /url: /product-details-one/11
                - img [ref=e210]
              - generic [ref=e211]:
                - link [ref=e212] [cursor=pointer]:
                  - /url: /product-details-one/11
                  - text: Rocking Chair
                - generic [ref=e213]: 1 x918
            - link [ref=e215] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e216]: 
          - listitem [ref=e217]:
            - generic [ref=e218]:
              - link [ref=e219] [cursor=pointer]:
                - /url: /product-details-one/12
                - img [ref=e220]
              - generic [ref=e221]:
                - link [ref=e222] [cursor=pointer]:
                  - /url: /product-details-one/12
                  - text: Easy Chair
                - generic [ref=e223]: 1 x864
            - link [ref=e225] [cursor=pointer]:
              - /url: "#!"
              - generic [ref=e226]: 
        - list [ref=e227]:
          - listitem [ref=e228]:
            - link [ref=e229] [cursor=pointer]:
              - /url: /wishlist
              - text: View wishlist
    - generic [ref=e230]:
      - button [ref=e231] [cursor=pointer]:
        - img [ref=e232]
      - searchbox [ref=e233]
      - button [ref=e234] [cursor=pointer]: Search
    - generic [ref=e237]:
      - tablist [ref=e240]:
        - listitem [ref=e241]:
          - link [ref=e242] [cursor=pointer]:
            - /url: /my-account
            - generic [ref=e243]: 
            - text: Dashboard
        - listitem [ref=e244]:
          - link [ref=e245] [cursor=pointer]:
            - /url: /my-account/customer-order
            - generic [ref=e246]: 
            - text: Orders
        - listitem [ref=e247]:
          - link [ref=e248] [cursor=pointer]:
            - /url: /my-account/customer-download
            - generic [ref=e249]: 
            - text: Downloads
        - listitem [ref=e250]:
          - link [ref=e251] [cursor=pointer]:
            - /url: /my-account/customer-address
            - generic [ref=e252]: 
            - text: Addresses
        - listitem [ref=e253]:
          - link [ref=e254] [cursor=pointer]:
            - /url: /my-account/customer-account-details
            - generic [ref=e255]: 
            - text: Account details
        - listitem [ref=e256]:
          - link [ref=e257] [cursor=pointer]:
            - /url: /#!
            - generic [ref=e258]: 
            - text: logout
      - generic [ref=e261]:
        - generic [ref=e262]:
          - generic [ref=e264]:
            - heading [level=2] [ref=e265]: "25"
            - heading [level=4] [ref=e266]: Total Orders
          - generic [ref=e268]:
            - heading [level=2] [ref=e269]: "2552"
            - heading [level=4] [ref=e270]: Total Delivery
          - generic [ref=e272]:
            - heading [level=2] [ref=e273]: "50"
            - heading [level=4] [ref=e274]: Total Pending
        - generic [ref=e275]:
          - img [ref=e278]
          - img [ref=e281]
        - generic [ref=e282]:
          - generic [ref=e284]:
            - heading [level=4] [ref=e285]: Pending Orders
            - table [ref=e286]:
              - rowgroup [ref=e287]:
                - row [ref=e288]:
                  - columnheader [ref=e289]: Image
                  - columnheader [ref=e290]: Product Name
                  - columnheader [ref=e291]: Price
                  - columnheader [ref=e292]: Sales
              - rowgroup [ref=e293]:
                - row [ref=e294]:
                  - cell [ref=e295]:
                    - img [ref=e296]
                  - cell [ref=e297]: T-Shirt For Men
                  - cell [ref=e298]: $72
                  - cell [ref=e299]: "216"
                - row [ref=e300]:
                  - cell [ref=e301]:
                    - img [ref=e302]
                  - cell [ref=e303]: V-Neck Dress
                  - cell [ref=e304]: $34
                  - cell [ref=e305]: "102"
                - row [ref=e306]:
                  - cell [ref=e307]:
                    - img [ref=e308]
                  - cell [ref=e309]: Maxi Dress
                  - cell [ref=e310]: $43
                  - cell [ref=e311]: "129"
                - row [ref=e312]:
                  - cell [ref=e313]:
                    - img [ref=e314]
                  - cell [ref=e315]: Fit-Flare Dress
                  - cell [ref=e316]: $52
                  - cell [ref=e317]: "156"
          - generic [ref=e319]:
            - heading [level=4] [ref=e320]: All Orders
            - table [ref=e321]:
              - rowgroup [ref=e322]:
                - row [ref=e323]:
                  - columnheader [ref=e324]: Order Id
                  - columnheader [ref=e325]: Product Details
                  - columnheader [ref=e326]: Status
              - rowgroup [ref=e327]:
                - row [ref=e328]:
                  - cell [ref=e329]:
                    - link [ref=e330] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78153"
                  - cell [ref=e331]: Belted Trench Coat
                  - cell [ref=e332]:
                    - generic [ref=e333]: Shipped
                - row [ref=e334]:
                  - cell [ref=e335]:
                    - link [ref=e336] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78154"
                  - cell [ref=e337]: Neck Velvet Dress
                  - cell [ref=e338]:
                    - generic [ref=e339]: Pending
                - row [ref=e340]:
                  - cell [ref=e341]:
                    - link [ref=e342] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78155"
                  - cell [ref=e343]: T-Shirt For Woman
                  - cell [ref=e344]:
                    - generic [ref=e345]: Confirmed
                - row [ref=e346]:
                  - cell [ref=e347]:
                    - link [ref=e348] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78156"
                  - cell [ref=e349]: Fit-Flare Dress
                  - cell [ref=e350]:
                    - generic [ref=e351]: Canceled
                - row [ref=e352]:
                  - cell [ref=e353]:
                    - link [ref=e354] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78157"
                  - cell [ref=e355]: Long-Shirt For Men
                  - cell [ref=e356]:
                    - generic [ref=e357]: Shipped
                - row [ref=e358]:
                  - cell [ref=e359]:
                    - link [ref=e360] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78158"
                  - cell [ref=e361]: Sharee for women
                  - cell [ref=e362]:
                    - generic [ref=e363]: Shipped
                - row [ref=e364]:
                  - cell [ref=e365]:
                    - link [ref=e366] [cursor=pointer]:
                      - /url: /invoice-one
                      - text: "#78159"
                  - cell [ref=e367]: Handbag for Girls
                  - cell [ref=e368]:
                    - generic [ref=e369]: Shipped
    - contentinfo [ref=e370]:
      - generic [ref=e372]:
        - generic [ref=e374]:
          - link [ref=e375] [cursor=pointer]:
            - /url: /
            - img [ref=e376]
          - paragraph [ref=e377]:
            - strong [ref=e378]: QAZANDO
            - text: é o maior e mais completo site de automação de testes do Brasil. Acesse www.qazando.com.br e aproveite os melhores cursos.
          - list [ref=e380]:
            - listitem [ref=e381]:
              - link [ref=e382] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e383]: 
            - listitem [ref=e384]:
              - link [ref=e385] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e386]: 
            - listitem [ref=e387]:
              - link [ref=e388] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e389]: 
            - listitem [ref=e390]:
              - link [ref=e391] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e392]: 
            - listitem [ref=e393]:
              - link [ref=e394] [cursor=pointer]:
                - /url: "#!"
                - generic [ref=e395]: 
        - generic [ref=e397]:
          - heading [level=3] [ref=e398]: INFORMATION
          - list [ref=e399]:
            - listitem [ref=e400]:
              - link [ref=e401] [cursor=pointer]:
                - /url: /
                - text: Home
            - listitem [ref=e402]:
              - link [ref=e403] [cursor=pointer]:
                - /url: /about
                - text: About us
            - listitem [ref=e404]:
              - link [ref=e405] [cursor=pointer]:
                - /url: /privacy-policy
                - text: Privacy Policy
            - listitem [ref=e406]:
              - link [ref=e407] [cursor=pointer]:
                - /url: /faqs
                - text: Frequently Questions
            - listitem [ref=e408]:
              - link [ref=e409] [cursor=pointer]:
                - /url: /order-tracking
                - text: Order Tracking
            - listitem [ref=e410]:
              - link [ref=e411] [cursor=pointer]:
                - /url: /compare
                - text: Compare
        - generic [ref=e413]:
          - heading [level=3] [ref=e414]: SHOP
          - list [ref=e415]:
            - listitem [ref=e416]:
              - link [ref=e417] [cursor=pointer]:
                - /url: /cart
                - text: Cart View One
            - listitem [ref=e418]:
              - link [ref=e419] [cursor=pointer]:
                - /url: /cartTwo
                - text: Cart View Two
            - listitem [ref=e420]:
              - link [ref=e421] [cursor=pointer]:
                - /url: /empty-cart
                - text: Empty Cart
            - listitem [ref=e422]:
              - link [ref=e423] [cursor=pointer]:
                - /url: /checkout-one
                - text: Checkout View One
            - listitem [ref=e424]:
              - link [ref=e425] [cursor=pointer]:
                - /url: /checkout-two
                - text: Checkout View Two
            - listitem [ref=e426]:
              - link [ref=e427] [cursor=pointer]:
                - /url: /wishlist
                - text: Wishlist
        - generic [ref=e429]:
          - heading [level=3] [ref=e430]: NEWSLETTER
          - generic [ref=e433]:
            - textbox [ref=e434]:
              - /placeholder: Your Mail
            - button [ref=e436] [cursor=pointer]: Send Mail
      - generic [ref=e438] [cursor=pointer]: 
  - dialog "Login realizado" [ref=e440]:
    - heading "Login realizado" [level=2] [ref=e448]
    - generic [ref=e449]: Olá, invalid@test.com
    - text: "!"
    - button "OK" [active] [ref=e451] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage.js';
  3  | import { users } from '../fixtures/users.js';
  4  | 
  5  | test.describe('Login Flow - Automation Practice', () => {
  6  |   test('@smoke should access login page', async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  | 
  9  |     await loginPage.open();
  10 | 
  11 |     await expect(page).toHaveURL(/login/);
  12 |   });
  13 | 
  14 |   test('@regression should try login with valid credentials', async ({ page }) => {
  15 |     const loginPage = new LoginPage(page);
  16 | 
  17 |     await loginPage.open();
  18 |     await loginPage.login(users.valid.email, users.valid.password);
  19 | 
  20 |     await expect(page).not.toHaveURL(/error/);
  21 |   });
  22 | 
  23 |   test('@negative should show error for invalid credentials', async ({ page }) => {
  24 |     const loginPage = new LoginPage(page);
  25 | 
  26 |     await loginPage.open();
  27 |     await loginPage.login(users.invalid.email, users.invalid.password);
  28 | 
> 29 |     await expect(loginPage.errorMessage).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  30 |   });
  31 | });
  32 | 
```