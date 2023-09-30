import React, { useState } from 'react';

const XmlToJsonViewer = () => {
    const [jsonOutput, setJsonOutput] = useState(null);

    const xmlToJson = (xml) => {
        let obj = {};

        if (xml.nodeType === 3) { // TEXT_NODE
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
            const jsonResult = xmlToJson(xmlDoc);
            setJsonOutput(jsonResult);
        };
        reader.readAsText(file);
    };

    const extractValuesFromJson = (json, keys) => {
        const getValue = (obj, key) => {
          const parts = key.split('.');
          let current = obj;
          for (let part of parts) {
            if (current[part] === undefined) {
              return undefined;
            }
            current = current[part];
          }
          return current;
        };
      
        return keys.map(key => getValue(json, key));
      };
      
      // Przykład użycia:
      const jsonData = {
        osoba: {
          imie: "Jan",
          nazwisko: "Kowalski",
          adres: {
            ulica: "Mickiewicza",
            miasto: "Warszawa"
          }
        },
        praca: {
          stanowisko: "Programista",
          firma: {
            nazwa: "TechCorp",
            adres: {
              ulica: "Długa",
              miasto: "Kraków"
            }
          }
        }
      };
      
    //   const keysToExtract = ["osoba.imie", "praca.firma.nazwa"];
    //   const extractedValues = extractValuesFromJson(jsonData, keysToExtract);
    //   console.log(extractedValues); // ["Jan", "TechCorp"]

    return (
        <div>
            <h2>Przekształć plik XML do formatu JSON:</h2>
            <form>
                <input type="file" accept=".xml" onChange={handleFileChange} />
            </form>
            {jsonOutput && (
                <div>
                    <h3>Dane z pliku XML w formacie JSON:</h3>
                    {/* <pre>{extractValuesFromJson(jsonOutput, ["osoba.imie", "praca.firma.nazwa"])}</pre> */}
                    <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default XmlToJsonViewer;