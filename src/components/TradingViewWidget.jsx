"use client";
import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    // Ensure TradingView script is loaded
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: 'FX_IDC:EURUSD',
        interval: '1',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '3',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_top_toolbar: true,
        save_image: false,
        container_id: 'tradingview_widget',
      });
    };

    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-full bg-white rounded">
      
      <div id="tradingview_widget" className='w-full h-full'></div>
    </div>
  );
};

export default TradingViewWidget;
