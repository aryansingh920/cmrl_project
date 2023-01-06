// const Converter = require("csv-converter-to-pdf-and-html");

// module.exports.pdfConverter = async (req, res) => {
//   const converter = new Converter();

//   const destinationPath = path.resolve("./feedback.pdf"); // Aqui não precisa especificar a extensão (HTML or PDF)

//   converter.HTMLAndPDFConverter(filePath, destinationPath);
//   converter.PDFConverter(filePath, destinationPath);
// };

// const ConvertApi = require("convertapi-js");

const path = require("path");
const { convertCsvToXlsx } = require("@aternus/csv-to-xlsx");
const fs = require("fs");
var aspose = aspose || {};
aspose.cells = require("aspose.cells");

module.exports.pdfConverter = async (req, res) => {
  let source = path.resolve("./all_feedbacks.csv");
  let destination = "./allFeedbacks.xlsx";
  fs.unlinkSync(destination, function (err) {
    if (err) return console.log(err);
    console.log("file deleted successfully");
  });

  try {
    convertCsvToXlsx(source, destination);

    // create and set PDF options
    var workbook = aspose.cells.Workbook(destination);

    pdfOptions = aspose.cells.PdfSaveOptions();
    pdfOptions.setCompliance(aspose.cells.PdfCompliance.PDF_A_1_B);

    // convert Excel to PDF
    workbook.save("allFeedbacks.pdf", pdfOptions);
    const path = req.path.toString();
    if (path.includes("xlsx")) {
      res.download("allFeedbacks.xlsx");
    } else if (path.includes("pdf")) {
      res.download("allFeedbacks.pdf");
    }
  } catch (e) {
    console.error(e.toString());
    res.send(e.toString());
  } //   const filePath =
};
