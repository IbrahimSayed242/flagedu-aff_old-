export default {
  head: {
    title: "Flagedu",
    titleTemplate: "  %s",
    htmlAttrs: {},
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "احصل على عروض حصرية! سجّل مع وسيط موثوق عبر فلاجيدو. استمتع بصفقات مخصصة واستفد من إشارات التداول بالذكاء الاصطناعي لتجربة تداول أذكى",
      },
      { property: "format-detection", content: "telephone=no" },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Flagedu Affiliate",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "احصل على عروض حصرية! سجّل مع وسيط موثوق عبر فلاجيدو. استمتع بصفقات مخصصة واستفد من إشارات التداول بالذكاء الاصطناعي لتجربة تداول أذكى",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://flagedu.com",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "flagedu.com",
      },
      {
        hid: "Keywords",
        name: "Keywords",
        content:
          "وسيط موثوق عبر الإنترنت, منصة تداول موثوقة, مكافأة إيداع مضاعفة, إشارات تداول بالذكاء الاصطناعي, عروض حصرية عند التسجيل, احصل على صفقات مخصصة واستمتع بتجربة تداول أذكى عبر فلاجيدو ",
      },
    ],
    link: [
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      {
        rel: "stylesheet",
        href: "/css/bootstrap-icons.css",
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/favicon/manifest.json",
      },
    ],
    script: [{ type: "text/javascript", src: "/js/bootstrap.min.js" }],
  },

  env: {
    HOST:
      process.env.VUE_APP_STATIC_HOST ||
      process.env.VUE_APP_DEVHOST ||
      process.env.VUE_APP_DEVBROWSERHOST ||
      "http://localhost:8000",
    SITE_URL: process.env.VUE_APP_SITE_URL || "http://localhost:3000",
  },
  gtm: {
    id: "GTM-M7JD4BSG", // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    HOST:
      process.env.VUE_APP_STATIC_HOST ||
      process.env.VUE_APP_DEVBROWSERHOST ||
      process.env.VUE_APP_DEVHOST ||
      "http://localhost:3000",
    SITE_URL: process.env.VUE_APP_SITE_URL || "http://localhost:3000",
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },

  css: [
    "~/assets/css/main.scss",
    "node_modules/lite-youtube-embed/src/lite-yt-embed.css",
  ],

  styleResources: {
    scss: ["~/assets/css/_config.scss"],
  },

  axios: {
    baseURL: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
    browserBaseURL:
      process.env.VUE_APP_DEVBROWSERHOST ||
      process.env.VUE_APP_DEVHOST ||
      "http://localhost:8000",
    prefix: "/",
  },

  plugins: [
    {
      src: "~/plugins/validate.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-toast-notification.js",
      mode: "client",
    },
    {
      src: "~/plugins/clickaway.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-loading-overlay.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-debounce.js",
      ssr: false,
    },
    {
      src: "~/plugins/apexchart.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-country-code.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-otp-input.js",
      ssr: false,
    },
    {
      src: "~/plugins/vimeo-player.js",
      ssr: false,
    },
    "@/plugins/youtube.client.js",
  ],

  components: true,

  router: {
    middleware: "authenticated",
  },

  buildModules: ["@nuxtjs/style-resources"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
    "cookie-universal-nuxt",
    "nuxt-clipboard",
    "@nuxtjs/gtm",
  ],

  clipboard: {
    autoSetContainer: true,
  },

  dayjs: {
    plugins: ["relativeTime"],
  },

  build: {
    transpile: ["vee-validate/dist/rules"],
    extend(config, ctx) {},
    vendor: ["vue-vimeo-player"],
  },
};
