// @ts-nocheck
"use client";

import {useEffect, useRef} from "react";

export function DemoEmbed() {
  const arcadeIframeRef = useRef(null);

  useEffect(() => {
    function onArcadeIframeMessage(e) {
      if (e.origin !== "https://demo.arcade.software" || !e.isTrusted) return;

      const arcadeIframe = arcadeIframeRef.current;

      if (!arcadeIframe || !arcadeIframe.contentWindow) return;

      if (e.data.event === "arcade-init") {
        arcadeIframe.contentWindow.postMessage({event: "register-popout-handler"}, "*");
      }

      if (e.data.event === "arcade-popout-open") {
        arcadeIframe.style["position"] = "fixed";
        arcadeIframe.style["z-index"] = "9999999";
      }

      if (e.data.event === "arcade-popout-close") {
        arcadeIframe.style["position"] = "absolute";
        arcadeIframe.style["z-index"] = "auto";
      }
    }

    window.addEventListener("message", onArcadeIframeMessage);

    const arcadeIframe = arcadeIframeRef.current;

    if (arcadeIframe && arcadeIframe.contentWindow) {
      arcadeIframe.contentWindow.postMessage({event: "register-popout-handler"}, "*");
    }

    return () => {
      if (arcadeIframe && arcadeIframe.contentWindow) {
        arcadeIframe.contentWindow.postMessage({event: "unregister-popout-handler"}, "*");
      }

      window.removeEventListener("message", onArcadeIframeMessage);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(47.760416666666664% + 41px)",
        height: "0",
        width: "100%",
      }}
    >
      <iframe
        ref={arcadeIframeRef}
        allowFullScreen
        allow="clipboard-write"
        frameBorder="0"
        loading="lazy"
        src="https://demo.arcade.software/2yzGlAuBQNLzjcxEBs0p?embed&embed_mobile=tab&embed_desktop=modal&show_copy_link=true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
        title="PDF&#39;den Quiz Oluşturma ve Sonuçları Görüntüleme"
      />
    </div>
  );
}
