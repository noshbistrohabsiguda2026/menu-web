# nosh Table Ordering

Build a production-ready, mobile-first customer ordering web app for a modern café/restaurant called Nosh Bistro.

The goal is to create an extremely simple QR-based dine-in ordering experience where customers can scan a QR code placed on their table, browse the menu, add food to their order, submit the order without paying, and later pay the final bill using UPI or card.

This is NOT a traditional restaurant website. It is a table-specific dine-in ordering system.

CORE CUSTOMER FLOW

1. QR → Table Identification

Each restaurant table has a unique QR code.

When a customer scans the QR code:

QR
→ opens the web app
→ automatically identifies the table
→ creates/loads the active table session
→ opens the menu directly

Do not force the customer to create an account.

The URL/session should conceptually contain a table identifier, for example:

/menu?table=T12

The customer should immediately see:

Table 12
“Order from your table”

Do not ask for unnecessary information.

2. CUSTOMER MENU

The menu is the primary screen.

Design it for extremely fast browsing on a mobile phone.

Structure:

Restaurant branding

Table number

Search

Categories

Menu items

Floating/cart order summary

Example categories:

Recommended

Starters

Main Course

Rice & Biryani

Breads

Beverages

Desserts

Each food item should have:

High-quality food image

Item name

Short description

Price

Vegetarian/non-vegetarian indicator where applicable

Add button

Use a refined quantity interaction:

Add

After adding:

− 1 +

Do not make the interface feel like an ecommerce store.

It should feel like a premium restaurant ordering interface.

3. PRODUCT DETAILS

Tapping an item opens a lightweight bottom sheet rather than navigating away from the menu.

Show:

Large food image

Item name

Description

Ingredients

Dietary information if available

Price

Quantity selector

Optional add-ons/customizations

Add to order

Use smooth native-feeling transitions.

4. CART

The cart should appear as a floating bottom bar whenever items are added.

Example:

“3 items · ₹480”
“View Order”

Opening it displays:

Table number

Ordered items

Quantity

Individual prices

Add/remove controls

Subtotal

Applicable taxes/charges if configured

Grand total

Primary CTA:

Place Order

IMPORTANT:

There is NO PAYMENT during ordering.

Do not show payment gateways during this stage.

5. ORDER CONFIRMATION

After placing the order:

Show a beautiful confirmation screen.

Example:

Order received

“Your order has been sent to the kitchen.”

Show:

Order number

Table number

Items ordered

Current order status

Status:

Order received → Preparing → Ready → Served

The customer should be able to return to the menu and place additional orders.

Multiple orders can exist under the same table session.

6. ORDER TRACKING

Create a simple order-status interface.

Do not make this look like a logistics tracking application.

Use a clean horizontal/vertical status indicator:

✓ Order received
● Preparing
○ Ready
○ Served

The admin system will update the status.

The customer web app should reflect those changes in near real time.

7. REQUEST BILL / FINAL BILL

After eating, the customer can open:

View Bill

The bill should show:

Table number

Items ordered across the table session

Quantities

Prices

Taxes/charges if configured

Total amount

Primary CTA:

Pay Bill

8. PAYMENT

Support TWO payment methods:

UPI

Customer selects:

Pay with UPI

Generate a payment request/deep link using the configured UPI payment system.

The website should attempt to open the customer's installed UPI application.

Possible applications include:

Google Pay

PhonePe

Paytm

BHIM

Other supported UPI applications

The payment flow should NOT expose internal/admin QR functionality.

The QR/payment tooling used by the admin console is separate.

After returning from the UPI application:

Show:

Verifying payment…

The system must verify payment through the payment backend before marking the bill as paid.

Never mark an order as paid simply because the customer returned from the UPI app.

CARD

Provide:

Pay with Card

Use a secure payment gateway integration.

Do not collect or store raw card information inside the application.

Support:

Credit card

Debit card

Other payment methods supported by the configured gateway

After successful gateway confirmation:

Payment successful

9. PAYMENT SUCCESS

After confirmed payment:

Show:

Payment successful

Amount paid

Payment method

Order/bill number

Table number

Transaction reference where appropriate

The backend must immediately update the table/session payment state.

The admin console must receive a real-time notification.

10. CUSTOMER SESSION STATES

The system must handle these states correctly:

Active table

Empty table

Items added

Order submitted

Multiple active orders

Food preparing

Food ready

Food served

Bill requested

Bill generated

Payment pending

Payment processing

Payment successful

Payment failed

Payment cancelled

Session completed

If the customer refreshes the browser, their active table session should not disappear.

DESIGN DIRECTION

The visual design is extremely important.

Create a minimalist premium Apple-inspired liquid-glass interface, but do NOT copy Apple's interface directly.

Use:

Liquid glass

Frosted translucent surfaces

Subtle blur

Soft depth

Layered cards

Large rounded corners

Thin borders

Controlled translucency

Refined shadows

Fluid micro-interactions

Generous whitespace

High-quality typography

The UI should feel like:

Apple design principles + premium modern restaurant + contemporary editorial design

Avoid:

Generic SaaS dashboards

Excessive gradients

Neon colors

Excessive glass everywhere

Floating random blobs

Huge hero sections

AI-generated-looking layouts

Excessive rounded cards

Excessive animations

Fake 3D effects

The glass effect should be subtle and functional.

Use solid surfaces where readability is more important.

UX PRINCIPLES

The customer should be able to:

Scan QR
→ browse
→ add food
→ place order

in less than a minute.

Avoid:

Login

Signup

Email verification

Long forms

Popups

Unnecessary onboarding

The application should feel almost native on mobile.

Use:

Sticky cart

Bottom sheets

Large touch targets

Haptic-like visual feedback

Smooth transitions

Skeleton loading

Optimistic UI where safe

Clear error states

RESPONSIVE DESIGN

Primary target:

Mobile phones.

Also support:

Tablet

Desktop

On desktop, maintain a centered premium restaurant ordering experience rather than stretching the interface across the entire screen.

DATA / BACKEND ARCHITECTURE

Build the frontend so it is ready to connect to a real backend.

Entities should include:

Restaurant
Table
Table QR
Menu Category
Menu Item
Menu Add-on
Table Session
Order
Order Item
Bill
Payment
Payment Transaction

Each order must contain:

Order ID

Table ID

Session ID

Items

Quantities

Price snapshot

Order status

Created timestamp

Updated timestamp

Prices must be stored with the order item so historical bills do not change when the admin later changes menu prices.

REAL-TIME BEHAVIOR

The application should be designed for real-time updates.

When the kitchen/admin changes:

Order received
→ Preparing
→ Ready
→ Served

the customer should see the updated state without manually refreshing.

When payment succeeds:

Customer:
Payment successful

Admin:
Real-time payment notification

ERROR HANDLING

Design polished states for:

Invalid QR

Table unavailable

Menu unavailable

Item sold out

Network disconnected

Order submission failed

Payment failed

Payment cancelled

Payment verification pending

Session expired

Never show raw technical errors.

Use simple human language.

COMPONENT SYSTEM

Create reusable components:

GlassHeader

CategoryTabs

MenuItemCard

ProductBottomSheet

QuantitySelector

FloatingCart

CartSheet

OrderStatus

BillSummary

PaymentMethodSelector

PaymentProcessing

PaymentSuccess

EmptyState

ErrorState

Toast

BottomNavigation where appropriate

Create a coherent design-token system for:

Typography

Spacing

Radius

Blur

Borders

Shadows

Motion

Colors

Make the design system consistent across every screen.

IMPORTANT PRODUCT RULE

The CUSTOMER WEB APP is ONLY for:

Browse menu
→ Order food
→ Track order
→ View bill
→ Pay bill

It is NOT an admin application.

Do not expose:

Menu management

Analytics

Kitchen management

Staff management

Restaurant settings

Admin QR generation

Payment reconciliation

Inventory management

Those belong to the separate admin application.

FINAL QUALITY BAR

The finished product must look like an actual premium restaurant product designed by a senior product designer, not an AI-generated template.

Prioritize:

Simplicity

Speed

Readability

Premium visual quality

Clear hierarchy

Natural interactions

Production-ready states

Real-world restaurant usability

Build the complete customer experience, not merely static screens.
Ensure navigation, states, interactions, responsive behavior, and backend-ready data structures are coherent.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npx wrangler d1 migrations apply noshbistroweb --local
npm run dev
```

`npm run dev` builds and starts the app through Wrangler on
`http://127.0.0.1:8080`. This is the correct local runtime for orders,
customers, table mappings, and notifications because it injects the
`NOSHBISTROWEB` D1 binding. Use `npm run dev:ui` only for UI-only work; plain
Vite does not provide Cloudflare bindings and therefore must not be used to
test ordering or admin data.

## Cloudflare D1 setup

The menu, inventory, automatic login records, customer directory, table QR tokens, orders,
and push subscriptions use the `noshbistroweb` Cloudflare D1 database. Its
production binding is named `NOSHBISTROWEB`. Firebase is not used.

1. Authenticate this computer with `npx wrangler login`. The checked-in
   `wrangler.jsonc` already contains the Worker, account, D1 database, and
   binding identifiers.
2. Apply the schema locally with
   `npx wrangler d1 migrations apply noshbistroweb --local` and remotely with
   `npx wrangler d1 migrations apply noshbistroweb --remote`.
3. Copy `.dev.vars.example` to `.dev.vars` for local development. Never commit
   `.dev.vars`.
4. Configure `SESSION_SECRET` with `npx wrangler secret put SESSION_SECRET`.
5. Generate one VAPID key pair with `npx web-push generate-vapid-keys`, then
   configure `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, and `VAPID_SUBJECT` as
   Worker secrets. Use `mailto:noshbistrohabsiguda2026@gmail.com` as the
   subject.
6. Build with `npm run build` and deploy with
   `npx nitro deploy --prebuilt`.

The Tables admin screen downloads individual QR PNGs or prints all active table
cards. QR tokens resolve server-side and establish a short-lived table-access
session. New orders are committed to D1 before the customer cart is cleared,
then delivered to subscribed admin devices through Web Push and `public/sw.js`.

Customers and the admin use the same name-and-phone login screen. The phone
number `9111379111` opens the admin dashboard as `knk` immediately. Customers
see a one-second automatic-code animation before continuing to their table menu;
no SMS is sent and the generated display code is not an authentication factor.
