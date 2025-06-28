import { Platform } from "react-native";
import RNFetchBlob, { ReactNativeBlobUtilConfig } from "react-native-blob-util";
import FileViewer from "react-native-file-viewer";

import { DOWNLOAD_PDF_URL } from "@env";
import { requestStoragePermission } from "../hooks/requestStoragePermission";

const downloadReport = async () => {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    console.error("Permission Denied, cannot download the PDF");
    return false;
  }

  try {
    const { fs, ios } = RNFetchBlob;
    const { DocumentDir, DownloadDir } = fs.dirs;
    const dirToSave = Platform.OS === "ios" ? DocumentDir : DownloadDir;

    const fileName = `FleetCheck-Report.pdf`;
    const filePath = `${dirToSave}/${fileName}`;

    const exists = await fs.exists(filePath);
    if (exists) {
      await fs.unlink(filePath);
    }

    const config: ReactNativeBlobUtilConfig = {
      fileCache: true,
      path: filePath,
    };

    const res = await RNFetchBlob.config(config).fetch(
      "GET",
      DOWNLOAD_PDF_URL,
      {}
    );

    if (Platform.OS === "ios") {
      ios.previewDocument(filePath);
    } else {
      await FileViewer.open(filePath);
    }

    console.log("PDF saved to:", filePath);
  } catch (error) {
    console.error("Download error:", error);
  }
};

export default downloadReport;
