module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ['ktdI8A51P5opyod437rtWQ==', 'lnIESS16DabjP8JWZL8ugw==', 'c4sWln46n82hONAS0HzcAQ==', 'm5NySc0C9G0N7WWRgTM/Ng==']),
  },
});
