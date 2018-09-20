module.exports = {
  title: 'AIDPay',
  description: 'AIDPay is a payment gateway/embeddable widget that allows charities registered on the AidChain platform to accept donations in different cryptocurrencies directly on their website.',
  head: [
    ['script', {}, "function aidpay_click(a,e){e.preventDefault();window.open(a.href,'aidpay_window','width=480,height=800,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0');return false;}"]
  ],
  themeConfig: {
    sidebar: [
      ['/', 'About AIDPay'],
      ['/embeddable-widget', 'Embeddable Widget'],
      ['/api', 'API'],
    ]
  }
};
