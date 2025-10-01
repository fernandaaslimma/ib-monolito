import * as termsAPI from "../../services/terms";
import { downloadFromBase64 } from "../../utils/downloadFile";

export default () => ({
  downloadTerms: async (_, term, urlTermName = null) => {
    const id = `${term}.pdf`;
    termsAPI
      .downloadTerm(term, urlTermName)
      .then(resp => {
        return resp.blob();
      })
      .then(async blob => {
        var reader = new FileReader();
        reader.onload = async () => {
          const newResult = await reader.result.split(",")[1];
          await downloadFromBase64(newResult, `${id}`);
        };
        reader.readAsDataURL(blob);
      });
  },
  approveNewTerms: async (_, body) => {
    try {
      await termsAPI.approveNewTermsAPI(body);
    } catch (error) {
      throw { error };
    }
  }
});
