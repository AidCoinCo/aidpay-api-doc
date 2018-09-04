# Embeddable widget

## Easy to integrate
It takes just a few minutes to integrate AIDPay into your website and start receiving donations in cryptocurrencies straight away.

## All your cryptos in one wallet
AIDPay allows donors to donate in their favorite cryptocurrencies, such as Bitcoin, Ethererum, Dash and many others. They are then all converted into AidCoin, letting you manage all your donations from a single wallet.

## All transactions on blockchain
We know that transparency is crucial for charities, that's why every time you receive a donation it will be visible on the blockchain. What’s more, when you register on AIDChain you'll be able to let your donors know how raised funds are being spent.

# Integrate AIDPay now

## Sign up
To register on [AIDChain](https://www.aidchain.co/aidpay) you need to provide some information about your charity including your contact details and registration number. You will also be required to upload your statute. The AidCoin Team will verify and approve your application as soon as possible. In the meantime, you can create your own page! 

## Create your wallet
AIDChain will allow you to import your own Ethereum wallet or create a new one in just a few clicks. Follow three easy steps and start managing your crypto donations!.

## Embed the code
Once you're logged in, visit your dashboard to get the widget code. Once you've pasted it into your website, you'll be ready to start raising crypto funds. You won’t need to integrate other payment systems, all of your transactions will be visible on AIDChain and on any Ethereum explorer.

The code will look like the one below:

```html
<script>
    function aidpay_click(a, e) {
        e.preventDefault();
        var link = a.href;
        window.open(
            link, 'aidpay_window',
            'width=480,height=800,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0'
        );
        return false;
    }
</script>
<a onclick="aidpay_click(this, event);" href="https://www.aidchain.co/aidpay/charity/<your-charity-id>">
    <img src="https://www.aidchain.co/assets/images/buttons/aidpay/aidpay-donate-default.svg">
</a>
```

# Custom Widget

For a customized version of our widget contact [AIDCoin](https://www.aidchain.co/aidpay).
