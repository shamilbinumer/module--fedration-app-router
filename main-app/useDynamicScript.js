import React from "react";

const useDynamicScript = ({ url }) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) return;

    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => setReady(true);
    script.onerror = () => setFailed(true);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url]);

  return { ready, failed };
};

export default useDynamicScript;
