import Script from 'next/script';

export default function CoinWidget() {
  return (
    <div>
      {/* Dynamically load the CoinGecko script */}
      <Script
        src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
        strategy="lazyOnload" // Load the script after the page is fully loaded
      />
      {/* Render the widget */}
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
        currency="usd"
        background-color="#FFF"
        locale="en"
        font-color="#333"
      ></coingecko-coin-price-marquee-widget>
    </div>
  );
}
