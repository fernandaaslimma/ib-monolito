import getGAnalytics from "./GA";

describe("getGAnalytics", () => {
  it("should return GA string for dev env", () => {
    expect(getGAnalytics()).toBe("");
  });

  it("should return GA string for prod env", () => {
    process.env.ANALYTICS_ID = "UA-40655017-5";

    expect(getGAnalytics()).toBe(`
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-40655017-5"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-40655017-5');
      </script>
    `);
  });
});
