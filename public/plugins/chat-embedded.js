import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

/**
   * HanaLoop's Knoa Chat Plugin for HTML
   * v2024.06.21
   * 
   * Place this script in your HTML page.
   */
function init() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
  .knoa-iframe-container {
    z-index: 199999999;
    // max-height: 800px;
    right: 12px;
    bottom: 20px;
    position: fixed;
    width: 110px;
    height: 110px;
  }

  .knoa-iframe-container.is-open {
    z-index: 199999999;
    top: initial;
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    left: initial;
    height: calc(100vh - 80px);
    transition: height 0.2s ease-in-out;
  }
  .knoa-iframe {
    z-index: 199999999;
    width: 100%;
    height: 100%;
    border: none;
  }
  `

  document.head.appendChild(style);
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("knoa-iframe-container");
  iframeContainer.id = "knoa-iframe-container";

  const iframe = document.createElement("iframe");
  // iframe.src = "http://localhost:3000/knoa/chat_plugin";
  iframe.src = "https://www.hana.eco/knoa/chat_plugin";
  iframeContainer.appendChild(iframe);
  iframe.classList.add("knoa-iframe");
  iframe.frameBorder = 0;
  iframe.allow = "clipboard-read; clipboard-write";

  // console.log("appendChild: iframeContainer"); 
  document.body.appendChild(iframeContainer);
  window.addEventListener("message", function (event) {
    if (event.data === "open") {
      console.log(iframeContainer, "changeClass", event);
      iframeContainer.classList.add("is-open");
    } else if (event.data === "close") {
      iframeContainer.classList.remove("is-open");
    }
  });
}

if (ExecutionEnvironment.canUseDOM) {
  init();
}
