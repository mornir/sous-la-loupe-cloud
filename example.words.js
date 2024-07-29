const words = [
  {
    text: 'Fokus',
    size: 45,
  },
  {
    text: 'Input',
    size: 34,
  },
  {
    text: 'offen',
    size: 32,
  },
  {
    text: 'sinnvoll',
    size: 32,
  },
  {
    text: 'frühzeitig',
    size: 32,
  },
  {
    text: 'weitergehend',
    size: 30,
  },
  {
    text: 'flächendeckend',
    size: 30,
  },
  {
    text: 'Voraussetzung',
    size: 28,
  },
  {
    text: 'erfolgen',
    size: 28,
  },
  {
    text: 'fristgerecht',
    size: 28,
  },
  {
    text: 'Kern',
    size: 27,
  },
  {
    text: 'Engpass',
    size: 27,
  },
  {
    text: 'hoheitlich',
    size: 27,
  },
  {
    text: 'Zusammenstellung',
    size: 26,
  },
  {
    text: 'entsprechend',
    size: 26,
  },
  {
    text: 'schon',
    size: 26,
  },
  {
    text: 'ausrichten',
    size: 25,
  },
  {
    text: 'Erreichen',
    size: 25,
  },
  {
    text: 'stufengerecht',
    size: 24,
  },
  {
    text: 'ähnlich',
    size: 24,
  },
  {
    text: 'kritisch',
    size: 23,
  },
  {
    text: 'stimmen',
    size: 23,
  },
  {
    text: 'übergeordnet',
    size: 23,
  },
  {
    text: 'dabei',
    size: 22,
  },
  {
    text: 'Ausrichtung',
    size: 22,
  },
  {
    text: 'kostenbewusst',
    size: 21,
  },
  {
    text: 'Aufwand',
    size: 21,
  },
  {
    text: 'Anlass',
    size: 21,
  },
  {
    text: 'umfassend',
    size: 20,
  },
  {
    text: 'Nachweis',
    size: 20,
  },
  {
    text: 'ermitteln',
    size: 20,
  },
  {
    text: 'Ablauf',
    size: 20,
  },
  {
    text: 'Abbau',
    size: 19,
  },
  {
    text: 'Verschärfung',
    size: 19,
  },
  {
    text: 'Konzept',
    size: 19,
  },
  {
    text: 'teilweise',
    size: 19,
  },
  {
    text: 'Kuhhandel',
    size: 19,
  },
  {
    text: 'knapp',
    size: 18,
  },
  {
    text: 'Mangel',
    size: 18,
  },
  {
    text: 'gemäss',
    size: 18,
  },
  {
    text: 'Stellenwert',
    size: 18,
  },
  {
    text: 'Umstände',
    size: 18,
  },
  {
    text: 'Handlungsbedarf',
    size: 18,
  },
  {
    text: 'Ausgangslage',
    size: 18,
  },
  {
    text: 'gleichzeitig',
    size: 18,
  },
  {
    text: 'verabschieden',
    size: 18,
  },
  {
    text: 'Auftritt',
    size: 18,
  },
  {
    text: 'Positionspapier',
    size: 18,
  },
  {
    text: 'naturgemäss',
    size: 18,
  },
  {
    text: 'pendent',
    size: 17,
  },
  {
    text: 'Gefälle',
    size: 17,
  },
  {
    text: 'Vorgabe',
    size: 17,
  },
  {
    text: 'Wohlstand',
    size: 17,
  },
  {
    text: 'abseits',
    size: 17,
  },
  {
    text: 'Beratung',
    size: 17,
  },
  {
    text: 'Auftraggeber',
    size: 17,
  },
  {
    text: 'dokumentieren',
    size: 17,
  },
  {
    text: 'aufwendig',
    size: 17,
  },
  {
    text: 'Annahme',
    size: 16,
  },
  {
    text: 'Massnahme',
    size: 16,
  },
  {
    text: 'Massstab',
    size: 16,
  },
  {
    text: 'nachträglich',
    size: 16,
  },
  {
    text: 'Querschnitt',
    size: 16,
  },
  {
    text: 'abstimmen',
    size: 16,
  },
  {
    text: 'Schwerpunkte',
    size: 16,
  },
  {
    text: 'differenziert',
    size: 16,
  },
  {
    text: 'überführen',
    size: 16,
  },
  {
    text: 'Umgang',
    size: 15,
  },
  {
    text: 'Einsicht',
    size: 15,
  },
  {
    text: 'unterschiedlich',
    size: 15,
  },
  {
    text: 'vermitteln',
    size: 15,
  },
  {
    text: 'Nachholbedarf',
    size: 15,
  },
  {
    text: 'nachvollziehen',
    size: 15,
  },
  {
    text: 'laufend',
    size: 15,
  },
  {
    text: 'durchsetzen',
    size: 15,
  },
  {
    text: 'fair',
    size: 14,
  },
  {
    text: 'ausgehen',
    size: 14,
  },
  {
    text: 'eingehen',
    size: 14,
  },
  {
    text: 'grundsätzlich',
    size: 14,
  },
  {
    text: 'Grundsatz',
    size: 14,
  },
  {
    text: 'Handhabung',
    size: 14,
  },
  {
    text: 'niederschwellig',
    size: 14,
  },
  {
    text: 'Gefäss',
    size: 14,
  },
  {
    text: 'abfedern',
    size: 14,
  },
  {
    text: 'schlank',
    size: 14,
  },
  {
    text: 'verschärfen',
    size: 14,
  },
  {
    text: 'Ansatz',
    size: 14,
  },
  {
    text: 'umgehen',
    size: 14,
  },
  {
    text: 'Task Force',
    size: 14,
  },
  {
    text: 'Effizienz',
    size: 14,
  },
  {
    text: 'ausrichten _ exemples',
    size: 14,
  },
  {
    text: 'ausfallend',
    size: 14,
  },
  {
    text: 'abgleichen',
    size: 13,
  },
  {
    text: 'interessiert',
    size: 13,
  },
  {
    text: 'Kalkulation',
    size: 13,
  },
  {
    text: 'Konjunktur',
    size: 13,
  },
  {
    text: 'Auseinandersetzung',
    size: 13,
  },
  {
    text: 'Wahrnehmung',
    size: 13,
  },
  {
    text: 'alternativ',
    size: 13,
  },
  {
    text: 'ordnungspolitisch',
    size: 13,
  },
  {
    text: 'verhältnismässig',
    size: 13,
  },
  {
    text: 'primär',
    size: 13,
  },
  {
    text: 'verzichten',
    size: 13,
  },
  {
    text: 'Bandbreite',
    size: 13,
  },
  {
    text: 'beanspruchen',
    size: 13,
  },
  {
    text: 'Leistungsbereitschaft',
    size: 13,
  },
  {
    text: 'Schwerpunkt exemples',
    size: 13,
  },
  {
    text: 'krass',
    size: 12,
  },
  {
    text: 'geordnet',
    size: 12,
  },
  {
    text: 'Hintergrund',
    size: 12,
  },
  {
    text: 'Spannungsfeld',
    size: 12,
  },
  {
    text: 'Bericht',
    size: 12,
  },
  {
    text: 'nachhaltig',
    size: 12,
  },
  {
    text: 'gerade',
    size: 12,
  },
  {
    text: 'zielbewusst',
    size: 12,
  },
  {
    text: 'Oberbegriff',
    size: 12,
  },
  {
    text: 'Beurteilung',
    size: 12,
  },
  {
    text: 'übereinstimmen',
    size: 12,
  },
  {
    text: 'sinnlos',
    size: 12,
  },
  {
    text: 'sinnwidrig',
    size: 12,
  },
  {
    text: 'vielmehr',
    size: 12,
  },
  {
    text: 'Höhepunkt',
    size: 12,
  },
  {
    text: 'erwartungsgemäss',
    size: 11,
  },
  {
    text: 'ablegen',
    size: 11,
  },
  {
    text: 'abwägen',
    size: 11,
  },
  {
    text: 'Anfall',
    size: 11,
  },
  {
    text: 'aufstellen',
    size: 11,
  },
  {
    text: 'Begriff',
    size: 11,
  },
  {
    text: 'beständig',
    size: 11,
  },
  {
    text: 'Forderung',
    size: 11,
  },
  {
    text: 'Geltung',
    size: 11,
  },
  {
    text: 'harren',
    size: 11,
  },
  {
    text: 'Anlaufstelle',
    size: 11,
  },
  {
    text: 'verbindlich',
    size: 11,
  },
  {
    text: 'Gewalteinwirkung',
    size: 11,
  },
  {
    text: 'Herausforderung',
    size: 11,
  },
  {
    text: 'kurzfristig',
    size: 11,
  },
  {
    text: 'ordnungsgemäss',
    size: 11,
  },
  {
    text: 'konsequent',
    size: 11,
  },
  {
    text: 'brisant',
    size: 11,
  },
  {
    text: 'Effektivität',
    size: 11,
  },
  {
    text: 'Wirksamkeit',
    size: 11,
  },
  {
    text: 'Compliance',
    size: 11,
  },
  {
    text: 'anrechnen',
    size: 10,
  },
  {
    text: 'Anstand',
    size: 10,
  },
  {
    text: 'Darstellung',
    size: 10,
  },
  {
    text: 'Durchführung',
    size: 10,
  },
  {
    text: 'Ermessen',
    size: 10,
  },
  {
    text: 'gesellschaftlich',
    size: 10,
  },
  {
    text: 'Hoheit',
    size: 10,
  },
  {
    text: 'Instrumentarium',
    size: 10,
  },
  {
    text: 'intensiv',
    size: 10,
  },
  {
    text: 'Kompetenz',
    size: 10,
  },
  {
    text: 'Pflege',
    size: 10,
  },
  {
    text: 'Verfahren',
    size: 10,
  },
  {
    text: 'abgeleitet',
    size: 10,
  },
  {
    text: 'vernetzt',
    size: 10,
  },
  {
    text: 'situativ',
    size: 10,
  },
  {
    text: 'Planung',
    size: 10,
  },
  {
    text: 'auslösen',
    size: 10,
  },
  {
    text: 'denn auch',
    size: 10,
  },
  {
    text: 'Schwerpunkt',
    size: 10,
  },
  {
    text: 'Votum',
    size: 10,
  },
  {
    text: 'kern-',
    size: 10,
  },
  {
    text: 'Alleingang',
    size: 9,
  },
  {
    text: 'angeblich',
    size: 9,
  },
  {
    text: 'Anliegen',
    size: 9,
  },
  {
    text: 'Anstoss',
    size: 9,
  },
  {
    text: 'einzeln',
    size: 9,
  },
  {
    text: 'Interessent',
    size: 9,
  },
  {
    text: 'Konsens',
    size: 9,
  },
  {
    text: 'mildern',
    size: 9,
  },
  {
    text: 'Sachzwang',
    size: 9,
  },
  {
    text: 'Stelle',
    size: 9,
  },
  {
    text: 'tendenziell',
    size: 9,
  },
  {
    text: 'zuhanden',
    size: 9,
  },
  {
    text: 'Vernetzung',
    size: 9,
  },
  {
    text: 'jeweils',
    size: 9,
  },
  {
    text: 'Anmeldung',
    size: 9,
  },
  {
    text: 'wahrnehmen',
    size: 9,
  },
  {
    text: 'vertraglich',
    size: 9,
  },
  {
    text: 'gezielt',
    size: 9,
  },
  {
    text: 'Abseits',
    size: 8,
  },
  {
    text: 'Abnahme',
    size: 8,
  },
  {
    text: 'abschliessend',
    size: 8,
  },
  {
    text: 'Akzeptanz',
    size: 8,
  },
  {
    text: 'Anweisung',
    size: 8,
  },
  {
    text: 'Aufteilung',
    size: 8,
  },
  {
    text: 'Bestand',
    size: 8,
  },
  {
    text: 'Einsatz',
    size: 8,
  },
  {
    text: 'Fach',
    size: 8,
  },
  {
    text: 'gedeihen',
    size: 8,
  },
  {
    text: 'hängig',
    size: 8,
  },
  {
    text: 'Härte',
    size: 8,
  },
  {
    text: 'Hinweis',
    size: 8,
  },
  {
    text: 'im Zuge',
    size: 8,
  },
  {
    text: 'Ist-Bestand',
    size: 8,
  },
  {
    text: 'Kinderkrankheiten',
    size: 8,
  },
  {
    text: 'kompetent',
    size: 8,
  },
  {
    text: 'Material',
    size: 8,
  },
  {
    text: 'sachlich',
    size: 8,
  },
  {
    text: 'Stichprobe',
    size: 8,
  },
  {
    text: 'Fachstelle',
    size: 8,
  },
  {
    text: 'Vermögen',
    size: 8,
  },
  {
    text: 'zumutbar',
    size: 8,
  },
  {
    text: 'zumuten',
    size: 8,
  },
  {
    text: 'ausgelastet',
    size: 8,
  },
  {
    text: 'körperfreundlich',
    size: 8,
  },
  {
    text: 'jeweilig',
    size: 8,
  },
  {
    text: 'Abfederung',
    size: 8,
  },
  {
    text: 'Berührungsängste',
    size: 8,
  },
  {
    text: 'Klausur',
    size: 8,
  },
  {
    text: 'vertretbar',
    size: 8,
  },
  {
    text: 'Fachtagung',
    size: 8,
  },
  {
    text: 'Träger',
    size: 8,
  },
  {
    text: 'Verhältnisse',
    size: 8,
  },
  {
    text: 'Abwicklung',
    size: 8,
  },
  {
    text: 'regeln',
    size: 8,
  },
  {
    text: 'ausfällig',
    size: 8,
  },
  {
    text: 'Memorandum',
    size: 8,
  },
  {
    text: 'Abfertigung',
    size: 7,
  },
  {
    text: 'Abgeltung',
    size: 7,
  },
  {
    text: 'Ansatzpunkt',
    size: 7,
  },
  {
    text: 'Anlage',
    size: 7,
  },
  {
    text: 'Mehraufwand',
    size: 7,
  },
  {
    text: 'Aussage',
    size: 7,
  },
  {
    text: 'dankbar',
    size: 7,
  },
  {
    text: 'entnehmen',
    size: 7,
  },
  {
    text: 'erleben',
    size: 7,
  },
  {
    text: 'Gesellschaft',
    size: 7,
  },
  {
    text: 'Haltung',
    size: 7,
  },
  {
    text: 'heranziehen',
    size: 7,
  },
  {
    text: 'Hilfsmittel',
    size: 7,
  },
  {
    text: 'hinweisen',
    size: 7,
  },
  {
    text: 'Hochbau',
    size: 7,
  },
  {
    text: 'Initiant',
    size: 7,
  },
  {
    text: 'Inventar',
    size: 7,
  },
  {
    text: 'Kollaudation',
    size: 7,
  },
  {
    text: 'Kunde',
    size: 7,
  },
  {
    text: 'Leistung',
    size: 7,
  },
  {
    text: 'marktwirtschaftlich',
    size: 7,
  },
  {
    text: 'massvoll',
    size: 7,
  },
  {
    text: 'mehrdeutig',
    size: 7,
  },
  {
    text: 'Missstand',
    size: 7,
  },
  {
    text: 'mobilisieren',
    size: 7,
  },
  {
    text: 'nicht zuletzt',
    size: 7,
  },
  {
    text: 'scheuen',
    size: 7,
  },
  {
    text: 'starr',
    size: 7,
  },
  {
    text: 'Angelpunkt',
    size: 7,
  },
  {
    text: 'vereinbaren',
    size: 7,
  },
  {
    text: 'Zuwendung',
    size: 7,
  },
  {
    text: 'Zwiespalt',
    size: 7,
  },
  {
    text: 'mundgerecht',
    size: 7,
  },
  {
    text: 'marktgerecht',
    size: 7,
  },
  {
    text: 'Handelsgesellschaft',
    size: 7,
  },
  {
    text: 'Mangelware',
    size: 7,
  },
  {
    text: 'machtpolitisch',
    size: 7,
  },
  {
    text: 'Überlegung',
    size: 7,
  },
  {
    text: 'Konsumentenstimmung',
    size: 7,
  },
  {
    text: 'Nachbereitung',
    size: 7,
  },
  {
    text: 'nachvollziehbar',
    size: 7,
  },
  {
    text: 'Klausurtagung',
    size: 7,
  },
  {
    text: 'abschreiben',
    size: 7,
  },
  {
    text: 'Meldung',
    size: 7,
  },
  {
    text: 'Anhaltspunkt',
    size: 7,
  },
  {
    text: 'Abklärung',
    size: 6,
  },
  {
    text: 'Abrechnung',
    size: 6,
  },
  {
    text: 'absehen',
    size: 6,
  },
  {
    text: 'Anforderung',
    size: 6,
  },
  {
    text: 'angemessen',
    size: 6,
  },
  {
    text: 'Anlauf',
    size: 6,
  },
  {
    text: 'anordnen',
    size: 6,
  },
  {
    text: 'anspruchsvoll',
    size: 6,
  },
  {
    text: 'Antrieb',
    size: 6,
  },
  {
    text: 'Aufbau',
    size: 6,
  },
  {
    text: 'Auslegeordnung',
    size: 6,
  },
  {
    text: 'beliebig',
    size: 6,
  },
  {
    text: 'Beschluss',
    size: 6,
  },
  {
    text: 'Bewährung',
    size: 6,
  },
  {
    text: 'Gesichtspunkt',
    size: 6,
  },
  {
    text: 'damit',
    size: 6,
  },
  {
    text: 'durchgehend',
    size: 6,
  },
  {
    text: 'Eignung',
    size: 6,
  },
  {
    text: 'Erkenntnis',
    size: 6,
  },
  {
    text: 'Ertrag',
    size: 6,
  },
  {
    text: 'Erwartung',
    size: 6,
  },
  {
    text: 'Fassung',
    size: 6,
  },
  {
    text: 'formell',
    size: 6,
  },
  {
    text: 'Goodwill',
    size: 6,
  },
  {
    text: 'griffig',
    size: 6,
  },
  {
    text: 'hektisch',
    size: 6,
  },
  {
    text: 'herkömmlich',
    size: 6,
  },
  {
    text: 'ideell',
    size: 6,
  },
  {
    text: 'Inkongruenz',
    size: 6,
  },
  {
    text: 'Leiter',
    size: 6,
  },
  {
    text: 'Machbarkeit',
    size: 6,
  },
  {
    text: 'materiell',
    size: 6,
  },
  {
    text: 'Meilenstein',
    size: 6,
  },
  {
    text: 'Merkblatt',
    size: 6,
  },
  {
    text: 'mittragen',
    size: 6,
  },
  {
    text: 'Schwankung',
    size: 6,
  },
  {
    text: 'Termin',
    size: 6,
  },
  {
    text: 'Umstellung',
    size: 6,
  },
  {
    text: 'Unkosten',
    size: 6,
  },
  {
    text: 'Vorsorge',
    size: 6,
  },
  {
    text: 'widrig',
    size: 6,
  },
  {
    text: 'wobei',
    size: 6,
  },
  {
    text: 'zäh',
    size: 6,
  },
  {
    text: 'Zusammenhang',
    size: 6,
  },
  {
    text: 'Zuzug',
    size: 6,
  },
  {
    text: 'allerdings',
    size: 6,
  },
  {
    text: 'Anrechnung',
    size: 6,
  },
  {
    text: 'anrechenbar',
    size: 6,
  },
  {
    text: 'ausgehen von',
    size: 6,
  },
  {
    text: 'abgesehen von',
    size: 6,
  },
  {
    text: 'Kapitalgewinn',
    size: 6,
  },
  {
    text: 'Mehrheitsbeschluss',
    size: 6,
  },
  {
    text: 'halten',
    size: 6,
  },
  {
    text: 'kostenneutral',
    size: 6,
  },
  {
    text: 'hautnah',
    size: 6,
  },
  {
    text: 'Junktim',
    size: 6,
  },
  {
    text: 'Heimwesen',
    size: 6,
  },
  {
    text: 'Kursschwankungen',
    size: 6,
  },
  {
    text: 'kalorienbewusst',
    size: 6,
  },
  {
    text: 'klassenbewusst',
    size: 6,
  },
  {
    text: 'kinderfreundlich',
    size: 6,
  },
  {
    text: 'unzulänglich',
    size: 6,
  },
  {
    text: 'Konjunkturabschwächung',
    size: 6,
  },
  {
    text: 'Eckwert',
    size: 6,
  },
  {
    text: 'Einlage',
    size: 6,
  },
  {
    text: 'Kapitaldeckungsverfahren',
    size: 6,
  },
  {
    text: 'Werdegang',
    size: 6,
  },
  {
    text: 'Steuerung',
    size: 6,
  },
  {
    text: 'implementieren',
    size: 6,
  },
  {
    text: 'Energieeffizienz',
    size: 5,
  },
  {
    text: 'abdanken',
    size: 5,
  },
  {
    text: 'absehbar',
    size: 5,
  },
  {
    text: 'Anschrift',
    size: 5,
  },
  {
    text: 'Aufstockung',
    size: 5,
  },
  {
    text: 'auslasten',
    size: 5,
  },
  {
    text: 'Belang',
    size: 5,
  },
  {
    text: 'Einfall',
    size: 5,
  },
  {
    text: 'einseitig',
    size: 5,
  },
  {
    text: 'erfassen',
    size: 5,
  },
  {
    text: 'erholen',
    size: 5,
  },
  {
    text: 'erteilen',
    size: 5,
  },
  {
    text: 'federführend',
    size: 5,
  },
  {
    text: 'Förderung',
    size: 5,
  },
  {
    text: 'fremd',
    size: 5,
  },
  {
    text: 'gerecht werden',
    size: 5,
  },
  {
    text: 'Gewähr',
    size: 5,
  },
  {
    text: 'Gewinn',
    size: 5,
  },
  {
    text: 'glaubhaft',
    size: 5,
  },
  {
    text: 'Gliederung',
    size: 5,
  },
  {
    text: 'gönnen',
    size: 5,
  },
  {
    text: 'hilflos',
    size: 5,
  },
  {
    text: 'hinwegtäuschen',
    size: 5,
  },
  {
    text: 'Hoheitsträger',
    size: 5,
  },
  {
    text: 'Hydrant',
    size: 5,
  },
  {
    text: 'Kampfkraft',
    size: 5,
  },
  {
    text: 'Kavaliersdelikt',
    size: 5,
  },
  {
    text: 'kollegial',
    size: 5,
  },
  {
    text: 'kontraproduktiv',
    size: 5,
  },
  {
    text: 'Lagerung',
    size: 5,
  },
  {
    text: 'Lebenswandel',
    size: 5,
  },
  {
    text: 'Lockerung',
    size: 5,
  },
  {
    text: 'marktkonform',
    size: 5,
  },
  {
    text: 'Mitbestimmungsrecht',
    size: 5,
  },
  {
    text: 'Mitspracherecht',
    size: 5,
  },
  {
    text: 'Mobilisierung',
    size: 5,
  },
  {
    text: 'Aufwandsentschädigung',
    size: 5,
  },
  {
    text: 'orientiert',
    size: 5,
  },
  {
    text: 'Rechtsweg',
    size: 5,
  },
  {
    text: 'relevant',
    size: 5,
  },
  {
    text: 'repräsentativ',
    size: 5,
  },
  {
    text: 'selbständig',
    size: 5,
  },
  {
    text: 'Verhalten',
    size: 5,
  },
  {
    text: 'Verpflegung',
    size: 5,
  },
  {
    text: 'schnuppern',
    size: 5,
  },
  {
    text: 'Interessenabwägung',
    size: 5,
  },
  {
    text: 'hauptamtlich',
    size: 5,
  },
  {
    text: 'Haushaltsansätze',
    size: 5,
  },
  {
    text: 'Aussagekraft',
    size: 5,
  },
  {
    text: 'Immobiliengesellschaft',
    size: 5,
  },
  {
    text: 'massgerecht',
    size: 5,
  },
  {
    text: 'materialgerecht',
    size: 5,
  },
  {
    text: 'Härtefall',
    size: 5,
  },
  {
    text: 'Hinweisschild',
    size: 5,
  },
  {
    text: 'Hinweiszeichen',
    size: 5,
  },
  {
    text: 'Hoheitsgewässer',
    size: 5,
  },
  {
    text: 'eintreten',
    size: 5,
  },
  {
    text: 'hilfsbereit',
    size: 5,
  },
  {
    text: 'Kassabestand',
    size: 5,
  },
  {
    text: 'Mitbeteiligten',
    size: 5,
  },
  {
    text: 'Mammutbaum',
    size: 5,
  },
  {
    text: 'Mangelkrankheit',
    size: 5,
  },
  {
    text: 'marktorientiert',
    size: 5,
  },
  {
    text: 'Heimpflege',
    size: 5,
  },
  {
    text: 'Imagepflege',
    size: 5,
  },
  {
    text: 'Kinderkrankenpflege',
    size: 5,
  },
  {
    text: 'Kurspflege',
    size: 5,
  },
  {
    text: 'kirchenpolitisch',
    size: 5,
  },
  {
    text: 'Kreuzverhör',
    size: 5,
  },
  {
    text: 'hautfreundlich',
    size: 5,
  },
  {
    text: 'Führung',
    size: 5,
  },
  {
    text: 'Koppelgeschäft',
    size: 5,
  },
  {
    text: 'Industrieerfahrung',
    size: 5,
  },
  {
    text: 'modebewusst',
    size: 5,
  },
  {
    text: 'Kreditwürdigkeit',
    size: 5,
  },
  {
    text: 'Kostenträger',
    size: 5,
  },
  {
    text: 'koppeln',
    size: 5,
  },
  {
    text: 'Heimatkunde',
    size: 5,
  },
  {
    text: 'Heilkunde',
    size: 5,
  },
  {
    text: 'Himmelskunde',
    size: 5,
  },
  {
    text: 'kompromissbereit',
    size: 5,
  },
  {
    text: 'Schnittstelle',
    size: 5,
  },
  {
    text: 'Anknüpfungspunkt',
    size: 5,
  },
  {
    text: 'Kompetenzkonflikt',
    size: 5,
  },
  {
    text: 'Konjunkturbarometer',
    size: 5,
  },
  {
    text: 'Konjunkturforschung',
    size: 5,
  },
  {
    text: 'Bagatelle',
    size: 5,
  },
  {
    text: 'nachbereiten',
    size: 5,
  },
  {
    text: 'Eckpunkte',
    size: 5,
  },
  {
    text: 'Mengenausweitung',
    size: 5,
  },
  {
    text: 'Register',
    size: 5,
  },
  {
    text: 'durchgängig',
    size: 5,
  },
  {
    text: 'ableiten',
    size: 4,
  },
  {
    text: 'Abnehmer',
    size: 4,
  },
  {
    text: 'Alibiübung',
    size: 4,
  },
  {
    text: 'allenfalls',
    size: 4,
  },
  {
    text: 'Heiratsvermittlung',
    size: 4,
  },
  {
    text: 'anstreben',
    size: 4,
  },
  {
    text: 'Aufbruch',
    size: 4,
  },
  {
    text: 'Auflage',
    size: 4,
  },
  {
    text: 'Augenschein',
    size: 4,
  },
  {
    text: 'ausklammern',
    size: 4,
  },
  {
    text: 'Ausmass',
    size: 4,
  },
  {
    text: 'Bedarf',
    size: 4,
  },
  {
    text: 'befinden',
    size: 4,
  },
  {
    text: 'Befund',
    size: 4,
  },
  {
    text: 'Belastung',
    size: 4,
  },
  {
    text: 'Bewandtnis',
    size: 4,
  },
  {
    text: 'dahinstellen',
    size: 4,
  },
  {
    text: 'Eigenständigkeit',
    size: 4,
  },
  {
    text: 'entfallen',
    size: 4,
  },
  {
    text: 'Entgelt',
    size: 4,
  },
  {
    text: 'Erlebnis',
    size: 4,
  },
  {
    text: 'fortschrittlich',
    size: 4,
  },
  {
    text: 'fraglich',
    size: 4,
  },
  {
    text: 'gebührend',
    size: 4,
  },
  {
    text: 'Geheimtipp',
    size: 4,
  },
  {
    text: 'gehoben',
    size: 4,
  },
  {
    text: 'gerecht',
    size: 4,
  },
  {
    text: 'Geschäftsführer',
    size: 4,
  },
  {
    text: 'Gestaltung',
    size: 4,
  },
  {
    text: 'Gestell',
    size: 4,
  },
  {
    text: 'grosszügig',
    size: 4,
  },
  {
    text: 'Impressum',
    size: 4,
  },
  {
    text: 'irrelevant',
    size: 4,
  },
  {
    text: 'Kundenberatung',
    size: 4,
  },
  {
    text: 'Leerlauf',
    size: 4,
  },
  {
    text: 'leidtragend',
    size: 4,
  },
  {
    text: 'Leistungsbezüger',
    size: 4,
  },
  {
    text: 'Leitmotiv',
    size: 4,
  },
  {
    text: 'Mammut',
    size: 4,
  },
  {
    text: 'Marktkräfte',
    size: 4,
  },
  {
    text: 'meinungsbildend',
    size: 4,
  },
  {
    text: 'monieren',
    size: 4,
  },
  {
    text: 'Notlage',
    size: 4,
  },
  {
    text: 'Regelung',
    size: 4,
  },
  {
    text: 'Siedlung',
    size: 4,
  },
  {
    text: 'spezifisch',
    size: 4,
  },
  {
    text: 'spotten',
    size: 4,
  },
  {
    text: 'Trittbrettfahrer',
    size: 4,
  },
  {
    text: 'Umtriebe',
    size: 4,
  },
  {
    text: 'Unterlage',
    size: 4,
  },
  {
    text: 'unterschreiten',
    size: 4,
  },
  {
    text: 'unumgänglich',
    size: 4,
  },
  {
    text: 'Vorkommnis',
    size: 4,
  },
  {
    text: 'Vorstoss',
    size: 4,
  },
  {
    text: 'wenn schon',
    size: 4,
  },
  {
    text: 'zugute kommen',
    size: 4,
  },
  {
    text: 'zutreffend',
    size: 4,
  },
  {
    text: 'Zuversicht',
    size: 4,
  },
  {
    text: 'Erscheinungsbild',
    size: 4,
  },
  {
    text: 'Abbauprodukt',
    size: 4,
  },
  {
    text: 'Lagerabbau',
    size: 4,
  },
  {
    text: 'Mehranfall',
    size: 4,
  },
  {
    text: 'Anlaufzeit',
    size: 4,
  },
  {
    text: 'halbamtlich',
    size: 4,
  },
  {
    text: 'Anlagekosten',
    size: 4,
  },
  {
    text: 'anständig',
    size: 4,
  },
  {
    text: 'Aufführung',
    size: 4,
  },
  {
    text: 'Gewinnausschüttung',
    size: 4,
  },
  {
    text: 'Gewinnsucht',
    size: 4,
  },
  {
    text: 'Hochbauingenieur',
    size: 4,
  },
  {
    text: 'Hoheitsrecht',
    size: 4,
  },
  {
    text: 'Münzhoheit',
    size: 4,
  },
  {
    text: 'Berufsberatung',
    size: 4,
  },
  {
    text: 'Beratungsstelle',
    size: 4,
  },
  {
    text: 'Machbarkeitsstudie',
    size: 4,
  },
  {
    text: 'Mammutfilm',
    size: 4,
  },
  {
    text: 'Mangelwirtschaft',
    size: 4,
  },
  {
    text: 'materialintensiv',
    size: 4,
  },
  {
    text: 'Mitwirkungsrecht',
    size: 4,
  },
  {
    text: 'konsumorientiert',
    size: 4,
  },
  {
    text: 'kundenorientiert',
    size: 4,
  },
  {
    text: 'kundennah',
    size: 4,
  },
  {
    text: 'marktnah',
    size: 4,
  },
  {
    text: 'Hauspflege',
    size: 4,
  },
  {
    text: 'Kinderpflege',
    size: 4,
  },
  {
    text: 'Körperpflege',
    size: 4,
  },
  {
    text: 'hochpolitisch',
    size: 4,
  },
  {
    text: 'Fachschule',
    size: 4,
  },
  {
    text: 'vorsorglich',
    size: 4,
  },
  {
    text: 'unzumutbar',
    size: 4,
  },
  {
    text: 'machtbewusst',
    size: 4,
  },
  {
    text: 'Anlagevermögen',
    size: 4,
  },
  {
    text: 'Kursleiter',
    size: 4,
  },
  {
    text: 'fachgerecht',
    size: 4,
  },
  {
    text: 'Kundenumfrage',
    size: 4,
  },
  {
    text: 'Wertschöpfung',
    size: 4,
  },
  {
    text: 'menschenfreundlich',
    size: 4,
  },
  {
    text: 'zeitaufwendig',
    size: 4,
  },
  {
    text: 'Geschäftsführung',
    size: 4,
  },
  {
    text: 'Meldepflicht',
    size: 4,
  },
  {
    text: 'Finanzplanung',
    size: 4,
  },
  {
    text: 'Brennpunkt',
    size: 4,
  },
  {
    text: 'Einschnitt',
    size: 4,
  },
  {
    text: 'Pensum',
    size: 4,
  },
  {
    text: 'Absprache',
    size: 3,
  },
  {
    text: 'abstellen',
    size: 3,
  },
  {
    text: 'allfällig',
    size: 3,
  },
  {
    text: 'Altlast',
    size: 3,
  },
  {
    text: 'Anbieter',
    size: 3,
  },
  {
    text: 'anerkennen',
    size: 3,
  },
  {
    text: 'Anhebung',
    size: 3,
  },
  {
    text: 'Antragsteller',
    size: 3,
  },
  {
    text: 'aufarbeiten',
    size: 3,
  },
  {
    text: 'aufweisen',
    size: 3,
  },
  {
    text: 'ausarbeiten',
    size: 3,
  },
  {
    text: 'Ausreisser',
    size: 3,
  },
  {
    text: 'bahnbrechend',
    size: 3,
  },
  {
    text: 'bedürftig',
    size: 3,
  },
  {
    text: 'Behelf',
    size: 3,
  },
  {
    text: 'Beitrag',
    size: 3,
  },
  {
    text: 'Beizug',
    size: 3,
  },
  {
    text: 'bejahen',
    size: 3,
  },
  {
    text: 'berufsbegleitend',
    size: 3,
  },
  {
    text: 'Bereitschaft',
    size: 3,
  },
  {
    text: 'Berufung',
    size: 3,
  },
  {
    text: 'Bezug',
    size: 3,
  },
  {
    text: 'disponieren',
    size: 3,
  },
  {
    text: 'Disposition',
    size: 3,
  },
  {
    text: 'Durchbruch',
    size: 3,
  },
  {
    text: 'Eingliederung',
    size: 3,
  },
  {
    text: 'eminent',
    size: 3,
  },
  {
    text: 'erhältlich',
    size: 3,
  },
  {
    text: 'erheischen',
    size: 3,
  },
  {
    text: 'Erlass',
    size: 3,
  },
  {
    text: 'Ermittlung',
    size: 3,
  },
  {
    text: 'fällig',
    size: 3,
  },
  {
    text: 'Fehl-',
    size: 3,
  },
  {
    text: 'festlegen',
    size: 3,
  },
  {
    text: 'flankierend',
    size: 3,
  },
  {
    text: 'Flickwerk',
    size: 3,
  },
  {
    text: 'förderlich',
    size: 3,
  },
  {
    text: 'fragwürdig',
    size: 3,
  },
  {
    text: 'freiwillig',
    size: 3,
  },
  {
    text: 'Fürsorge',
    size: 3,
  },
  {
    text: 'Gefüge',
    size: 3,
  },
  {
    text: 'geltend machen',
    size: 3,
  },
  {
    text: 'genehmigen',
    size: 3,
  },
  {
    text: 'generell',
    size: 3,
  },
  {
    text: 'Genussmittel',
    size: 3,
  },
  {
    text: 'Gerichtsstand',
    size: 3,
  },
  {
    text: 'Gestalt',
    size: 3,
  },
  {
    text: 'gewährleisten',
    size: 3,
  },
  {
    text: 'glaubwürdig',
    size: 3,
  },
  {
    text: 'Gremium',
    size: 3,
  },
  {
    text: 'Überbauung',
    size: 3,
  },
  {
    text: 'Gutsprache',
    size: 3,
  },
  {
    text: 'Inventur',
    size: 3,
  },
  {
    text: 'Kautel',
    size: 3,
  },
  {
    text: 'Kundendienst',
    size: 3,
  },
  {
    text: 'labil',
    size: 3,
  },
  {
    text: 'leider',
    size: 3,
  },
  {
    text: 'leistungsfähig',
    size: 3,
  },
  {
    text: 'Leitbild',
    size: 3,
  },
  {
    text: 'Leumund',
    size: 3,
  },
  {
    text: 'Literatur',
    size: 3,
  },
  {
    text: 'lückenlos',
    size: 3,
  },
  {
    text: 'neu',
    size: 3,
  },
  {
    text: 'praktisch',
    size: 3,
  },
  {
    text: 'rechtsgültig',
    size: 3,
  },
  {
    text: 'reibungslos',
    size: 3,
  },
  {
    text: 'sinngemäss',
    size: 3,
  },
  {
    text: 'Schwergewicht',
    size: 3,
  },
  {
    text: 'Sorgenkind',
    size: 3,
  },
  {
    text: 'Stellungnahme',
    size: 3,
  },
  {
    text: 'Stimmung',
    size: 3,
  },
  {
    text: 'Umgang nehmen',
    size: 3,
  },
  {
    text: 'Verflechtung',
    size: 3,
  },
  {
    text: 'Vorgehen',
    size: 3,
  },
  {
    text: 'Zustandekommen',
    size: 3,
  },
  {
    text: 'zuverlässig',
    size: 3,
  },
  {
    text: 'festhalten',
    size: 3,
  },
  {
    text: 'Lohnabbau',
    size: 3,
  },
  {
    text: 'abgeklärt',
    size: 3,
  },
  {
    text: 'Geschäftsablauf',
    size: 3,
  },
  {
    text: 'anerkennenswert',
    size: 3,
  },
  {
    text: 'anerkennend',
    size: 3,
  },
  {
    text: 'Annahmebestätigung',
    size: 3,
  },
  {
    text: 'anstossend',
    size: 3,
  },
  {
    text: 'Arbeitsaufwand',
    size: 3,
  },
  {
    text: 'Eigenaufwand',
    size: 3,
  },
  {
    text: 'Auslastungsgrad',
    size: 3,
  },
  {
    text: 'Anlaufkosten',
    size: 3,
  },
  {
    text: 'Gästehaus',
    size: 3,
  },
  {
    text: 'sachgerecht',
    size: 3,
  },
  {
    text: 'Gönner',
    size: 3,
  },
  {
    text: 'Handänderungssteuer',
    size: 3,
  },
  {
    text: 'Hinweispfeil',
    size: 3,
  },
  {
    text: 'Hoheitsabzeichen',
    size: 3,
  },
  {
    text: 'Genehmigung',
    size: 3,
  },
  {
    text: 'Kassenbeleg',
    size: 3,
  },
  {
    text: 'kriegsbereit',
    size: 3,
  },
  {
    text: 'Anhörungsrecht',
    size: 3,
  },
  {
    text: 'bedarfsorientiert',
    size: 3,
  },
  {
    text: 'Lehrstellennachweis',
    size: 3,
  },
  {
    text: 'verkehrspolitisch',
    size: 3,
  },
  {
    text: 'Fachausschuss',
    size: 3,
  },
  {
    text: 'Fachkräfte',
    size: 3,
  },
  {
    text: 'Fachverband',
    size: 3,
  },
  {
    text: 'fördern',
    size: 3,
  },
  {
    text: 'kundenfreundlich',
    size: 3,
  },
  {
    text: 'Krankenfürsorge',
    size: 3,
  },
  {
    text: 'magersüchtig',
    size: 3,
  },
  {
    text: 'überblickbar',
    size: 3,
  },
  {
    text: 'überfordern',
    size: 3,
  },
  {
    text: 'Überfremdung',
    size: 3,
  },
  {
    text: 'übernehmen',
    size: 3,
  },
  {
    text: 'Übernahme',
    size: 3,
  },
  {
    text: 'überwiegend',
    size: 3,
  },
  {
    text: 'Feuerwehrübung',
    size: 3,
  },
  {
    text: 'gewinnorientiert',
    size: 3,
  },
  {
    text: 'Repräsentativität',
    size: 3,
  },
  {
    text: 'linienbewusst',
    size: 3,
  },
  {
    text: 'überstimmen',
    size: 3,
  },
  {
    text: 'Vermögenswert',
    size: 3,
  },
  {
    text: 'Grossüberbauungen',
    size: 3,
  },
  {
    text: 'Leistungslohn',
    size: 3,
  },
  {
    text: 'Gesprächsleiter',
    size: 3,
  },
  {
    text: 'Projektleiter',
    size: 3,
  },
  {
    text: 'Steuerungsausschuss',
    size: 3,
  },
  {
    text: 'Meereskunde',
    size: 3,
  },
  {
    text: 'Leumundzeugnis',
    size: 3,
  },
  {
    text: 'Maschinenbestand',
    size: 3,
  },
  {
    text: 'Jahresbetreffnis',
    size: 3,
  },
  {
    text: 'Abschöpfung',
    size: 3,
  },
  {
    text: 'Lebensverhältnisse',
    size: 3,
  },
  {
    text: 'Homepage',
    size: 3,
  },
  {
    text: 'Klausursitzung',
    size: 3,
  },
  {
    text: 'Meldestelle',
    size: 3,
  },
  {
    text: 'Eckpfeiler',
    size: 3,
  },
  {
    text: 'aufschlussreich',
    size: 3,
  },
  {
    text: 'kulant',
    size: 3,
  },
  {
    text: 'Kulanz',
    size: 3,
  },
  {
    text: 'Lebensaufwand',
    size: 3,
  },
  {
    text: 'betreuen',
    size: 3,
  },
  {
    text: 'aufteilen',
    size: 3,
  },
  {
    text: 'geschäftsführend',
    size: 2,
  },
  {
    text: 'Abdankung',
    size: 2,
  },
  {
    text: 'abkömmlich',
    size: 2,
  },
  {
    text: 'Abschwung',
    size: 2,
  },
  {
    text: 'absolvieren',
    size: 2,
  },
  {
    text: 'abwälzen',
    size: 2,
  },
  {
    text: 'Akquisiteur',
    size: 2,
  },
  {
    text: 'amtlich',
    size: 2,
  },
  {
    text: 'Anhänger',
    size: 2,
  },
  {
    text: 'anheim stellen',
    size: 2,
  },
  {
    text: 'Arbeitsvermittlung',
    size: 2,
  },
  {
    text: 'Aufblähung',
    size: 2,
  },
  {
    text: 'aufgeschlossen',
    size: 2,
  },
  {
    text: 'aufheben',
    size: 2,
  },
  {
    text: 'Aufmachung',
    size: 2,
  },
  {
    text: 'Ausfall',
    size: 2,
  },
  {
    text: 'Ausführungen',
    size: 2,
  },
  {
    text: 'ausmarchen',
    size: 2,
  },
  {
    text: 'ausweisen',
    size: 2,
  },
  {
    text: 'bagatellisieren',
    size: 2,
  },
  {
    text: 'bearbeiten',
    size: 2,
  },
  {
    text: 'bedenklich',
    size: 2,
  },
  {
    text: 'begrüssen',
    size: 2,
  },
  {
    text: 'Bekenntnis',
    size: 2,
  },
  {
    text: 'Belastbarkeit',
    size: 2,
  },
  {
    text: 'Bereich',
    size: 2,
  },
  {
    text: 'Beschaffenheit',
    size: 2,
  },
  {
    text: 'Betreuung',
    size: 2,
  },
  {
    text: 'Brisanz',
    size: 2,
  },
  {
    text: 'denkbar',
    size: 2,
  },
  {
    text: 'Disponent',
    size: 2,
  },
  {
    text: 'Eingriff',
    size: 2,
  },
  {
    text: 'Punkt',
    size: 2,
  },
  {
    text: 'Entfremdung',
    size: 2,
  },
  {
    text: 'Entlastung',
    size: 2,
  },
  {
    text: 'erfolgreich',
    size: 2,
  },
  {
    text: 'Ergänzung',
    size: 2,
  },
  {
    text: 'erlassen',
    size: 2,
  },
  {
    text: 'Feindbild',
    size: 2,
  },
  {
    text: 'Fertigstellung',
    size: 2,
  },
  {
    text: 'Fügung',
    size: 2,
  },
  {
    text: 'gangbar',
    size: 2,
  },
  {
    text: 'gängig',
    size: 2,
  },
  {
    text: 'Gast',
    size: 2,
  },
  {
    text: 'arbeitsintensiv',
    size: 2,
  },
  {
    text: 'Geschehen',
    size: 2,
  },
  {
    text: 'Grenzfall',
    size: 2,
  },
  {
    text: 'Klosterklausur',
    size: 2,
  },
  {
    text: 'kreditwürdig',
    size: 2,
  },
  {
    text: 'lediglich',
    size: 2,
  },
  {
    text: 'nämlich',
    size: 2,
  },
  {
    text: 'ohne weiteres',
    size: 2,
  },
  {
    text: 'Praxis',
    size: 2,
  },
  {
    text: 'preisgeben',
    size: 2,
  },
  {
    text: 'Referent',
    size: 2,
  },
  {
    text: 'Ressort',
    size: 2,
  },
  {
    text: 'Rückfrage',
    size: 2,
  },
  {
    text: 'Satzung',
    size: 2,
  },
  {
    text: 'Scherbenhaufen',
    size: 2,
  },
  {
    text: 'Schlagwort',
    size: 2,
  },
  {
    text: 'Set',
    size: 2,
  },
  {
    text: 'zeitgemäss',
    size: 2,
  },
  {
    text: 'sprechen für',
    size: 2,
  },
  {
    text: 'sprechen gegen',
    size: 2,
  },
  {
    text: 'Stichtag',
    size: 2,
  },
  {
    text: 'Stichwort',
    size: 2,
  },
  {
    text: 'Streiflicht',
    size: 2,
  },
  {
    text: 'Tagung',
    size: 2,
  },
  {
    text: 'Turnus',
    size: 2,
  },
  {
    text: 'Umfeld',
    size: 2,
  },
  {
    text: 'verankern',
    size: 2,
  },
  {
    text: 'verantworten',
    size: 2,
  },
  {
    text: 'Verbundenheit',
    size: 2,
  },
  {
    text: 'Verkehr',
    size: 2,
  },
  {
    text: 'Verlagerung',
    size: 2,
  },
  {
    text: 'Vermittlung',
    size: 2,
  },
  {
    text: 'verneinen',
    size: 2,
  },
  {
    text: 'Verständnis',
    size: 2,
  },
  {
    text: 'vorerst',
    size: 2,
  },
  {
    text: 'Vorfeld',
    size: 2,
  },
  {
    text: 'Vorkehr',
    size: 2,
  },
  {
    text: 'Vorstellung',
    size: 2,
  },
  {
    text: 'wegweisend',
    size: 2,
  },
  {
    text: 'Wortlaut',
    size: 2,
  },
  {
    text: 'Würdigung',
    size: 2,
  },
  {
    text: 'zugeschnitten sein',
    size: 2,
  },
  {
    text: 'zweckgebunden',
    size: 2,
  },
  {
    text: 'zweckmässig',
    size: 2,
  },
  {
    text: 'zweideutig',
    size: 2,
  },
  {
    text: 'zwiespältig',
    size: 2,
  },
  {
    text: 'Bagatellschaden',
    size: 2,
  },
  {
    text: 'Ablaufrinne',
    size: 2,
  },
  {
    text: 'Abfertigungsstelle',
    size: 2,
  },
  {
    text: 'Abnahmegarantie',
    size: 2,
  },
  {
    text: 'Abnehmerkreis',
    size: 2,
  },
  {
    text: 'Ablaufberg',
    size: 2,
  },
  {
    text: 'Abnahmepflicht',
    size: 2,
  },
  {
    text: 'Abrechnungsstelle',
    size: 2,
  },
  {
    text: 'Abrechnungskonto',
    size: 2,
  },
  {
    text: 'Absolvent',
    size: 2,
  },
  {
    text: 'Abstellraum',
    size: 2,
  },
  {
    text: 'abklärungsbedürftig',
    size: 2,
  },
  {
    text: 'Annahmeverzug',
    size: 2,
  },
  {
    text: 'Anstösser',
    size: 2,
  },
  {
    text: 'anstössig',
    size: 2,
  },
  {
    text: 'Aufbruchstimmung',
    size: 2,
  },
  {
    text: 'Internetauftritt',
    size: 2,
  },
  {
    text: 'Sachaufwand',
    size: 2,
  },
  {
    text: 'Lohnausfallentschädigung',
    size: 2,
  },
  {
    text: 'Auslastung',
    size: 2,
  },
  {
    text: 'Aussagefähigkeit',
    size: 2,
  },
  {
    text: 'Aussagewert',
    size: 2,
  },
  {
    text: 'aussagekräftig',
    size: 2,
  },
  {
    text: 'auftraggebend',
    size: 2,
  },
  {
    text: 'gedeihend',
    size: 2,
  },
  {
    text: 'gedeihlich',
    size: 2,
  },
  {
    text: 'Gesellschaftskapital',
    size: 2,
  },
  {
    text: 'Treuhandgesellschaft',
    size: 2,
  },
  {
    text: 'Kollektivgesellschaft',
    size: 2,
  },
  {
    text: 'Gastland',
    size: 2,
  },
  {
    text: 'Gesamtgefüge',
    size: 2,
  },
  {
    text: 'familiengerecht',
    size: 2,
  },
  {
    text: 'Gesellschaftszweck',
    size: 2,
  },
  {
    text: 'Gewinnanteil',
    size: 2,
  },
  {
    text: 'Gewinnbeteiligung',
    size: 2,
  },
  {
    text: 'Gewinnausfall',
    size: 2,
  },
  {
    text: 'Gewinnvortrag',
    size: 2,
  },
  {
    text: 'Handänderungsabgabe',
    size: 2,
  },
  {
    text: 'Tiefbau',
    size: 2,
  },
  {
    text: 'Gebietshoheit',
    size: 2,
  },
  {
    text: 'Abrechnungsbeleg',
    size: 2,
  },
  {
    text: 'Berufsberater',
    size: 2,
  },
  {
    text: 'Detailberatung',
    size: 2,
  },
  {
    text: 'fahrbereit',
    size: 2,
  },
  {
    text: 'Marschbereitschaft',
    size: 2,
  },
  {
    text: 'Gegendarstellung',
    size: 2,
  },
  {
    text: 'Geltungsdrang',
    size: 2,
  },
  {
    text: 'Entnahme',
    size: 2,
  },
  {
    text: 'linksorientiert',
    size: 2,
  },
  {
    text: 'mafianah',
    size: 2,
  },
  {
    text: 'naturnah',
    size: 2,
  },
  {
    text: 'naheliegend',
    size: 2,
  },
  {
    text: 'Bundesrechtspflege',
    size: 2,
  },
  {
    text: 'Landschaftspflege',
    size: 2,
  },
  {
    text: 'schulpolitisch',
    size: 2,
  },
  {
    text: 'grundsatzpolitisch',
    size: 2,
  },
  {
    text: 'finanzpolitisch',
    size: 2,
  },
  {
    text: 'Siedlungspolitik',
    size: 2,
  },
  {
    text: 'Fachabteilung',
    size: 2,
  },
  {
    text: 'Facharbeit',
    size: 2,
  },
  {
    text: 'Fachausdruck',
    size: 2,
  },
  {
    text: 'Fachsprache',
    size: 2,
  },
  {
    text: 'fassungslos',
    size: 2,
  },
  {
    text: 'Fassungslosigkeit',
    size: 2,
  },
  {
    text: 'Förderer',
    size: 2,
  },
  {
    text: 'Freizügigkeit',
    size: 2,
  },
  {
    text: 'Fremdgeschmack',
    size: 2,
  },
  {
    text: 'Vorwegnahme',
    size: 2,
  },
  {
    text: 'Fremdstoff',
    size: 2,
  },
  {
    text: 'katzenfreundlich',
    size: 2,
  },
  {
    text: 'alkoholsüchtig',
    size: 2,
  },
  {
    text: 'überblicken',
    size: 2,
  },
  {
    text: 'überdurchschnittlich',
    size: 2,
  },
  {
    text: 'überwältigend',
    size: 2,
  },
  {
    text: 'Lehnswesen',
    size: 2,
  },
  {
    text: 'Unzumutbarkeit',
    size: 2,
  },
  {
    text: 'verantwortungsbewusst',
    size: 2,
  },
  {
    text: 'familienfreundlich',
    size: 2,
  },
  {
    text: 'Fahrdienstleiter',
    size: 2,
  },
  {
    text: 'Abteilungsleiter',
    size: 2,
  },
  {
    text: 'Fehlbetrag',
    size: 2,
  },
  {
    text: 'Fehlmeldung',
    size: 2,
  },
  {
    text: 'Fehlschlag',
    size: 2,
  },
  {
    text: 'Fehlurteil',
    size: 2,
  },
  {
    text: 'Fehlgriff',
    size: 2,
  },
  {
    text: 'Fehleinschätzung',
    size: 2,
  },
  {
    text: 'Leumundszeuge',
    size: 2,
  },
  {
    text: 'Ausgleichsbeitrag',
    size: 2,
  },
  {
    text: 'lohnrelevant',
    size: 2,
  },
  {
    text: 'Ablaufkanal',
    size: 2,
  },
  {
    text: 'Arbeitsbewertung',
    size: 2,
  },
  {
    text: 'Datenschutzbeauftragter',
    size: 2,
  },
  {
    text: 'Eventualantrag',
    size: 2,
  },
  {
    text: 'Mitträgerschaft',
    size: 2,
  },
  {
    text: 'Nachhaltigkeit',
    size: 2,
  },
  {
    text: 'Fachgruppe',
    size: 2,
  },
  {
    text: 'Konjunkturverflachung',
    size: 2,
  },
  {
    text: 'eventualiter',
    size: 2,
  },
  {
    text: 'Finanzpolitik',
    size: 2,
  },
  {
    text: 'Ordnungspolitik',
    size: 2,
  },
  {
    text: 'personalaufwendig',
    size: 2,
  },
  {
    text: 'Bagatellklausel',
    size: 2,
  },
  {
    text: 'Kanister',
    size: 2,
  },
  {
    text: 'Fiskalpolitik',
    size: 2,
  },
  {
    text: 'Beilage',
    size: 2,
  },
  {
    text: 'Verkehrsplanung',
    size: 2,
  },
  {
    text: 'sachgemäss',
    size: 2,
  },
  {
    text: 'Ausgangspunkt',
    size: 2,
  },
  {
    text: 'Personalaufwand',
    size: 2,
  },
  {
    text: 'Leistungsfähigkeit',
    size: 2,
  },
  {
    text: 'erörtern',
    size: 2,
  },
  {
    text: 'Erreichung',
    size: 2,
  },
  {
    text: 'Steuerungsmassnahme',
    size: 1,
  },
  {
    text: 'Selbsthilfemassnahmen',
    size: 1,
  },
  {
    text: 'Aggregat',
    size: 1,
  },
  {
    text: 'anfallen',
    size: 1,
  },
  {
    text: 'Bagatellfall',
    size: 1,
  },
  {
    text: 'Vermittlungsvorschlag',
    size: 1,
  },
  {
    text: 'Vermittlungsgebühr',
    size: 1,
  },
  {
    text: 'Vermittlungsanstalt',
    size: 1,
  },
  {
    text: 'Vermittlungsstelle',
    size: 1,
  },
  {
    text: 'Vermögenheit',
    size: 1,
  },
  {
    text: 'Vermögensabsonderung',
    size: 1,
  },
  {
    text: 'Vermögensanfall',
    size: 1,
  },
  {
    text: 'Vermögensdelikt',
    size: 1,
  },
  {
    text: 'wahrheitsgemäss',
    size: 1,
  },
  {
    text: 'anvisieren',
    size: 1,
  },
  {
    text: 'Arbeitsspitzen',
    size: 1,
  },
  {
    text: 'aufführen',
    size: 1,
  },
  {
    text: 'aufklären',
    size: 1,
  },
  {
    text: 'Aufklärung',
    size: 1,
  },
  {
    text: 'Aufkommen',
    size: 1,
  },
  {
    text: 'Planungsablauf',
    size: 1,
  },
  {
    text: 'Ausbau',
    size: 1,
  },
  {
    text: 'auseinandersetzen',
    size: 1,
  },
  {
    text: 'mildernd',
    size: 1,
  },
  {
    text: 'ausgerechnet',
    size: 1,
  },
  {
    text: 'Ausgestaltung',
    size: 1,
  },
  {
    text: 'ausgiebig',
    size: 1,
  },
  {
    text: 'Ausläufer',
    size: 1,
  },
  {
    text: 'ausschöpfen',
    size: 1,
  },
  {
    text: 'Ausschreitung',
    size: 1,
  },
  {
    text: 'Aussenseiter',
    size: 1,
  },
  {
    text: 'aussichtslos',
    size: 1,
  },
  {
    text: 'auswerten',
    size: 1,
  },
  {
    text: 'Auswirkung',
    size: 1,
  },
  {
    text: 'baldmöglichst',
    size: 1,
  },
  {
    text: 'basieren',
    size: 1,
  },
  {
    text: 'Mindmap',
    size: 1,
  },
  {
    text: 'beanstanden',
    size: 1,
  },
  {
    text: 'Bedenken',
    size: 1,
  },
  {
    text: 'Bedienung',
    size: 1,
  },
  {
    text: 'beeinflussen',
    size: 1,
  },
  {
    text: 'beeinträchtigen',
    size: 1,
  },
  {
    text: 'befürworten',
    size: 1,
  },
  {
    text: 'Befürwortung',
    size: 1,
  },
  {
    text: 'Begebenheit',
    size: 1,
  },
  {
    text: 'Begehung',
    size: 1,
  },
  {
    text: 'Begleiterscheinung',
    size: 1,
  },
  {
    text: 'begrüssenswert',
    size: 1,
  },
  {
    text: 'Begutachtung',
    size: 1,
  },
  {
    text: 'Behandlung',
    size: 1,
  },
  {
    text: 'Beharrung',
    size: 1,
  },
  {
    text: 'beheben',
    size: 1,
  },
  {
    text: 'behelfsmässig',
    size: 1,
  },
  {
    text: 'Behinderung',
    size: 1,
  },
  {
    text: 'Behutsamkeit',
    size: 1,
  },
  {
    text: 'beipflichten',
    size: 1,
  },
  {
    text: 'bekömmlich',
    size: 1,
  },
  {
    text: 'belastbar',
    size: 1,
  },
  {
    text: 'Beleg',
    size: 1,
  },
  {
    text: 'Bemühung',
    size: 1,
  },
  {
    text: 'bereinigen',
    size: 1,
  },
  {
    text: 'Bereinigung',
    size: 1,
  },
  {
    text: 'bereit',
    size: 1,
  },
  {
    text: 'Bereitstellung',
    size: 1,
  },
  {
    text: 'berücksichtigen',
    size: 1,
  },
  {
    text: 'Datenschutzbearbeiter',
    size: 1,
  },
  {
    text: 'beschaffungsreif',
    size: 1,
  },
  {
    text: 'beschriften',
    size: 1,
  },
  {
    text: 'bestreiten',
    size: 1,
  },
  {
    text: 'Beteiligter',
    size: 1,
  },
  {
    text: 'Betriebsbuchhaltung',
    size: 1,
  },
  {
    text: 'Betreffnis',
    size: 1,
  },
  {
    text: 'nationalbewusst',
    size: 1,
  },
  {
    text: 'betrieblich',
    size: 1,
  },
  {
    text: 'Betriebswirtschaft',
    size: 1,
  },
  {
    text: 'bewältigen',
    size: 1,
  },
  {
    text: 'bewenden lassen',
    size: 1,
  },
  {
    text: 'bewerkstelligen',
    size: 1,
  },
  {
    text: 'Bewertung',
    size: 1,
  },
  {
    text: 'bewirken',
    size: 1,
  },
  {
    text: 'Bewirtschaftung',
    size: 1,
  },
  {
    text: 'beziehungsweise',
    size: 1,
  },
  {
    text: 'Bezüger',
    size: 1,
  },
  {
    text: 'Blockzeit',
    size: 1,
  },
  {
    text: 'dahinfallen',
    size: 1,
  },
  {
    text: 'Daten',
    size: 1,
  },
  {
    text: 'Einbauschrank',
    size: 1,
  },
  {
    text: 'Einbaufehler',
    size: 1,
  },
  {
    text: 'Denkzettel',
    size: 1,
  },
  {
    text: 'Dienstweg',
    size: 1,
  },
  {
    text: 'Diskrepanz',
    size: 1,
  },
  {
    text: 'Doppelbeschäftigung',
    size: 1,
  },
  {
    text: 'Doppelspurigkeit',
    size: 1,
  },
  {
    text: 'Durchlässigkeit',
    size: 1,
  },
  {
    text: 'durchweg',
    size: 1,
  },
  {
    text: 'Eigenart',
    size: 1,
  },
  {
    text: 'Eigentor',
    size: 1,
  },
  {
    text: 'Eigenwirtschaft',
    size: 1,
  },
  {
    text: 'Einbaubad',
    size: 1,
  },
  {
    text: 'Eignungsprüfung',
    size: 1,
  },
  {
    text: 'Einbau',
    size: 1,
  },
  {
    text: 'eindeutig',
    size: 1,
  },
  {
    text: 'Einführung',
    size: 1,
  },
  {
    text: 'einlässlich',
    size: 1,
  },
  {
    text: 'einschlägig',
    size: 1,
  },
  {
    text: 'Einseitigkeit',
    size: 1,
  },
  {
    text: 'Einwand',
    size: 1,
  },
  {
    text: 'Einzugsgebiet',
    size: 1,
  },
  {
    text: 'Engagement',
    size: 1,
  },
  {
    text: 'Entflechtung',
    size: 1,
  },
  {
    text: 'entgegenkommen',
    size: 1,
  },
  {
    text: 'Entkrampfung',
    size: 1,
  },
  {
    text: 'entschärfen',
    size: 1,
  },
  {
    text: 'Entschärfung',
    size: 1,
  },
  {
    text: 'entsprechen',
    size: 1,
  },
  {
    text: 'Entwicklung',
    size: 1,
  },
  {
    text: 'Breitensport',
    size: 1,
  },
  {
    text: 'absurd',
    size: 1,
  },
  {
    text: 'Erhebung',
    size: 1,
  },
  {
    text: 'erneut',
    size: 1,
  },
  {
    text: 'erschliessen',
    size: 1,
  },
  {
    text: 'Erstarrung',
    size: 1,
  },
  {
    text: 'eruieren',
    size: 1,
  },
  {
    text: 'eventuell',
    size: 1,
  },
  {
    text: 'Exponent',
    size: 1,
  },
  {
    text: 'Faustregel',
    size: 1,
  },
  {
    text: 'Fehlerquote',
    size: 1,
  },
  {
    text: 'freizügig',
    size: 1,
  },
  {
    text: 'anlageintensiv',
    size: 1,
  },
  {
    text: 'personalintensiv',
    size: 1,
  },
  {
    text: 'kapitalintensiv',
    size: 1,
  },
  {
    text: 'Gedankengut',
    size: 1,
  },
  {
    text: 'Gegebenheit',
    size: 1,
  },
  {
    text: 'Gentlemansdelikt',
    size: 1,
  },
  {
    text: 'Handänderung',
    size: 1,
  },
  {
    text: 'Anstaltspflege',
    size: 1,
  },
  {
    text: 'selbst',
    size: 1,
  },
  {
    text: 'konsequenterweise',
    size: 1,
  },
  {
    text: 'Koppelwald',
    size: 1,
  },
  {
    text: 'Koppelkurs',
    size: 1,
  },
  {
    text: 'Lidlohn',
    size: 1,
  },
  {
    text: 'Nachfrage',
    size: 1,
  },
  {
    text: 'Nachtrag',
    size: 1,
  },
  {
    text: 'Betreuer',
    size: 1,
  },
  {
    text: 'Nachwuchs',
    size: 1,
  },
  {
    text: 'nahelegen',
    size: 1,
  },
  {
    text: 'naheliegen',
    size: 1,
  },
  {
    text: 'Novelle',
    size: 1,
  },
  {
    text: 'nüchtern',
    size: 1,
  },
  {
    text: 'Obliegenheit',
    size: 1,
  },
  {
    text: 'Optimierung',
    size: 1,
  },
  {
    text: 'Park-and-ride-System',
    size: 1,
  },
  {
    text: 'Partnerschaft',
    size: 1,
  },
  {
    text: 'pendeln',
    size: 1,
  },
  {
    text: 'Pendler',
    size: 1,
  },
  {
    text: 'Personalien',
    size: 1,
  },
  {
    text: 'Planer',
    size: 1,
  },
  {
    text: 'Plausch',
    size: 1,
  },
  {
    text: 'politisch',
    size: 1,
  },
  {
    text: 'Postulat',
    size: 1,
  },
  {
    text: 'präjudizieren',
    size: 1,
  },
  {
    text: 'Problematik',
    size: 1,
  },
  {
    text: 'problematisch',
    size: 1,
  },
  {
    text: 'Prüfstein',
    size: 1,
  },
  {
    text: 'Quertreiberei',
    size: 1,
  },
  {
    text: 'Querulant',
    size: 1,
  },
  {
    text: 'Quervergleich',
    size: 1,
  },
  {
    text: 'Quote',
    size: 1,
  },
  {
    text: 'Rahmenbedingungen',
    size: 1,
  },
  {
    text: 'Realpolitik',
    size: 1,
  },
  {
    text: 'rechthaberisch',
    size: 1,
  },
  {
    text: 'rechtmässig',
    size: 1,
  },
  {
    text: 'rechtswidrig',
    size: 1,
  },
  {
    text: 'reell',
    size: 1,
  },
  {
    text: 'Referat',
    size: 1,
  },
  {
    text: 'Registratur',
    size: 1,
  },
  {
    text: 'Reizwort',
    size: 1,
  },
  {
    text: 'richtungsweisend',
    size: 1,
  },
  {
    text: 'Rubrik',
    size: 1,
  },
  {
    text: 'rubrizieren',
    size: 1,
  },
  {
    text: 'Rückkopplung',
    size: 1,
  },
  {
    text: 'rückwärtskrebsen',
    size: 1,
  },
  {
    text: 'Sachausgaben',
    size: 1,
  },
  {
    text: 'Sachbearbeiter',
    size: 1,
  },
  {
    text: 'Sanierer',
    size: 1,
  },
  {
    text: 'Sanierung',
    size: 1,
  },
  {
    text: 'Schablone',
    size: 1,
  },
  {
    text: 'Schattenwirtschaft',
    size: 1,
  },
  {
    text: 'schlitzohrig',
    size: 1,
  },
  {
    text: 'schonend',
    size: 1,
  },
  {
    text: 'Schönheitsfehler',
    size: 1,
  },
  {
    text: 'Schrumpfung',
    size: 1,
  },
  {
    text: 'schubladisieren',
    size: 1,
  },
  {
    text: 'Schulterschluss',
    size: 1,
  },
  {
    text: 'Seilziehen',
    size: 1,
  },
  {
    text: 'Selbstdarstellung',
    size: 1,
  },
  {
    text: 'Selbsthilfe',
    size: 1,
  },
  {
    text: 'selbsttragend',
    size: 1,
  },
  {
    text: 'Selbstunfall',
    size: 1,
  },
  {
    text: 'Selbstverständnis',
    size: 1,
  },
  {
    text: 'Selbstzweck',
    size: 1,
  },
  {
    text: 'Signalwirkung',
    size: 1,
  },
  {
    text: 'sistieren',
    size: 1,
  },
  {
    text: 'Soll-Bestand',
    size: 1,
  },
  {
    text: 'Sparte',
    size: 1,
  },
  {
    text: 'Spurensicherung',
    size: 1,
  },
  {
    text: 'Stabstelle',
    size: 1,
  },
  {
    text: 'Stamm',
    size: 1,
  },
  {
    text: 'standhaft',
    size: 1,
  },
  {
    text: 'Standortbestimmung',
    size: 1,
  },
  {
    text: 'Steckbrief',
    size: 1,
  },
  {
    text: 'Stetigkeit',
    size: 1,
  },
  {
    text: 'Stichentscheid',
    size: 1,
  },
  {
    text: 'stichhaltig',
    size: 1,
  },
  {
    text: 'stornieren',
    size: 1,
  },
  {
    text: 'Störung',
    size: 1,
  },
  {
    text: 'subsumieren',
    size: 1,
  },
  {
    text: 'Systematik',
    size: 1,
  },
  {
    text: 'Tagespolitik',
    size: 1,
  },
  {
    text: 'tangieren',
    size: 1,
  },
  {
    text: 'Technologiefolgeabschätzung',
    size: 1,
  },
  {
    text: 'tipptopp',
    size: 1,
  },
  {
    text: 'tragbar',
    size: 1,
  },
  {
    text: 'Trägerschaft',
    size: 1,
  },
  {
    text: 'tragfähig',
    size: 1,
  },
  {
    text: 'Tragfähigkeit',
    size: 1,
  },
  {
    text: 'Trakt',
    size: 1,
  },
  {
    text: 'Traktandum',
    size: 1,
  },
  {
    text: 'Transaktion',
    size: 1,
  },
  {
    text: 'Umbildung',
    size: 1,
  },
  {
    text: 'umdenken',
    size: 1,
  },
  {
    text: 'umkämpfen',
    size: 1,
  },
  {
    text: 'Umlage',
    size: 1,
  },
  {
    text: 'Umlegung',
    size: 1,
  },
  {
    text: 'Umsatz',
    size: 1,
  },
  {
    text: 'Umschichtung',
    size: 1,
  },
  {
    text: 'Umschlag',
    size: 1,
  },
  {
    text: 'Umschreibung',
    size: 1,
  },
  {
    text: 'Umschulung',
    size: 1,
  },
  {
    text: 'Umwelt',
    size: 1,
  },
  {
    text: 'umweltbedingt',
    size: 1,
  },
  {
    text: 'umweltfreundlich',
    size: 1,
  },
  {
    text: 'unbefristet',
    size: 1,
  },
  {
    text: 'unberufen',
    size: 1,
  },
  {
    text: 'Unstimmigkeit',
    size: 1,
  },
  {
    text: 'unterbieten',
    size: 1,
  },
  {
    text: 'unverantwortlich',
    size: 1,
  },
  {
    text: 'unzukömmlich',
    size: 1,
  },
  {
    text: 'unzweckmässig',
    size: 1,
  },
  {
    text: 'ursächlich',
    size: 1,
  },
  {
    text: 'ventilieren',
    size: 1,
  },
  {
    text: 'veranlassen',
    size: 1,
  },
  {
    text: 'Veranlassung',
    size: 1,
  },
  {
    text: 'Veranstaltung',
    size: 1,
  },
  {
    text: 'Verarbeitung',
    size: 1,
  },
  {
    text: 'Verbraucher',
    size: 1,
  },
  {
    text: 'Veredlung',
    size: 1,
  },
  {
    text: 'verfehlt',
    size: 1,
  },
  {
    text: 'Verfremdung',
    size: 1,
  },
  {
    text: 'Verkehrspolitik',
    size: 1,
  },
  {
    text: 'Vernehmlassung',
    size: 1,
  },
  {
    text: 'Verrechtlichung',
    size: 1,
  },
  {
    text: 'verschlechtern',
    size: 1,
  },
  {
    text: 'Verschlimmbesserung',
    size: 1,
  },
  {
    text: 'Versorgung',
    size: 1,
  },
  {
    text: 'verteufeln',
    size: 1,
  },
  {
    text: 'Verunsicherung',
    size: 1,
  },
  {
    text: 'verwässern',
    size: 1,
  },
  {
    text: 'Verwertung',
    size: 1,
  },
  {
    text: 'Verwilderung',
    size: 1,
  },
  {
    text: 'vielseitig',
    size: 1,
  },
  {
    text: 'Volltreffer',
    size: 1,
  },
  {
    text: 'vollumfänglich',
    size: 1,
  },
  {
    text: 'Vordenker',
    size: 1,
  },
  {
    text: 'vordringlich',
    size: 1,
  },
  {
    text: 'Vordringlichkeit',
    size: 1,
  },
  {
    text: 'vorgängig',
    size: 1,
  },
  {
    text: 'Vorlage',
    size: 1,
  },
  {
    text: 'Vormarsch',
    size: 1,
  },
  {
    text: 'vorprogrammiert',
    size: 1,
  },
  {
    text: 'Patient',
    size: 1,
  },
  {
    text: 'Vorschub leisten',
    size: 1,
  },
  {
    text: 'Vorschubleistung',
    size: 1,
  },
  {
    text: 'vorwegnehmen',
    size: 1,
  },
  {
    text: 'Wahrung',
    size: 1,
  },
  {
    text: 'Wasserzins',
    size: 1,
  },
  {
    text: 'Wechselwirkung',
    size: 1,
  },
  {
    text: 'Wegleitung',
    size: 1,
  },
  {
    text: 'Weiterausbau',
    size: 1,
  },
  {
    text: 'weitgehend',
    size: 1,
  },
  {
    text: 'welsch',
    size: 1,
  },
  {
    text: 'Weltanschauung',
    size: 1,
  },
  {
    text: 'Werkhof',
    size: 1,
  },
  {
    text: 'Wert legen',
    size: 1,
  },
  {
    text: 'Wesen',
    size: 1,
  },
  {
    text: 'Widerstreit',
    size: 1,
  },
  {
    text: 'Wirtschaftspolitik',
    size: 1,
  },
  {
    text: 'Wohlfahrt',
    size: 1,
  },
  {
    text: 'Wohnstube',
    size: 1,
  },
  {
    text: 'Wohnzimmer',
    size: 1,
  },
  {
    text: 'würdigen',
    size: 1,
  },
  {
    text: 'turnusgemäss',
    size: 1,
  },
  {
    text: 'zeitigen',
    size: 1,
  },
  {
    text: 'zersetzend',
    size: 1,
  },
  {
    text: 'Aufwendung',
    size: 1,
  },
  {
    text: 'Zugeständnis',
    size: 1,
  },
  {
    text: 'Zumutung',
    size: 1,
  },
  {
    text: 'zuordnen',
    size: 1,
  },
  {
    text: 'zurückkrebsen',
    size: 1,
  },
  {
    text: 'zurückstellen',
    size: 1,
  },
  {
    text: 'Zuteilung',
    size: 1,
  },
  {
    text: 'zutreffen',
    size: 1,
  },
  {
    text: 'zwielichtig',
    size: 1,
  },
  {
    text: 'zuvorkommend',
    size: 1,
  },
  {
    text: 'zuzüglich',
    size: 1,
  },
  {
    text: 'zwar',
    size: 1,
  },
  {
    text: 'Zweckmässigkeit',
    size: 1,
  },
  {
    text: 'Zwielicht',
    size: 1,
  },
  {
    text: 'Quereinsteiger',
    size: 1,
  },
  {
    text: 'Schnupperlehre',
    size: 1,
  },
  {
    text: 'Bagatellklage',
    size: 1,
  },
  {
    text: 'Bagatellschulden',
    size: 1,
  },
  {
    text: 'Bagatellkommission',
    size: 1,
  },
  {
    text: 'Bagatellunfall',
    size: 1,
  },
  {
    text: 'Bagatellvertrag',
    size: 1,
  },
  {
    text: 'Bedarfsartikel',
    size: 1,
  },
  {
    text: 'Abbaustoffwechsel',
    size: 1,
  },
  {
    text: 'Abbauentschädigung',
    size: 1,
  },
  {
    text: 'Zollabfertigung',
    size: 1,
  },
  {
    text: 'Zugabfertigung',
    size: 1,
  },
  {
    text: 'Ablaufständer',
    size: 1,
  },
  {
    text: 'ableitend',
    size: 1,
  },
  {
    text: 'Ableitungssilbe',
    size: 1,
  },
  {
    text: 'Abnahmefrist',
    size: 1,
  },
  {
    text: 'Abnahmeland',
    size: 1,
  },
  {
    text: 'Abnahmeverweigerung',
    size: 1,
  },
  {
    text: 'Eidabnahme',
    size: 1,
  },
  {
    text: 'Prüfungsabnahme',
    size: 1,
  },
  {
    text: 'Wertschriftenabnahme',
    size: 1,
  },
  {
    text: 'Eidablegung',
    size: 1,
  },
  {
    text: 'Gasabnehmer',
    size: 1,
  },
  {
    text: 'Abnehmerland',
    size: 1,
  },
  {
    text: 'Besoldungsabrechnung',
    size: 1,
  },
  {
    text: 'Abschwungphase',
    size: 1,
  },
  {
    text: 'Abstellbahnhof',
    size: 1,
  },
  {
    text: 'abstellbar',
    size: 1,
  },
  {
    text: 'Abstellgleis',
    size: 1,
  },
  {
    text: 'Abstellhebel',
    size: 1,
  },
  {
    text: 'Abwicklungsgesellschaft',
    size: 1,
  },
  {
    text: 'Abwicklungsgremium',
    size: 1,
  },
  {
    text: 'Abwicklungskonto',
    size: 1,
  },
  {
    text: 'Ladeaggregat',
    size: 1,
  },
  {
    text: 'Alternativenergie',
    size: 1,
  },
  {
    text: 'Alternativmedizin',
    size: 1,
  },
  {
    text: 'Anfallsgeld',
    size: 1,
  },
  {
    text: 'Anfallsrecht',
    size: 1,
  },
  {
    text: 'Anfallstag',
    size: 1,
  },
  {
    text: 'Anfallssteuer',
    size: 1,
  },
  {
    text: 'anfällig',
    size: 1,
  },
  {
    text: 'Parkanlage',
    size: 1,
  },
  {
    text: 'Anlaufkredit',
    size: 1,
  },
  {
    text: 'Anlaufhafen',
    size: 1,
  },
  {
    text: 'Abbaugerechtigkeit',
    size: 1,
  },
  {
    text: 'Stellenabbau',
    size: 1,
  },
  {
    text: 'Stressabbau',
    size: 1,
  },
  {
    text: 'Abrechnungsbank',
    size: 1,
  },
  {
    text: 'Materialabrechnung',
    size: 1,
  },
  {
    text: 'abschöpfen',
    size: 1,
  },
  {
    text: 'unabsehbar',
    size: 1,
  },
  {
    text: 'Abstellfläche',
    size: 1,
  },
  {
    text: 'Abstellkammer',
    size: 1,
  },
  {
    text: 'Abwicklungsstelle',
    size: 1,
  },
  {
    text: 'Alternativszene',
    size: 1,
  },
  {
    text: 'Alternative',
    size: 1,
  },
  {
    text: 'Alternativkultur',
    size: 1,
  },
  {
    text: 'ausseramtlich',
    size: 1,
  },
  {
    text: 'ehrenamtlich',
    size: 1,
  },
  {
    text: 'nebenamtlich',
    size: 1,
  },
  {
    text: 'vollamtlich',
    size: 1,
  },
  {
    text: 'Anerkenntnisurteil',
    size: 1,
  },
  {
    text: 'Bedarfsprämie',
    size: 1,
  },
  {
    text: 'Bedarfstermin',
    size: 1,
  },
  {
    text: 'Bedarfszug',
    size: 1,
  },
  {
    text: 'Bürobedarf',
    size: 1,
  },
  {
    text: 'Bedarfslenkung',
    size: 1,
  },
  {
    text: 'Bedarfsträger',
    size: 1,
  },
  {
    text: 'Bedienungsbühne',
    size: 1,
  },
  {
    text: 'Bedienungsgang',
    size: 1,
  },
  {
    text: 'Bedienungsgeld',
    size: 1,
  },
  {
    text: 'Bedienungstritt',
    size: 1,
  },
  {
    text: 'Bedienungshebel',
    size: 1,
  },
  {
    text: 'Bedienungsvorschrift',
    size: 1,
  },
  {
    text: 'Selbstbedienung',
    size: 1,
  },
  {
    text: 'Bedienungsfehler',
    size: 1,
  },
  {
    text: 'empfangsbedürftig',
    size: 1,
  },
  {
    text: 'Ansatzberichtigung',
    size: 1,
  },
  {
    text: 'Anstandsbesuch',
    size: 1,
  },
  {
    text: 'Anständigkeit',
    size: 1,
  },
  {
    text: 'Anstandsdame',
    size: 1,
  },
  {
    text: 'Anstandsgefühl',
    size: 1,
  },
  {
    text: 'anstandshalber',
    size: 1,
  },
  {
    text: 'anstandslos',
    size: 1,
  },
  {
    text: 'Anstandsort',
    size: 1,
  },
  {
    text: 'Anstandsregeln',
    size: 1,
  },
  {
    text: 'Anstandsrock',
    size: 1,
  },
  {
    text: 'anstandswidrig',
    size: 1,
  },
  {
    text: 'Anweisungsempfänger',
    size: 1,
  },
  {
    text: 'Anweisungsstelle',
    size: 1,
  },
  {
    text: 'Postanweisung',
    size: 1,
  },
  {
    text: 'Zahlungsanweisung',
    size: 1,
  },
  {
    text: 'Anweiser',
    size: 1,
  },
  {
    text: 'Schatzanweisung',
    size: 1,
  },
  {
    text: 'Aufbaugesinnung',
    size: 1,
  },
  {
    text: 'Aufbaudarlehen',
    size: 1,
  },
  {
    text: 'Aufbautraining',
    size: 1,
  },
  {
    text: 'Aufbaupräparat',
    size: 1,
  },
  {
    text: 'Aufbaumittel',
    size: 1,
  },
  {
    text: 'Altersaufbau',
    size: 1,
  },
  {
    text: 'Aufgeschlossenheit',
    size: 1,
  },
  {
    text: 'Aufhebungszeichen',
    size: 1,
  },
  {
    text: 'Aufheber',
    size: 1,
  },
  {
    text: 'aufhebbar',
    size: 1,
  },
  {
    text: 'aufhebend',
    size: 1,
  },
  {
    text: 'Bildaufmachung',
    size: 1,
  },
  {
    text: 'Aufklärungsarbeit',
    size: 1,
  },
  {
    text: 'Aufkommensraum',
    size: 1,
  },
  {
    text: 'Aufkömmling',
    size: 1,
  },
  {
    text: 'Zuschaueraufkommen',
    size: 1,
  },
  {
    text: 'Auflagefläche',
    size: 1,
  },
  {
    text: 'Auflagegüter',
    size: 1,
  },
  {
    text: 'Auflageüberwachungsstelle',
    size: 1,
  },
  {
    text: 'Neuauflage',
    size: 1,
  },
  {
    text: 'Produktionsauflage',
    size: 1,
  },
  {
    text: 'Kontingentaufstockung',
    size: 1,
  },
  {
    text: 'Auftraggeberkonto',
    size: 1,
  },
  {
    text: 'Medienauftritt',
    size: 1,
  },
  {
    text: 'Aufwandgelder',
    size: 1,
  },
  {
    text: 'Ausfallbürgschaft',
    size: 1,
  },
  {
    text: 'Ausfallfonds',
    size: 1,
  },
  {
    text: 'Ausfallgeld',
    size: 1,
  },
  {
    text: 'Ausfallhaftung',
    size: 1,
  },
  {
    text: 'Ausfallstrasse',
    size: 1,
  },
  {
    text: 'Ausfallstunde',
    size: 1,
  },
  {
    text: 'Ausfallvergütung',
    size: 1,
  },
  {
    text: 'Ausfallwinkel',
    size: 1,
  },
  {
    text: 'Erwerbsausfallentschädigung',
    size: 1,
  },
  {
    text: 'Einnahmenausfall',
    size: 1,
  },
  {
    text: 'Stimmausfall',
    size: 1,
  },
  {
    text: 'Ausfallzeit',
    size: 1,
  },
  {
    text: 'Betriebsausfall',
    size: 1,
  },
  {
    text: 'Netzausfall',
    size: 1,
  },
  {
    text: 'Stromausfall',
    size: 1,
  },
  {
    text: 'aussagefähig',
    size: 1,
  },
  {
    text: 'Erbanfall',
    size: 1,
  },
  {
    text: 'Arbeitsanfall',
    size: 1,
  },
  {
    text: 'Anlagekapital',
    size: 1,
  },
  {
    text: 'Erbanlage',
    size: 1,
  },
  {
    text: 'Anlaufbahn',
    size: 1,
  },
  {
    text: 'Ansatzstück',
    size: 1,
  },
  {
    text: 'Beeinträchtigung',
    size: 1,
  },
  {
    text: 'beeinträchtigend',
    size: 1,
  },
  {
    text: 'Befundaufnahme',
    size: 1,
  },
  {
    text: 'Befundschein',
    size: 1,
  },
  {
    text: 'Befundbuch',
    size: 1,
  },
  {
    text: 'Richtigbefund',
    size: 1,
  },
  {
    text: 'Ortsbefund',
    size: 1,
  },
  {
    text: 'Begehungssünde',
    size: 1,
  },
  {
    text: 'Bahnbegehungskarte',
    size: 1,
  },
  {
    text: 'Anweisungsschein',
    size: 1,
  },
  {
    text: 'Anweisungszettel',
    size: 1,
  },
  {
    text: 'begrifflich',
    size: 1,
  },
  {
    text: 'Begriffsbestimmung',
    size: 1,
  },
  {
    text: 'Begriffslehre',
    size: 1,
  },
  {
    text: 'begriffsstutzig',
    size: 1,
  },
  {
    text: 'aufdrängen',
    size: 1,
  },
  {
    text: 'äufnen',
    size: 1,
  },
  {
    text: 'aufgestellt',
    size: 1,
  },
  {
    text: 'Aufwandbesteuerung',
    size: 1,
  },
  {
    text: 'Begrüssung',
    size: 1,
  },
  {
    text: 'Beharrungszustand',
    size: 1,
  },
  {
    text: 'Schreibbehelf',
    size: 1,
  },
  {
    text: 'Rechtsbehelf',
    size: 1,
  },
  {
    text: 'Notbehelf',
    size: 1,
  },
  {
    text: 'beitragsberechtigt',
    size: 1,
  },
  {
    text: 'Beitragsleistungen',
    size: 1,
  },
  {
    text: 'Beitragspflicht',
    size: 1,
  },
  {
    text: 'Beitragswert',
    size: 1,
  },
  {
    text: 'beitragsfrei',
    size: 1,
  },
  {
    text: 'bejahend',
    size: 1,
  },
  {
    text: 'Bejahung',
    size: 1,
  },
  {
    text: 'bejahendenfalls',
    size: 1,
  },
  {
    text: 'Bekenntnisfreiheit',
    size: 1,
  },
  {
    text: 'Bekenntnisschrift',
    size: 1,
  },
  {
    text: 'Bekenntnisschule',
    size: 1,
  },
  {
    text: 'bekenntnistreu',
    size: 1,
  },
  {
    text: 'Geldaufblähung',
    size: 1,
  },
  {
    text: 'Belangung',
    size: 1,
  },
  {
    text: 'belangreich',
    size: 1,
  },
  {
    text: 'belanglos',
    size: 1,
  },
  {
    text: 'Steuergefälle',
    size: 1,
  },
  {
    text: 'Geltungsbereich',
    size: 1,
  },
  {
    text: 'Geltungstrieb',
    size: 1,
  },
  {
    text: 'Geltungssucht',
    size: 1,
  },
  {
    text: 'standortgerecht',
    size: 1,
  },
  {
    text: 'Gesellschafter',
    size: 1,
  },
  {
    text: 'selbstgerecht',
    size: 1,
  },
  {
    text: 'Gerichtsstandsklausel',
    size: 1,
  },
  {
    text: 'Auffanggesellschaft',
    size: 1,
  },
  {
    text: 'Gesellschaftseinlagen',
    size: 1,
  },
  {
    text: 'Gesellschaftsfirma',
    size: 1,
  },
  {
    text: 'Abendgesellschaft',
    size: 1,
  },
  {
    text: 'Gesellschaftstheater',
    size: 1,
  },
  {
    text: 'Dachgesellschaft',
    size: 1,
  },
  {
    text: 'Kommanditgesellschaft',
    size: 1,
  },
  {
    text: 'Zweiggesellschaft',
    size: 1,
  },
  {
    text: 'Gastbett',
    size: 1,
  },
  {
    text: 'Gastfreundschaft',
    size: 1,
  },
  {
    text: 'Gasthaus',
    size: 1,
  },
  {
    text: 'Gastgewerbe',
    size: 1,
  },
  {
    text: 'Gaststätte',
    size: 1,
  },
  {
    text: 'Gastreferent',
    size: 1,
  },
  {
    text: 'Gastregisseur',
    size: 1,
  },
  {
    text: 'Gasthörer',
    size: 1,
  },
  {
    text: 'Gastarbeiter',
    size: 1,
  },
  {
    text: 'Gastpflanze',
    size: 1,
  },
  {
    text: 'Gasttier',
    size: 1,
  },
  {
    text: 'Gästebuch',
    size: 1,
  },
  {
    text: 'Gästekreis',
    size: 1,
  },
  {
    text: 'Gefällebahnhof',
    size: 1,
  },
  {
    text: 'saisongerecht',
    size: 1,
  },
  {
    text: 'stilgerecht',
    size: 1,
  },
  {
    text: 'risikogerechte Prämie',
    size: 1,
  },
  {
    text: 'umweltgerecht',
    size: 1,
  },
  {
    text: 'weidgerecht',
    size: 1,
  },
  {
    text: 'bedarfsgerecht',
    size: 1,
  },
  {
    text: 'bühnengerecht',
    size: 1,
  },
  {
    text: 'formgerecht',
    size: 1,
  },
  {
    text: 'termingerecht',
    size: 1,
  },
  {
    text: 'fussgerecht',
    size: 1,
  },
  {
    text: 'Grundstücksgesellschaft',
    size: 1,
  },
  {
    text: 'Pachtgesellschaft',
    size: 1,
  },
  {
    text: 'Bankgesellschaft',
    size: 1,
  },
  {
    text: 'Bankverein',
    size: 1,
  },
  {
    text: 'Gesellschaftlichkeit',
    size: 1,
  },
  {
    text: 'Preisgestaltung',
    size: 1,
  },
  {
    text: 'Raumgestaltung',
    size: 1,
  },
  {
    text: 'gewährbar',
    size: 1,
  },
  {
    text: 'Mängelgewähr',
    size: 1,
  },
  {
    text: 'Gewährleistungsklage',
    size: 1,
  },
  {
    text: 'Gewinnrechnung',
    size: 1,
  },
  {
    text: 'Härteparagraph',
    size: 1,
  },
  {
    text: 'Programmhinweise',
    size: 1,
  },
  {
    text: 'Tiefbauingenieur',
    size: 1,
  },
  {
    text: 'Tiefbauamt',
    size: 1,
  },
  {
    text: 'Strassenhoheit',
    size: 1,
  },
  {
    text: 'Schulhoheit',
    size: 1,
  },
  {
    text: 'Haushydrant',
    size: 1,
  },
  {
    text: 'Laufbrunnenhydrant',
    size: 1,
  },
  {
    text: 'Eintretensdebatte',
    size: 1,
  },
  {
    text: 'Zweckentfremdung',
    size: 1,
  },
  {
    text: 'zweckentfremdet',
    size: 1,
  },
  {
    text: 'Einsichtnahme',
    size: 1,
  },
  {
    text: 'einsichtslos',
    size: 1,
  },
  {
    text: 'einsichtsvoll',
    size: 1,
  },
  {
    text: 'überwälzen',
    size: 1,
  },
  {
    text: 'Belastungsanzeige',
    size: 1,
  },
  {
    text: 'Belastungsfaktor',
    size: 1,
  },
  {
    text: 'Belastungsprobe',
    size: 1,
  },
  {
    text: 'Belastungsverbot',
    size: 1,
  },
  {
    text: 'Belastungszeuge',
    size: 1,
  },
  {
    text: 'Erschliessungsarbeiten',
    size: 1,
  },
  {
    text: 'Erstarrungspunkt',
    size: 1,
  },
  {
    text: 'Rechtserstarrung',
    size: 1,
  },
  {
    text: 'Belegarzt',
    size: 1,
  },
  {
    text: 'Belegexemplar',
    size: 1,
  },
  {
    text: 'Belegmaterial',
    size: 1,
  },
  {
    text: 'Bestandsbeleg',
    size: 1,
  },
  {
    text: 'Buchbeleg',
    size: 1,
  },
  {
    text: 'Buchungsbeleg',
    size: 1,
  },
  {
    text: 'Lohnbeleg',
    size: 1,
  },
  {
    text: 'Originalbeleg',
    size: 1,
  },
  {
    text: 'Rechnungsbeleg',
    size: 1,
  },
  {
    text: 'Spesenbeleg',
    size: 1,
  },
  {
    text: 'Beratungswesen',
    size: 1,
  },
  {
    text: 'Beratungsstimme',
    size: 1,
  },
  {
    text: 'Betriebsberater',
    size: 1,
  },
  {
    text: 'Bilanzbereinigung',
    size: 1,
  },
  {
    text: 'Schuldenbereinigung',
    size: 1,
  },
  {
    text: 'Wertpapierbereinigung',
    size: 1,
  },
  {
    text: 'Differenzbereinigung',
    size: 1,
  },
  {
    text: 'aufnahmebereit',
    size: 1,
  },
  {
    text: 'betriebsbereit',
    size: 1,
  },
  {
    text: 'dienstbereit',
    size: 1,
  },
  {
    text: 'einsatzbereit',
    size: 1,
  },
  {
    text: 'griffbereit',
    size: 1,
  },
  {
    text: 'schussbereit',
    size: 1,
  },
  {
    text: 'verständigungsbereit',
    size: 1,
  },
  {
    text: 'Berufungsfall',
    size: 1,
  },
  {
    text: 'Berufungsinstanz',
    size: 1,
  },
  {
    text: 'Berufungskläger',
    size: 1,
  },
  {
    text: 'Berufungsrecht',
    size: 1,
  },
  {
    text: 'Zwischenberufung',
    size: 1,
  },
  {
    text: 'Beschaffungskriminalität',
    size: 1,
  },
  {
    text: 'Beschaffungswesen',
    size: 1,
  },
  {
    text: 'Beschaffungskosten',
    size: 1,
  },
  {
    text: 'Beschaffungsstelle',
    size: 1,
  },
  {
    text: 'Beschaffungsvertrag',
    size: 1,
  },
  {
    text: 'Beschaffungsreifeerklärung',
    size: 1,
  },
  {
    text: 'beschlussfähig',
    size: 1,
  },
  {
    text: 'Beschlussfähigkeit',
    size: 1,
  },
  {
    text: 'Beschlussunfähigkeit',
    size: 1,
  },
  {
    text: 'Beschlussprotokoll',
    size: 1,
  },
  {
    text: 'Ermittlungsausschuss',
    size: 1,
  },
  {
    text: 'Ermittlungsverfahren',
    size: 1,
  },
  {
    text: 'Restbestand',
    size: 1,
  },
  {
    text: 'Führungsstufe',
    size: 1,
  },
  {
    text: 'Personalbestand',
    size: 1,
  },
  {
    text: 'Bestandsaufnahme',
    size: 1,
  },
  {
    text: 'Bautenbestand',
    size: 1,
  },
  {
    text: 'wärmebeständig',
    size: 1,
  },
  {
    text: 'Wechselbeteiligter',
    size: 1,
  },
  {
    text: 'Zollbeteiligter',
    size: 1,
  },
  {
    text: 'Unbeteiligte',
    size: 1,
  },
  {
    text: 'Kostengutsprache',
    size: 1,
  },
  {
    text: 'süchtig',
    size: 1,
  },
  {
    text: 'Betreuungsstelle',
    size: 1,
  },
  {
    text: 'Betreuungskosten',
    size: 1,
  },
  {
    text: 'bewährt',
    size: 1,
  },
  {
    text: 'Bewährungshelfer',
    size: 1,
  },
  {
    text: 'Bewährungsprobe',
    size: 1,
  },
  {
    text: 'Bewährungsfrist',
    size: 1,
  },
  {
    text: 'Bewährungszeit',
    size: 1,
  },
  {
    text: 'Bewährungsaufstieg',
    size: 1,
  },
  {
    text: 'Devisenbewirtschaftung',
    size: 1,
  },
  {
    text: 'Bezugsaktie',
    size: 1,
  },
  {
    text: 'Bezugsbeschränkung',
    size: 1,
  },
  {
    text: 'Bezugsgebiet',
    size: 1,
  },
  {
    text: 'Bezugsgrösse',
    size: 1,
  },
  {
    text: 'Bezugspreis',
    size: 1,
  },
  {
    text: 'Bezugsrecht',
    size: 1,
  },
  {
    text: 'Bezugsquelle',
    size: 1,
  },
  {
    text: 'bezugsscheinfrei',
    size: 1,
  },
  {
    text: 'Bezugsberechtigter',
    size: 1,
  },
  {
    text: 'Bezugsangebot',
    size: 1,
  },
  {
    text: 'bezüglich',
    size: 1,
  },
  {
    text: 'Gehaltsbezüger',
    size: 1,
  },
  {
    text: 'Mehrfachbezüger',
    size: 1,
  },
  {
    text: 'Pensionsbezüger',
    size: 1,
  },
  {
    text: 'Rentensbezüger',
    size: 1,
  },
  {
    text: 'Dahinfallen',
    size: 1,
  },
  {
    text: 'Darstellungsart',
    size: 1,
  },
  {
    text: 'Darstellungsweise',
    size: 1,
  },
  {
    text: 'Darstellungsgabe, -kunst, -talent',
    size: 1,
  },
  {
    text: 'Datenblatt',
    size: 1,
  },
  {
    text: 'dispositionsfähig',
    size: 1,
  },
  {
    text: 'Dispositionszentrale',
    size: 1,
  },
  {
    text: 'Durchweg',
    size: 1,
  },
  {
    text: 'Mammuttanker',
    size: 1,
  },
  {
    text: 'Mängelhaftung',
    size: 1,
  },
  {
    text: 'Mängelrüge',
    size: 1,
  },
  {
    text: 'Arbeitsmangel',
    size: 1,
  },
  {
    text: 'Materialwaren',
    size: 1,
  },
  {
    text: 'Beweismaterial',
    size: 1,
  },
  {
    text: 'Stimmmaterial',
    size: 1,
  },
  {
    text: 'Beratungsrecht',
    size: 1,
  },
  {
    text: 'Vorschlagsrecht',
    size: 1,
  },
  {
    text: 'Vetorecht',
    size: 1,
  },
  {
    text: 'Geltungsbedürfnis',
    size: 1,
  },
  {
    text: 'eingehend',
    size: 1,
  },
  {
    text: 'einwandfrei',
    size: 1,
  },
  {
    text: 'Entlastungsstrasse',
    size: 1,
  },
  {
    text: 'Entlastungszug',
    size: 1,
  },
  {
    text: 'Entlastungszeuge',
    size: 1,
  },
  {
    text: 'Entlastungsventil',
    size: 1,
  },
  {
    text: 'Entwicklungslehre',
    size: 1,
  },
  {
    text: 'Erfassung',
    size: 1,
  },
  {
    text: 'Armenpflege',
    size: 1,
  },
  {
    text: 'Erhebungsvordruck',
    size: 1,
  },
  {
    text: 'Erhebungszeitraum',
    size: 1,
  },
  {
    text: 'Erholungsgebiet',
    size: 1,
  },
  {
    text: 'problemorientiert',
    size: 1,
  },
  {
    text: 'erfolgsorientiert',
    size: 1,
  },
  {
    text: 'ergebnisorientiert',
    size: 1,
  },
  {
    text: 'Verarbeitungsgrad',
    size: 1,
  },
  {
    text: 'Verarbeitungsspanne',
    size: 1,
  },
  {
    text: 'nachführen',
    size: 1,
  },
  {
    text: 'Nachführungsarbeiten',
    size: 1,
  },
  {
    text: 'Nachführungsgeometer',
    size: 1,
  },
  {
    text: 'Nachtragsabkommen',
    size: 1,
  },
  {
    text: 'Nachtragsbestimmung',
    size: 1,
  },
  {
    text: 'Nachtragskredit',
    size: 1,
  },
  {
    text: 'Nachtragspolice',
    size: 1,
  },
  {
    text: 'Nachtragszahlung',
    size: 1,
  },
  {
    text: 'Nachtragsveranlagung',
    size: 1,
  },
  {
    text: 'Ablieferungsnachweis',
    size: 1,
  },
  {
    text: 'Anstellungsnachweis',
    size: 1,
  },
  {
    text: 'Arbeitsnachweis',
    size: 1,
  },
  {
    text: 'Arbeitsnachweisstelle',
    size: 1,
  },
  {
    text: 'Arbeitsunfähigkeitnachweis',
    size: 1,
  },
  {
    text: 'Bedürftigkeitsnachweis',
    size: 1,
  },
  {
    text: 'Befähigungsnachweis',
    size: 1,
  },
  {
    text: 'Berechtigungsnachweis',
    size: 1,
  },
  {
    text: 'Beschäftigungsnachweis',
    size: 1,
  },
  {
    text: 'Bestandsnachweis',
    size: 1,
  },
  {
    text: 'Buchnachweis',
    size: 1,
  },
  {
    text: 'Eigentumsnachweis',
    size: 1,
  },
  {
    text: 'Erbnachweis',
    size: 1,
  },
  {
    text: 'Nämlichkeitsnachweis',
    size: 1,
  },
  {
    text: 'Schadennachweis',
    size: 1,
  },
  {
    text: 'Übergabenachweis',
    size: 1,
  },
  {
    text: 'Ursprungsnachweis',
    size: 1,
  },
  {
    text: 'Vermögensnachweis',
    size: 1,
  },
  {
    text: 'Nachwuchspolitik',
    size: 1,
  },
  {
    text: 'Nachwuchsprobleme',
    size: 1,
  },
  {
    text: 'Nachwuchsförderung',
    size: 1,
  },
  {
    text: 'nah',
    size: 1,
  },
  {
    text: 'verbrauchernah',
    size: 1,
  },
  {
    text: 'neutral',
    size: 1,
  },
  {
    text: 'wettbewerbsneutral',
    size: 1,
  },
  {
    text: 'praxisorientiert',
    size: 1,
  },
  {
    text: 'Orientierungsmittel',
    size: 1,
  },
  {
    text: 'Pendelwanderung',
    size: 1,
  },
  {
    text: 'Pendelverkehr',
    size: 1,
  },
  {
    text: 'Pendelpflug',
    size: 1,
  },
  {
    text: 'Pendelhacke',
    size: 1,
  },
  {
    text: 'Pendelkostenbeitrag',
    size: 1,
  },
  {
    text: 'Pflegebeitrag',
    size: 1,
  },
  {
    text: 'Pflegegeld',
    size: 1,
  },
  {
    text: 'Pflegeheim',
    size: 1,
  },
  {
    text: 'Pflegekosten',
    size: 1,
  },
  {
    text: 'pflegeleicht',
    size: 1,
  },
  {
    text: 'Pflegepersonal',
    size: 1,
  },
  {
    text: 'Bundesstrafrechtspflege',
    size: 1,
  },
  {
    text: 'Dateipflege',
    size: 1,
  },
  {
    text: 'Datenpflege',
    size: 1,
  },
  {
    text: 'Datenbankpflege',
    size: 1,
  },
  {
    text: 'Hauspflegerin',
    size: 1,
  },
  {
    text: 'Spitex-Pflege',
    size: 1,
  },
  {
    text: 'Rechtspflege',
    size: 1,
  },
  {
    text: 'Schulpflege',
    size: 1,
  },
  {
    text: 'Denkmalpflege',
    size: 1,
  },
  {
    text: 'pflegerisch',
    size: 1,
  },
  {
    text: 'Pflegevertrag',
    size: 1,
  },
  {
    text: 'Wartungsvertrag',
    size: 1,
  },
  {
    text: 'Stadtplaner',
    size: 1,
  },
  {
    text: 'Städteplaner',
    size: 1,
  },
  {
    text: 'Umgebungsplaner',
    size: 1,
  },
  {
    text: 'Gartenplaner',
    size: 1,
  },
  {
    text: 'Umweltplaner',
    size: 1,
  },
  {
    text: 'Planungsbüro',
    size: 1,
  },
  {
    text: 'bildungspolitisch',
    size: 1,
  },
  {
    text: 'bevölkerungspolitisch',
    size: 1,
  },
  {
    text: 'tagespolitisch',
    size: 1,
  },
  {
    text: 'wirtschaftspolitisch',
    size: 1,
  },
  {
    text: 'präjudizierlich',
    size: 1,
  },
  {
    text: 'Präjudiz',
    size: 1,
  },
  {
    text: 'Präjudizialklage',
    size: 1,
  },
  {
    text: 'Gerichtspraxis',
    size: 1,
  },
  {
    text: 'Praxisänderung',
    size: 1,
  },
  {
    text: 'Primärliteratur',
    size: 1,
  },
  {
    text: 'Primärstrahlung',
    size: 1,
  },
  {
    text: 'Primärstrom',
    size: 1,
  },
  {
    text: 'Primärteilchen',
    size: 1,
  },
  {
    text: 'Primärvorgang',
    size: 1,
  },
  {
    text: 'Primärenergie',
    size: 1,
  },
  {
    text: 'Quotenaktie',
    size: 1,
  },
  {
    text: 'Quotenrückversicherung',
    size: 1,
  },
  {
    text: 'Quotensystem',
    size: 1,
  },
  {
    text: 'Steuerquote',
    size: 1,
  },
  {
    text: 'Betriebsquervergleich',
    size: 1,
  },
  {
    text: 'Quereinstieg',
    size: 1,
  },
  {
    text: 'Erlebnispädagogik',
    size: 1,
  },
  {
    text: 'Erlebnispark',
    size: 1,
  },
  {
    text: 'Rechtsgültigkeit',
    size: 1,
  },
  {
    text: 'Regelungsdichte',
    size: 1,
  },
  {
    text: 'Ressortchef',
    size: 1,
  },
  {
    text: 'Ressortminister',
    size: 1,
  },
  {
    text: 'Rubrizierungen',
    size: 1,
  },
  {
    text: 'Rubrizierungsdaten',
    size: 1,
  },
  {
    text: 'Rubrizierungsfeld',
    size: 1,
  },
  {
    text: 'Rubrizierungskorrektur',
    size: 1,
  },
  {
    text: 'Rubrizierungsstempel',
    size: 1,
  },
  {
    text: 'Rubrizierungsverzeichnis',
    size: 1,
  },
  {
    text: 'Rubrizierungsweisung',
    size: 1,
  },
  {
    text: 'Rubrizierungszettel',
    size: 1,
  },
  {
    text: 'Rückfragesystem',
    size: 1,
  },
  {
    text: 'Rückfragetaste',
    size: 1,
  },
  {
    text: 'Rückfrageapparat',
    size: 1,
  },
  {
    text: 'Völkerbundssatzung',
    size: 1,
  },
  {
    text: 'Tagsatzung',
    size: 1,
  },
  {
    text: 'Satzungsgewalt',
    size: 1,
  },
  {
    text: 'Selbsthilfeaktion',
    size: 1,
  },
  {
    text: 'Selbsthilfegruppe',
    size: 1,
  },
  {
    text: 'Selbsthilfeverkauf',
    size: 1,
  },
  {
    text: 'Selbsthilfegenossenschaft',
    size: 1,
  },
  {
    text: 'Ansiedler',
    size: 1,
  },
  {
    text: 'Siedlungsbild',
    size: 1,
  },
  {
    text: 'Siedlungsentwicklung',
    size: 1,
  },
  {
    text: 'putzsüchtig',
    size: 1,
  },
  {
    text: 'Fachausbildung',
    size: 1,
  },
  {
    text: 'Fachliteratur',
    size: 1,
  },
  {
    text: 'Fachpresse',
    size: 1,
  },
  {
    text: 'Fachmesse',
    size: 1,
  },
  {
    text: 'Fachwerk',
    size: 1,
  },
  {
    text: 'Fahrnisbauten',
    size: 1,
  },
  {
    text: 'Fahrniskauf',
    size: 1,
  },
  {
    text: 'Fahrnispfandrecht',
    size: 1,
  },
  {
    text: 'baufällig',
    size: 1,
  },
  {
    text: 'Fluchttier',
    size: 1,
  },
  {
    text: 'Fassungskraft',
    size: 1,
  },
  {
    text: 'Fremdarbeiter',
    size: 1,
  },
  {
    text: 'Fremdbefruchtung',
    size: 1,
  },
  {
    text: 'Fremdheit',
    size: 1,
  },
  {
    text: 'Fremdkapital',
    size: 1,
  },
  {
    text: 'Fremdkörper',
    size: 1,
  },
  {
    text: 'Vorsorgeuntersuchung',
    size: 1,
  },
  {
    text: 'vorstellig werden',
    size: 1,
  },
  {
    text: 'Veredlungsprodukt',
    size: 1,
  },
  {
    text: 'Veredlungsindustrie',
    size: 1,
  },
  {
    text: 'Verfahrens-',
    size: 1,
  },
  {
    text: 'Fremdkosten',
    size: 1,
  },
  {
    text: 'wirklichkeitsfremd',
    size: 1,
  },
  {
    text: 'Fremdversicherung',
    size: 1,
  },
  {
    text: 'arbeiterfreundlich',
    size: 1,
  },
  {
    text: 'bedienungsfreundlich',
    size: 1,
  },
  {
    text: 'benützerfreundlich',
    size: 1,
  },
  {
    text: 'gastfreundlich',
    size: 1,
  },
  {
    text: 'scheissfreundlich',
    size: 1,
  },
  {
    text: 'überfreundlich',
    size: 1,
  },
  {
    text: 'regierungsfreundlich',
    size: 1,
  },
  {
    text: 'wirtschaftfreundlich',
    size: 1,
  },
  {
    text: 'Fürsorgestelle',
    size: 1,
  },
  {
    text: 'Fürsorgerin',
    size: 1,
  },
  {
    text: 'Fürsorgewesen',
    size: 1,
  },
  {
    text: 'Fürsorgeanstalt',
    size: 1,
  },
  {
    text: 'Fürsorgestaat',
    size: 1,
  },
  {
    text: 'Wohnungsfürsorge',
    size: 1,
  },
  {
    text: 'Führungsaufgabe',
    size: 1,
  },
  {
    text: 'Führungsebene',
    size: 1,
  },
  {
    text: 'Freiwillige',
    size: 1,
  },
  {
    text: 'arbeitssüchtig',
    size: 1,
  },
  {
    text: 'profitsüchtig',
    size: 1,
  },
  {
    text: 'aufwändig',
    size: 1,
  },
  {
    text: 'Überbauungsplan',
    size: 1,
  },
  {
    text: 'überbaubar',
    size: 1,
  },
  {
    text: 'übergehen',
    size: 1,
  },
  {
    text: 'überhaupt',
    size: 1,
  },
  {
    text: 'überholen',
    size: 1,
  },
  {
    text: 'überholt',
    size: 1,
  },
  {
    text: 'übernachten',
    size: 1,
  },
  {
    text: 'Übernachtung',
    size: 1,
  },
  {
    text: 'Überwälzung',
    size: 1,
  },
  {
    text: 'Überschneidung',
    size: 1,
  },
  {
    text: 'übersehen',
    size: 1,
  },
  {
    text: 'Übersicht',
    size: 1,
  },
  {
    text: 'übersichtig',
    size: 1,
  },
  {
    text: 'Übersichtlichkeit',
    size: 1,
  },
  {
    text: 'übersichtlich',
    size: 1,
  },
  {
    text: 'Übersichtsplan',
    size: 1,
  },
  {
    text: 'Übersichtstabelle',
    size: 1,
  },
  {
    text: 'Klausurarbeit',
    size: 1,
  },
  {
    text: 'Synodalklausur',
    size: 1,
  },
  {
    text: 'durchwegs',
    size: 1,
  },
  {
    text: 'Kopplungsbruch',
    size: 1,
  },
  {
    text: 'Kopplungsspule',
    size: 1,
  },
  {
    text: 'Umlageverfahren',
    size: 1,
  },
  {
    text: 'Umlageeinnehmer',
    size: 1,
  },
  {
    text: 'umlagepflichtig',
    size: 1,
  },
  {
    text: 'Umschlagplatz',
    size: 1,
  },
  {
    text: 'Umsatzsteuer',
    size: 1,
  },
  {
    text: 'Umsatzkapital',
    size: 1,
  },
  {
    text: 'Umsatzwelle',
    size: 1,
  },
  {
    text: 'Umsatzerlös',
    size: 1,
  },
  {
    text: 'Verpflegungszulage',
    size: 1,
  },
  {
    text: 'umständehalber',
    size: 1,
  },
  {
    text: 'Unkostenübertragung',
    size: 1,
  },
  {
    text: 'Schreibunterlage',
    size: 1,
  },
  {
    text: 'Ermessensunterschreitung',
    size: 1,
  },
  {
    text: 'Unzukömmlichkeiten',
    size: 1,
  },
  {
    text: 'Wesenheit',
    size: 1,
  },
  {
    text: 'wesenlos',
    size: 1,
  },
  {
    text: 'Wesenseinheit',
    size: 1,
  },
  {
    text: 'wesenhaft',
    size: 1,
  },
  {
    text: 'Hypothekarwesen',
    size: 1,
  },
  {
    text: 'Gefängniswesen',
    size: 1,
  },
  {
    text: 'Wohlfahrtsamt',
    size: 1,
  },
  {
    text: 'Wohlfahrtsausschuss',
    size: 1,
  },
  {
    text: 'Wohlfahrtseinrichtung',
    size: 1,
  },
  {
    text: 'Wohlfahrtsfonds',
    size: 1,
  },
  {
    text: 'Wohlfahrtsstaat',
    size: 1,
  },
  {
    text: 'zugestandermassen',
    size: 1,
  },
  {
    text: 'Zumutbarkeit',
    size: 1,
  },
  {
    text: 'Stabdienste',
    size: 1,
  },
  {
    text: 'Stammkunde',
    size: 1,
  },
  {
    text: 'Stammzelle',
    size: 1,
  },
  {
    text: 'starrblind',
    size: 1,
  },
  {
    text: 'Starrkopf',
    size: 1,
  },
  {
    text: 'Starrkrampf',
    size: 1,
  },
  {
    text: 'Starrleinen',
    size: 1,
  },
  {
    text: 'Starrsucht',
    size: 1,
  },
  {
    text: 'steckbrieflich',
    size: 1,
  },
  {
    text: 'Stellung nehmen',
    size: 1,
  },
  {
    text: 'Stichprobeverfahren',
    size: 1,
  },
  {
    text: 'stichprobenweise',
    size: 1,
  },
  {
    text: 'Stichprobenpunkt',
    size: 1,
  },
  {
    text: 'Stichprobensatz',
    size: 1,
  },
  {
    text: 'Stichwortschloß',
    size: 1,
  },
  {
    text: 'Stimmungsindikator',
    size: 1,
  },
  {
    text: 'Stimmungsumschwung',
    size: 1,
  },
  {
    text: 'Stimmungsbarometer',
    size: 1,
  },
  {
    text: 'Stimmungsmensch',
    size: 1,
  },
  {
    text: 'Storno',
    size: 1,
  },
  {
    text: 'Betriebsstörung',
    size: 1,
  },
  {
    text: 'Störungsdienst',
    size: 1,
  },
  {
    text: 'Störzeichen',
    size: 1,
  },
  {
    text: 'Störungsfeuer',
    size: 1,
  },
  {
    text: 'Steiflichter',
    size: 1,
  },
  {
    text: 'schablonenmässig',
    size: 1,
  },
  {
    text: 'schablonenhaft',
    size: 1,
  },
  {
    text: 'Schablonenzeichnung',
    size: 1,
  },
  {
    text: 'Schattenkasse',
    size: 1,
  },
  {
    text: 'Schattenkonto',
    size: 1,
  },
  {
    text: 'Schonzeit',
    size: 1,
  },
  {
    text: 'Schongebiet',
    size: 1,
  },
  {
    text: 'Absatzschwankungen',
    size: 1,
  },
  {
    text: 'Beschäftigungsgradschwankungen',
    size: 1,
  },
  {
    text: 'Beschäftigungsschwankungen',
    size: 1,
  },
  {
    text: 'Börsenschwankungen',
    size: 1,
  },
  {
    text: 'Preisschwankungen',
    size: 1,
  },
  {
    text: 'Qualitätsschwankungen',
    size: 1,
  },
  {
    text: 'Stromschwankung',
    size: 1,
  },
  {
    text: 'Währungsschwankungen',
    size: 1,
  },
  {
    text: 'Schwergewichtsgut',
    size: 1,
  },
  {
    text: 'karrierebewusst',
    size: 1,
  },
  {
    text: 'pflichtbewusst',
    size: 1,
  },
  {
    text: 'preisbewusst',
    size: 1,
  },
  {
    text: 'schuldbewusst',
    size: 1,
  },
  {
    text: 'selbstbewusst',
    size: 1,
  },
  {
    text: 'sprachbewusst',
    size: 1,
  },
  {
    text: 'staatsbewusst',
    size: 1,
  },
  {
    text: 'standesbewusst',
    size: 1,
  },
  {
    text: 'umweltbewusst',
    size: 1,
  },
  {
    text: 'Volkswirtschaft',
    size: 1,
  },
  {
    text: 'BWA',
    size: 1,
  },
  {
    text: 'Kompetenzstück',
    size: 1,
  },
  {
    text: 'Koppelwirtschaft',
    size: 1,
  },
  {
    text: 'Koppelweide',
    size: 1,
  },
  {
    text: 'Polier',
    size: 1,
  },
  {
    text: 'Begutachtungskommission',
    size: 1,
  },
  {
    text: 'Vorschub',
    size: 1,
  },
  {
    text: 'Schulleistung',
    size: 1,
  },
  {
    text: 'Bedarfsverkehr',
    size: 1,
  },
  {
    text: 'Starrsinn',
    size: 1,
  },
  {
    text: 'Vermögensschaden',
    size: 1,
  },
  {
    text: 'Vermögensverfall',
    size: 1,
  },
  {
    text: 'Betriebsvermögen',
    size: 1,
  },
  {
    text: 'Vernehmlasser',
    size: 1,
  },
  {
    text: 'Verwertungsklausel',
    size: 1,
  },
  {
    text: 'Versorgungsanstalt',
    size: 1,
  },
  {
    text: 'Umlaufvermögen',
    size: 1,
  },
  {
    text: 'verantwortungsvoll',
    size: 1,
  },
  {
    text: 'Veredlungsverfahren',
    size: 1,
  },
  {
    text: 'verfremden',
    size: 1,
  },
  {
    text: 'Veredlungsverkehr',
    size: 1,
  },
  {
    text: 'Zielvorgabe',
    size: 1,
  },
  {
    text: 'Vorgabewert',
    size: 1,
  },
  {
    text: 'Vorprogramm',
    size: 1,
  },
  {
    text: 'Termingeschäft',
    size: 1,
  },
  {
    text: 'Terminzahlung',
    size: 1,
  },
  {
    text: 'Terminwechsel',
    size: 1,
  },
  {
    text: 'Sühnetermin',
    size: 1,
  },
  {
    text: 'Terminplan',
    size: 1,
  },
  {
    text: 'Terminkalender',
    size: 1,
  },
  {
    text: 'Terminrolle',
    size: 1,
  },
  {
    text: 'terminieren',
    size: 1,
  },
  {
    text: 'Versicherungsträger',
    size: 1,
  },
  {
    text: 'Energieträger',
    size: 1,
  },
  {
    text: 'Würdenträger',
    size: 1,
  },
  {
    text: 'Geschäftsträger',
    size: 1,
  },
  {
    text: 'Querträger',
    size: 1,
  },
  {
    text: 'Verdauungstrakt',
    size: 1,
  },
  {
    text: 'absprachegemäss',
    size: 1,
  },
  {
    text: 'volksnah',
    size: 1,
  },
  {
    text: 'Bauführer',
    size: 1,
  },
  {
    text: 'Ausbildungsleiter',
    size: 1,
  },
  {
    text: 'Bauleiter',
    size: 1,
  },
  {
    text: 'EDV-Projektleiter',
    size: 1,
  },
  {
    text: 'Fachdienstleiter',
    size: 1,
  },
  {
    text: 'Q-Leiter',
    size: 1,
  },
  {
    text: 'Kundendienstleiter',
    size: 1,
  },
  {
    text: 'Werkleiter',
    size: 1,
  },
  {
    text: 'Bauherr',
    size: 1,
  },
  {
    text: 'Kundendienstleistung',
    size: 1,
  },
  {
    text: 'Kundendientswerkstatt',
    size: 1,
  },
  {
    text: 'Kundendienstbüro',
    size: 1,
  },
  {
    text: 'fremdwort',
    size: 1,
  },
  {
    text: 'eigenständig',
    size: 1,
  },
  {
    text: 'Entgegenkommen',
    size: 1,
  },
  {
    text: 'ertragsfähig',
    size: 1,
  },
  {
    text: 'Flugzeugträger',
    size: 1,
  },
  {
    text: 'Umtriebskosten',
    size: 1,
  },
  {
    text: 'Champagner',
    size: 1,
  },
  {
    text: 'Fehlleitung',
    size: 1,
  },
  {
    text: 'Fehlanzeige',
    size: 1,
  },
  {
    text: 'Fehlstelle',
    size: 1,
  },
  {
    text: 'Fehlbitte',
    size: 1,
  },
  {
    text: 'fehlschlagen',
    size: 1,
  },
  {
    text: 'Fehlgeburt',
    size: 1,
  },
  {
    text: 'fehlleiten',
    size: 1,
  },
  {
    text: 'Fehlanlage',
    size: 1,
  },
  {
    text: 'Fehlsichtigkeit',
    size: 1,
  },
  {
    text: 'Fehlentscheidung',
    size: 1,
  },
  {
    text: 'Fehlkonstruktion',
    size: 1,
  },
  {
    text: 'Fehltritt',
    size: 1,
  },
  {
    text: 'Fehlschluss',
    size: 1,
  },
  {
    text: 'Querschnittuntersuchung',
    size: 1,
  },
  {
    text: 'Altertumskunde',
    size: 1,
  },
  {
    text: 'Gegenwartskunde',
    size: 1,
  },
  {
    text: 'Staatsbürgerkunde',
    size: 1,
  },
  {
    text: 'Völkerkunde',
    size: 1,
  },
  {
    text: 'Berufskunde',
    size: 1,
  },
  {
    text: 'Deutschkunde',
    size: 1,
  },
  {
    text: 'Fachkunde',
    size: 1,
  },
  {
    text: 'Namenskunde',
    size: 1,
  },
  {
    text: 'Sachkunde',
    size: 1,
  },
  {
    text: 'Sprechkunde',
    size: 1,
  },
  {
    text: 'Stilkunde',
    size: 1,
  },
  {
    text: 'Arzneikunde',
    size: 1,
  },
  {
    text: 'Bodenkunde',
    size: 1,
  },
  {
    text: 'Erdkunde',
    size: 1,
  },
  {
    text: 'Gesteinskunde',
    size: 1,
  },
  {
    text: 'Naturkunde',
    size: 1,
  },
  {
    text: 'Pflanzenkunde',
    size: 1,
  },
  {
    text: 'Sternkunde',
    size: 1,
  },
  {
    text: 'Tierkunde',
    size: 1,
  },
  {
    text: 'Vogelkunde',
    size: 1,
  },
  {
    text: 'Hüttenkunde',
    size: 1,
  },
  {
    text: 'Waffenkunde',
    size: 1,
  },
  {
    text: 'Beschaffung',
    size: 1,
  },
  {
    text: 'Datenträger',
    size: 1,
  },
  {
    text: 'Datenverarbeitung',
    size: 1,
  },
  {
    text: 'Datenbank',
    size: 1,
  },
  {
    text: 'Datenschutz',
    size: 1,
  },
  {
    text: 'Einsatzfreudigkeit',
    size: 1,
  },
  {
    text: 'einsatzfreudig',
    size: 1,
  },
  {
    text: 'Einsatzpreis',
    size: 1,
  },
  {
    text: 'einsatzfähig',
    size: 1,
  },
  {
    text: 'Einsatzwagen',
    size: 1,
  },
  {
    text: 'Einsatzform',
    size: 1,
  },
  {
    text: 'Bezugsperson',
    size: 1,
  },
  {
    text: 'Gletschervorfeld',
    size: 1,
  },
  {
    text: 'Niederschwelligkeit',
    size: 1,
  },
  {
    text: 'Verhältnismässigkeit',
    size: 1,
  },
  {
    text: 'Autobestand',
    size: 1,
  },
  {
    text: 'Komputerbestand',
    size: 1,
  },
  {
    text: 'Gebäudebestand',
    size: 1,
  },
  {
    text: 'Beharrungsvermögen',
    size: 1,
  },
  {
    text: 'betriebswirtschaftlich',
    size: 1,
  },
  {
    text: 'Zwangsbewirtschaftung',
    size: 1,
  },
  {
    text: 'Querschnittansicht',
    size: 1,
  },
  {
    text: 'Querschnittregelung',
    size: 1,
  },
  {
    text: 'Querschnittreiz',
    size: 1,
  },
  {
    text: 'Arbeitsumfeld',
    size: 1,
  },
  {
    text: 'querschnittsgelähmt',
    size: 1,
  },
  {
    text: 'Bagatellsubvention',
    size: 1,
  },
  {
    text: 'Bedarfsdeckung',
    size: 1,
  },
  {
    text: 'qualitätsbewusst',
    size: 1,
  },
  {
    text: 'Belastungsgrenze',
    size: 1,
  },
  {
    text: 'Beharrungsprinzip',
    size: 1,
  },
  {
    text: 'Monatsbetreffnis',
    size: 1,
  },
  {
    text: 'Bewährungskontrolle',
    size: 1,
  },
  {
    text: 'Bewertungsblatt',
    size: 1,
  },
  {
    text: 'schadenintensiv',
    size: 1,
  },
  {
    text: 'Bereinigungsverfahren',
    size: 1,
  },
  {
    text: 'unbewusst',
    size: 1,
  },
  {
    text: 'Datenautobahn',
    size: 1,
  },
  {
    text: 'Einbaumotor',
    size: 1,
  },
  {
    text: 'Einbauvorrichtung',
    size: 1,
  },
  {
    text: 'Einbauwinker',
    size: 1,
  },
  {
    text: 'Einfalldosis',
    size: 1,
  },
  {
    text: 'Einfallstrasse',
    size: 1,
  },
  {
    text: 'Einführungsbericht',
    size: 1,
  },
  {
    text: 'Einführungsbrief',
    size: 1,
  },
  {
    text: 'Einführungsbestimmungen',
    size: 1,
  },
  {
    text: 'Einführungsdraht',
    size: 1,
  },
  {
    text: 'Einführungsfeierlichkeiten',
    size: 1,
  },
  {
    text: 'Einführungskampagne',
    size: 1,
  },
  {
    text: 'Einführungskurs',
    size: 1,
  },
  {
    text: 'Einführungsöffnung',
    size: 1,
  },
  {
    text: 'Einführungsrohr',
    size: 1,
  },
  {
    text: 'Einführungspreis',
    size: 1,
  },
  {
    text: 'Eingliederungshilfe',
    size: 1,
  },
  {
    text: 'Eingliederungsstätte',
    size: 1,
  },
  {
    text: 'Nichtigkeitseinwand',
    size: 1,
  },
  {
    text: 'Verteidigungseinwand',
    size: 1,
  },
  {
    text: 'Verzögerungseinwand',
    size: 1,
  },
  {
    text: 'erlebnishungrig',
    size: 1,
  },
  {
    text: 'Ermessensbereich',
    size: 1,
  },
  {
    text: 'Ermessensfrage',
    size: 1,
  },
  {
    text: 'Ermessensmissbrauch',
    size: 1,
  },
  {
    text: 'Ertragsausfall',
    size: 1,
  },
  {
    text: 'Ertragszins',
    size: 1,
  },
  {
    text: 'Reinertrag',
    size: 1,
  },
  {
    text: 'Ertragsgrenze',
    size: 1,
  },
  {
    text: 'Ertragskraft',
    size: 1,
  },
  {
    text: 'Ertragswert',
    size: 1,
  },
  {
    text: 'Durchführungsverordnung',
    size: 1,
  },
  {
    text: 'Durchführungsbestimmungen',
    size: 1,
  },
  {
    text: 'Durchführungsstelle',
    size: 1,
  },
  {
    text: 'entgeltlich',
    size: 1,
  },
  {
    text: 'Umschuldungsentlastung',
    size: 1,
  },
  {
    text: 'Forderungseingabe',
    size: 1,
  },
  {
    text: 'Forderungsübergang',
    size: 1,
  },
  {
    text: 'Forderungsabschreibung',
    size: 1,
  },
  {
    text: 'weltfremd',
    size: 1,
  },
  {
    text: 'Fremdgeruch',
    size: 1,
  },
  {
    text: 'reparaturfreundlich',
    size: 1,
  },
  {
    text: 'Entwicklungsstufe',
    size: 1,
  },
  {
    text: 'Entwicklungsroman',
    size: 1,
  },
  {
    text: 'Entwicklungsjahre',
    size: 1,
  },
  {
    text: 'Entwicklungszeit',
    size: 1,
  },
  {
    text: 'Entwicklungsbad',
    size: 1,
  },
  {
    text: 'Entwicklungsland',
    size: 1,
  },
  {
    text: 'Entwicklungsarbeiter',
    size: 1,
  },
  {
    text: 'Entwicklungsbüro',
    size: 1,
  },
  {
    text: 'Erfassungsverfahren',
    size: 1,
  },
  {
    text: 'Ergänzungsgebühr',
    size: 1,
  },
  {
    text: 'ergänzungs-',
    size: 1,
  },
  {
    text: 'Erhebungstermin',
    size: 1,
  },
  {
    text: 'Erkenntnisgrund',
    size: 1,
  },
  {
    text: 'Erkenntniskraft',
    size: 1,
  },
  {
    text: 'Erkenntnisvermögen',
    size: 1,
  },
  {
    text: 'Straferlassgesuch',
    size: 1,
  },
  {
    text: 'Einsichtsrecht',
    size: 1,
  },
  {
    text: 'Rückfragehäufigkeit',
    size: 1,
  },
  {
    text: 'wesenfremd',
    size: 1,
  },
  {
    text: 'Einlagerung',
    size: 1,
  },
  {
    text: 'Erhebungsbogen',
    size: 1,
  },
  {
    text: 'beispiel',
    size: 1,
  },
  {
    text: 'zreno -',
    size: 1,
  },
  {
    text: 'Vermittlungsgeschäft',
    size: 1,
  },
  {
    text: 'Vermittlungsverfahren',
    size: 1,
  },
  {
    text: 'Drehtüreffekt',
    size: 1,
  },
  {
    text: 'Ertragsstrom',
    size: 1,
  },
  {
    text: 'Deckungsbeitrag',
    size: 1,
  },
  {
    text: 'Ertragslage',
    size: 1,
  },
  {
    text: 'Verkaufsstelle',
    size: 1,
  },
  {
    text: 'orientieren',
    size: 1,
  },
  {
    text: 'Zeitplanung',
    size: 1,
  },
  {
    text: 'Standortpolitik',
    size: 1,
  },
  {
    text: 'Führungsverhalten',
    size: 1,
  },
  {
    text: 'Beurteilungsvermögen',
    size: 1,
  },
  {
    text: 'Energieaufwand',
    size: 1,
  },
  {
    text: 'Standespolitik',
    size: 1,
  },
  {
    text: 'unzeitgemäss',
    size: 1,
  },
  {
    text: 'vielversprechend',
    size: 1,
  },
  {
    text: 'Bewirtschaftungsmassnahmen',
    size: 1,
  },
  {
    text: 'Raumplanung',
    size: 1,
  },
  {
    text: 'Familienplanung',
    size: 1,
  },
  {
    text: 'Personalplanung',
    size: 1,
  },
  {
    text: 'Betriebsaufwand',
    size: 1,
  },
  {
    text: 'Nettoaufwand',
    size: 1,
  },
  {
    text: 'Zeitaufwand',
    size: 1,
  },
  {
    text: 'abtreten',
    size: 1,
  },
  {
    text: 'Plattform',
    size: 1,
  },
  {
    text: 'fundiert',
    size: 1,
  },
]
