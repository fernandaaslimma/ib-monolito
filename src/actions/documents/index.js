import * as documentsAPI from "../../services/documents";
import { downloadFromBase64 } from "../../utils/downloadFile";

export default () => ({
  getFilesByFolder: async () => {
    try {
      const rawResponseTypes = await documentsAPI.getDocumentTypes();
      const responseTypes = await rawResponseTypes.json();
      const setFiles = async () => {
        await Promise.all(
          responseTypes.map(async type => {
            const rawFilesForType = await documentsAPI.getDocuments(
              type.typeId
            );
            const filesForType = await rawFilesForType.json();
            type.files = filesForType.sort((prev, next) => {
              return new Date(next.creationTime) - new Date(prev.creationTime);
            });
          })
        );
        return responseTypes;
      };

      return {
        filesByFolder: await setFiles()
      };
    } catch (error) {
      return { error };
    }
  },
  getShipmentFiles: async (_, type) => {
    const rawFiles = await documentsAPI.getShipmentsDocuments(type);
    const shipmentFiles = await rawFiles.json();

    shipmentFiles.sort((a, b) => {
      if (a.lastWriteTime < b.lastWriteTime) {
        return 1;
      }
      if (a.lastWriteTime > b.lastWriteTime) {
        return -1;
      }
      return 0;
    });

    return { shipmentFiles };
  },
  downloadDocument: async (_, id, format, extension) => {
    documentsAPI
      .downloadDocument(id)
      .then(resp => resp.text())
      .then(text => {
        downloadFromBase64(text, `document-${id}${extension ?
          `.${extension}` : ""}`, format);
      });
  }
});
