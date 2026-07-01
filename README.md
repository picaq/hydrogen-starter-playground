# Superhi Hydrogen v1.

This is a reduced starter from the Shopify hydrogen demo-store, I found the demo-store to be a little overwhelming and want to pair back some of that experience in order to give you a good starting place that we can build on together. I highly recommend checking out the Hydrogen getting started as well as the demo-store, I'll be explainining similar things just in my own way!

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher

Remember to update `.env` with your shop's domain and Storefront API token!

### Setting up a Shopify dev store and API token

If you don't already have a Shopify store to develop against:

1. Go to [shopify.com/partners](https://www.shopify.com/partners) and create a free Partner account (if you don't have one already).
2. In the Partner Dashboard, click **Stores → Add store → Development store** to create a free `*.myshopify.com` store for building and testing — no payment needed.

Once you have a store, generate a Storefront API token:

1. Log into the store's admin at `https://your-store.myshopify.com/admin`.
2. Go to **Settings → Apps and sales channels → Develop apps** (the first time, you'll need to click "Allow custom app development" — a one-time toggle per store).
3. Click **Create an app** and give it a name (e.g. "Hydrogen Storefront").
4. Open the **API credentials** tab, then under **Storefront API** click **Configure**.
5. Check the scopes you need — for this starter, enable all the `unauthenticated_*` scopes (product listings/inventory, checkouts, customers, content) so cart, account, and CMS pages all work.
6. Click **Save**, then back on **API credentials**, click **Install app**.
7. After installing, copy the **Storefront API access token** — this is your `PUBLIC_STOREFRONT_API_TOKEN`.
8. Your `PUBLIC_STORE_DOMAIN` is the store's bare `.myshopify.com` domain (no `https://` prefix or trailing slash, e.g. `your-store.myshopify.com`) — the app adds the protocol itself.

Fill both values into `.env` (see `.env.sample` for the full list of variables).

Accessing graphQL viewer [https://localhost:3000/graphiql](https://localhost:3000/graphiql)

## Local development

```bash
npm run dev
```
