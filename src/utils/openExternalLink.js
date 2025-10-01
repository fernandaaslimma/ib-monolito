export default function openExternalLink(website) {
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = website;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();

  setTimeout(link.remove(), 100);

  return link;
}
