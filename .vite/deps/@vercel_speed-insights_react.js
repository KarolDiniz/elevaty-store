"use client";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/@vercel/speed-insights/dist/react/index.mjs
var import_react = __toESM(require_react(), 1);
var name = "@vercel/speed-insights";
var version = "1.0.2";
var initQueue = () => {
  if (window.si)
    return;
  window.si = function a(...params) {
    (window.siq = window.siq || []).push(params);
  };
};
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = "development";
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function isDevelopment() {
  return detectEnvironment() === "development";
}
function computeRoute(pathname, pathParams) {
  if (!pathname || !pathParams) {
    return pathname;
  }
  let result = pathname;
  try {
    for (const [key, valueOrArray] of Object.entries(pathParams)) {
      const isValueArray = Array.isArray(valueOrArray);
      const value = isValueArray ? valueOrArray.join("/") : valueOrArray;
      const expr = isValueArray ? `...${key}` : key;
      const matcher = new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
      if (matcher.test(result)) {
        result = result.replace(matcher, `/[${expr}]`);
      }
    }
    return result;
  } catch (e) {
    return pathname;
  }
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var SCRIPT_URL = `https://va.vercel-scripts.com/v1/speed-insights`;
var PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;
var DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;
var PROXY_SCRIPT_URL = `/_vercel/speed-insights/script.js`;
function injectSpeedInsights(props) {
  var _a;
  if (!isBrowser() || props.route === null)
    return null;
  initQueue();
  const isSelfHosted = Boolean(props.dsn);
  const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;
  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);
  if (document.head.querySelector(`script[src*="${src}"]`))
    return null;
  if (props.beforeSend) {
    (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.sampleRate) {
    script.dataset.sampleRate = props.sampleRate.toString();
  }
  if (props.route) {
    script.dataset.route = props.route;
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  script.onerror = () => {
    console.log(
      `[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`
    );
  };
  document.head.appendChild(script);
  return {
    setRoute: (route) => {
      script.dataset.route = route ?? void 0;
    }
  };
}
function SpeedInsights(props) {
  const setScriptRoute = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!setScriptRoute.current) {
      const script = injectSpeedInsights({
        framework: props.framework || "react",
        ...props
      });
      if (script) {
        setScriptRoute.current = script.setRoute;
      }
    } else if (props.route) {
      setScriptRoute.current(props.route);
    }
  }, [props.route]);
  return null;
}
export {
  SpeedInsights,
  computeRoute
};
//# sourceMappingURL=@vercel_speed-insights_react.js.map
