import { Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";

import { DOWNLOAD_PDF_URL } from "@env";

const downloadReport = () => {
  const { dirs } = RNFetchBlob.fs;
  const dirToSave = Platform.OS === "ios" ? dirs.DocumentDir : dirs.DownloadDir;

  const configfb = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      mediaScannable: true,
      title: `Invoice.pdf`,
      path: `${dirs.DownloadDir}/Invoice.pdf`,
    },
    useDownloadManager: true,
    notification: true,
    mediaScannable: true,
    title: "Invoice.pdf",
    path: `${dirToSave}/Invoice.pdf`,
  };

  const configOptions = Platform.select({
    ios: configfb,
    android: configfb,
  });

  RNFetchBlob.config(configOptions || {})
    .fetch("GET", DOWNLOAD_PDF_URL, {})
    .then((res) => {
      if (Platform.OS === "ios") {
        RNFetchBlob.fs.writeFile(configfb.path, res.data, "base64");
        RNFetchBlob.ios.previewDocument(configfb.path);
      }
      if (Platform.OS === "android") {
        console.log("file downloaded");
      }
    })
    .catch((e) => {
      console.log("invoice Download==>", e);
    });
};

export default downloadReport;
