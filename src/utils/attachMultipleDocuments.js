export default async function attachMultipleDocuments(files) {
  let attachedDocuments = [];

  await Promise.all(
    files.map(
      file =>
        new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const value = reader.result.split(",");
            attachedDocuments.push({
              name: file.name,
              value: value[1]
            });
            resolve();
          };
        })
    )
  );

  return attachedDocuments;
}
