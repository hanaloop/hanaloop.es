import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function init() {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
    .iframe-container {
      max-height: 800px;
      right: 6px;
      bottom: 12px;
      position: fixed;
      width: 85px;
      height: 85px;
    }
    
    .iframe-container.is-open {
      bottom: 12px;
      left: initial;
      width: 450px;
      min-width: 450px;
      max-width: 500px;
      height: calc(95vh);
      transition: height 0.2s ease-in-out;
      z-index: 1000
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
    `;

  document.head.appendChild(style);
  const iframeContainer = document.createElement("div");
  iframeContainer.classList.add("iframe-container");
  iframeContainer.id = "iframe-container";
  const iframe = document.createElement("iframe");
  iframe.src = "https://ggeea.hanademo.eco/knoa/chat_plugin";
  // iframe.src = "http://localhost:3000/knoa/chat_plugin";
  iframeContainer.appendChild(iframe);
  iframe.frameBorder = 0;
  iframe.allow = "clipboard-read; clipboard-write";
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
