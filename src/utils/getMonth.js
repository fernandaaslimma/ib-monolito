export default function getMonth() {
  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth());

  return date.toISOString().slice(0, 10);
}
