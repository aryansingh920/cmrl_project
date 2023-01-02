const Converter = require("csv-converter-to-pdf-and-html");
const path = require("path");

module.exports.pdfConverter = async (req, res) => {
  const converter = new Converter();

  const filePath = path.resolve("./all_feedbacks.csv");
  const destinationPath = path.resolve("./feedback.pdf"); // Aqui não precisa especificar a extensão (HTML or PDF)

  converter.HTMLAndPDFConverter(filePath, destinationPath);
  converter.PDFConverter(filePath, destinationPath);
};
