import React, { useState } from "react";

const XmlToJsonViewer = () => {
  const [jsonOutput, setJsonOutput] = useState(null);

  const xmlToJson = (xml) => {
    let obj = {};

    if (xml.nodeType === 3) {
      // TEXT_NODE
      return xml.nodeValue.trim();
    }

    if (xml.hasAttributes && xml.hasAttributes()) {
      const attributes = xml.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes.item(i);
        obj[attribute.nodeName] = attribute.nodeValue;
      }
    }

    if (xml.hasChildNodes && xml.hasChildNodes()) {
      const childNodes = xml.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        const item = childNodes.item(i);
        const nodeName = item.nodeName;
        const content = xmlToJson(item);
        if (obj[nodeName]) {
          if (!Array.isArray(obj[nodeName])) {
            obj[nodeName] = [obj[nodeName]];
          }
          obj[nodeName].push(content);
        } else {
          obj[nodeName] = content;
        }
      }
    }

    return obj;
  };

  const filterAndTransformXmlToJson = (xml) => {
    let obj = xmlToJson(xml);

    // Remove the "Styles" property
    removeStylesProperty(obj);

    console.log(obj);

    return obj;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
      const jsonResult = filterAndTransformXmlToJson(xmlDoc);
      setJsonOutput(jsonResult);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2>Przekształć plik XML do formatu JSON:</h2>
      <form>
        <input type="file" accept=".xml" onChange={handleFileChange} />
      </form>
      {jsonOutput && (
        <div>
          <h3>Dane z pliku XML w formacie JSON:</h3>
          <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default XmlToJsonViewer;

function removeStylesProperty(obj) {
  delete obj.Workbook.Styles;
  delete obj["mso-application"];
  delete obj.Workbook["xmlns"];
  delete obj.Workbook["xmlns:html"];
  delete obj.Workbook["xmlns:o"];
  delete obj.Workbook["xmlns:ss"];
  delete obj.Workbook["xmlns:x"];
  delete obj.Workbook["ss:DocumentProperties"];
  delete obj.Workbook["DocumentProperties"];
  delete obj.Workbook["OfficeDocumentSettings"];
  delete obj.Workbook["ExcelWorkbook"];
  delete obj.Workbook["#text"];

  removeStylesFromAllWorkSheets(obj);
}

function removeStylesFromAllWorkSheets(obj) {
  const lengthOfWorksheet = obj.Workbook.Worksheet.length;
  for (let i = 0; i < lengthOfWorksheet; i++) {
    delete obj.Workbook["Worksheet"][i]["AutoFilter"];
    delete obj.Workbook["Worksheet"][i]["Names"];
    delete obj.Workbook["Worksheet"][i]["WorksheetOptions"];
    delete obj.Workbook["Worksheet"][i]["#text"];
    delete obj.Workbook["Worksheet"][i]["Table"]["#text"];
    delete obj.Workbook["Worksheet"][i]["Table"]["ss:DefaultRowHeight"];
    delete obj.Workbook["Worksheet"][i]["Table"]["ss:ExpandedColumnCount"];
    delete obj.Workbook["Worksheet"][i]["Table"]["ss:ExpandedRowCount"];
    delete obj.Workbook["Worksheet"][i]["Table"]["ss:StyleID"];
    delete obj.Workbook["Worksheet"][i]["Table"]["x:FullRows"];
    delete obj.Workbook["Worksheet"][i]["Table"]["x:FullColumns"];
    delete obj.Workbook["Worksheet"][i]["Table"]["Column"];

    for (
      let j = 0;
      j < obj.Workbook["Worksheet"][i]["Table"]["Row"].length;
      j++
    ) {
      delete obj.Workbook["Worksheet"][i]["Table"]["Row"][j]["#text"];
      delete obj.Workbook["Worksheet"][i]["Table"]["Row"][j][
        "ss:AutoFitHeight"
      ];
      delete obj.Workbook["Worksheet"][i]["Table"]["Row"][j]["ss:Height"];
      delete obj.Workbook["Worksheet"][i]["Table"]["Row"][j]["ss:StyleID"];
    }
  }
}
