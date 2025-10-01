export default function getGAnalytics() {
  const ANALYTICS_ID = process.env.ANALYTICS_ID;

  if (ANALYTICS_ID) {
    return `
      <script async src="https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${ANALYTICS_ID}');
      </script>
    `;
  }
  return "";
}
