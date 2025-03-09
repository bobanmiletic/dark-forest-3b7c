// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
      <div>
      Der Immobilienmarkt in Österreich ist dynamisch und verändert sich ständig. Immo-Portal.at ist Ihre zuverlässige Quelle für Immobilienpreise, Marktanalysen und aktuelle Trends in der gesamten Alpenrepublik. Egal, ob Sie eine Wohnung in Wien, ein Haus in Salzburg oder eine Gewerbeimmobilie in Graz suchen – bei uns finden Sie die aktuellsten Marktpreise und wertvolle Informationen, um fundierte Entscheidungen zu treffen.

Unser Portal bietet Ihnen detaillierte Preisvergleiche, historische Preisdaten und Prognosen, die Ihnen helfen, den besten Zeitpunkt für Kauf oder Verkauf zu bestimmen. Durch die Analyse von Angebot und Nachfrage, regionalen Entwicklungen und wirtschaftlichen Faktoren sorgen wir dafür, dass Sie den Immobilienmarkt in Österreich immer im Blick haben.

Nutzen Sie unsere benutzerfreundliche Suchfunktion, um Immobilienpreise nach Region, Stadt oder Immobilientyp zu filtern. Ob Käufer, Verkäufer, Investoren oder Makler – Immo-Portal.at ist Ihre Plattform für transparente und verlässliche Immobilienmarktdaten in Österreich. 🏠📈
        </div>
    </>
  );
}

export default App;
