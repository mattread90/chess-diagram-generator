import htmlToImage from "html-to-image";
import download from "downloadjs";

async function downloadDiagram() {
  const node = document.getElementById("diagram");
  const dataUrl = await htmlToImage.toPng(node);
  download(dataUrl, "my-node.png");
}

export { downloadDiagram };
