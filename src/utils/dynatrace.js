export default function getDynatrace() {
  const DYNATRACE_ID = process.env.DYNATRACE_ID;
  const DYNATRACE_URL = process.env.DYNATRACE_URL;
  const DYNATRACE_KEY = process.env.DYNATRACE_KEY;

  if (DYNATRACE_ID && DYNATRACE_URL && DYNATRACE_KEY) {
    return `<script type="text/javascript" src="${DYNATRACE_URL}/${DYNATRACE_KEY}/${DYNATRACE_ID}_complete.js" crossorigin="anonymous" async></script>`;
  }
  return "";
}
