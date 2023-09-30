import React, { useState } from 'react';

function Form() {
  const [xmlData, setXmlData] = useState(null);

  const handleFileChange = (event) => {
    console.log("Wybrano plik.");
    const file = event.target.files[0];
    if (file) {
      console.log("Plik istnieje, rozpoczynam czytanie...");
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("Dane wczytane z pliku:", e.target.result);
        parseXML(e.target.result);
      };
      reader.onerror = (error) => {
        console.error("Błąd podczas czytania pliku:", error);
      };
      reader.readAsText(file);
    } else {
      console.warn("Nie wybrano żadnego pliku.");
    }
  };

  function parseXML(data) {
    console.log("Rozpoczynam analizę XML...");
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "text/xml");

    // Przykład odczytania wartości z elementu XML o nazwie 'exampleTag'
    const exampleTags = xmlDoc.getElementsByTagName("Row");
    if (exampleTags.length > 0) {
      console.log(exampleTags);
      // console.log("Znaleziono tag 'Row':", exampleTags[0].childNodes[0].nodeValue);
      setXmlData(exampleTags[0].childNodes[0].nodeValue);
    } else {
      console.warn("Nie znaleziono tagu 'exampleTag' w pliku XML.");
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {xmlData && <div>Dane z XML: {xmlData}</div>}
    </div>
  );
}

export default Form;