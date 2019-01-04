---
sidebarDepth: 3
---

# API

## Getting Started

You need to generate an API Key and Secret.

Contact AidCoin to receive your API Key and Secret [here](https://www.aidchain.co/aidpay).


## SDK

We have provided a PHP SDK that can be easily integrated through composer. 

```bash
composer require aidcoinco/aidpay-php
```

You can also use it as example by viewing our code on [GitHub](https://github.com/aidcoinco/aidpay-php).


## Usage

You can use our SDK or implement your own and call our APIs at

```
https://www.aidchain.co/api/v1/aidpay/payments
```

For each API call you must provide as a Header

* `Content-Type: application/json`
* `api-key: <your api key>`
* `sign: <signed message from API call body>`

Note: *sign* is a keyed hash value using the HMAC method.


### GET /payments/charities

Description:
+ Returns the list of enabled charities.

Params:
+ limit (default 12)
+ offset (default 0) 

Request:

```bash
curl -X GET \
  https://www.aidchain.co/api/v1/aidpay/payments/charities?limit=2&offset=0 \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>'
```

Response: 

```json
{
  "data": [
    {
      "id": 1,
      "name": "Friends Charity",
      "logo": "https://www.aidchain.io/image/charity/friends-charity.jpeg",
      "url": "https://www.aidchain.io/charity/friends-charity"
    },
    {
      "id": 2,
      "name": "Save Us Charity",
      "logo": "https://www.aidchain.io/image/charity/save-us-charity.jpeg",
      "url": "https://www.aidchain.io/charity/save-us-charity"
    }
  ],
  "count": 7,
  "pagination": {
    "page": 1,
    "pages": 4,
    "next": "/api/v1/aidpay/payments/charities?limit=2&offset=2",
    "prev": null
  }
}
```


### GET /payments/currencies

Description:
+ Returns the list of enabled currencies as a flat array with the associated DAI rate value.

Request:

```bash
curl -X GET \
  https://www.aidchain.co/api/v1/aidpay/payments/currencies \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>'
```

Response: 

```json
[
  {
    "name": "Aidcoin",
    "code": "AID",
    "daiRate": "0.0459845847"
  },
  {
    "name": "Attention Token",
    "code": "BAT",
    "daiRate": "0.1553115365"
  },
  {
    "name": "Blackcoin",
    "code": "BC",
    "daiRate": "0.0639980109"
  },
  {
    "name": "Bitcoin",
    "code": "BTC",
    "daiRate": "6153.6548980605"
  },
  {
    "name": "Dash",
    "code": "DASH",
    "daiRate": "159.9950888861"
  },
  {
    "name": "Decred",
    "code": "DCR",
    "daiRate": "37.8817317255"
  },
  {
    "name": "Dogecoin",
    "code": "DOGE",
    "daiRate": "0.0049602187"
  },
  {
    "name": "Enjincoin",
    "code": "ENJ",
    "daiRate": "0.0461524117"
  },
  {
    "name": "Essentia",
    "code": "ESS",
    "daiRate": "0.0021755345"
  },
  {
    "name": "Ethereum",
    "code": "ETH",
    "daiRate": "196.2888531824"
  },
  {
    "name": "Gamecredits",
    "code": "GAME",
    "daiRate": "0.1615949776"
  },
  {
    "name": "Gridcoin",
    "code": "GRC",
    "daiRate": "0.0106458229"
  },
  {
    "name": "Groestlcoin",
    "code": "GRS",
    "daiRate": "0.5194300099"
  },
  {
    "name": "Litecoin",
    "code": "LTC",
    "daiRate": "50.6322725012"
  },
  {
    "name": "Pivx",
    "code": "PIVX",
    "daiRate": "1.1255034808"
  },
  {
    "name": "Power Ledger",
    "code": "POWR",
    "daiRate": "0.1737176777"
  },
  {
    "name": "Peercoin",
    "code": "PPC",
    "daiRate": "0.8839109895"
  },
  {
    "name": "Augur",
    "code": "REP",
    "daiRate": "11.7099129786"
  },
  {
    "name": "Syscoin",
    "code": "SYS",
    "daiRate": "0.0851665837"
  },
  {
    "name": "BLOCKv",
    "code": "VEE",
    "daiRate": "0.0089843361"
  },
  {
    "name": "Vertcoin",
    "code": "VTC",
    "daiRate": "0.6460106911"
  },
  {
    "name": "Zcash",
    "code": "ZEC",
    "daiRate": "110.0055656389"
  },
  {
    "name": "0x",
    "code": "ZRX",
    "daiRate": "0.6442757334"
  }
]
```


### GET /payments/[from-currency]/limits

Description:
+ Returns the min and max amounts of tokens to be exchanged both in DAI and in selected currency.

Params:
+ fromCurrency: the currency from which to start the transaction

Request:

```bash
curl -X GET \
  https://www.aidchain.co/api/v1/aidpay/payments/BTC/limits \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>'
```

Response: 

```json
{
  "DAI": {
    "min": "4.5",
    "max": "6299.05278899"
  },
  "BTC": {
    "min": "0.000731227272727",
    "max": "1.02356426481"
  },
  "USD": {
    "min": "0.226368",
    "max": "316.867551497"
  },
  "EUR": {
    "min": "0.1956285",
    "max": "273.838721896"
  },
  "GBP": {
    "min": "0.17145",
    "max": "239.993911261"
  }
}
```


### GET /payments/[uuid]

Description:
+ Returns the status of the payment for a given uuid.

Params:
+ uuid: the unique id of the payment to search for

::: warning NOTES
Status could be 
* WAITING_FOR_DEPOSIT
* DEPOSIT_RECEIVED
* DEPOSIT_CONFIRMED
* EXECUTED
* NEEDS_REFUND
* REFUNDED
* CANCELED
* EXPIRED

PaymentStatus could be 
* PENDING
* UNDERPAY_RECEIVED
* UNDERPAY_CONFIRMED
* PAYMENT_RECEIVED 
* PAYMENT_CONFIRMED 
* OVERPAY_RECEIVED 
* OVERPAY_CONFIRMED
:::

Request:

```bash
curl -X GET \
  https://www.aidchain.co/api/v1/aidpay/payments/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>'
```

Response: 

```json
{
  "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "orderId": "O-12345",
  "status": "WAITING_FOR_DEPOSIT",
  "paymentStatus": "PENDING",
  "email": "example@aidcoin.co",
  "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
  "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
  "exchangeRate": "64625.850340136300000000",
  "fromCurrency": "BTC",
  "toCurrency": "DAI",
  "invoicedAmount": "0.1",
  "orderedAmount": "616.97941526",
  "hash": null,
  "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
  "createdAt": "2018-10-11T11:56:57+02:00",
  "expireDate": "2018-10-11T12:16:56+02:00",
  "chargedFee": "1.5"
}
```


### GET /payments/orders

Description:
+ Returns the customer's order list.

Params:
+ limit (default 12) 
+ offset (default 0) 
+ filters[status] (optional)

Request:

```bash
curl -X GET \
  https://www.aidchain.co/api/v1/aidpay/payments/orders?limit=2&offset=0&filters%5Bstatus%5D=WAITING_FOR_DEPOSIT \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>'
```

Response: 

```json
{
  "data": [
    {
      "uuid": "ffffffff-gggg-hhhh-iiii-llllllllllll",
      "orderId": "O-67890",
      "status": "WAITING_FOR_DEPOSIT",
      "paymentStatus": "PENDING",
      "email": "example@aidcoin.co",
      "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
      "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
      "exchangeRate": "6138.0122760247",
      "fromCurrency": "BTC",
      "toCurrency": "DAI",
      "invoicedAmount": "0.1",
      "orderedAmount": "612.3012276",
      "hash": null,
      "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
      "createdAt": "2018-10-11T11:56:57+02:00",
      "expireDate": "2018-10-11T12:16:56+02:00",
      "chargedFee": "1.5"
    },
    {
      "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "orderId": "O-12345",
      "status": "WAITING_FOR_DEPOSIT",
      "paymentStatus": "PENDING",
      "email": "example@aidcoin.co",
      "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
      "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
      "exchangeRate": "6138.0122760247",
      "fromCurrency": "BTC",
      "toCurrency": "DAI",
      "invoicedAmount": "0.1",
      "orderedAmount": "612.3012276",
      "hash": null,
      "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
      "createdAt": "2018-10-11T11:56:57+02:00",
      "expireDate": "2018-10-11T12:16:56+02:00",
      "chargedFee": "1.5"
    }
  ],
  "count": 23,
  "pagination": {
    "page": 1,
    "pages": 12,
    "next": "/api/v1/aidpay/payments/charities?limit=2&offset=2",
    "prev": null
  }
}
```


### POST /payments/donation

::: warning
ONLY FOR NO-PROFIT ACCOUNTS
:::

Description:
+ Create a donation.

Params:
+ orderId: a reference for the customer (i.e. his progressive order id). Will be sent for reference in notifications
+ fromCurrency: the currency from which to start the transaction
+ invoicedAmount: the amount to convert (in "fromCurrency"). In any case the amount should never exceed the [minimum or maximum limit](#get-payments-from-currency-limits)
+ email: your customer notification email
+ itemId: the item id of the charity to send the funds to
+ refundAddress: an optional address compatible with "fromCurrency" for receiving refunds in the event of problems with the blockchain
+ return: the return URL that will be used to redirect your buyers back to your site (optional: only if you are using the AidPay interface)

Request:

```bash
curl -X POST \
  https://www.aidchain.co/api/v1/aidpay/payments/donation \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>' \
  -d '{
       "orderId": "O-12345",
       "fromCurrency": "BTC",
       "invoicedAmount": "0.100000000000000000",
       "email": "example@aidcoin.co",
       "itemId": "1",
       "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
       "return": "https://your.client/return/url"
     }'
```

Response: 

```json
{
  "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "orderId": "O-12345",
  "status": "WAITING_FOR_DEPOSIT",
  "paymentStatus": "PENDING",
  "email": "example@aidcoin.co",
  "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
  "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
  "exchangeRate": "6197.5710529613",
  "fromCurrency": "BTC",
  "toCurrency": "DAI",
  "invoicedAmount": "0.163838",
  "orderedAmount": "1000.3971577",
  "hash": null,
  "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
  "createdAt": "2018-10-11T11:56:57+02:00",
  "expireDate": "2018-10-11T12:16:56+02:00",
  "chargedFee": "1.5",
  "orderLink": "https://www.aidchain.co/aidpay/payment/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee?return=https%3A//your.client/return/url"
}
```

The `invoicedAmount` will need to be sent to the `depositAddress` (by your users or through your system) within 20 minutes.   

If you want to use the AidPay interface redirect your users to `orderLink`.


### POST /payments/order

::: warning
ONLY FOR MERCHANT ACCOUNTS
:::

Description:
+ Create an order.

Params:
+ orderId: a reference for the customer (i.e. his progressive order id). Will be sent for reference in notifications
+ fromCurrency: the currency from which to start the transaction
+ fromFiat: the FIAT currency from which to start the conversion
+ fiatAmount: the amount to convert (in "fromFiat")
+ email: your customer notification email
+ refundAddress: an optional address compatible with "fromCurrency" for receiving refunds in case of problems with the blockchain
+ return: the return URL that will be used to redirect your buyers back to your site (optional: only if you are using the AidPay interface)

Request:

```bash
curl -X POST \
  https://www.aidchain.co/api/v1/aidpay/payments/order \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>' \
  -d '{
       "orderId": "O-12345",
       "fromCurrency": "BTC",
       "fromFiat": "USD",
       "fiatAmount": "1000",
       "email": "example@aidcoin.co",
       "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
       "return": "https://your.client/return/url"
     }'
```

Response: 

```json
{
  "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "orderId": "O-12345",
  "status": "WAITING_FOR_DEPOSIT",
  "paymentStatus": "PENDING",
  "email": "example@aidcoin.co",
  "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
  "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
  "exchangeRate": "6159.7809855648",
  "fromCurrency": "BTC",
  "toCurrency": "DAI",
  "invoicedAmount": "0.16258695",
  "orderedAmount": "1000",
  "hash": null,
  "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
  "createdAt": "2018-10-11T11:56:57+02:00",
  "expireDate": "2018-10-11T12:16:56+02:00",
  "chargedFee": "1.5",
  "orderLink": "https://www.aidchain.co/aidpay/payment/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee?return=https%3A//your.client/return/url"
}
```

The `invoicedAmount` will need to be sent to the `depositAddress` (by your users or through your system) within 20 minutes.   

If you want to use the AidPay interface redirect your users to `orderLink`.


### POST /payments/cancel

Description:
+ Delete a payment for a given uuid.

Params:
+ uuid: the unique id of the payment to search for

Request:

```bash
curl -X POST \
  https://www.aidchain.co/api/v1/aidpay/payments/cancel \
  -H 'Content-Type: application/json' \
  -H 'api-key: <your api key>' \
  -H 'sign:  <signed message from API call body>' \
  -d '{
       "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
     }'
```

Response:  

```json
{
  "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "orderId": "O-12345",
  "status": "CANCELED",
  "paymentStatus": "PENDING",
  "email": "example@aidcoin.co",
  "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
  "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
  "exchangeRate": "6138.0122760247",
  "fromCurrency": "BTC",
  "toCurrency": "DAI",
  "invoicedAmount": "0.1",
  "orderedAmount": "612.3012276",
  "hash": null,
  "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
  "createdAt": "2018-10-11T11:56:57+02:00",
  "expireDate": "2018-10-11T12:16:56+02:00",
  "chargedFee": "1.5"
}
```


## Return url

When your payment has been `EXECUTED` you will receive a POST to the `return_url` provided during the setup process.

::: warning NOTES
This is a Server To Server http call.
:::

::: warning NOTES
Before updating your order status you should sign the call BODY with your API Secret and then check that it matches our provided sign in HEADERS.
:::

```bash
curl -X POST \
  https://your-provided-return-url \
  -H 'Content-Type: application/json' \
  -H 'sign: <signed message from body below>' \
  -d '{
        "uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
        "orderId": "O-12345",
        "status": "EXECUTED",
        "paymentStatus": "PAYMENT_CONFIRMED",
        "email": "example@aidcoin.co",
        "depositAddress": "1HfL94JWjmmjroyAHTDhRQqUwZ7PR4JoUZ",
        "destination": "0x4Aa0f67D9A0666b9Dd0Ee6d397334903AE337e1E",
        "exchangeRate": "6138.0122760247",
        "fromCurrency": "BTC",
        "toCurrency": "DAI",
        "invoicedAmount": "0.1",
        "orderedAmount": "612.3012276",
        "hash": "0xc28b0..........ac11",
        "refundAddress": "1Nv92z71iinNVPncrDm4RPHyo17S9bEVPG",
        "createdAt": "2018-10-11T11:56:57+02:00",
        "expireDate": "2018-10-11T12:16:56+02:00",
        "chargedFee": "1.5"
      }'
```
