const words = [
  {
    text: 'Fokus',
    size: 45,
    href: 'fokus',
  },
  {
    text: 'Input',
    size: 34,
    href: 'input',
  },
  {
    text: 'offen',
    size: 32,
    href: 'offen',
  },
  {
    text: 'sinnvoll',
    size: 32,
    href: 'sinnvoll',
  },
  {
    text: 'frühzeitig',
    size: 32,
    href: 'fruehzeitig',
  },
  {
    text: 'weitergehend',
    size: 30,
    href: 'weitergehend',
  },
  {
    text: 'flächendeckend',
    size: 30,
    href: 'flaechendeckend',
  },
  {
    text: 'Voraussetzung',
    size: 28,
    href: 'voraussetzung',
  },
  {
    text: 'erfolgen',
    size: 28,
    href: 'erfolgen',
  },
  {
    text: 'fristgerecht',
    size: 28,
    href: 'fristgerecht',
  },
  {
    text: 'Kern',
    size: 27,
    href: 'kern',
  },
  {
    text: 'Engpass',
    size: 27,
    href: 'engpass',
  },
  {
    text: 'hoheitlich',
    size: 27,
    href: 'hoheitlich',
  },
  {
    text: 'Zusammenstellung',
    size: 26,
    href: 'zusammenstellung',
  },
  {
    text: 'entsprechend',
    size: 26,
    href: 'entsprechend',
  },
  {
    text: 'schon',
    size: 26,
    href: 'schon',
  },
  {
    text: 'ausrichten',
    size: 25,
    href: 'ausrichten',
  },
  {
    text: 'Erreichen',
    size: 25,
    href: 'erreichen',
  },
  {
    text: 'stufengerecht',
    size: 24,
    href: 'stufengerecht',
  },
  {
    text: 'ähnlich',
    size: 24,
    href: 'aehnlich',
  },
  {
    text: 'kritisch',
    size: 23,
    href: 'kritisch',
  },
  {
    text: 'stimmen',
    size: 23,
    href: 'stimmen',
  },
  {
    text: 'übergeordnet',
    size: 23,
    href: 'uebergeordnet',
  },
  {
    text: 'dabei',
    size: 22,
    href: 'dabei',
  },
  {
    text: 'Ausrichtung',
    size: 22,
    href: 'ausrichtung',
  },
  {
    text: 'kostenbewusst',
    size: 21,
    href: 'kostenbewusst',
  },
  {
    text: 'Aufwand',
    size: 21,
    href: 'aufwand',
  },
  {
    text: 'Anlass',
    size: 21,
    href: 'anlass',
  },
  {
    text: 'umfassend',
    size: 20,
    href: 'umfassend',
  },
  {
    text: 'Nachweis',
    size: 20,
    href: 'nachweis',
  },
  {
    text: 'ermitteln',
    size: 20,
    href: 'ermitteln',
  },
  {
    text: 'Ablauf',
    size: 20,
    href: 'ablauf',
  },
  {
    text: 'Abbau',
    size: 19,
    href: 'abbau',
  },
  {
    text: 'Verschärfung',
    size: 19,
    href: 'verschaerfung',
  },
  {
    text: 'Konzept',
    size: 19,
    href: 'konzept',
  },
  {
    text: 'teilweise',
    size: 19,
    href: 'teilweise',
  },
  {
    text: 'Kuhhandel',
    size: 19,
    href: 'kuhhandel',
  },
  {
    text: 'knapp',
    size: 18,
    href: 'knapp',
  },
  {
    text: 'Mangel',
    size: 18,
    href: 'mangel',
  },
  {
    text: 'gemäss',
    size: 18,
    href: 'gemaess',
  },
  {
    text: 'Stellenwert',
    size: 18,
    href: 'stellenwert',
  },
  {
    text: 'Umstände',
    size: 18,
    href: 'umstaende',
  },
  {
    text: 'Handlungsbedarf',
    size: 18,
    href: 'handlungsbedarf',
  },
  {
    text: 'Ausgangslage',
    size: 18,
    href: 'ausgangslage',
  },
  {
    text: 'gleichzeitig',
    size: 18,
    href: 'gleichzeitig',
  },
  {
    text: 'verabschieden',
    size: 18,
    href: 'verabschieden',
  },
  {
    text: 'Auftritt',
    size: 18,
    href: 'auftritt',
  },
  {
    text: 'Positionspapier',
    size: 18,
    href: 'positionspapier',
  },
  {
    text: 'naturgemäss',
    size: 18,
    href: 'naturgemaess',
  },
  {
    text: 'pendent',
    size: 17,
    href: 'pendent',
  },
  {
    text: 'Gefälle',
    size: 17,
    href: 'gefaelle',
  },
  {
    text: 'Vorgabe',
    size: 17,
    href: 'vorgabe',
  },
  {
    text: 'Wohlstand',
    size: 17,
    href: 'wohlstand',
  },
  {
    text: 'abseits',
    size: 17,
    href: 'abseits',
  },
  {
    text: 'Beratung',
    size: 17,
    href: 'beratung',
  },
  {
    text: 'Auftraggeber',
    size: 17,
    href: 'auftraggeber',
  },
  {
    text: 'dokumentieren',
    size: 17,
    href: 'dokumentieren',
  },
  {
    text: 'aufwendig',
    size: 17,
    href: 'aufwendig',
  },
  {
    text: 'Annahme',
    size: 16,
    href: 'annahme',
  },
  {
    text: 'Massnahme',
    size: 16,
    href: 'massnahme',
  },
  {
    text: 'Massstab',
    size: 16,
    href: 'massstab',
  },
  {
    text: 'nachträglich',
    size: 16,
    href: 'nachtraeglich',
  },
  {
    text: 'Querschnitt',
    size: 16,
    href: 'querschnitt',
  },
  {
    text: 'abstimmen',
    size: 16,
    href: 'abstimmen',
  },
  {
    text: 'Schwerpunkte',
    size: 16,
    href: 'schwerpunkte',
  },
  {
    text: 'differenziert',
    size: 16,
    href: 'differenziert',
  },
  {
    text: 'überführen',
    size: 16,
    href: 'ueberfuehren',
  },
  {
    text: 'Umgang',
    size: 15,
    href: 'umgang',
  },
  {
    text: 'Einsicht',
    size: 15,
    href: 'einsicht',
  },
  {
    text: 'unterschiedlich',
    size: 15,
    href: 'unterschiedlich',
  },
  {
    text: 'vermitteln',
    size: 15,
    href: 'vermitteln',
  },
  {
    text: 'Nachholbedarf',
    size: 15,
    href: 'nachholbedarf',
  },
  {
    text: 'nachvollziehen',
    size: 15,
    href: 'nachvollziehen',
  },
  {
    text: 'laufend',
    size: 15,
    href: 'laufend',
  },
  {
    text: 'durchsetzen',
    size: 15,
    href: 'durchsetzen',
  },
  {
    text: 'fair',
    size: 14,
    href: 'fair',
  },
  {
    text: 'ausgehen',
    size: 14,
    href: 'ausgehen',
  },
  {
    text: 'eingehen',
    size: 14,
    href: 'eingehen',
  },
  {
    text: 'grundsätzlich',
    size: 14,
    href: 'grundsaetzlich',
  },
  {
    text: 'Grundsatz',
    size: 14,
    href: 'grundsatz',
  },
  {
    text: 'Handhabung',
    size: 14,
    href: 'handhabung',
  },
  {
    text: 'niederschwellig',
    size: 14,
    href: 'niederschwellig',
  },
  {
    text: 'Gefäss',
    size: 14,
    href: 'gefaess',
  },
  {
    text: 'abfedern',
    size: 14,
    href: 'abfedern',
  },
  {
    text: 'schlank',
    size: 14,
    href: 'schlank',
  },
  {
    text: 'verschärfen',
    size: 14,
    href: 'verschaerfen',
  },
  {
    text: 'Ansatz',
    size: 14,
    href: 'ansatz',
  },
  {
    text: 'umgehen',
    size: 14,
    href: 'umgehen',
  },
  {
    text: 'Task Force',
    size: 14,
    href: 'task-force',
  },
  {
    text: 'Effizienz',
    size: 14,
    href: 'effizienz',
  },
  {
    text: 'ausrichten _ exemples',
    size: 14,
    href: 'ausrichten-exemples',
  },
  {
    text: 'ausfallend',
    size: 14,
    href: 'ausfallend',
  },
  {
    text: 'abgleichen',
    size: 13,
    href: 'abgleichen',
  },
  {
    text: 'interessiert',
    size: 13,
    href: 'interessiert',
  },
  {
    text: 'Kalkulation',
    size: 13,
    href: 'kalkulation',
  },
  {
    text: 'Konjunktur',
    size: 13,
    href: 'konjunktur',
  },
  {
    text: 'Auseinandersetzung',
    size: 13,
    href: 'auseinandersetzung',
  },
  {
    text: 'Wahrnehmung',
    size: 13,
    href: 'wahrnehmung',
  },
  {
    text: 'alternativ',
    size: 13,
    href: 'alternativ',
  },
  {
    text: 'ordnungspolitisch',
    size: 13,
    href: 'ordnungspolitisch',
  },
  {
    text: 'verhältnismässig',
    size: 13,
    href: 'verhaeltnismaessig',
  },
  {
    text: 'primär',
    size: 13,
    href: 'primaer',
  },
  {
    text: 'verzichten',
    size: 13,
    href: 'verzichten',
  },
  {
    text: 'Bandbreite',
    size: 13,
    href: 'bandbreite',
  },
  {
    text: 'beanspruchen',
    size: 13,
    href: 'beanspruchen',
  },
  {
    text: 'Leistungsbereitschaft',
    size: 13,
    href: 'leistungsbereitschaft',
  },
  {
    text: 'Schwerpunkt exemples',
    size: 13,
    href: 'schwerpunkt-exemples',
  },
  {
    text: 'krass',
    size: 12,
    href: 'krass',
  },
  {
    text: 'geordnet',
    size: 12,
    href: 'geordnet',
  },
  {
    text: 'Hintergrund',
    size: 12,
    href: 'hintergrund',
  },
  {
    text: 'Spannungsfeld',
    size: 12,
    href: 'spannungsfeld',
  },
  {
    text: 'Bericht',
    size: 12,
    href: 'bericht',
  },
  {
    text: 'nachhaltig',
    size: 12,
    href: 'nachhaltig',
  },
  {
    text: 'gerade',
    size: 12,
    href: 'gerade',
  },
  {
    text: 'zielbewusst',
    size: 12,
    href: 'zielbewusst',
  },
  {
    text: 'Oberbegriff',
    size: 12,
    href: 'oberbegriff',
  },
  {
    text: 'Beurteilung',
    size: 12,
    href: 'beurteilung',
  },
  {
    text: 'übereinstimmen',
    size: 12,
    href: 'uebereinstimmen',
  },
  {
    text: 'sinnlos',
    size: 12,
    href: 'sinnlos',
  },
  {
    text: 'sinnwidrig',
    size: 12,
    href: 'sinnwidrig',
  },
  {
    text: 'vielmehr',
    size: 12,
    href: 'vielmehr',
  },
  {
    text: 'Höhepunkt',
    size: 12,
    href: 'hoehepunkt',
  },
  {
    text: 'erwartungsgemäss',
    size: 11,
    href: 'erwartungsgemaess',
  },
  {
    text: 'ablegen',
    size: 11,
    href: 'ablegen',
  },
  {
    text: 'abwägen',
    size: 11,
    href: 'abwaegen',
  },
  {
    text: 'Anfall',
    size: 11,
    href: 'anfall',
  },
  {
    text: 'aufstellen',
    size: 11,
    href: 'aufstellen',
  },
  {
    text: 'Begriff',
    size: 11,
    href: 'begriff',
  },
  {
    text: 'beständig',
    size: 11,
    href: 'bestaendig',
  },
  {
    text: 'Forderung',
    size: 11,
    href: 'forderung',
  },
  {
    text: 'Geltung',
    size: 11,
    href: 'geltung',
  },
  {
    text: 'harren',
    size: 11,
    href: 'harren',
  },
  {
    text: 'Anlaufstelle',
    size: 11,
    href: 'anlaufstelle',
  },
  {
    text: 'verbindlich',
    size: 11,
    href: 'verbindlich',
  },
  {
    text: 'Gewalteinwirkung',
    size: 11,
    href: 'gewalteinwirkung',
  },
  {
    text: 'Herausforderung',
    size: 11,
    href: 'herausforderung',
  },
  {
    text: 'kurzfristig',
    size: 11,
    href: 'kurzfristig',
  },
  {
    text: 'ordnungsgemäss',
    size: 11,
    href: 'ordnungsgemaess',
  },
  {
    text: 'konsequent',
    size: 11,
    href: 'konsequent',
  },
  {
    text: 'brisant',
    size: 11,
    href: 'brisant',
  },
  {
    text: 'Effektivität',
    size: 11,
    href: 'effektivitaet',
  },
  {
    text: 'Wirksamkeit',
    size: 11,
    href: 'wirksamkeit',
  },
  {
    text: 'Compliance',
    size: 11,
    href: 'compliance',
  },
  {
    text: 'anrechnen',
    size: 10,
    href: 'anrechnen',
  },
  {
    text: 'Anstand',
    size: 10,
    href: 'anstand',
  },
  {
    text: 'Darstellung',
    size: 10,
    href: 'darstellung',
  },
  {
    text: 'Durchführung',
    size: 10,
    href: 'durchfuehrung',
  },
  {
    text: 'Ermessen',
    size: 10,
    href: 'ermessen',
  },
  {
    text: 'gesellschaftlich',
    size: 10,
    href: 'gesellschaftlich',
  },
  {
    text: 'Hoheit',
    size: 10,
    href: 'hoheit',
  },
  {
    text: 'Instrumentarium',
    size: 10,
    href: 'instrumentarium',
  },
  {
    text: 'intensiv',
    size: 10,
    href: 'intensiv',
  },
  {
    text: 'Kompetenz',
    size: 10,
    href: 'kompetenz',
  },
  {
    text: 'Pflege',
    size: 10,
    href: 'pflege',
  },
  {
    text: 'Verfahren',
    size: 10,
    href: 'verfahren',
  },
  {
    text: 'abgeleitet',
    size: 10,
    href: 'abgeleitet',
  },
  {
    text: 'vernetzt',
    size: 10,
    href: 'vernetzt',
  },
  {
    text: 'situativ',
    size: 10,
    href: 'situativ',
  },
  {
    text: 'Planung',
    size: 10,
    href: 'planung',
  },
  {
    text: 'auslösen',
    size: 10,
    href: 'ausloesen',
  },
  {
    text: 'denn auch',
    size: 10,
    href: 'denn-auch',
  },
  {
    text: 'Schwerpunkt',
    size: 10,
    href: 'schwerpunkt',
  },
  {
    text: 'Votum',
    size: 10,
    href: 'votum',
  },
  {
    text: 'kern-',
    size: 10,
    href: 'kern',
  },
  {
    text: 'Alleingang',
    size: 9,
    href: 'alleingang',
  },
  {
    text: 'angeblich',
    size: 9,
    href: 'angeblich',
  },
  {
    text: 'Anliegen',
    size: 9,
    href: 'anliegen',
  },
  {
    text: 'Anstoss',
    size: 9,
    href: 'anstoss',
  },
  {
    text: 'einzeln',
    size: 9,
    href: 'einzeln',
  },
  {
    text: 'Interessent',
    size: 9,
    href: 'interessent',
  },
  {
    text: 'Konsens',
    size: 9,
    href: 'konsens',
  },
  {
    text: 'mildern',
    size: 9,
    href: 'mildern',
  },
  {
    text: 'Sachzwang',
    size: 9,
    href: 'sachzwang',
  },
  {
    text: 'Stelle',
    size: 9,
    href: 'stelle',
  },
  {
    text: 'tendenziell',
    size: 9,
    href: 'tendenziell',
  },
  {
    text: 'zuhanden',
    size: 9,
    href: 'zuhanden',
  },
  {
    text: 'Vernetzung',
    size: 9,
    href: 'vernetzung',
  },
  {
    text: 'jeweils',
    size: 9,
    href: 'jeweils',
  },
  {
    text: 'Anmeldung',
    size: 9,
    href: 'anmeldung',
  },
  {
    text: 'wahrnehmen',
    size: 9,
    href: 'wahrnehmen',
  },
  {
    text: 'vertraglich',
    size: 9,
    href: 'vertraglich',
  },
  {
    text: 'gezielt',
    size: 9,
    href: 'gezielt',
  },
  {
    text: 'Abseits',
    size: 8,
    href: 'abseits',
  },
  {
    text: 'Abnahme',
    size: 8,
    href: 'abnahme',
  },
  {
    text: 'abschliessend',
    size: 8,
    href: 'abschliessend',
  },
  {
    text: 'Akzeptanz',
    size: 8,
    href: 'akzeptanz',
  },
  {
    text: 'Anweisung',
    size: 8,
    href: 'anweisung',
  },
  {
    text: 'Aufteilung',
    size: 8,
    href: 'aufteilung',
  },
  {
    text: 'Bestand',
    size: 8,
    href: 'bestand',
  },
  {
    text: 'Einsatz',
    size: 8,
    href: 'einsatz',
  },
  {
    text: 'Fach',
    size: 8,
    href: 'fach',
  },
  {
    text: 'gedeihen',
    size: 8,
    href: 'gedeihen',
  },
  {
    text: 'hängig',
    size: 8,
    href: 'haengig',
  },
  {
    text: 'Härte',
    size: 8,
    href: 'haerte',
  },
  {
    text: 'Hinweis',
    size: 8,
    href: 'hinweis',
  },
  {
    text: 'im Zuge',
    size: 8,
    href: 'im-zuge',
  },
  {
    text: 'Ist-Bestand',
    size: 8,
    href: 'ist-bestand',
  },
  {
    text: 'Kinderkrankheiten',
    size: 8,
    href: 'kinderkrankheiten',
  },
  {
    text: 'kompetent',
    size: 8,
    href: 'kompetent',
  },
  {
    text: 'Material',
    size: 8,
    href: 'material',
  },
  {
    text: 'sachlich',
    size: 8,
    href: 'sachlich',
  },
  {
    text: 'Stichprobe',
    size: 8,
    href: 'stichprobe',
  },
  {
    text: 'Fachstelle',
    size: 8,
    href: 'fachstelle',
  },
  {
    text: 'Vermögen',
    size: 8,
    href: 'vermoegen',
  },
  {
    text: 'zumutbar',
    size: 8,
    href: 'zumutbar',
  },
  {
    text: 'zumuten',
    size: 8,
    href: 'zumuten',
  },
  {
    text: 'ausgelastet',
    size: 8,
    href: 'ausgelastet',
  },
  {
    text: 'körperfreundlich',
    size: 8,
    href: 'koerperfreundlich',
  },
  {
    text: 'jeweilig',
    size: 8,
    href: 'jeweilig',
  },
  {
    text: 'Abfederung',
    size: 8,
    href: 'abfederung',
  },
  {
    text: 'Berührungsängste',
    size: 8,
    href: 'beruehrungsaengste',
  },
  {
    text: 'Klausur',
    size: 8,
    href: 'klausur',
  },
  {
    text: 'vertretbar',
    size: 8,
    href: 'vertretbar',
  },
  {
    text: 'Fachtagung',
    size: 8,
    href: 'fachtagung',
  },
  {
    text: 'Träger',
    size: 8,
    href: 'traeger',
  },
  {
    text: 'Verhältnisse',
    size: 8,
    href: 'verhaeltnisse',
  },
  {
    text: 'Abwicklung',
    size: 8,
    href: 'abwicklung',
  },
  {
    text: 'regeln',
    size: 8,
    href: 'regeln',
  },
  {
    text: 'ausfällig',
    size: 8,
    href: 'ausfaellig',
  },
  {
    text: 'Memorandum',
    size: 8,
    href: 'memorandum',
  },
  {
    text: 'Abfertigung',
    size: 7,
    href: 'abfertigung',
  },
  {
    text: 'Abgeltung',
    size: 7,
    href: 'abgeltung',
  },
  {
    text: 'Ansatzpunkt',
    size: 7,
    href: 'ansatzpunkt',
  },
  {
    text: 'Anlage',
    size: 7,
    href: 'anlage',
  },
  {
    text: 'Mehraufwand',
    size: 7,
    href: 'mehraufwand',
  },
  {
    text: 'Aussage',
    size: 7,
    href: 'aussage',
  },
  {
    text: 'dankbar',
    size: 7,
    href: 'dankbar',
  },
  {
    text: 'entnehmen',
    size: 7,
    href: 'entnehmen',
  },
  {
    text: 'erleben',
    size: 7,
    href: 'erleben',
  },
  {
    text: 'Gesellschaft',
    size: 7,
    href: 'gesellschaft',
  },
  {
    text: 'Haltung',
    size: 7,
    href: 'haltung',
  },
  {
    text: 'heranziehen',
    size: 7,
    href: 'heranziehen',
  },
  {
    text: 'Hilfsmittel',
    size: 7,
    href: 'hilfsmittel',
  },
  {
    text: 'hinweisen',
    size: 7,
    href: 'hinweisen',
  },
  {
    text: 'Hochbau',
    size: 7,
    href: 'hochbau',
  },
  {
    text: 'Initiant',
    size: 7,
    href: 'initiant',
  },
  {
    text: 'Inventar',
    size: 7,
    href: 'inventar',
  },
  {
    text: 'Kollaudation',
    size: 7,
    href: 'kollaudation',
  },
  {
    text: 'Kunde',
    size: 7,
    href: 'kunde',
  },
  {
    text: 'Leistung',
    size: 7,
    href: 'leistung',
  },
  {
    text: 'marktwirtschaftlich',
    size: 7,
    href: 'marktwirtschaftlich',
  },
  {
    text: 'massvoll',
    size: 7,
    href: 'massvoll',
  },
  {
    text: 'mehrdeutig',
    size: 7,
    href: 'mehrdeutig',
  },
  {
    text: 'Missstand',
    size: 7,
    href: 'missstand',
  },
  {
    text: 'mobilisieren',
    size: 7,
    href: 'mobilisieren',
  },
  {
    text: 'nicht zuletzt',
    size: 7,
    href: 'nicht-zuletzt',
  },
  {
    text: 'scheuen',
    size: 7,
    href: 'scheuen',
  },
  {
    text: 'starr',
    size: 7,
    href: 'starr',
  },
  {
    text: 'Angelpunkt',
    size: 7,
    href: 'angelpunkt',
  },
  {
    text: 'vereinbaren',
    size: 7,
    href: 'vereinbaren',
  },
  {
    text: 'Zuwendung',
    size: 7,
    href: 'zuwendung',
  },
  {
    text: 'Zwiespalt',
    size: 7,
    href: 'zwiespalt',
  },
  {
    text: 'mundgerecht',
    size: 7,
    href: 'mundgerecht',
  },
  {
    text: 'marktgerecht',
    size: 7,
    href: 'marktgerecht',
  },
  {
    text: 'Handelsgesellschaft',
    size: 7,
    href: 'handelsgesellschaft',
  },
  {
    text: 'Mangelware',
    size: 7,
    href: 'mangelware',
  },
  {
    text: 'machtpolitisch',
    size: 7,
    href: 'machtpolitisch',
  },
  {
    text: 'Überlegung',
    size: 7,
    href: 'ueberlegung',
  },
  {
    text: 'Konsumentenstimmung',
    size: 7,
    href: 'konsumentenstimmung',
  },
  {
    text: 'Nachbereitung',
    size: 7,
    href: 'nachbereitung',
  },
  {
    text: 'nachvollziehbar',
    size: 7,
    href: 'nachvollziehbar',
  },
  {
    text: 'Klausurtagung',
    size: 7,
    href: 'klausurtagung',
  },
  {
    text: 'abschreiben',
    size: 7,
    href: 'abschreiben',
  },
  {
    text: 'Meldung',
    size: 7,
    href: 'meldung',
  },
  {
    text: 'Anhaltspunkt',
    size: 7,
    href: 'anhaltspunkt',
  },
  {
    text: 'Abklärung',
    size: 6,
    href: 'abklaerung',
  },
  {
    text: 'Abrechnung',
    size: 6,
    href: 'abrechnung',
  },
  {
    text: 'absehen',
    size: 6,
    href: 'absehen',
  },
  {
    text: 'Anforderung',
    size: 6,
    href: 'anforderung',
  },
  {
    text: 'angemessen',
    size: 6,
    href: 'angemessen',
  },
  {
    text: 'Anlauf',
    size: 6,
    href: 'anlauf',
  },
  {
    text: 'anordnen',
    size: 6,
    href: 'anordnen',
  },
  {
    text: 'anspruchsvoll',
    size: 6,
    href: 'anspruchsvoll',
  },
  {
    text: 'Antrieb',
    size: 6,
    href: 'antrieb',
  },
  {
    text: 'Aufbau',
    size: 6,
    href: 'aufbau',
  },
  {
    text: 'Auslegeordnung',
    size: 6,
    href: 'auslegeordnung',
  },
  {
    text: 'beliebig',
    size: 6,
    href: 'beliebig',
  },
  {
    text: 'Beschluss',
    size: 6,
    href: 'beschluss',
  },
  {
    text: 'Bewährung',
    size: 6,
    href: 'bewaehrung',
  },
  {
    text: 'Gesichtspunkt',
    size: 6,
    href: 'gesichtspunkt',
  },
  {
    text: 'damit',
    size: 6,
    href: 'damit',
  },
  {
    text: 'durchgehend',
    size: 6,
    href: 'durchgehend',
  },
  {
    text: 'Eignung',
    size: 6,
    href: 'eignung',
  },
  {
    text: 'Erkenntnis',
    size: 6,
    href: 'erkenntnis',
  },
  {
    text: 'Ertrag',
    size: 6,
    href: 'ertrag',
  },
  {
    text: 'Erwartung',
    size: 6,
    href: 'erwartung',
  },
  {
    text: 'Fassung',
    size: 6,
    href: 'fassung',
  },
  {
    text: 'formell',
    size: 6,
    href: 'formell',
  },
  {
    text: 'Goodwill',
    size: 6,
    href: 'goodwill',
  },
  {
    text: 'griffig',
    size: 6,
    href: 'griffig',
  },
  {
    text: 'hektisch',
    size: 6,
    href: 'hektisch',
  },
  {
    text: 'herkömmlich',
    size: 6,
    href: 'herkoemmlich',
  },
  {
    text: 'ideell',
    size: 6,
    href: 'ideell',
  },
  {
    text: 'Inkongruenz',
    size: 6,
    href: 'inkongruenz',
  },
  {
    text: 'Leiter',
    size: 6,
    href: 'leiter',
  },
  {
    text: 'Machbarkeit',
    size: 6,
    href: 'machbarkeit',
  },
  {
    text: 'materiell',
    size: 6,
    href: 'materiell',
  },
  {
    text: 'Meilenstein',
    size: 6,
    href: 'meilenstein',
  },
  {
    text: 'Merkblatt',
    size: 6,
    href: 'merkblatt',
  },
  {
    text: 'mittragen',
    size: 6,
    href: 'mittragen',
  },
  {
    text: 'Schwankung',
    size: 6,
    href: 'schwankung',
  },
  {
    text: 'Termin',
    size: 6,
    href: 'termin',
  },
  {
    text: 'Umstellung',
    size: 6,
    href: 'umstellung',
  },
  {
    text: 'Unkosten',
    size: 6,
    href: 'unkosten',
  },
  {
    text: 'Vorsorge',
    size: 6,
    href: 'vorsorge',
  },
  {
    text: 'widrig',
    size: 6,
    href: 'widrig',
  },
  {
    text: 'wobei',
    size: 6,
    href: 'wobei',
  },
  {
    text: 'zäh',
    size: 6,
    href: 'zaeh',
  },
  {
    text: 'Zusammenhang',
    size: 6,
    href: 'zusammenhang',
  },
  {
    text: 'Zuzug',
    size: 6,
    href: 'zuzug',
  },
  {
    text: 'allerdings',
    size: 6,
    href: 'allerdings',
  },
  {
    text: 'Anrechnung',
    size: 6,
    href: 'anrechnung',
  },
  {
    text: 'anrechenbar',
    size: 6,
    href: 'anrechenbar',
  },
  {
    text: 'ausgehen von',
    size: 6,
    href: 'ausgehen-von',
  },
  {
    text: 'abgesehen von',
    size: 6,
    href: 'abgesehen-von',
  },
  {
    text: 'Kapitalgewinn',
    size: 6,
    href: 'kapitalgewinn',
  },
  {
    text: 'Mehrheitsbeschluss',
    size: 6,
    href: 'mehrheitsbeschluss',
  },
  {
    text: 'halten',
    size: 6,
    href: 'halten',
  },
  {
    text: 'kostenneutral',
    size: 6,
    href: 'kostenneutral',
  },
  {
    text: 'hautnah',
    size: 6,
    href: 'hautnah',
  },
  {
    text: 'Junktim',
    size: 6,
    href: 'junktim',
  },
  {
    text: 'Heimwesen',
    size: 6,
    href: 'heimwesen',
  },
  {
    text: 'Kursschwankungen',
    size: 6,
    href: 'kursschwankungen',
  },
  {
    text: 'kalorienbewusst',
    size: 6,
    href: 'kalorienbewusst',
  },
  {
    text: 'klassenbewusst',
    size: 6,
    href: 'klassenbewusst',
  },
  {
    text: 'kinderfreundlich',
    size: 6,
    href: 'kinderfreundlich',
  },
  {
    text: 'unzulänglich',
    size: 6,
    href: 'unzulaenglich',
  },
  {
    text: 'Konjunkturabschwächung',
    size: 6,
    href: 'konjunkturabschwaechung',
  },
  {
    text: 'Eckwert',
    size: 6,
    href: 'eckwert',
  },
  {
    text: 'Einlage',
    size: 6,
    href: 'einlage',
  },
  {
    text: 'Kapitaldeckungsverfahren',
    size: 6,
    href: 'kapitaldeckungsverfahren',
  },
  {
    text: 'Werdegang',
    size: 6,
    href: 'werdegang',
  },
  {
    text: 'Steuerung',
    size: 6,
    href: 'steuerung',
  },
  {
    text: 'implementieren',
    size: 6,
    href: 'implementieren',
  },
  {
    text: 'Energieeffizienz',
    size: 5,
    href: 'energieeffizienz',
  },
  {
    text: 'abdanken',
    size: 5,
    href: 'abdanken',
  },
  {
    text: 'absehbar',
    size: 5,
    href: 'absehbar',
  },
  {
    text: 'Anschrift',
    size: 5,
    href: 'anschrift',
  },
  {
    text: 'Aufstockung',
    size: 5,
    href: 'aufstockung',
  },
  {
    text: 'auslasten',
    size: 5,
    href: 'auslasten',
  },
  {
    text: 'Belang',
    size: 5,
    href: 'belang',
  },
  {
    text: 'Einfall',
    size: 5,
    href: 'einfall',
  },
  {
    text: 'einseitig',
    size: 5,
    href: 'einseitig',
  },
  {
    text: 'erfassen',
    size: 5,
    href: 'erfassen',
  },
  {
    text: 'erholen',
    size: 5,
    href: 'erholen',
  },
  {
    text: 'erteilen',
    size: 5,
    href: 'erteilen',
  },
  {
    text: 'federführend',
    size: 5,
    href: 'federfuehrend',
  },
  {
    text: 'Förderung',
    size: 5,
    href: 'foerderung',
  },
  {
    text: 'fremd',
    size: 5,
    href: 'fremd',
  },
  {
    text: 'gerecht werden',
    size: 5,
    href: 'gerecht-werden',
  },
  {
    text: 'Gewähr',
    size: 5,
    href: 'gewaehr',
  },
  {
    text: 'Gewinn',
    size: 5,
    href: 'gewinn',
  },
  {
    text: 'glaubhaft',
    size: 5,
    href: 'glaubhaft',
  },
  {
    text: 'Gliederung',
    size: 5,
    href: 'gliederung',
  },
  {
    text: 'gönnen',
    size: 5,
    href: 'goennen',
  },
  {
    text: 'hilflos',
    size: 5,
    href: 'hilflos',
  },
  {
    text: 'hinwegtäuschen',
    size: 5,
    href: 'hinwegtaeuschen',
  },
  {
    text: 'Hoheitsträger',
    size: 5,
    href: 'hoheitstraeger',
  },
  {
    text: 'Hydrant',
    size: 5,
    href: 'hydrant',
  },
  {
    text: 'Kampfkraft',
    size: 5,
    href: 'kampfkraft',
  },
  {
    text: 'Kavaliersdelikt',
    size: 5,
    href: 'kavaliersdelikt',
  },
  {
    text: 'kollegial',
    size: 5,
    href: 'kollegial',
  },
  {
    text: 'kontraproduktiv',
    size: 5,
    href: 'kontraproduktiv',
  },
  {
    text: 'Lagerung',
    size: 5,
    href: 'lagerung',
  },
  {
    text: 'Lebenswandel',
    size: 5,
    href: 'lebenswandel',
  },
  {
    text: 'Lockerung',
    size: 5,
    href: 'lockerung',
  },
  {
    text: 'marktkonform',
    size: 5,
    href: 'marktkonform',
  },
  {
    text: 'Mitbestimmungsrecht',
    size: 5,
    href: 'mitbestimmungsrecht',
  },
  {
    text: 'Mitspracherecht',
    size: 5,
    href: 'mitspracherecht',
  },
  {
    text: 'Mobilisierung',
    size: 5,
    href: 'mobilisierung',
  },
  {
    text: 'Aufwandsentschädigung',
    size: 5,
    href: 'aufwandsentschaedigung',
  },
  {
    text: 'orientiert',
    size: 5,
    href: 'orientiert',
  },
  {
    text: 'Rechtsweg',
    size: 5,
    href: 'rechtsweg',
  },
  {
    text: 'relevant',
    size: 5,
    href: 'relevant',
  },
  {
    text: 'repräsentativ',
    size: 5,
    href: 'repraesentativ',
  },
  {
    text: 'selbständig',
    size: 5,
    href: 'selbstaendig',
  },
  {
    text: 'Verhalten',
    size: 5,
    href: 'verhalten',
  },
  {
    text: 'Verpflegung',
    size: 5,
    href: 'verpflegung',
  },
  {
    text: 'schnuppern',
    size: 5,
    href: 'schnuppern',
  },
  {
    text: 'Interessenabwägung',
    size: 5,
    href: 'interessenabwaegung',
  },
  {
    text: 'hauptamtlich',
    size: 5,
    href: 'hauptamtlich',
  },
  {
    text: 'Haushaltsansätze',
    size: 5,
    href: 'haushaltsansaetze',
  },
  {
    text: 'Aussagekraft',
    size: 5,
    href: 'aussagekraft',
  },
  {
    text: 'Immobiliengesellschaft',
    size: 5,
    href: 'immobiliengesellschaft',
  },
  {
    text: 'massgerecht',
    size: 5,
    href: 'massgerecht',
  },
  {
    text: 'materialgerecht',
    size: 5,
    href: 'materialgerecht',
  },
  {
    text: 'Härtefall',
    size: 5,
    href: 'haertefall',
  },
  {
    text: 'Hinweisschild',
    size: 5,
    href: 'hinweisschild',
  },
  {
    text: 'Hinweiszeichen',
    size: 5,
    href: 'hinweiszeichen',
  },
  {
    text: 'Hoheitsgewässer',
    size: 5,
    href: 'hoheitsgewaesser',
  },
  {
    text: 'eintreten',
    size: 5,
    href: 'eintreten',
  },
  {
    text: 'hilfsbereit',
    size: 5,
    href: 'hilfsbereit',
  },
  {
    text: 'Kassabestand',
    size: 5,
    href: 'kassabestand',
  },
  {
    text: 'Mitbeteiligten',
    size: 5,
    href: 'mitbeteiligten',
  },
  {
    text: 'Mammutbaum',
    size: 5,
    href: 'mammutbaum',
  },
  {
    text: 'Mangelkrankheit',
    size: 5,
    href: 'mangelkrankheit',
  },
  {
    text: 'marktorientiert',
    size: 5,
    href: 'marktorientiert',
  },
  {
    text: 'Heimpflege',
    size: 5,
    href: 'heimpflege',
  },
  {
    text: 'Imagepflege',
    size: 5,
    href: 'imagepflege',
  },
  {
    text: 'Kinderkrankenpflege',
    size: 5,
    href: 'kinderkrankenpflege',
  },
  {
    text: 'Kurspflege',
    size: 5,
    href: 'kurspflege',
  },
  {
    text: 'kirchenpolitisch',
    size: 5,
    href: 'kirchenpolitisch',
  },
  {
    text: 'Kreuzverhör',
    size: 5,
    href: 'kreuzverhoer',
  },
  {
    text: 'hautfreundlich',
    size: 5,
    href: 'hautfreundlich',
  },
  {
    text: 'Führung',
    size: 5,
    href: 'fuehrung',
  },
  {
    text: 'Koppelgeschäft',
    size: 5,
    href: 'koppelgeschaeft',
  },
  {
    text: 'Industrieerfahrung',
    size: 5,
    href: 'industrieerfahrung',
  },
  {
    text: 'modebewusst',
    size: 5,
    href: 'modebewusst',
  },
  {
    text: 'Kreditwürdigkeit',
    size: 5,
    href: 'kreditwuerdigkeit',
  },
  {
    text: 'Kostenträger',
    size: 5,
    href: 'kostentraeger',
  },
  {
    text: 'koppeln',
    size: 5,
    href: 'koppeln',
  },
  {
    text: 'Heimatkunde',
    size: 5,
    href: 'heimatkunde',
  },
  {
    text: 'Heilkunde',
    size: 5,
    href: 'heilkunde',
  },
  {
    text: 'Himmelskunde',
    size: 5,
    href: 'himmelskunde',
  },
  {
    text: 'kompromissbereit',
    size: 5,
    href: 'kompromissbereit',
  },
  {
    text: 'Schnittstelle',
    size: 5,
    href: 'schnittstelle',
  },
  {
    text: 'Anknüpfungspunkt',
    size: 5,
    href: 'anknuepfungspunkt',
  },
  {
    text: 'Kompetenzkonflikt',
    size: 5,
    href: 'kompetenzkonflikt',
  },
  {
    text: 'Konjunkturbarometer',
    size: 5,
    href: 'konjunkturbarometer',
  },
  {
    text: 'Konjunkturforschung',
    size: 5,
    href: 'konjunkturforschung',
  },
  {
    text: 'Bagatelle',
    size: 5,
    href: 'bagatelle',
  },
  {
    text: 'nachbereiten',
    size: 5,
    href: 'nachbereiten',
  },
  {
    text: 'Eckpunkte',
    size: 5,
    href: 'eckpunkte',
  },
  {
    text: 'Mengenausweitung',
    size: 5,
    href: 'mengenausweitung',
  },
  {
    text: 'Register',
    size: 5,
    href: 'register',
  },
  {
    text: 'durchgängig',
    size: 5,
    href: 'durchgaengig',
  },
  {
    text: 'ableiten',
    size: 4,
    href: 'ableiten',
  },
  {
    text: 'Abnehmer',
    size: 4,
    href: 'abnehmer',
  },
  {
    text: 'Alibiübung',
    size: 4,
    href: 'alibiuebung',
  },
  {
    text: 'allenfalls',
    size: 4,
    href: 'allenfalls',
  },
  {
    text: 'Heiratsvermittlung',
    size: 4,
    href: 'heiratsvermittlung',
  },
  {
    text: 'anstreben',
    size: 4,
    href: 'anstreben',
  },
  {
    text: 'Aufbruch',
    size: 4,
    href: 'aufbruch',
  },
  {
    text: 'Auflage',
    size: 4,
    href: 'auflage',
  },
  {
    text: 'Augenschein',
    size: 4,
    href: 'augenschein',
  },
  {
    text: 'ausklammern',
    size: 4,
    href: 'ausklammern',
  },
  {
    text: 'Ausmass',
    size: 4,
    href: 'ausmass',
  },
  {
    text: 'Bedarf',
    size: 4,
    href: 'bedarf',
  },
  {
    text: 'befinden',
    size: 4,
    href: 'befinden',
  },
  {
    text: 'Befund',
    size: 4,
    href: 'befund',
  },
  {
    text: 'Belastung',
    size: 4,
    href: 'belastung',
  },
  {
    text: 'Bewandtnis',
    size: 4,
    href: 'bewandtnis',
  },
  {
    text: 'dahinstellen',
    size: 4,
    href: 'dahinstellen',
  },
  {
    text: 'Eigenständigkeit',
    size: 4,
    href: 'eigenstaendigkeit',
  },
  {
    text: 'entfallen',
    size: 4,
    href: 'entfallen',
  },
  {
    text: 'Entgelt',
    size: 4,
    href: 'entgelt',
  },
  {
    text: 'Erlebnis',
    size: 4,
    href: 'erlebnis',
  },
  {
    text: 'fortschrittlich',
    size: 4,
    href: 'fortschrittlich',
  },
  {
    text: 'fraglich',
    size: 4,
    href: 'fraglich',
  },
  {
    text: 'gebührend',
    size: 4,
    href: 'gebuehrend',
  },
  {
    text: 'Geheimtipp',
    size: 4,
    href: 'geheimtipp',
  },
  {
    text: 'gehoben',
    size: 4,
    href: 'gehoben',
  },
  {
    text: 'gerecht',
    size: 4,
    href: 'gerecht',
  },
  {
    text: 'Geschäftsführer',
    size: 4,
    href: 'geschaeftsfuehrer',
  },
  {
    text: 'Gestaltung',
    size: 4,
    href: 'gestaltung',
  },
  {
    text: 'Gestell',
    size: 4,
    href: 'gestell',
  },
  {
    text: 'grosszügig',
    size: 4,
    href: 'grosszuegig',
  },
  {
    text: 'Impressum',
    size: 4,
    href: 'impressum',
  },
  {
    text: 'irrelevant',
    size: 4,
    href: 'irrelevant',
  },
  {
    text: 'Kundenberatung',
    size: 4,
    href: 'kundenberatung',
  },
  {
    text: 'Leerlauf',
    size: 4,
    href: 'leerlauf',
  },
  {
    text: 'leidtragend',
    size: 4,
    href: 'leidtragend',
  },
  {
    text: 'Leistungsbezüger',
    size: 4,
    href: 'leistungsbezueger',
  },
  {
    text: 'Leitmotiv',
    size: 4,
    href: 'leitmotiv',
  },
  {
    text: 'Mammut',
    size: 4,
    href: 'mammut',
  },
  {
    text: 'Marktkräfte',
    size: 4,
    href: 'marktkraefte',
  },
  {
    text: 'meinungsbildend',
    size: 4,
    href: 'meinungsbildend',
  },
  {
    text: 'monieren',
    size: 4,
    href: 'monieren',
  },
  {
    text: 'Notlage',
    size: 4,
    href: 'notlage',
  },
  {
    text: 'Regelung',
    size: 4,
    href: 'regelung',
  },
  {
    text: 'Siedlung',
    size: 4,
    href: 'siedlung',
  },
  {
    text: 'spezifisch',
    size: 4,
    href: 'spezifisch',
  },
  {
    text: 'spotten',
    size: 4,
    href: 'spotten',
  },
  {
    text: 'Trittbrettfahrer',
    size: 4,
    href: 'trittbrettfahrer',
  },
  {
    text: 'Umtriebe',
    size: 4,
    href: 'umtriebe',
  },
  {
    text: 'Unterlage',
    size: 4,
    href: 'unterlage',
  },
  {
    text: 'unterschreiten',
    size: 4,
    href: 'unterschreiten',
  },
  {
    text: 'unumgänglich',
    size: 4,
    href: 'unumgaenglich',
  },
  {
    text: 'Vorkommnis',
    size: 4,
    href: 'vorkommnis',
  },
  {
    text: 'Vorstoss',
    size: 4,
    href: 'vorstoss',
  },
  {
    text: 'wenn schon',
    size: 4,
    href: 'wenn-schon',
  },
  {
    text: 'zugute kommen',
    size: 4,
    href: 'zugute-kommen',
  },
  {
    text: 'zutreffend',
    size: 4,
    href: 'zutreffend',
  },
  {
    text: 'Zuversicht',
    size: 4,
    href: 'zuversicht',
  },
  {
    text: 'Erscheinungsbild',
    size: 4,
    href: 'erscheinungsbild',
  },
  {
    text: 'Abbauprodukt',
    size: 4,
    href: 'abbauprodukt',
  },
  {
    text: 'Lagerabbau',
    size: 4,
    href: 'lagerabbau',
  },
  {
    text: 'Mehranfall',
    size: 4,
    href: 'mehranfall',
  },
  {
    text: 'Anlaufzeit',
    size: 4,
    href: 'anlaufzeit',
  },
  {
    text: 'halbamtlich',
    size: 4,
    href: 'halbamtlich',
  },
  {
    text: 'Anlagekosten',
    size: 4,
    href: 'anlagekosten',
  },
  {
    text: 'anständig',
    size: 4,
    href: 'anstaendig',
  },
  {
    text: 'Aufführung',
    size: 4,
    href: 'auffuehrung',
  },
  {
    text: 'Gewinnausschüttung',
    size: 4,
    href: 'gewinnausschuettung',
  },
  {
    text: 'Gewinnsucht',
    size: 4,
    href: 'gewinnsucht',
  },
  {
    text: 'Hochbauingenieur',
    size: 4,
    href: 'hochbauingenieur',
  },
  {
    text: 'Hoheitsrecht',
    size: 4,
    href: 'hoheitsrecht',
  },
  {
    text: 'Münzhoheit',
    size: 4,
    href: 'muenzhoheit',
  },
  {
    text: 'Berufsberatung',
    size: 4,
    href: 'berufsberatung',
  },
  {
    text: 'Beratungsstelle',
    size: 4,
    href: 'beratungsstelle',
  },
  {
    text: 'Machbarkeitsstudie',
    size: 4,
    href: 'machbarkeitsstudie',
  },
  {
    text: 'Mammutfilm',
    size: 4,
    href: 'mammutfilm',
  },
  {
    text: 'Mangelwirtschaft',
    size: 4,
    href: 'mangelwirtschaft',
  },
  {
    text: 'materialintensiv',
    size: 4,
    href: 'materialintensiv',
  },
  {
    text: 'Mitwirkungsrecht',
    size: 4,
    href: 'mitwirkungsrecht',
  },
  {
    text: 'konsumorientiert',
    size: 4,
    href: 'konsumorientiert',
  },
  {
    text: 'kundenorientiert',
    size: 4,
    href: 'kundenorientiert',
  },
  {
    text: 'kundennah',
    size: 4,
    href: 'kundennah',
  },
  {
    text: 'marktnah',
    size: 4,
    href: 'marktnah',
  },
  {
    text: 'Hauspflege',
    size: 4,
    href: 'hauspflege',
  },
  {
    text: 'Kinderpflege',
    size: 4,
    href: 'kinderpflege',
  },
  {
    text: 'Körperpflege',
    size: 4,
    href: 'koerperpflege',
  },
  {
    text: 'hochpolitisch',
    size: 4,
    href: 'hochpolitisch',
  },
  {
    text: 'Fachschule',
    size: 4,
    href: 'fachschule',
  },
  {
    text: 'vorsorglich',
    size: 4,
    href: 'vorsorglich',
  },
  {
    text: 'unzumutbar',
    size: 4,
    href: 'unzumutbar',
  },
  {
    text: 'machtbewusst',
    size: 4,
    href: 'machtbewusst',
  },
  {
    text: 'Anlagevermögen',
    size: 4,
    href: 'anlagevermoegen',
  },
  {
    text: 'Kursleiter',
    size: 4,
    href: 'kursleiter',
  },
  {
    text: 'fachgerecht',
    size: 4,
    href: 'fachgerecht',
  },
  {
    text: 'Kundenumfrage',
    size: 4,
    href: 'kundenumfrage',
  },
  {
    text: 'Wertschöpfung',
    size: 4,
    href: 'wertschoepfung',
  },
  {
    text: 'menschenfreundlich',
    size: 4,
    href: 'menschenfreundlich',
  },
  {
    text: 'zeitaufwendig',
    size: 4,
    href: 'zeitaufwendig',
  },
  {
    text: 'Geschäftsführung',
    size: 4,
    href: 'geschaeftsfuehrung',
  },
  {
    text: 'Meldepflicht',
    size: 4,
    href: 'meldepflicht',
  },
  {
    text: 'Finanzplanung',
    size: 4,
    href: 'finanzplanung',
  },
  {
    text: 'Brennpunkt',
    size: 4,
    href: 'brennpunkt',
  },
  {
    text: 'Einschnitt',
    size: 4,
    href: 'einschnitt',
  },
  {
    text: 'Pensum',
    size: 4,
    href: 'pensum',
  },
  {
    text: 'Absprache',
    size: 3,
    href: 'absprache',
  },
  {
    text: 'abstellen',
    size: 3,
    href: 'abstellen',
  },
  {
    text: 'allfällig',
    size: 3,
    href: 'allfaellig',
  },
  {
    text: 'Altlast',
    size: 3,
    href: 'altlast',
  },
  {
    text: 'Anbieter',
    size: 3,
    href: 'anbieter',
  },
  {
    text: 'anerkennen',
    size: 3,
    href: 'anerkennen',
  },
  {
    text: 'Anhebung',
    size: 3,
    href: 'anhebung',
  },
  {
    text: 'Antragsteller',
    size: 3,
    href: 'antragsteller',
  },
  {
    text: 'aufarbeiten',
    size: 3,
    href: 'aufarbeiten',
  },
  {
    text: 'aufweisen',
    size: 3,
    href: 'aufweisen',
  },
  {
    text: 'ausarbeiten',
    size: 3,
    href: 'ausarbeiten',
  },
  {
    text: 'Ausreisser',
    size: 3,
    href: 'ausreisser',
  },
  {
    text: 'bahnbrechend',
    size: 3,
    href: 'bahnbrechend',
  },
  {
    text: 'bedürftig',
    size: 3,
    href: 'beduerftig',
  },
  {
    text: 'Behelf',
    size: 3,
    href: 'behelf',
  },
  {
    text: 'Beitrag',
    size: 3,
    href: 'beitrag',
  },
  {
    text: 'Beizug',
    size: 3,
    href: 'beizug',
  },
  {
    text: 'bejahen',
    size: 3,
    href: 'bejahen',
  },
  {
    text: 'berufsbegleitend',
    size: 3,
    href: 'berufsbegleitend',
  },
  {
    text: 'Bereitschaft',
    size: 3,
    href: 'bereitschaft',
  },
  {
    text: 'Berufung',
    size: 3,
    href: 'berufung',
  },
  {
    text: 'Bezug',
    size: 3,
    href: 'bezug',
  },
  {
    text: 'disponieren',
    size: 3,
    href: 'disponieren',
  },
  {
    text: 'Disposition',
    size: 3,
    href: 'disposition',
  },
  {
    text: 'Durchbruch',
    size: 3,
    href: 'durchbruch',
  },
  {
    text: 'Eingliederung',
    size: 3,
    href: 'eingliederung',
  },
  {
    text: 'eminent',
    size: 3,
    href: 'eminent',
  },
  {
    text: 'erhältlich',
    size: 3,
    href: 'erhaeltlich',
  },
  {
    text: 'erheischen',
    size: 3,
    href: 'erheischen',
  },
  {
    text: 'Erlass',
    size: 3,
    href: 'erlass',
  },
  {
    text: 'Ermittlung',
    size: 3,
    href: 'ermittlung',
  },
  {
    text: 'fällig',
    size: 3,
    href: 'faellig',
  },
  {
    text: 'Fehl-',
    size: 3,
    href: 'fehl',
  },
  {
    text: 'festlegen',
    size: 3,
    href: 'festlegen',
  },
  {
    text: 'flankierend',
    size: 3,
    href: 'flankierend',
  },
  {
    text: 'Flickwerk',
    size: 3,
    href: 'flickwerk',
  },
  {
    text: 'förderlich',
    size: 3,
    href: 'foerderlich',
  },
  {
    text: 'fragwürdig',
    size: 3,
    href: 'fragwuerdig',
  },
  {
    text: 'freiwillig',
    size: 3,
    href: 'freiwillig',
  },
  {
    text: 'Fürsorge',
    size: 3,
    href: 'fuersorge',
  },
  {
    text: 'Gefüge',
    size: 3,
    href: 'gefuege',
  },
  {
    text: 'geltend machen',
    size: 3,
    href: 'geltend-machen',
  },
  {
    text: 'genehmigen',
    size: 3,
    href: 'genehmigen',
  },
  {
    text: 'generell',
    size: 3,
    href: 'generell',
  },
  {
    text: 'Genussmittel',
    size: 3,
    href: 'genussmittel',
  },
  {
    text: 'Gerichtsstand',
    size: 3,
    href: 'gerichtsstand',
  },
  {
    text: 'Gestalt',
    size: 3,
    href: 'gestalt',
  },
  {
    text: 'gewährleisten',
    size: 3,
    href: 'gewaehrleisten',
  },
  {
    text: 'glaubwürdig',
    size: 3,
    href: 'glaubwuerdig',
  },
  {
    text: 'Gremium',
    size: 3,
    href: 'gremium',
  },
  {
    text: 'Überbauung',
    size: 3,
    href: 'ueberbauung',
  },
  {
    text: 'Gutsprache',
    size: 3,
    href: 'gutsprache',
  },
  {
    text: 'Inventur',
    size: 3,
    href: 'inventur',
  },
  {
    text: 'Kautel',
    size: 3,
    href: 'kautel',
  },
  {
    text: 'Kundendienst',
    size: 3,
    href: 'kundendienst',
  },
  {
    text: 'labil',
    size: 3,
    href: 'labil',
  },
  {
    text: 'leider',
    size: 3,
    href: 'leider',
  },
  {
    text: 'leistungsfähig',
    size: 3,
    href: 'leistungsfaehig',
  },
  {
    text: 'Leitbild',
    size: 3,
    href: 'leitbild',
  },
  {
    text: 'Leumund',
    size: 3,
    href: 'leumund',
  },
  {
    text: 'Literatur',
    size: 3,
    href: 'literatur',
  },
  {
    text: 'lückenlos',
    size: 3,
    href: 'lueckenlos',
  },
  {
    text: 'neu',
    size: 3,
    href: 'neu',
  },
  {
    text: 'praktisch',
    size: 3,
    href: 'praktisch',
  },
  {
    text: 'rechtsgültig',
    size: 3,
    href: 'rechtsgueltig',
  },
  {
    text: 'reibungslos',
    size: 3,
    href: 'reibungslos',
  },
  {
    text: 'sinngemäss',
    size: 3,
    href: 'sinngemaess',
  },
  {
    text: 'Schwergewicht',
    size: 3,
    href: 'schwergewicht',
  },
  {
    text: 'Sorgenkind',
    size: 3,
    href: 'sorgenkind',
  },
  {
    text: 'Stellungnahme',
    size: 3,
    href: 'stellungnahme',
  },
  {
    text: 'Stimmung',
    size: 3,
    href: 'stimmung',
  },
  {
    text: 'Umgang nehmen',
    size: 3,
    href: 'umgang-nehmen',
  },
  {
    text: 'Verflechtung',
    size: 3,
    href: 'verflechtung',
  },
  {
    text: 'Vorgehen',
    size: 3,
    href: 'vorgehen',
  },
  {
    text: 'Zustandekommen',
    size: 3,
    href: 'zustandekommen',
  },
  {
    text: 'zuverlässig',
    size: 3,
    href: 'zuverlaessig',
  },
  {
    text: 'festhalten',
    size: 3,
    href: 'festhalten',
  },
  {
    text: 'Lohnabbau',
    size: 3,
    href: 'lohnabbau',
  },
  {
    text: 'abgeklärt',
    size: 3,
    href: 'abgeklaert',
  },
  {
    text: 'Geschäftsablauf',
    size: 3,
    href: 'geschaeftsablauf',
  },
  {
    text: 'anerkennenswert',
    size: 3,
    href: 'anerkennenswert',
  },
  {
    text: 'anerkennend',
    size: 3,
    href: 'anerkennend',
  },
  {
    text: 'Annahmebestätigung',
    size: 3,
    href: 'annahmebestaetigung',
  },
  {
    text: 'anstossend',
    size: 3,
    href: 'anstossend',
  },
  {
    text: 'Arbeitsaufwand',
    size: 3,
    href: 'arbeitsaufwand',
  },
  {
    text: 'Eigenaufwand',
    size: 3,
    href: 'eigenaufwand',
  },
  {
    text: 'Auslastungsgrad',
    size: 3,
    href: 'auslastungsgrad',
  },
  {
    text: 'Anlaufkosten',
    size: 3,
    href: 'anlaufkosten',
  },
  {
    text: 'Gästehaus',
    size: 3,
    href: 'gaestehaus',
  },
  {
    text: 'sachgerecht',
    size: 3,
    href: 'sachgerecht',
  },
  {
    text: 'Gönner',
    size: 3,
    href: 'goenner',
  },
  {
    text: 'Handänderungssteuer',
    size: 3,
    href: 'handaenderungssteuer',
  },
  {
    text: 'Hinweispfeil',
    size: 3,
    href: 'hinweispfeil',
  },
  {
    text: 'Hoheitsabzeichen',
    size: 3,
    href: 'hoheitsabzeichen',
  },
  {
    text: 'Genehmigung',
    size: 3,
    href: 'genehmigung',
  },
  {
    text: 'Kassenbeleg',
    size: 3,
    href: 'kassenbeleg',
  },
  {
    text: 'kriegsbereit',
    size: 3,
    href: 'kriegsbereit',
  },
  {
    text: 'Anhörungsrecht',
    size: 3,
    href: 'anhoerungsrecht',
  },
  {
    text: 'bedarfsorientiert',
    size: 3,
    href: 'bedarfsorientiert',
  },
  {
    text: 'Lehrstellennachweis',
    size: 3,
    href: 'lehrstellennachweis',
  },
  {
    text: 'verkehrspolitisch',
    size: 3,
    href: 'verkehrspolitisch',
  },
  {
    text: 'Fachausschuss',
    size: 3,
    href: 'fachausschuss',
  },
  {
    text: 'Fachkräfte',
    size: 3,
    href: 'fachkraefte',
  },
  {
    text: 'Fachverband',
    size: 3,
    href: 'fachverband',
  },
  {
    text: 'fördern',
    size: 3,
    href: 'foerdern',
  },
  {
    text: 'kundenfreundlich',
    size: 3,
    href: 'kundenfreundlich',
  },
  {
    text: 'Krankenfürsorge',
    size: 3,
    href: 'krankenfuersorge',
  },
  {
    text: 'magersüchtig',
    size: 3,
    href: 'magersuechtig',
  },
  {
    text: 'überblickbar',
    size: 3,
    href: 'ueberblickbar',
  },
  {
    text: 'überfordern',
    size: 3,
    href: 'ueberfordern',
  },
  {
    text: 'Überfremdung',
    size: 3,
    href: 'ueberfremdung',
  },
  {
    text: 'übernehmen',
    size: 3,
    href: 'uebernehmen',
  },
  {
    text: 'Übernahme',
    size: 3,
    href: 'uebernahme',
  },
  {
    text: 'überwiegend',
    size: 3,
    href: 'ueberwiegend',
  },
  {
    text: 'Feuerwehrübung',
    size: 3,
    href: 'feuerwehruebung',
  },
  {
    text: 'gewinnorientiert',
    size: 3,
    href: 'gewinnorientiert',
  },
  {
    text: 'Repräsentativität',
    size: 3,
    href: 'repraesentativitaet',
  },
  {
    text: 'linienbewusst',
    size: 3,
    href: 'linienbewusst',
  },
  {
    text: 'überstimmen',
    size: 3,
    href: 'ueberstimmen',
  },
  {
    text: 'Vermögenswert',
    size: 3,
    href: 'vermoegenswert',
  },
  {
    text: 'Grossüberbauungen',
    size: 3,
    href: 'grossueberbauungen',
  },
  {
    text: 'Leistungslohn',
    size: 3,
    href: 'leistungslohn',
  },
  {
    text: 'Gesprächsleiter',
    size: 3,
    href: 'gespraechsleiter',
  },
  {
    text: 'Projektleiter',
    size: 3,
    href: 'projektleiter',
  },
  {
    text: 'Steuerungsausschuss',
    size: 3,
    href: 'steuerungsausschuss',
  },
  {
    text: 'Meereskunde',
    size: 3,
    href: 'meereskunde',
  },
  {
    text: 'Leumundzeugnis',
    size: 3,
    href: 'leumundzeugnis',
  },
  {
    text: 'Maschinenbestand',
    size: 3,
    href: 'maschinenbestand',
  },
  {
    text: 'Jahresbetreffnis',
    size: 3,
    href: 'jahresbetreffnis',
  },
  {
    text: 'Abschöpfung',
    size: 3,
    href: 'abschoepfung',
  },
  {
    text: 'Lebensverhältnisse',
    size: 3,
    href: 'lebensverhaeltnisse',
  },
  {
    text: 'Homepage',
    size: 3,
    href: 'homepage',
  },
  {
    text: 'Klausursitzung',
    size: 3,
    href: 'klausursitzung',
  },
  {
    text: 'Meldestelle',
    size: 3,
    href: 'meldestelle',
  },
  {
    text: 'Eckpfeiler',
    size: 3,
    href: 'eckpfeiler',
  },
  {
    text: 'aufschlussreich',
    size: 3,
    href: 'aufschlussreich',
  },
  {
    text: 'kulant',
    size: 3,
    href: 'kulant',
  },
  {
    text: 'Kulanz',
    size: 3,
    href: 'kulanz',
  },
  {
    text: 'Lebensaufwand',
    size: 3,
    href: 'lebensaufwand',
  },
  {
    text: 'betreuen',
    size: 3,
    href: 'betreuen',
  },
  {
    text: 'aufteilen',
    size: 3,
    href: 'aufteilen',
  },
  {
    text: 'geschäftsführend',
    size: 2,
    href: 'geschaeftsfuehrend',
  },
  {
    text: 'Abdankung',
    size: 2,
    href: 'abdankung',
  },
  {
    text: 'abkömmlich',
    size: 2,
    href: 'abkoemmlich',
  },
  {
    text: 'Abschwung',
    size: 2,
    href: 'abschwung',
  },
  {
    text: 'absolvieren',
    size: 2,
    href: 'absolvieren',
  },
  {
    text: 'abwälzen',
    size: 2,
    href: 'abwaelzen',
  },
  {
    text: 'Akquisiteur',
    size: 2,
    href: 'akquisiteur',
  },
  {
    text: 'amtlich',
    size: 2,
    href: 'amtlich',
  },
  {
    text: 'Anhänger',
    size: 2,
    href: 'anhaenger',
  },
  {
    text: 'anheim stellen',
    size: 2,
    href: 'anheim-stellen',
  },
  {
    text: 'Arbeitsvermittlung',
    size: 2,
    href: 'arbeitsvermittlung',
  },
  {
    text: 'Aufblähung',
    size: 2,
    href: 'aufblaehung',
  },
  {
    text: 'aufgeschlossen',
    size: 2,
    href: 'aufgeschlossen',
  },
  {
    text: 'aufheben',
    size: 2,
    href: 'aufheben',
  },
  {
    text: 'Aufmachung',
    size: 2,
    href: 'aufmachung',
  },
  {
    text: 'Ausfall',
    size: 2,
    href: 'ausfall',
  },
  {
    text: 'Ausführungen',
    size: 2,
    href: 'ausfuehrungen',
  },
  {
    text: 'ausmarchen',
    size: 2,
    href: 'ausmarchen',
  },
  {
    text: 'ausweisen',
    size: 2,
    href: 'ausweisen',
  },
  {
    text: 'bagatellisieren',
    size: 2,
    href: 'bagatellisieren',
  },
  {
    text: 'bearbeiten',
    size: 2,
    href: 'bearbeiten',
  },
  {
    text: 'bedenklich',
    size: 2,
    href: 'bedenklich',
  },
  {
    text: 'begrüssen',
    size: 2,
    href: 'begruessen',
  },
  {
    text: 'Bekenntnis',
    size: 2,
    href: 'bekenntnis',
  },
  {
    text: 'Belastbarkeit',
    size: 2,
    href: 'belastbarkeit',
  },
  {
    text: 'Bereich',
    size: 2,
    href: 'bereich',
  },
  {
    text: 'Beschaffenheit',
    size: 2,
    href: 'beschaffenheit',
  },
  {
    text: 'Betreuung',
    size: 2,
    href: 'betreuung',
  },
  {
    text: 'Brisanz',
    size: 2,
    href: 'brisanz',
  },
  {
    text: 'denkbar',
    size: 2,
    href: 'denkbar',
  },
  {
    text: 'Disponent',
    size: 2,
    href: 'disponent',
  },
  {
    text: 'Eingriff',
    size: 2,
    href: 'eingriff',
  },
  {
    text: 'Punkt',
    size: 2,
    href: 'punkt',
  },
  {
    text: 'Entfremdung',
    size: 2,
    href: 'entfremdung',
  },
  {
    text: 'Entlastung',
    size: 2,
    href: 'entlastung',
  },
  {
    text: 'erfolgreich',
    size: 2,
    href: 'erfolgreich',
  },
  {
    text: 'Ergänzung',
    size: 2,
    href: 'ergaenzung',
  },
  {
    text: 'erlassen',
    size: 2,
    href: 'erlassen',
  },
  {
    text: 'Feindbild',
    size: 2,
    href: 'feindbild',
  },
  {
    text: 'Fertigstellung',
    size: 2,
    href: 'fertigstellung',
  },
  {
    text: 'Fügung',
    size: 2,
    href: 'fuegung',
  },
  {
    text: 'gangbar',
    size: 2,
    href: 'gangbar',
  },
  {
    text: 'gängig',
    size: 2,
    href: 'gaengig',
  },
  {
    text: 'Gast',
    size: 2,
    href: 'gast',
  },
  {
    text: 'arbeitsintensiv',
    size: 2,
    href: 'arbeitsintensiv',
  },
  {
    text: 'Geschehen',
    size: 2,
    href: 'geschehen',
  },
  {
    text: 'Grenzfall',
    size: 2,
    href: 'grenzfall',
  },
  {
    text: 'Klosterklausur',
    size: 2,
    href: 'klosterklausur',
  },
  {
    text: 'kreditwürdig',
    size: 2,
    href: 'kreditwuerdig',
  },
  {
    text: 'lediglich',
    size: 2,
    href: 'lediglich',
  },
  {
    text: 'nämlich',
    size: 2,
    href: 'naemlich',
  },
  {
    text: 'ohne weiteres',
    size: 2,
    href: 'ohne-weiteres',
  },
  {
    text: 'Praxis',
    size: 2,
    href: 'praxis',
  },
  {
    text: 'preisgeben',
    size: 2,
    href: 'preisgeben',
  },
  {
    text: 'Referent',
    size: 2,
    href: 'referent',
  },
  {
    text: 'Ressort',
    size: 2,
    href: 'ressort',
  },
  {
    text: 'Rückfrage',
    size: 2,
    href: 'rueckfrage',
  },
  {
    text: 'Satzung',
    size: 2,
    href: 'satzung',
  },
  {
    text: 'Scherbenhaufen',
    size: 2,
    href: 'scherbenhaufen',
  },
  {
    text: 'Schlagwort',
    size: 2,
    href: 'schlagwort',
  },
  {
    text: 'Set',
    size: 2,
    href: 'set',
  },
  {
    text: 'zeitgemäss',
    size: 2,
    href: 'zeitgemaess',
  },
  {
    text: 'sprechen für',
    size: 2,
    href: 'sprechen-fuer',
  },
  {
    text: 'sprechen gegen',
    size: 2,
    href: 'sprechen-gegen',
  },
  {
    text: 'Stichtag',
    size: 2,
    href: 'stichtag',
  },
  {
    text: 'Stichwort',
    size: 2,
    href: 'stichwort',
  },
  {
    text: 'Streiflicht',
    size: 2,
    href: 'streiflicht',
  },
  {
    text: 'Tagung',
    size: 2,
    href: 'tagung',
  },
  {
    text: 'Turnus',
    size: 2,
    href: 'turnus',
  },
  {
    text: 'Umfeld',
    size: 2,
    href: 'umfeld',
  },
  {
    text: 'verankern',
    size: 2,
    href: 'verankern',
  },
  {
    text: 'verantworten',
    size: 2,
    href: 'verantworten',
  },
  {
    text: 'Verbundenheit',
    size: 2,
    href: 'verbundenheit',
  },
  {
    text: 'Verkehr',
    size: 2,
    href: 'verkehr',
  },
  {
    text: 'Verlagerung',
    size: 2,
    href: 'verlagerung',
  },
  {
    text: 'Vermittlung',
    size: 2,
    href: 'vermittlung',
  },
  {
    text: 'verneinen',
    size: 2,
    href: 'verneinen',
  },
  {
    text: 'Verständnis',
    size: 2,
    href: 'verstaendnis',
  },
  {
    text: 'vorerst',
    size: 2,
    href: 'vorerst',
  },
  {
    text: 'Vorfeld',
    size: 2,
    href: 'vorfeld',
  },
  {
    text: 'Vorkehr',
    size: 2,
    href: 'vorkehr',
  },
  {
    text: 'Vorstellung',
    size: 2,
    href: 'vorstellung',
  },
  {
    text: 'wegweisend',
    size: 2,
    href: 'wegweisend',
  },
  {
    text: 'Wortlaut',
    size: 2,
    href: 'wortlaut',
  },
  {
    text: 'Würdigung',
    size: 2,
    href: 'wuerdigung',
  },
  {
    text: 'zugeschnitten sein',
    size: 2,
    href: 'zugeschnitten-sein',
  },
  {
    text: 'zweckgebunden',
    size: 2,
    href: 'zweckgebunden',
  },
  {
    text: 'zweckmässig',
    size: 2,
    href: 'zweckmaessig',
  },
  {
    text: 'zweideutig',
    size: 2,
    href: 'zweideutig',
  },
  {
    text: 'zwiespältig',
    size: 2,
    href: 'zwiespaeltig',
  },
  {
    text: 'Bagatellschaden',
    size: 2,
    href: 'bagatellschaden',
  },
  {
    text: 'Ablaufrinne',
    size: 2,
    href: 'ablaufrinne',
  },
  {
    text: 'Abfertigungsstelle',
    size: 2,
    href: 'abfertigungsstelle',
  },
  {
    text: 'Abnahmegarantie',
    size: 2,
    href: 'abnahmegarantie',
  },
  {
    text: 'Abnehmerkreis',
    size: 2,
    href: 'abnehmerkreis',
  },
  {
    text: 'Ablaufberg',
    size: 2,
    href: 'ablaufberg',
  },
  {
    text: 'Abnahmepflicht',
    size: 2,
    href: 'abnahmepflicht',
  },
  {
    text: 'Abrechnungsstelle',
    size: 2,
    href: 'abrechnungsstelle',
  },
  {
    text: 'Abrechnungskonto',
    size: 2,
    href: 'abrechnungskonto',
  },
  {
    text: 'Absolvent',
    size: 2,
    href: 'absolvent',
  },
  {
    text: 'Abstellraum',
    size: 2,
    href: 'abstellraum',
  },
  {
    text: 'abklärungsbedürftig',
    size: 2,
    href: 'abklaerungsbeduerftig',
  },
  {
    text: 'Annahmeverzug',
    size: 2,
    href: 'annahmeverzug',
  },
  {
    text: 'Anstösser',
    size: 2,
    href: 'anstoesser',
  },
  {
    text: 'anstössig',
    size: 2,
    href: 'anstoessig',
  },
  {
    text: 'Aufbruchstimmung',
    size: 2,
    href: 'aufbruchstimmung',
  },
  {
    text: 'Internetauftritt',
    size: 2,
    href: 'internetauftritt',
  },
  {
    text: 'Sachaufwand',
    size: 2,
    href: 'sachaufwand',
  },
  {
    text: 'Lohnausfallentschädigung',
    size: 2,
    href: 'lohnausfallentschaedigung',
  },
  {
    text: 'Auslastung',
    size: 2,
    href: 'auslastung',
  },
  {
    text: 'Aussagefähigkeit',
    size: 2,
    href: 'aussagefaehigkeit',
  },
  {
    text: 'Aussagewert',
    size: 2,
    href: 'aussagewert',
  },
  {
    text: 'aussagekräftig',
    size: 2,
    href: 'aussagekraeftig',
  },
  {
    text: 'auftraggebend',
    size: 2,
    href: 'auftraggebend',
  },
  {
    text: 'gedeihend',
    size: 2,
    href: 'gedeihend',
  },
  {
    text: 'gedeihlich',
    size: 2,
    href: 'gedeihlich',
  },
  {
    text: 'Gesellschaftskapital',
    size: 2,
    href: 'gesellschaftskapital',
  },
  {
    text: 'Treuhandgesellschaft',
    size: 2,
    href: 'treuhandgesellschaft',
  },
  {
    text: 'Kollektivgesellschaft',
    size: 2,
    href: 'kollektivgesellschaft',
  },
  {
    text: 'Gastland',
    size: 2,
    href: 'gastland',
  },
  {
    text: 'Gesamtgefüge',
    size: 2,
    href: 'gesamtgefuege',
  },
  {
    text: 'familiengerecht',
    size: 2,
    href: 'familiengerecht',
  },
  {
    text: 'Gesellschaftszweck',
    size: 2,
    href: 'gesellschaftszweck',
  },
  {
    text: 'Gewinnanteil',
    size: 2,
    href: 'gewinnanteil',
  },
  {
    text: 'Gewinnbeteiligung',
    size: 2,
    href: 'gewinnbeteiligung',
  },
  {
    text: 'Gewinnausfall',
    size: 2,
    href: 'gewinnausfall',
  },
  {
    text: 'Gewinnvortrag',
    size: 2,
    href: 'gewinnvortrag',
  },
  {
    text: 'Handänderungsabgabe',
    size: 2,
    href: 'handaenderungsabgabe',
  },
  {
    text: 'Tiefbau',
    size: 2,
    href: 'tiefbau',
  },
  {
    text: 'Gebietshoheit',
    size: 2,
    href: 'gebietshoheit',
  },
  {
    text: 'Abrechnungsbeleg',
    size: 2,
    href: 'abrechnungsbeleg',
  },
  {
    text: 'Berufsberater',
    size: 2,
    href: 'berufsberater',
  },
  {
    text: 'Detailberatung',
    size: 2,
    href: 'detailberatung',
  },
  {
    text: 'fahrbereit',
    size: 2,
    href: 'fahrbereit',
  },
  {
    text: 'Marschbereitschaft',
    size: 2,
    href: 'marschbereitschaft',
  },
  {
    text: 'Gegendarstellung',
    size: 2,
    href: 'gegendarstellung',
  },
  {
    text: 'Geltungsdrang',
    size: 2,
    href: 'geltungsdrang',
  },
  {
    text: 'Entnahme',
    size: 2,
    href: 'entnahme',
  },
  {
    text: 'linksorientiert',
    size: 2,
    href: 'linksorientiert',
  },
  {
    text: 'mafianah',
    size: 2,
    href: 'mafianah',
  },
  {
    text: 'naturnah',
    size: 2,
    href: 'naturnah',
  },
  {
    text: 'naheliegend',
    size: 2,
    href: 'naheliegend',
  },
  {
    text: 'Bundesrechtspflege',
    size: 2,
    href: 'bundesrechtspflege',
  },
  {
    text: 'Landschaftspflege',
    size: 2,
    href: 'landschaftspflege',
  },
  {
    text: 'schulpolitisch',
    size: 2,
    href: 'schulpolitisch',
  },
  {
    text: 'grundsatzpolitisch',
    size: 2,
    href: 'grundsatzpolitisch',
  },
  {
    text: 'finanzpolitisch',
    size: 2,
    href: 'finanzpolitisch',
  },
  {
    text: 'Siedlungspolitik',
    size: 2,
    href: 'siedlungspolitik',
  },
  {
    text: 'Fachabteilung',
    size: 2,
    href: 'fachabteilung',
  },
  {
    text: 'Facharbeit',
    size: 2,
    href: 'facharbeit',
  },
  {
    text: 'Fachausdruck',
    size: 2,
    href: 'fachausdruck',
  },
  {
    text: 'Fachsprache',
    size: 2,
    href: 'fachsprache',
  },
  {
    text: 'fassungslos',
    size: 2,
    href: 'fassungslos',
  },
  {
    text: 'Fassungslosigkeit',
    size: 2,
    href: 'fassungslosigkeit',
  },
  {
    text: 'Förderer',
    size: 2,
    href: 'foerderer',
  },
  {
    text: 'Freizügigkeit',
    size: 2,
    href: 'freizuegigkeit',
  },
  {
    text: 'Fremdgeschmack',
    size: 2,
    href: 'fremdgeschmack',
  },
  {
    text: 'Vorwegnahme',
    size: 2,
    href: 'vorwegnahme',
  },
  {
    text: 'Fremdstoff',
    size: 2,
    href: 'fremdstoff',
  },
  {
    text: 'katzenfreundlich',
    size: 2,
    href: 'katzenfreundlich',
  },
  {
    text: 'alkoholsüchtig',
    size: 2,
    href: 'alkoholsuechtig',
  },
  {
    text: 'überblicken',
    size: 2,
    href: 'ueberblicken',
  },
  {
    text: 'überdurchschnittlich',
    size: 2,
    href: 'ueberdurchschnittlich',
  },
  {
    text: 'überwältigend',
    size: 2,
    href: 'ueberwaeltigend',
  },
  {
    text: 'Lehnswesen',
    size: 2,
    href: 'lehnswesen',
  },
  {
    text: 'Unzumutbarkeit',
    size: 2,
    href: 'unzumutbarkeit',
  },
  {
    text: 'verantwortungsbewusst',
    size: 2,
    href: 'verantwortungsbewusst',
  },
  {
    text: 'familienfreundlich',
    size: 2,
    href: 'familienfreundlich',
  },
  {
    text: 'Fahrdienstleiter',
    size: 2,
    href: 'fahrdienstleiter',
  },
  {
    text: 'Abteilungsleiter',
    size: 2,
    href: 'abteilungsleiter',
  },
  {
    text: 'Fehlbetrag',
    size: 2,
    href: 'fehlbetrag',
  },
  {
    text: 'Fehlmeldung',
    size: 2,
    href: 'fehlmeldung',
  },
  {
    text: 'Fehlschlag',
    size: 2,
    href: 'fehlschlag',
  },
  {
    text: 'Fehlurteil',
    size: 2,
    href: 'fehlurteil',
  },
  {
    text: 'Fehlgriff',
    size: 2,
    href: 'fehlgriff',
  },
  {
    text: 'Fehleinschätzung',
    size: 2,
    href: 'fehleinschaetzung',
  },
  {
    text: 'Leumundszeuge',
    size: 2,
    href: 'leumundszeuge',
  },
  {
    text: 'Ausgleichsbeitrag',
    size: 2,
    href: 'ausgleichsbeitrag',
  },
  {
    text: 'lohnrelevant',
    size: 2,
    href: 'lohnrelevant',
  },
  {
    text: 'Ablaufkanal',
    size: 2,
    href: 'ablaufkanal',
  },
  {
    text: 'Arbeitsbewertung',
    size: 2,
    href: 'arbeitsbewertung',
  },
  {
    text: 'Datenschutzbeauftragter',
    size: 2,
    href: 'datenschutzbeauftragter',
  },
  {
    text: 'Eventualantrag',
    size: 2,
    href: 'eventualantrag',
  },
  {
    text: 'Mitträgerschaft',
    size: 2,
    href: 'mittraegerschaft',
  },
  {
    text: 'Nachhaltigkeit',
    size: 2,
    href: 'nachhaltigkeit',
  },
  {
    text: 'Fachgruppe',
    size: 2,
    href: 'fachgruppe',
  },
  {
    text: 'Konjunkturverflachung',
    size: 2,
    href: 'konjunkturverflachung',
  },
  {
    text: 'eventualiter',
    size: 2,
    href: 'eventualiter',
  },
  {
    text: 'Finanzpolitik',
    size: 2,
    href: 'finanzpolitik',
  },
  {
    text: 'Ordnungspolitik',
    size: 2,
    href: 'ordnungspolitik',
  },
  {
    text: 'personalaufwendig',
    size: 2,
    href: 'personalaufwendig',
  },
  {
    text: 'Bagatellklausel',
    size: 2,
    href: 'bagatellklausel',
  },
  {
    text: 'Kanister',
    size: 2,
    href: 'kanister',
  },
  {
    text: 'Fiskalpolitik',
    size: 2,
    href: 'fiskalpolitik',
  },
  {
    text: 'Beilage',
    size: 2,
    href: 'beilage',
  },
  {
    text: 'Verkehrsplanung',
    size: 2,
    href: 'verkehrsplanung',
  },
  {
    text: 'sachgemäss',
    size: 2,
    href: 'sachgemaess',
  },
  {
    text: 'Ausgangspunkt',
    size: 2,
    href: 'ausgangspunkt',
  },
  {
    text: 'Personalaufwand',
    size: 2,
    href: 'personalaufwand',
  },
  {
    text: 'Leistungsfähigkeit',
    size: 2,
    href: 'leistungsfaehigkeit',
  },
  {
    text: 'erörtern',
    size: 2,
    href: 'eroertern',
  },
  {
    text: 'Erreichung',
    size: 2,
    href: 'erreichung',
  },
  {
    text: 'Steuerungsmassnahme',
    size: 1,
    href: 'steuerungsmassnahme',
  },
  {
    text: 'Selbsthilfemassnahmen',
    size: 1,
    href: 'selbsthilfemassnahmen',
  },
  {
    text: 'Aggregat',
    size: 1,
    href: 'aggregat',
  },
  {
    text: 'anfallen',
    size: 1,
    href: 'anfallen',
  },
  {
    text: 'Bagatellfall',
    size: 1,
    href: 'bagatellfall',
  },
  {
    text: 'Vermittlungsvorschlag',
    size: 1,
    href: 'vermittlungsvorschlag',
  },
  {
    text: 'Vermittlungsgebühr',
    size: 1,
    href: 'vermittlungsgebuehr',
  },
  {
    text: 'Vermittlungsanstalt',
    size: 1,
    href: 'vermittlungsanstalt',
  },
  {
    text: 'Vermittlungsstelle',
    size: 1,
    href: 'vermittlungsstelle',
  },
  {
    text: 'Vermögenheit',
    size: 1,
    href: 'vermoegenheit',
  },
  {
    text: 'Vermögensabsonderung',
    size: 1,
    href: 'vermoegensabsonderung',
  },
  {
    text: 'Vermögensanfall',
    size: 1,
    href: 'vermoegensanfall',
  },
  {
    text: 'Vermögensdelikt',
    size: 1,
    href: 'vermoegensdelikt',
  },
  {
    text: 'wahrheitsgemäss',
    size: 1,
    href: 'wahrheitsgemaess',
  },
  {
    text: 'anvisieren',
    size: 1,
    href: 'anvisieren',
  },
  {
    text: 'Arbeitsspitzen',
    size: 1,
    href: 'arbeitsspitzen',
  },
  {
    text: 'aufführen',
    size: 1,
    href: 'auffuehren',
  },
  {
    text: 'aufklären',
    size: 1,
    href: 'aufklaeren',
  },
  {
    text: 'Aufklärung',
    size: 1,
    href: 'aufklaerung',
  },
  {
    text: 'Aufkommen',
    size: 1,
    href: 'aufkommen',
  },
  {
    text: 'Planungsablauf',
    size: 1,
    href: 'planungsablauf',
  },
  {
    text: 'Ausbau',
    size: 1,
    href: 'ausbau',
  },
  {
    text: 'auseinandersetzen',
    size: 1,
    href: 'auseinandersetzen',
  },
  {
    text: 'mildernd',
    size: 1,
    href: 'mildernd',
  },
  {
    text: 'ausgerechnet',
    size: 1,
    href: 'ausgerechnet',
  },
  {
    text: 'Ausgestaltung',
    size: 1,
    href: 'ausgestaltung',
  },
  {
    text: 'ausgiebig',
    size: 1,
    href: 'ausgiebig',
  },
  {
    text: 'Ausläufer',
    size: 1,
    href: 'auslaeufer',
  },
  {
    text: 'ausschöpfen',
    size: 1,
    href: 'ausschoepfen',
  },
  {
    text: 'Ausschreitung',
    size: 1,
    href: 'ausschreitung',
  },
  {
    text: 'Aussenseiter',
    size: 1,
    href: 'aussenseiter',
  },
  {
    text: 'aussichtslos',
    size: 1,
    href: 'aussichtslos',
  },
  {
    text: 'auswerten',
    size: 1,
    href: 'auswerten',
  },
  {
    text: 'Auswirkung',
    size: 1,
    href: 'auswirkung',
  },
  {
    text: 'baldmöglichst',
    size: 1,
    href: 'baldmoeglichst',
  },
  {
    text: 'basieren',
    size: 1,
    href: 'basieren',
  },
  {
    text: 'Mindmap',
    size: 1,
    href: 'mindmap',
  },
  {
    text: 'beanstanden',
    size: 1,
    href: 'beanstanden',
  },
  {
    text: 'Bedenken',
    size: 1,
    href: 'bedenken',
  },
  {
    text: 'Bedienung',
    size: 1,
    href: 'bedienung',
  },
  {
    text: 'beeinflussen',
    size: 1,
    href: 'beeinflussen',
  },
  {
    text: 'beeinträchtigen',
    size: 1,
    href: 'beeintraechtigen',
  },
  {
    text: 'befürworten',
    size: 1,
    href: 'befuerworten',
  },
  {
    text: 'Befürwortung',
    size: 1,
    href: 'befuerwortung',
  },
  {
    text: 'Begebenheit',
    size: 1,
    href: 'begebenheit',
  },
  {
    text: 'Begehung',
    size: 1,
    href: 'begehung',
  },
  {
    text: 'Begleiterscheinung',
    size: 1,
    href: 'begleiterscheinung',
  },
  {
    text: 'begrüssenswert',
    size: 1,
    href: 'begruessenswert',
  },
  {
    text: 'Begutachtung',
    size: 1,
    href: 'begutachtung',
  },
  {
    text: 'Behandlung',
    size: 1,
    href: 'behandlung',
  },
  {
    text: 'Beharrung',
    size: 1,
    href: 'beharrung',
  },
  {
    text: 'beheben',
    size: 1,
    href: 'beheben',
  },
  {
    text: 'behelfsmässig',
    size: 1,
    href: 'behelfsmaessig',
  },
  {
    text: 'Behinderung',
    size: 1,
    href: 'behinderung',
  },
  {
    text: 'Behutsamkeit',
    size: 1,
    href: 'behutsamkeit',
  },
  {
    text: 'beipflichten',
    size: 1,
    href: 'beipflichten',
  },
  {
    text: 'bekömmlich',
    size: 1,
    href: 'bekoemmlich',
  },
  {
    text: 'belastbar',
    size: 1,
    href: 'belastbar',
  },
  {
    text: 'Beleg',
    size: 1,
    href: 'beleg',
  },
  {
    text: 'Bemühung',
    size: 1,
    href: 'bemuehung',
  },
  {
    text: 'bereinigen',
    size: 1,
    href: 'bereinigen',
  },
  {
    text: 'Bereinigung',
    size: 1,
    href: 'bereinigung',
  },
  {
    text: 'bereit',
    size: 1,
    href: 'bereit',
  },
  {
    text: 'Bereitstellung',
    size: 1,
    href: 'bereitstellung',
  },
  {
    text: 'berücksichtigen',
    size: 1,
    href: 'beruecksichtigen',
  },
  {
    text: 'Datenschutzbearbeiter',
    size: 1,
    href: 'datenschutzbearbeiter',
  },
  {
    text: 'beschaffungsreif',
    size: 1,
    href: 'beschaffungsreif',
  },
  {
    text: 'beschriften',
    size: 1,
    href: 'beschriften',
  },
  {
    text: 'bestreiten',
    size: 1,
    href: 'bestreiten',
  },
  {
    text: 'Beteiligter',
    size: 1,
    href: 'beteiligter',
  },
  {
    text: 'Betriebsbuchhaltung',
    size: 1,
    href: 'betriebsbuchhaltung',
  },
  {
    text: 'Betreffnis',
    size: 1,
    href: 'betreffnis',
  },
  {
    text: 'nationalbewusst',
    size: 1,
    href: 'nationalbewusst',
  },
  {
    text: 'betrieblich',
    size: 1,
    href: 'betrieblich',
  },
  {
    text: 'Betriebswirtschaft',
    size: 1,
    href: 'betriebswirtschaft',
  },
  {
    text: 'bewältigen',
    size: 1,
    href: 'bewaeltigen',
  },
  {
    text: 'bewenden lassen',
    size: 1,
    href: 'bewenden-lassen',
  },
  {
    text: 'bewerkstelligen',
    size: 1,
    href: 'bewerkstelligen',
  },
  {
    text: 'Bewertung',
    size: 1,
    href: 'bewertung',
  },
  {
    text: 'bewirken',
    size: 1,
    href: 'bewirken',
  },
  {
    text: 'Bewirtschaftung',
    size: 1,
    href: 'bewirtschaftung',
  },
  {
    text: 'beziehungsweise',
    size: 1,
    href: 'beziehungsweise',
  },
  {
    text: 'Bezüger',
    size: 1,
    href: 'bezueger',
  },
  {
    text: 'Blockzeit',
    size: 1,
    href: 'blockzeit',
  },
  {
    text: 'dahinfallen',
    size: 1,
    href: 'dahinfallen',
  },
  {
    text: 'Daten',
    size: 1,
    href: 'daten',
  },
  {
    text: 'Einbauschrank',
    size: 1,
    href: 'einbauschrank',
  },
  {
    text: 'Einbaufehler',
    size: 1,
    href: 'einbaufehler',
  },
  {
    text: 'Denkzettel',
    size: 1,
    href: 'denkzettel',
  },
  {
    text: 'Dienstweg',
    size: 1,
    href: 'dienstweg',
  },
  {
    text: 'Diskrepanz',
    size: 1,
    href: 'diskrepanz',
  },
  {
    text: 'Doppelbeschäftigung',
    size: 1,
    href: 'doppelbeschaeftigung',
  },
  {
    text: 'Doppelspurigkeit',
    size: 1,
    href: 'doppelspurigkeit',
  },
  {
    text: 'Durchlässigkeit',
    size: 1,
    href: 'durchlaessigkeit',
  },
  {
    text: 'durchweg',
    size: 1,
    href: 'durchweg',
  },
  {
    text: 'Eigenart',
    size: 1,
    href: 'eigenart',
  },
  {
    text: 'Eigentor',
    size: 1,
    href: 'eigentor',
  },
  {
    text: 'Eigenwirtschaft',
    size: 1,
    href: 'eigenwirtschaft',
  },
  {
    text: 'Einbaubad',
    size: 1,
    href: 'einbaubad',
  },
  {
    text: 'Eignungsprüfung',
    size: 1,
    href: 'eignungspruefung',
  },
  {
    text: 'Einbau',
    size: 1,
    href: 'einbau',
  },
  {
    text: 'eindeutig',
    size: 1,
    href: 'eindeutig',
  },
  {
    text: 'Einführung',
    size: 1,
    href: 'einfuehrung',
  },
  {
    text: 'einlässlich',
    size: 1,
    href: 'einlaesslich',
  },
  {
    text: 'einschlägig',
    size: 1,
    href: 'einschlaegig',
  },
  {
    text: 'Einseitigkeit',
    size: 1,
    href: 'einseitigkeit',
  },
  {
    text: 'Einwand',
    size: 1,
    href: 'einwand',
  },
  {
    text: 'Einzugsgebiet',
    size: 1,
    href: 'einzugsgebiet',
  },
  {
    text: 'Engagement',
    size: 1,
    href: 'engagement',
  },
  {
    text: 'Entflechtung',
    size: 1,
    href: 'entflechtung',
  },
  {
    text: 'entgegenkommen',
    size: 1,
    href: 'entgegenkommen',
  },
  {
    text: 'Entkrampfung',
    size: 1,
    href: 'entkrampfung',
  },
  {
    text: 'entschärfen',
    size: 1,
    href: 'entschaerfen',
  },
  {
    text: 'Entschärfung',
    size: 1,
    href: 'entschaerfung',
  },
  {
    text: 'entsprechen',
    size: 1,
    href: 'entsprechen',
  },
  {
    text: 'Entwicklung',
    size: 1,
    href: 'entwicklung',
  },
  {
    text: 'Breitensport',
    size: 1,
    href: 'breitensport',
  },
  {
    text: 'absurd',
    size: 1,
    href: 'absurd',
  },
  {
    text: 'Erhebung',
    size: 1,
    href: 'erhebung',
  },
  {
    text: 'erneut',
    size: 1,
    href: 'erneut',
  },
  {
    text: 'erschliessen',
    size: 1,
    href: 'erschliessen',
  },
  {
    text: 'Erstarrung',
    size: 1,
    href: 'erstarrung',
  },
  {
    text: 'eruieren',
    size: 1,
    href: 'eruieren',
  },
  {
    text: 'eventuell',
    size: 1,
    href: 'eventuell',
  },
  {
    text: 'Exponent',
    size: 1,
    href: 'exponent',
  },
  {
    text: 'Faustregel',
    size: 1,
    href: 'faustregel',
  },
  {
    text: 'Fehlerquote',
    size: 1,
    href: 'fehlerquote',
  },
  {
    text: 'freizügig',
    size: 1,
    href: 'freizuegig',
  },
  {
    text: 'anlageintensiv',
    size: 1,
    href: 'anlageintensiv',
  },
  {
    text: 'personalintensiv',
    size: 1,
    href: 'personalintensiv',
  },
  {
    text: 'kapitalintensiv',
    size: 1,
    href: 'kapitalintensiv',
  },
  {
    text: 'Gedankengut',
    size: 1,
    href: 'gedankengut',
  },
  {
    text: 'Gegebenheit',
    size: 1,
    href: 'gegebenheit',
  },
  {
    text: 'Gentlemansdelikt',
    size: 1,
    href: 'gentlemansdelikt',
  },
  {
    text: 'Handänderung',
    size: 1,
    href: 'handaenderung',
  },
  {
    text: 'Anstaltspflege',
    size: 1,
    href: 'anstaltspflege',
  },
  {
    text: 'selbst',
    size: 1,
    href: 'selbst',
  },
  {
    text: 'konsequenterweise',
    size: 1,
    href: 'konsequenterweise',
  },
  {
    text: 'Koppelwald',
    size: 1,
    href: 'koppelwald',
  },
  {
    text: 'Koppelkurs',
    size: 1,
    href: 'koppelkurs',
  },
  {
    text: 'Lidlohn',
    size: 1,
    href: 'lidlohn',
  },
  {
    text: 'Nachfrage',
    size: 1,
    href: 'nachfrage',
  },
  {
    text: 'Nachtrag',
    size: 1,
    href: 'nachtrag',
  },
  {
    text: 'Betreuer',
    size: 1,
    href: 'betreuer',
  },
  {
    text: 'Nachwuchs',
    size: 1,
    href: 'nachwuchs',
  },
  {
    text: 'nahelegen',
    size: 1,
    href: 'nahelegen',
  },
  {
    text: 'naheliegen',
    size: 1,
    href: 'naheliegen',
  },
  {
    text: 'Novelle',
    size: 1,
    href: 'novelle',
  },
  {
    text: 'nüchtern',
    size: 1,
    href: 'nuechtern',
  },
  {
    text: 'Obliegenheit',
    size: 1,
    href: 'obliegenheit',
  },
  {
    text: 'Optimierung',
    size: 1,
    href: 'optimierung',
  },
  {
    text: 'Park-and-ride-System',
    size: 1,
    href: 'park-and-ride-system',
  },
  {
    text: 'Partnerschaft',
    size: 1,
    href: 'partnerschaft',
  },
  {
    text: 'pendeln',
    size: 1,
    href: 'pendeln',
  },
  {
    text: 'Pendler',
    size: 1,
    href: 'pendler',
  },
  {
    text: 'Personalien',
    size: 1,
    href: 'personalien',
  },
  {
    text: 'Planer',
    size: 1,
    href: 'planer',
  },
  {
    text: 'Plausch',
    size: 1,
    href: 'plausch',
  },
  {
    text: 'politisch',
    size: 1,
    href: 'politisch',
  },
  {
    text: 'Postulat',
    size: 1,
    href: 'postulat',
  },
  {
    text: 'präjudizieren',
    size: 1,
    href: 'praejudizieren',
  },
  {
    text: 'Problematik',
    size: 1,
    href: 'problematik',
  },
  {
    text: 'problematisch',
    size: 1,
    href: 'problematisch',
  },
  {
    text: 'Prüfstein',
    size: 1,
    href: 'pruefstein',
  },
  {
    text: 'Quertreiberei',
    size: 1,
    href: 'quertreiberei',
  },
  {
    text: 'Querulant',
    size: 1,
    href: 'querulant',
  },
  {
    text: 'Quervergleich',
    size: 1,
    href: 'quervergleich',
  },
  {
    text: 'Quote',
    size: 1,
    href: 'quote',
  },
  {
    text: 'Rahmenbedingungen',
    size: 1,
    href: 'rahmenbedingungen',
  },
  {
    text: 'Realpolitik',
    size: 1,
    href: 'realpolitik',
  },
  {
    text: 'rechthaberisch',
    size: 1,
    href: 'rechthaberisch',
  },
  {
    text: 'rechtmässig',
    size: 1,
    href: 'rechtmaessig',
  },
  {
    text: 'rechtswidrig',
    size: 1,
    href: 'rechtswidrig',
  },
  {
    text: 'reell',
    size: 1,
    href: 'reell',
  },
  {
    text: 'Referat',
    size: 1,
    href: 'referat',
  },
  {
    text: 'Registratur',
    size: 1,
    href: 'registratur',
  },
  {
    text: 'Reizwort',
    size: 1,
    href: 'reizwort',
  },
  {
    text: 'richtungsweisend',
    size: 1,
    href: 'richtungsweisend',
  },
  {
    text: 'Rubrik',
    size: 1,
    href: 'rubrik',
  },
  {
    text: 'rubrizieren',
    size: 1,
    href: 'rubrizieren',
  },
  {
    text: 'Rückkopplung',
    size: 1,
    href: 'rueckkopplung',
  },
  {
    text: 'rückwärtskrebsen',
    size: 1,
    href: 'rueckwaertskrebsen',
  },
  {
    text: 'Sachausgaben',
    size: 1,
    href: 'sachausgaben',
  },
  {
    text: 'Sachbearbeiter',
    size: 1,
    href: 'sachbearbeiter',
  },
  {
    text: 'Sanierer',
    size: 1,
    href: 'sanierer',
  },
  {
    text: 'Sanierung',
    size: 1,
    href: 'sanierung',
  },
  {
    text: 'Schablone',
    size: 1,
    href: 'schablone',
  },
  {
    text: 'Schattenwirtschaft',
    size: 1,
    href: 'schattenwirtschaft',
  },
  {
    text: 'schlitzohrig',
    size: 1,
    href: 'schlitzohrig',
  },
  {
    text: 'schonend',
    size: 1,
    href: 'schonend',
  },
  {
    text: 'Schönheitsfehler',
    size: 1,
    href: 'schoenheitsfehler',
  },
  {
    text: 'Schrumpfung',
    size: 1,
    href: 'schrumpfung',
  },
  {
    text: 'schubladisieren',
    size: 1,
    href: 'schubladisieren',
  },
  {
    text: 'Schulterschluss',
    size: 1,
    href: 'schulterschluss',
  },
  {
    text: 'Seilziehen',
    size: 1,
    href: 'seilziehen',
  },
  {
    text: 'Selbstdarstellung',
    size: 1,
    href: 'selbstdarstellung',
  },
  {
    text: 'Selbsthilfe',
    size: 1,
    href: 'selbsthilfe',
  },
  {
    text: 'selbsttragend',
    size: 1,
    href: 'selbsttragend',
  },
  {
    text: 'Selbstunfall',
    size: 1,
    href: 'selbstunfall',
  },
  {
    text: 'Selbstverständnis',
    size: 1,
    href: 'selbstverstaendnis',
  },
  {
    text: 'Selbstzweck',
    size: 1,
    href: 'selbstzweck',
  },
  {
    text: 'Signalwirkung',
    size: 1,
    href: 'signalwirkung',
  },
  {
    text: 'sistieren',
    size: 1,
    href: 'sistieren',
  },
  {
    text: 'Soll-Bestand',
    size: 1,
    href: 'soll-bestand',
  },
  {
    text: 'Sparte',
    size: 1,
    href: 'sparte',
  },
  {
    text: 'Spurensicherung',
    size: 1,
    href: 'spurensicherung',
  },
  {
    text: 'Stabstelle',
    size: 1,
    href: 'stabstelle',
  },
  {
    text: 'Stamm',
    size: 1,
    href: 'stamm',
  },
  {
    text: 'standhaft',
    size: 1,
    href: 'standhaft',
  },
  {
    text: 'Standortbestimmung',
    size: 1,
    href: 'standortbestimmung',
  },
  {
    text: 'Steckbrief',
    size: 1,
    href: 'steckbrief',
  },
  {
    text: 'Stetigkeit',
    size: 1,
    href: 'stetigkeit',
  },
  {
    text: 'Stichentscheid',
    size: 1,
    href: 'stichentscheid',
  },
  {
    text: 'stichhaltig',
    size: 1,
    href: 'stichhaltig',
  },
  {
    text: 'stornieren',
    size: 1,
    href: 'stornieren',
  },
  {
    text: 'Störung',
    size: 1,
    href: 'stoerung',
  },
  {
    text: 'subsumieren',
    size: 1,
    href: 'subsumieren',
  },
  {
    text: 'Systematik',
    size: 1,
    href: 'systematik',
  },
  {
    text: 'Tagespolitik',
    size: 1,
    href: 'tagespolitik',
  },
  {
    text: 'tangieren',
    size: 1,
    href: 'tangieren',
  },
  {
    text: 'Technologiefolgeabschätzung',
    size: 1,
    href: 'technologiefolgeabschaetzung',
  },
  {
    text: 'tipptopp',
    size: 1,
    href: 'tipptopp',
  },
  {
    text: 'tragbar',
    size: 1,
    href: 'tragbar',
  },
  {
    text: 'Trägerschaft',
    size: 1,
    href: 'traegerschaft',
  },
  {
    text: 'tragfähig',
    size: 1,
    href: 'tragfaehig',
  },
  {
    text: 'Tragfähigkeit',
    size: 1,
    href: 'tragfaehigkeit',
  },
  {
    text: 'Trakt',
    size: 1,
    href: 'trakt',
  },
  {
    text: 'Traktandum',
    size: 1,
    href: 'traktandum',
  },
  {
    text: 'Transaktion',
    size: 1,
    href: 'transaktion',
  },
  {
    text: 'Umbildung',
    size: 1,
    href: 'umbildung',
  },
  {
    text: 'umdenken',
    size: 1,
    href: 'umdenken',
  },
  {
    text: 'umkämpfen',
    size: 1,
    href: 'umkaempfen',
  },
  {
    text: 'Umlage',
    size: 1,
    href: 'umlage',
  },
  {
    text: 'Umlegung',
    size: 1,
    href: 'umlegung',
  },
  {
    text: 'Umsatz',
    size: 1,
    href: 'umsatz',
  },
  {
    text: 'Umschichtung',
    size: 1,
    href: 'umschichtung',
  },
  {
    text: 'Umschlag',
    size: 1,
    href: 'umschlag',
  },
  {
    text: 'Umschreibung',
    size: 1,
    href: 'umschreibung',
  },
  {
    text: 'Umschulung',
    size: 1,
    href: 'umschulung',
  },
  {
    text: 'Umwelt',
    size: 1,
    href: 'umwelt',
  },
  {
    text: 'umweltbedingt',
    size: 1,
    href: 'umweltbedingt',
  },
  {
    text: 'umweltfreundlich',
    size: 1,
    href: 'umweltfreundlich',
  },
  {
    text: 'unbefristet',
    size: 1,
    href: 'unbefristet',
  },
  {
    text: 'unberufen',
    size: 1,
    href: 'unberufen',
  },
  {
    text: 'Unstimmigkeit',
    size: 1,
    href: 'unstimmigkeit',
  },
  {
    text: 'unterbieten',
    size: 1,
    href: 'unterbieten',
  },
  {
    text: 'unverantwortlich',
    size: 1,
    href: 'unverantwortlich',
  },
  {
    text: 'unzukömmlich',
    size: 1,
    href: 'unzukoemmlich',
  },
  {
    text: 'unzweckmässig',
    size: 1,
    href: 'unzweckmaessig',
  },
  {
    text: 'ursächlich',
    size: 1,
    href: 'ursaechlich',
  },
  {
    text: 'ventilieren',
    size: 1,
    href: 'ventilieren',
  },
  {
    text: 'veranlassen',
    size: 1,
    href: 'veranlassen',
  },
  {
    text: 'Veranlassung',
    size: 1,
    href: 'veranlassung',
  },
  {
    text: 'Veranstaltung',
    size: 1,
    href: 'veranstaltung',
  },
  {
    text: 'Verarbeitung',
    size: 1,
    href: 'verarbeitung',
  },
  {
    text: 'Verbraucher',
    size: 1,
    href: 'verbraucher',
  },
  {
    text: 'Veredlung',
    size: 1,
    href: 'veredlung',
  },
  {
    text: 'verfehlt',
    size: 1,
    href: 'verfehlt',
  },
  {
    text: 'Verfremdung',
    size: 1,
    href: 'verfremdung',
  },
  {
    text: 'Verkehrspolitik',
    size: 1,
    href: 'verkehrspolitik',
  },
  {
    text: 'Vernehmlassung',
    size: 1,
    href: 'vernehmlassung',
  },
  {
    text: 'Verrechtlichung',
    size: 1,
    href: 'verrechtlichung',
  },
  {
    text: 'verschlechtern',
    size: 1,
    href: 'verschlechtern',
  },
  {
    text: 'Verschlimmbesserung',
    size: 1,
    href: 'verschlimmbesserung',
  },
  {
    text: 'Versorgung',
    size: 1,
    href: 'versorgung',
  },
  {
    text: 'verteufeln',
    size: 1,
    href: 'verteufeln',
  },
  {
    text: 'Verunsicherung',
    size: 1,
    href: 'verunsicherung',
  },
  {
    text: 'verwässern',
    size: 1,
    href: 'verwaessern',
  },
  {
    text: 'Verwertung',
    size: 1,
    href: 'verwertung',
  },
  {
    text: 'Verwilderung',
    size: 1,
    href: 'verwilderung',
  },
  {
    text: 'vielseitig',
    size: 1,
    href: 'vielseitig',
  },
  {
    text: 'Volltreffer',
    size: 1,
    href: 'volltreffer',
  },
  {
    text: 'vollumfänglich',
    size: 1,
    href: 'vollumfaenglich',
  },
  {
    text: 'Vordenker',
    size: 1,
    href: 'vordenker',
  },
  {
    text: 'vordringlich',
    size: 1,
    href: 'vordringlich',
  },
  {
    text: 'Vordringlichkeit',
    size: 1,
    href: 'vordringlichkeit',
  },
  {
    text: 'vorgängig',
    size: 1,
    href: 'vorgaengig',
  },
  {
    text: 'Vorlage',
    size: 1,
    href: 'vorlage',
  },
  {
    text: 'Vormarsch',
    size: 1,
    href: 'vormarsch',
  },
  {
    text: 'vorprogrammiert',
    size: 1,
    href: 'vorprogrammiert',
  },
  {
    text: 'Patient',
    size: 1,
    href: 'patient',
  },
  {
    text: 'Vorschub leisten',
    size: 1,
    href: 'vorschub-leisten',
  },
  {
    text: 'Vorschubleistung',
    size: 1,
    href: 'vorschubleistung',
  },
  {
    text: 'vorwegnehmen',
    size: 1,
    href: 'vorwegnehmen',
  },
  {
    text: 'Wahrung',
    size: 1,
    href: 'wahrung',
  },
  {
    text: 'Wasserzins',
    size: 1,
    href: 'wasserzins',
  },
  {
    text: 'Wechselwirkung',
    size: 1,
    href: 'wechselwirkung',
  },
  {
    text: 'Wegleitung',
    size: 1,
    href: 'wegleitung',
  },
  {
    text: 'Weiterausbau',
    size: 1,
    href: 'weiterausbau',
  },
  {
    text: 'weitgehend',
    size: 1,
    href: 'weitgehend',
  },
  {
    text: 'welsch',
    size: 1,
    href: 'welsch',
  },
  {
    text: 'Weltanschauung',
    size: 1,
    href: 'weltanschauung',
  },
  {
    text: 'Werkhof',
    size: 1,
    href: 'werkhof',
  },
  {
    text: 'Wert legen',
    size: 1,
    href: 'wert-legen',
  },
  {
    text: 'Wesen',
    size: 1,
    href: 'wesen',
  },
  {
    text: 'Widerstreit',
    size: 1,
    href: 'widerstreit',
  },
  {
    text: 'Wirtschaftspolitik',
    size: 1,
    href: 'wirtschaftspolitik',
  },
  {
    text: 'Wohlfahrt',
    size: 1,
    href: 'wohlfahrt',
  },
  {
    text: 'Wohnstube',
    size: 1,
    href: 'wohnstube',
  },
  {
    text: 'Wohnzimmer',
    size: 1,
    href: 'wohnzimmer',
  },
  {
    text: 'würdigen',
    size: 1,
    href: 'wuerdigen',
  },
  {
    text: 'turnusgemäss',
    size: 1,
    href: 'turnusgemaess',
  },
  {
    text: 'zeitigen',
    size: 1,
    href: 'zeitigen',
  },
  {
    text: 'zersetzend',
    size: 1,
    href: 'zersetzend',
  },
  {
    text: 'Aufwendung',
    size: 1,
    href: 'aufwendung',
  },
  {
    text: 'Zugeständnis',
    size: 1,
    href: 'zugestaendnis',
  },
  {
    text: 'Zumutung',
    size: 1,
    href: 'zumutung',
  },
  {
    text: 'zuordnen',
    size: 1,
    href: 'zuordnen',
  },
  {
    text: 'zurückkrebsen',
    size: 1,
    href: 'zurueckkrebsen',
  },
  {
    text: 'zurückstellen',
    size: 1,
    href: 'zurueckstellen',
  },
  {
    text: 'Zuteilung',
    size: 1,
    href: 'zuteilung',
  },
  {
    text: 'zutreffen',
    size: 1,
    href: 'zutreffen',
  },
  {
    text: 'zwielichtig',
    size: 1,
    href: 'zwielichtig',
  },
  {
    text: 'zuvorkommend',
    size: 1,
    href: 'zuvorkommend',
  },
  {
    text: 'zuzüglich',
    size: 1,
    href: 'zuzueglich',
  },
  {
    text: 'zwar',
    size: 1,
    href: 'zwar',
  },
  {
    text: 'Zweckmässigkeit',
    size: 1,
    href: 'zweckmaessigkeit',
  },
  {
    text: 'Zwielicht',
    size: 1,
    href: 'zwielicht',
  },
  {
    text: 'Quereinsteiger',
    size: 1,
    href: 'quereinsteiger',
  },
  {
    text: 'Schnupperlehre',
    size: 1,
    href: 'schnupperlehre',
  },
  {
    text: 'Bagatellklage',
    size: 1,
    href: 'bagatellklage',
  },
  {
    text: 'Bagatellschulden',
    size: 1,
    href: 'bagatellschulden',
  },
  {
    text: 'Bagatellkommission',
    size: 1,
    href: 'bagatellkommission',
  },
  {
    text: 'Bagatellunfall',
    size: 1,
    href: 'bagatellunfall',
  },
  {
    text: 'Bagatellvertrag',
    size: 1,
    href: 'bagatellvertrag',
  },
  {
    text: 'Bedarfsartikel',
    size: 1,
    href: 'bedarfsartikel',
  },
  {
    text: 'Abbaustoffwechsel',
    size: 1,
    href: 'abbaustoffwechsel',
  },
  {
    text: 'Abbauentschädigung',
    size: 1,
    href: 'abbauentschaedigung',
  },
  {
    text: 'Zollabfertigung',
    size: 1,
    href: 'zollabfertigung',
  },
  {
    text: 'Zugabfertigung',
    size: 1,
    href: 'zugabfertigung',
  },
  {
    text: 'Ablaufständer',
    size: 1,
    href: 'ablaufstaender',
  },
  {
    text: 'ableitend',
    size: 1,
    href: 'ableitend',
  },
  {
    text: 'Ableitungssilbe',
    size: 1,
    href: 'ableitungssilbe',
  },
  {
    text: 'Abnahmefrist',
    size: 1,
    href: 'abnahmefrist',
  },
  {
    text: 'Abnahmeland',
    size: 1,
    href: 'abnahmeland',
  },
  {
    text: 'Abnahmeverweigerung',
    size: 1,
    href: 'abnahmeverweigerung',
  },
  {
    text: 'Eidabnahme',
    size: 1,
    href: 'eidabnahme',
  },
  {
    text: 'Prüfungsabnahme',
    size: 1,
    href: 'pruefungsabnahme',
  },
  {
    text: 'Wertschriftenabnahme',
    size: 1,
    href: 'wertschriftenabnahme',
  },
  {
    text: 'Eidablegung',
    size: 1,
    href: 'eidablegung',
  },
  {
    text: 'Gasabnehmer',
    size: 1,
    href: 'gasabnehmer',
  },
  {
    text: 'Abnehmerland',
    size: 1,
    href: 'abnehmerland',
  },
  {
    text: 'Besoldungsabrechnung',
    size: 1,
    href: 'besoldungsabrechnung',
  },
  {
    text: 'Abschwungphase',
    size: 1,
    href: 'abschwungphase',
  },
  {
    text: 'Abstellbahnhof',
    size: 1,
    href: 'abstellbahnhof',
  },
  {
    text: 'abstellbar',
    size: 1,
    href: 'abstellbar',
  },
  {
    text: 'Abstellgleis',
    size: 1,
    href: 'abstellgleis',
  },
  {
    text: 'Abstellhebel',
    size: 1,
    href: 'abstellhebel',
  },
  {
    text: 'Abwicklungsgesellschaft',
    size: 1,
    href: 'abwicklungsgesellschaft',
  },
  {
    text: 'Abwicklungsgremium',
    size: 1,
    href: 'abwicklungsgremium',
  },
  {
    text: 'Abwicklungskonto',
    size: 1,
    href: 'abwicklungskonto',
  },
  {
    text: 'Ladeaggregat',
    size: 1,
    href: 'ladeaggregat',
  },
  {
    text: 'Alternativenergie',
    size: 1,
    href: 'alternativenergie',
  },
  {
    text: 'Alternativmedizin',
    size: 1,
    href: 'alternativmedizin',
  },
  {
    text: 'Anfallsgeld',
    size: 1,
    href: 'anfallsgeld',
  },
  {
    text: 'Anfallsrecht',
    size: 1,
    href: 'anfallsrecht',
  },
  {
    text: 'Anfallstag',
    size: 1,
    href: 'anfallstag',
  },
  {
    text: 'Anfallssteuer',
    size: 1,
    href: 'anfallssteuer',
  },
  {
    text: 'anfällig',
    size: 1,
    href: 'anfaellig',
  },
  {
    text: 'Parkanlage',
    size: 1,
    href: 'parkanlage',
  },
  {
    text: 'Anlaufkredit',
    size: 1,
    href: 'anlaufkredit',
  },
  {
    text: 'Anlaufhafen',
    size: 1,
    href: 'anlaufhafen',
  },
  {
    text: 'Abbaugerechtigkeit',
    size: 1,
    href: 'abbaugerechtigkeit',
  },
  {
    text: 'Stellenabbau',
    size: 1,
    href: 'stellenabbau',
  },
  {
    text: 'Stressabbau',
    size: 1,
    href: 'stressabbau',
  },
  {
    text: 'Abrechnungsbank',
    size: 1,
    href: 'abrechnungsbank',
  },
  {
    text: 'Materialabrechnung',
    size: 1,
    href: 'materialabrechnung',
  },
  {
    text: 'abschöpfen',
    size: 1,
    href: 'abschoepfen',
  },
  {
    text: 'unabsehbar',
    size: 1,
    href: 'unabsehbar',
  },
  {
    text: 'Abstellfläche',
    size: 1,
    href: 'abstellflaeche',
  },
  {
    text: 'Abstellkammer',
    size: 1,
    href: 'abstellkammer',
  },
  {
    text: 'Abwicklungsstelle',
    size: 1,
    href: 'abwicklungsstelle',
  },
  {
    text: 'Alternativszene',
    size: 1,
    href: 'alternativszene',
  },
  {
    text: 'Alternative',
    size: 1,
    href: 'alternative',
  },
  {
    text: 'Alternativkultur',
    size: 1,
    href: 'alternativkultur',
  },
  {
    text: 'ausseramtlich',
    size: 1,
    href: 'ausseramtlich',
  },
  {
    text: 'ehrenamtlich',
    size: 1,
    href: 'ehrenamtlich',
  },
  {
    text: 'nebenamtlich',
    size: 1,
    href: 'nebenamtlich',
  },
  {
    text: 'vollamtlich',
    size: 1,
    href: 'vollamtlich',
  },
  {
    text: 'Anerkenntnisurteil',
    size: 1,
    href: 'anerkenntnisurteil',
  },
  {
    text: 'Bedarfsprämie',
    size: 1,
    href: 'bedarfspraemie',
  },
  {
    text: 'Bedarfstermin',
    size: 1,
    href: 'bedarfstermin',
  },
  {
    text: 'Bedarfszug',
    size: 1,
    href: 'bedarfszug',
  },
  {
    text: 'Bürobedarf',
    size: 1,
    href: 'buerobedarf',
  },
  {
    text: 'Bedarfslenkung',
    size: 1,
    href: 'bedarfslenkung',
  },
  {
    text: 'Bedarfsträger',
    size: 1,
    href: 'bedarfstraeger',
  },
  {
    text: 'Bedienungsbühne',
    size: 1,
    href: 'bedienungsbuehne',
  },
  {
    text: 'Bedienungsgang',
    size: 1,
    href: 'bedienungsgang',
  },
  {
    text: 'Bedienungsgeld',
    size: 1,
    href: 'bedienungsgeld',
  },
  {
    text: 'Bedienungstritt',
    size: 1,
    href: 'bedienungstritt',
  },
  {
    text: 'Bedienungshebel',
    size: 1,
    href: 'bedienungshebel',
  },
  {
    text: 'Bedienungsvorschrift',
    size: 1,
    href: 'bedienungsvorschrift',
  },
  {
    text: 'Selbstbedienung',
    size: 1,
    href: 'selbstbedienung',
  },
  {
    text: 'Bedienungsfehler',
    size: 1,
    href: 'bedienungsfehler',
  },
  {
    text: 'empfangsbedürftig',
    size: 1,
    href: 'empfangsbeduerftig',
  },
  {
    text: 'Ansatzberichtigung',
    size: 1,
    href: 'ansatzberichtigung',
  },
  {
    text: 'Anstandsbesuch',
    size: 1,
    href: 'anstandsbesuch',
  },
  {
    text: 'Anständigkeit',
    size: 1,
    href: 'anstaendigkeit',
  },
  {
    text: 'Anstandsdame',
    size: 1,
    href: 'anstandsdame',
  },
  {
    text: 'Anstandsgefühl',
    size: 1,
    href: 'anstandsgefuehl',
  },
  {
    text: 'anstandshalber',
    size: 1,
    href: 'anstandshalber',
  },
  {
    text: 'anstandslos',
    size: 1,
    href: 'anstandslos',
  },
  {
    text: 'Anstandsort',
    size: 1,
    href: 'anstandsort',
  },
  {
    text: 'Anstandsregeln',
    size: 1,
    href: 'anstandsregeln',
  },
  {
    text: 'Anstandsrock',
    size: 1,
    href: 'anstandsrock',
  },
  {
    text: 'anstandswidrig',
    size: 1,
    href: 'anstandswidrig',
  },
  {
    text: 'Anweisungsempfänger',
    size: 1,
    href: 'anweisungsempfaenger',
  },
  {
    text: 'Anweisungsstelle',
    size: 1,
    href: 'anweisungsstelle',
  },
  {
    text: 'Postanweisung',
    size: 1,
    href: 'postanweisung',
  },
  {
    text: 'Zahlungsanweisung',
    size: 1,
    href: 'zahlungsanweisung',
  },
  {
    text: 'Anweiser',
    size: 1,
    href: 'anweiser',
  },
  {
    text: 'Schatzanweisung',
    size: 1,
    href: 'schatzanweisung',
  },
  {
    text: 'Aufbaugesinnung',
    size: 1,
    href: 'aufbaugesinnung',
  },
  {
    text: 'Aufbaudarlehen',
    size: 1,
    href: 'aufbaudarlehen',
  },
  {
    text: 'Aufbautraining',
    size: 1,
    href: 'aufbautraining',
  },
  {
    text: 'Aufbaupräparat',
    size: 1,
    href: 'aufbaupraeparat',
  },
  {
    text: 'Aufbaumittel',
    size: 1,
    href: 'aufbaumittel',
  },
  {
    text: 'Altersaufbau',
    size: 1,
    href: 'altersaufbau',
  },
  {
    text: 'Aufgeschlossenheit',
    size: 1,
    href: 'aufgeschlossenheit',
  },
  {
    text: 'Aufhebungszeichen',
    size: 1,
    href: 'aufhebungszeichen',
  },
  {
    text: 'Aufheber',
    size: 1,
    href: 'aufheber',
  },
  {
    text: 'aufhebbar',
    size: 1,
    href: 'aufhebbar',
  },
  {
    text: 'aufhebend',
    size: 1,
    href: 'aufhebend',
  },
  {
    text: 'Bildaufmachung',
    size: 1,
    href: 'bildaufmachung',
  },
  {
    text: 'Aufklärungsarbeit',
    size: 1,
    href: 'aufklaerungsarbeit',
  },
  {
    text: 'Aufkommensraum',
    size: 1,
    href: 'aufkommensraum',
  },
  {
    text: 'Aufkömmling',
    size: 1,
    href: 'aufkoemmling',
  },
  {
    text: 'Zuschaueraufkommen',
    size: 1,
    href: 'zuschaueraufkommen',
  },
  {
    text: 'Auflagefläche',
    size: 1,
    href: 'auflageflaeche',
  },
  {
    text: 'Auflagegüter',
    size: 1,
    href: 'auflagegueter',
  },
  {
    text: 'Auflageüberwachungsstelle',
    size: 1,
    href: 'auflageueberwachungsstelle',
  },
  {
    text: 'Neuauflage',
    size: 1,
    href: 'neuauflage',
  },
  {
    text: 'Produktionsauflage',
    size: 1,
    href: 'produktionsauflage',
  },
  {
    text: 'Kontingentaufstockung',
    size: 1,
    href: 'kontingentaufstockung',
  },
  {
    text: 'Auftraggeberkonto',
    size: 1,
    href: 'auftraggeberkonto',
  },
  {
    text: 'Medienauftritt',
    size: 1,
    href: 'medienauftritt',
  },
  {
    text: 'Aufwandgelder',
    size: 1,
    href: 'aufwandgelder',
  },
  {
    text: 'Ausfallbürgschaft',
    size: 1,
    href: 'ausfallbuergschaft',
  },
  {
    text: 'Ausfallfonds',
    size: 1,
    href: 'ausfallfonds',
  },
  {
    text: 'Ausfallgeld',
    size: 1,
    href: 'ausfallgeld',
  },
  {
    text: 'Ausfallhaftung',
    size: 1,
    href: 'ausfallhaftung',
  },
  {
    text: 'Ausfallstrasse',
    size: 1,
    href: 'ausfallstrasse',
  },
  {
    text: 'Ausfallstunde',
    size: 1,
    href: 'ausfallstunde',
  },
  {
    text: 'Ausfallvergütung',
    size: 1,
    href: 'ausfallverguetung',
  },
  {
    text: 'Ausfallwinkel',
    size: 1,
    href: 'ausfallwinkel',
  },
  {
    text: 'Erwerbsausfallentschädigung',
    size: 1,
    href: 'erwerbsausfallentschaedigung',
  },
  {
    text: 'Einnahmenausfall',
    size: 1,
    href: 'einnahmenausfall',
  },
  {
    text: 'Stimmausfall',
    size: 1,
    href: 'stimmausfall',
  },
  {
    text: 'Ausfallzeit',
    size: 1,
    href: 'ausfallzeit',
  },
  {
    text: 'Betriebsausfall',
    size: 1,
    href: 'betriebsausfall',
  },
  {
    text: 'Netzausfall',
    size: 1,
    href: 'netzausfall',
  },
  {
    text: 'Stromausfall',
    size: 1,
    href: 'stromausfall',
  },
  {
    text: 'aussagefähig',
    size: 1,
    href: 'aussagefaehig',
  },
  {
    text: 'Erbanfall',
    size: 1,
    href: 'erbanfall',
  },
  {
    text: 'Arbeitsanfall',
    size: 1,
    href: 'arbeitsanfall',
  },
  {
    text: 'Anlagekapital',
    size: 1,
    href: 'anlagekapital',
  },
  {
    text: 'Erbanlage',
    size: 1,
    href: 'erbanlage',
  },
  {
    text: 'Anlaufbahn',
    size: 1,
    href: 'anlaufbahn',
  },
  {
    text: 'Ansatzstück',
    size: 1,
    href: 'ansatzstueck',
  },
  {
    text: 'Beeinträchtigung',
    size: 1,
    href: 'beeintraechtigung',
  },
  {
    text: 'beeinträchtigend',
    size: 1,
    href: 'beeintraechtigend',
  },
  {
    text: 'Befundaufnahme',
    size: 1,
    href: 'befundaufnahme',
  },
  {
    text: 'Befundschein',
    size: 1,
    href: 'befundschein',
  },
  {
    text: 'Befundbuch',
    size: 1,
    href: 'befundbuch',
  },
  {
    text: 'Richtigbefund',
    size: 1,
    href: 'richtigbefund',
  },
  {
    text: 'Ortsbefund',
    size: 1,
    href: 'ortsbefund',
  },
  {
    text: 'Begehungssünde',
    size: 1,
    href: 'begehungssuende',
  },
  {
    text: 'Bahnbegehungskarte',
    size: 1,
    href: 'bahnbegehungskarte',
  },
  {
    text: 'Anweisungsschein',
    size: 1,
    href: 'anweisungsschein',
  },
  {
    text: 'Anweisungszettel',
    size: 1,
    href: 'anweisungszettel',
  },
  {
    text: 'begrifflich',
    size: 1,
    href: 'begrifflich',
  },
  {
    text: 'Begriffsbestimmung',
    size: 1,
    href: 'begriffsbestimmung',
  },
  {
    text: 'Begriffslehre',
    size: 1,
    href: 'begriffslehre',
  },
  {
    text: 'begriffsstutzig',
    size: 1,
    href: 'begriffsstutzig',
  },
  {
    text: 'aufdrängen',
    size: 1,
    href: 'aufdraengen',
  },
  {
    text: 'äufnen',
    size: 1,
    href: 'aeufnen',
  },
  {
    text: 'aufgestellt',
    size: 1,
    href: 'aufgestellt',
  },
  {
    text: 'Aufwandbesteuerung',
    size: 1,
    href: 'aufwandbesteuerung',
  },
  {
    text: 'Begrüssung',
    size: 1,
    href: 'begruessung',
  },
  {
    text: 'Beharrungszustand',
    size: 1,
    href: 'beharrungszustand',
  },
  {
    text: 'Schreibbehelf',
    size: 1,
    href: 'schreibbehelf',
  },
  {
    text: 'Rechtsbehelf',
    size: 1,
    href: 'rechtsbehelf',
  },
  {
    text: 'Notbehelf',
    size: 1,
    href: 'notbehelf',
  },
  {
    text: 'beitragsberechtigt',
    size: 1,
    href: 'beitragsberechtigt',
  },
  {
    text: 'Beitragsleistungen',
    size: 1,
    href: 'beitragsleistungen',
  },
  {
    text: 'Beitragspflicht',
    size: 1,
    href: 'beitragspflicht',
  },
  {
    text: 'Beitragswert',
    size: 1,
    href: 'beitragswert',
  },
  {
    text: 'beitragsfrei',
    size: 1,
    href: 'beitragsfrei',
  },
  {
    text: 'bejahend',
    size: 1,
    href: 'bejahend',
  },
  {
    text: 'Bejahung',
    size: 1,
    href: 'bejahung',
  },
  {
    text: 'bejahendenfalls',
    size: 1,
    href: 'bejahendenfalls',
  },
  {
    text: 'Bekenntnisfreiheit',
    size: 1,
    href: 'bekenntnisfreiheit',
  },
  {
    text: 'Bekenntnisschrift',
    size: 1,
    href: 'bekenntnisschrift',
  },
  {
    text: 'Bekenntnisschule',
    size: 1,
    href: 'bekenntnisschule',
  },
  {
    text: 'bekenntnistreu',
    size: 1,
    href: 'bekenntnistreu',
  },
  {
    text: 'Geldaufblähung',
    size: 1,
    href: 'geldaufblaehung',
  },
  {
    text: 'Belangung',
    size: 1,
    href: 'belangung',
  },
  {
    text: 'belangreich',
    size: 1,
    href: 'belangreich',
  },
  {
    text: 'belanglos',
    size: 1,
    href: 'belanglos',
  },
  {
    text: 'Steuergefälle',
    size: 1,
    href: 'steuergefaelle',
  },
  {
    text: 'Geltungsbereich',
    size: 1,
    href: 'geltungsbereich',
  },
  {
    text: 'Geltungstrieb',
    size: 1,
    href: 'geltungstrieb',
  },
  {
    text: 'Geltungssucht',
    size: 1,
    href: 'geltungssucht',
  },
  {
    text: 'standortgerecht',
    size: 1,
    href: 'standortgerecht',
  },
  {
    text: 'Gesellschafter',
    size: 1,
    href: 'gesellschafter',
  },
  {
    text: 'selbstgerecht',
    size: 1,
    href: 'selbstgerecht',
  },
  {
    text: 'Gerichtsstandsklausel',
    size: 1,
    href: 'gerichtsstandsklausel',
  },
  {
    text: 'Auffanggesellschaft',
    size: 1,
    href: 'auffanggesellschaft',
  },
  {
    text: 'Gesellschaftseinlagen',
    size: 1,
    href: 'gesellschaftseinlagen',
  },
  {
    text: 'Gesellschaftsfirma',
    size: 1,
    href: 'gesellschaftsfirma',
  },
  {
    text: 'Abendgesellschaft',
    size: 1,
    href: 'abendgesellschaft',
  },
  {
    text: 'Gesellschaftstheater',
    size: 1,
    href: 'gesellschaftstheater',
  },
  {
    text: 'Dachgesellschaft',
    size: 1,
    href: 'dachgesellschaft',
  },
  {
    text: 'Kommanditgesellschaft',
    size: 1,
    href: 'kommanditgesellschaft',
  },
  {
    text: 'Zweiggesellschaft',
    size: 1,
    href: 'zweiggesellschaft',
  },
  {
    text: 'Gastbett',
    size: 1,
    href: 'gastbett',
  },
  {
    text: 'Gastfreundschaft',
    size: 1,
    href: 'gastfreundschaft',
  },
  {
    text: 'Gasthaus',
    size: 1,
    href: 'gasthaus',
  },
  {
    text: 'Gastgewerbe',
    size: 1,
    href: 'gastgewerbe',
  },
  {
    text: 'Gaststätte',
    size: 1,
    href: 'gaststaette',
  },
  {
    text: 'Gastreferent',
    size: 1,
    href: 'gastreferent',
  },
  {
    text: 'Gastregisseur',
    size: 1,
    href: 'gastregisseur',
  },
  {
    text: 'Gasthörer',
    size: 1,
    href: 'gasthoerer',
  },
  {
    text: 'Gastarbeiter',
    size: 1,
    href: 'gastarbeiter',
  },
  {
    text: 'Gastpflanze',
    size: 1,
    href: 'gastpflanze',
  },
  {
    text: 'Gasttier',
    size: 1,
    href: 'gasttier',
  },
  {
    text: 'Gästebuch',
    size: 1,
    href: 'gaestebuch',
  },
  {
    text: 'Gästekreis',
    size: 1,
    href: 'gaestekreis',
  },
  {
    text: 'Gefällebahnhof',
    size: 1,
    href: 'gefaellebahnhof',
  },
  {
    text: 'saisongerecht',
    size: 1,
    href: 'saisongerecht',
  },
  {
    text: 'stilgerecht',
    size: 1,
    href: 'stilgerecht',
  },
  {
    text: 'risikogerechte Prämie',
    size: 1,
    href: 'risikogerechte-praemie',
  },
  {
    text: 'umweltgerecht',
    size: 1,
    href: 'umweltgerecht',
  },
  {
    text: 'weidgerecht',
    size: 1,
    href: 'weidgerecht',
  },
  {
    text: 'bedarfsgerecht',
    size: 1,
    href: 'bedarfsgerecht',
  },
  {
    text: 'bühnengerecht',
    size: 1,
    href: 'buehnengerecht',
  },
  {
    text: 'formgerecht',
    size: 1,
    href: 'formgerecht',
  },
  {
    text: 'termingerecht',
    size: 1,
    href: 'termingerecht',
  },
  {
    text: 'fussgerecht',
    size: 1,
    href: 'fussgerecht',
  },
  {
    text: 'Grundstücksgesellschaft',
    size: 1,
    href: 'grundstuecksgesellschaft',
  },
  {
    text: 'Pachtgesellschaft',
    size: 1,
    href: 'pachtgesellschaft',
  },
  {
    text: 'Bankgesellschaft',
    size: 1,
    href: 'bankgesellschaft',
  },
  {
    text: 'Bankverein',
    size: 1,
    href: 'bankverein',
  },
  {
    text: 'Gesellschaftlichkeit',
    size: 1,
    href: 'gesellschaftlichkeit',
  },
  {
    text: 'Preisgestaltung',
    size: 1,
    href: 'preisgestaltung',
  },
  {
    text: 'Raumgestaltung',
    size: 1,
    href: 'raumgestaltung',
  },
  {
    text: 'gewährbar',
    size: 1,
    href: 'gewaehrbar',
  },
  {
    text: 'Mängelgewähr',
    size: 1,
    href: 'maengelgewaehr',
  },
  {
    text: 'Gewährleistungsklage',
    size: 1,
    href: 'gewaehrleistungsklage',
  },
  {
    text: 'Gewinnrechnung',
    size: 1,
    href: 'gewinnrechnung',
  },
  {
    text: 'Härteparagraph',
    size: 1,
    href: 'haerteparagraph',
  },
  {
    text: 'Programmhinweise',
    size: 1,
    href: 'programmhinweise',
  },
  {
    text: 'Tiefbauingenieur',
    size: 1,
    href: 'tiefbauingenieur',
  },
  {
    text: 'Tiefbauamt',
    size: 1,
    href: 'tiefbauamt',
  },
  {
    text: 'Strassenhoheit',
    size: 1,
    href: 'strassenhoheit',
  },
  {
    text: 'Schulhoheit',
    size: 1,
    href: 'schulhoheit',
  },
  {
    text: 'Haushydrant',
    size: 1,
    href: 'haushydrant',
  },
  {
    text: 'Laufbrunnenhydrant',
    size: 1,
    href: 'laufbrunnenhydrant',
  },
  {
    text: 'Eintretensdebatte',
    size: 1,
    href: 'eintretensdebatte',
  },
  {
    text: 'Zweckentfremdung',
    size: 1,
    href: 'zweckentfremdung',
  },
  {
    text: 'zweckentfremdet',
    size: 1,
    href: 'zweckentfremdet',
  },
  {
    text: 'Einsichtnahme',
    size: 1,
    href: 'einsichtnahme',
  },
  {
    text: 'einsichtslos',
    size: 1,
    href: 'einsichtslos',
  },
  {
    text: 'einsichtsvoll',
    size: 1,
    href: 'einsichtsvoll',
  },
  {
    text: 'überwälzen',
    size: 1,
    href: 'ueberwaelzen',
  },
  {
    text: 'Belastungsanzeige',
    size: 1,
    href: 'belastungsanzeige',
  },
  {
    text: 'Belastungsfaktor',
    size: 1,
    href: 'belastungsfaktor',
  },
  {
    text: 'Belastungsprobe',
    size: 1,
    href: 'belastungsprobe',
  },
  {
    text: 'Belastungsverbot',
    size: 1,
    href: 'belastungsverbot',
  },
  {
    text: 'Belastungszeuge',
    size: 1,
    href: 'belastungszeuge',
  },
  {
    text: 'Erschliessungsarbeiten',
    size: 1,
    href: 'erschliessungsarbeiten',
  },
  {
    text: 'Erstarrungspunkt',
    size: 1,
    href: 'erstarrungspunkt',
  },
  {
    text: 'Rechtserstarrung',
    size: 1,
    href: 'rechtserstarrung',
  },
  {
    text: 'Belegarzt',
    size: 1,
    href: 'belegarzt',
  },
  {
    text: 'Belegexemplar',
    size: 1,
    href: 'belegexemplar',
  },
  {
    text: 'Belegmaterial',
    size: 1,
    href: 'belegmaterial',
  },
  {
    text: 'Bestandsbeleg',
    size: 1,
    href: 'bestandsbeleg',
  },
  {
    text: 'Buchbeleg',
    size: 1,
    href: 'buchbeleg',
  },
  {
    text: 'Buchungsbeleg',
    size: 1,
    href: 'buchungsbeleg',
  },
  {
    text: 'Lohnbeleg',
    size: 1,
    href: 'lohnbeleg',
  },
  {
    text: 'Originalbeleg',
    size: 1,
    href: 'originalbeleg',
  },
  {
    text: 'Rechnungsbeleg',
    size: 1,
    href: 'rechnungsbeleg',
  },
  {
    text: 'Spesenbeleg',
    size: 1,
    href: 'spesenbeleg',
  },
  {
    text: 'Beratungswesen',
    size: 1,
    href: 'beratungswesen',
  },
  {
    text: 'Beratungsstimme',
    size: 1,
    href: 'beratungsstimme',
  },
  {
    text: 'Betriebsberater',
    size: 1,
    href: 'betriebsberater',
  },
  {
    text: 'Bilanzbereinigung',
    size: 1,
    href: 'bilanzbereinigung',
  },
  {
    text: 'Schuldenbereinigung',
    size: 1,
    href: 'schuldenbereinigung',
  },
  {
    text: 'Wertpapierbereinigung',
    size: 1,
    href: 'wertpapierbereinigung',
  },
  {
    text: 'Differenzbereinigung',
    size: 1,
    href: 'differenzbereinigung',
  },
  {
    text: 'aufnahmebereit',
    size: 1,
    href: 'aufnahmebereit',
  },
  {
    text: 'betriebsbereit',
    size: 1,
    href: 'betriebsbereit',
  },
  {
    text: 'dienstbereit',
    size: 1,
    href: 'dienstbereit',
  },
  {
    text: 'einsatzbereit',
    size: 1,
    href: 'einsatzbereit',
  },
  {
    text: 'griffbereit',
    size: 1,
    href: 'griffbereit',
  },
  {
    text: 'schussbereit',
    size: 1,
    href: 'schussbereit',
  },
  {
    text: 'verständigungsbereit',
    size: 1,
    href: 'verstaendigungsbereit',
  },
  {
    text: 'Berufungsfall',
    size: 1,
    href: 'berufungsfall',
  },
  {
    text: 'Berufungsinstanz',
    size: 1,
    href: 'berufungsinstanz',
  },
  {
    text: 'Berufungskläger',
    size: 1,
    href: 'berufungsklaeger',
  },
  {
    text: 'Berufungsrecht',
    size: 1,
    href: 'berufungsrecht',
  },
  {
    text: 'Zwischenberufung',
    size: 1,
    href: 'zwischenberufung',
  },
  {
    text: 'Beschaffungskriminalität',
    size: 1,
    href: 'beschaffungskriminalitaet',
  },
  {
    text: 'Beschaffungswesen',
    size: 1,
    href: 'beschaffungswesen',
  },
  {
    text: 'Beschaffungskosten',
    size: 1,
    href: 'beschaffungskosten',
  },
  {
    text: 'Beschaffungsstelle',
    size: 1,
    href: 'beschaffungsstelle',
  },
  {
    text: 'Beschaffungsvertrag',
    size: 1,
    href: 'beschaffungsvertrag',
  },
  {
    text: 'Beschaffungsreifeerklärung',
    size: 1,
    href: 'beschaffungsreifeerklaerung',
  },
  {
    text: 'beschlussfähig',
    size: 1,
    href: 'beschlussfaehig',
  },
  {
    text: 'Beschlussfähigkeit',
    size: 1,
    href: 'beschlussfaehigkeit',
  },
  {
    text: 'Beschlussunfähigkeit',
    size: 1,
    href: 'beschlussunfaehigkeit',
  },
  {
    text: 'Beschlussprotokoll',
    size: 1,
    href: 'beschlussprotokoll',
  },
  {
    text: 'Ermittlungsausschuss',
    size: 1,
    href: 'ermittlungsausschuss',
  },
  {
    text: 'Ermittlungsverfahren',
    size: 1,
    href: 'ermittlungsverfahren',
  },
  {
    text: 'Restbestand',
    size: 1,
    href: 'restbestand',
  },
  {
    text: 'Führungsstufe',
    size: 1,
    href: 'fuehrungsstufe',
  },
  {
    text: 'Personalbestand',
    size: 1,
    href: 'personalbestand',
  },
  {
    text: 'Bestandsaufnahme',
    size: 1,
    href: 'bestandsaufnahme',
  },
  {
    text: 'Bautenbestand',
    size: 1,
    href: 'bautenbestand',
  },
  {
    text: 'wärmebeständig',
    size: 1,
    href: 'waermebestaendig',
  },
  {
    text: 'Wechselbeteiligter',
    size: 1,
    href: 'wechselbeteiligter',
  },
  {
    text: 'Zollbeteiligter',
    size: 1,
    href: 'zollbeteiligter',
  },
  {
    text: 'Unbeteiligte',
    size: 1,
    href: 'unbeteiligte',
  },
  {
    text: 'Kostengutsprache',
    size: 1,
    href: 'kostengutsprache',
  },
  {
    text: 'süchtig',
    size: 1,
    href: 'suechtig',
  },
  {
    text: 'Betreuungsstelle',
    size: 1,
    href: 'betreuungsstelle',
  },
  {
    text: 'Betreuungskosten',
    size: 1,
    href: 'betreuungskosten',
  },
  {
    text: 'bewährt',
    size: 1,
    href: 'bewaehrt',
  },
  {
    text: 'Bewährungshelfer',
    size: 1,
    href: 'bewaehrungshelfer',
  },
  {
    text: 'Bewährungsprobe',
    size: 1,
    href: 'bewaehrungsprobe',
  },
  {
    text: 'Bewährungsfrist',
    size: 1,
    href: 'bewaehrungsfrist',
  },
  {
    text: 'Bewährungszeit',
    size: 1,
    href: 'bewaehrungszeit',
  },
  {
    text: 'Bewährungsaufstieg',
    size: 1,
    href: 'bewaehrungsaufstieg',
  },
  {
    text: 'Devisenbewirtschaftung',
    size: 1,
    href: 'devisenbewirtschaftung',
  },
  {
    text: 'Bezugsaktie',
    size: 1,
    href: 'bezugsaktie',
  },
  {
    text: 'Bezugsbeschränkung',
    size: 1,
    href: 'bezugsbeschraenkung',
  },
  {
    text: 'Bezugsgebiet',
    size: 1,
    href: 'bezugsgebiet',
  },
  {
    text: 'Bezugsgrösse',
    size: 1,
    href: 'bezugsgroesse',
  },
  {
    text: 'Bezugspreis',
    size: 1,
    href: 'bezugspreis',
  },
  {
    text: 'Bezugsrecht',
    size: 1,
    href: 'bezugsrecht',
  },
  {
    text: 'Bezugsquelle',
    size: 1,
    href: 'bezugsquelle',
  },
  {
    text: 'bezugsscheinfrei',
    size: 1,
    href: 'bezugsscheinfrei',
  },
  {
    text: 'Bezugsberechtigter',
    size: 1,
    href: 'bezugsberechtigter',
  },
  {
    text: 'Bezugsangebot',
    size: 1,
    href: 'bezugsangebot',
  },
  {
    text: 'bezüglich',
    size: 1,
    href: 'bezueglich',
  },
  {
    text: 'Gehaltsbezüger',
    size: 1,
    href: 'gehaltsbezueger',
  },
  {
    text: 'Mehrfachbezüger',
    size: 1,
    href: 'mehrfachbezueger',
  },
  {
    text: 'Pensionsbezüger',
    size: 1,
    href: 'pensionsbezueger',
  },
  {
    text: 'Rentensbezüger',
    size: 1,
    href: 'rentensbezueger',
  },
  {
    text: 'Dahinfallen',
    size: 1,
    href: 'dahinfallen',
  },
  {
    text: 'Darstellungsart',
    size: 1,
    href: 'darstellungsart',
  },
  {
    text: 'Darstellungsweise',
    size: 1,
    href: 'darstellungsweise',
  },
  {
    text: 'Darstellungsgabe, -kunst, -talent',
    size: 1,
    href: 'darstellungsgabe-kunst-talent',
  },
  {
    text: 'Datenblatt',
    size: 1,
    href: 'datenblatt',
  },
  {
    text: 'dispositionsfähig',
    size: 1,
    href: 'dispositionsfaehig',
  },
  {
    text: 'Dispositionszentrale',
    size: 1,
    href: 'dispositionszentrale',
  },
  {
    text: 'Durchweg',
    size: 1,
    href: 'durchweg',
  },
  {
    text: 'Mammuttanker',
    size: 1,
    href: 'mammuttanker',
  },
  {
    text: 'Mängelhaftung',
    size: 1,
    href: 'maengelhaftung',
  },
  {
    text: 'Mängelrüge',
    size: 1,
    href: 'maengelruege',
  },
  {
    text: 'Arbeitsmangel',
    size: 1,
    href: 'arbeitsmangel',
  },
  {
    text: 'Materialwaren',
    size: 1,
    href: 'materialwaren',
  },
  {
    text: 'Beweismaterial',
    size: 1,
    href: 'beweismaterial',
  },
  {
    text: 'Stimmmaterial',
    size: 1,
    href: 'stimmmaterial',
  },
  {
    text: 'Beratungsrecht',
    size: 1,
    href: 'beratungsrecht',
  },
  {
    text: 'Vorschlagsrecht',
    size: 1,
    href: 'vorschlagsrecht',
  },
  {
    text: 'Vetorecht',
    size: 1,
    href: 'vetorecht',
  },
  {
    text: 'Geltungsbedürfnis',
    size: 1,
    href: 'geltungsbeduerfnis',
  },
  {
    text: 'eingehend',
    size: 1,
    href: 'eingehend',
  },
  {
    text: 'einwandfrei',
    size: 1,
    href: 'einwandfrei',
  },
  {
    text: 'Entlastungsstrasse',
    size: 1,
    href: 'entlastungsstrasse',
  },
  {
    text: 'Entlastungszug',
    size: 1,
    href: 'entlastungszug',
  },
  {
    text: 'Entlastungszeuge',
    size: 1,
    href: 'entlastungszeuge',
  },
  {
    text: 'Entlastungsventil',
    size: 1,
    href: 'entlastungsventil',
  },
  {
    text: 'Entwicklungslehre',
    size: 1,
    href: 'entwicklungslehre',
  },
  {
    text: 'Erfassung',
    size: 1,
    href: 'erfassung',
  },
  {
    text: 'Armenpflege',
    size: 1,
    href: 'armenpflege',
  },
  {
    text: 'Erhebungsvordruck',
    size: 1,
    href: 'erhebungsvordruck',
  },
  {
    text: 'Erhebungszeitraum',
    size: 1,
    href: 'erhebungszeitraum',
  },
  {
    text: 'Erholungsgebiet',
    size: 1,
    href: 'erholungsgebiet',
  },
  {
    text: 'problemorientiert',
    size: 1,
    href: 'problemorientiert',
  },
  {
    text: 'erfolgsorientiert',
    size: 1,
    href: 'erfolgsorientiert',
  },
  {
    text: 'ergebnisorientiert',
    size: 1,
    href: 'ergebnisorientiert',
  },
  {
    text: 'Verarbeitungsgrad',
    size: 1,
    href: 'verarbeitungsgrad',
  },
  {
    text: 'Verarbeitungsspanne',
    size: 1,
    href: 'verarbeitungsspanne',
  },
  {
    text: 'nachführen',
    size: 1,
    href: 'nachfuehren',
  },
  {
    text: 'Nachführungsarbeiten',
    size: 1,
    href: 'nachfuehrungsarbeiten',
  },
  {
    text: 'Nachführungsgeometer',
    size: 1,
    href: 'nachfuehrungsgeometer',
  },
  {
    text: 'Nachtragsabkommen',
    size: 1,
    href: 'nachtragsabkommen',
  },
  {
    text: 'Nachtragsbestimmung',
    size: 1,
    href: 'nachtragsbestimmung',
  },
  {
    text: 'Nachtragskredit',
    size: 1,
    href: 'nachtragskredit',
  },
  {
    text: 'Nachtragspolice',
    size: 1,
    href: 'nachtragspolice',
  },
  {
    text: 'Nachtragszahlung',
    size: 1,
    href: 'nachtragszahlung',
  },
  {
    text: 'Nachtragsveranlagung',
    size: 1,
    href: 'nachtragsveranlagung',
  },
  {
    text: 'Ablieferungsnachweis',
    size: 1,
    href: 'ablieferungsnachweis',
  },
  {
    text: 'Anstellungsnachweis',
    size: 1,
    href: 'anstellungsnachweis',
  },
  {
    text: 'Arbeitsnachweis',
    size: 1,
    href: 'arbeitsnachweis',
  },
  {
    text: 'Arbeitsnachweisstelle',
    size: 1,
    href: 'arbeitsnachweisstelle',
  },
  {
    text: 'Arbeitsunfähigkeitnachweis',
    size: 1,
    href: 'arbeitsunfaehigkeitnachweis',
  },
  {
    text: 'Bedürftigkeitsnachweis',
    size: 1,
    href: 'beduerftigkeitsnachweis',
  },
  {
    text: 'Befähigungsnachweis',
    size: 1,
    href: 'befaehigungsnachweis',
  },
  {
    text: 'Berechtigungsnachweis',
    size: 1,
    href: 'berechtigungsnachweis',
  },
  {
    text: 'Beschäftigungsnachweis',
    size: 1,
    href: 'beschaeftigungsnachweis',
  },
  {
    text: 'Bestandsnachweis',
    size: 1,
    href: 'bestandsnachweis',
  },
  {
    text: 'Buchnachweis',
    size: 1,
    href: 'buchnachweis',
  },
  {
    text: 'Eigentumsnachweis',
    size: 1,
    href: 'eigentumsnachweis',
  },
  {
    text: 'Erbnachweis',
    size: 1,
    href: 'erbnachweis',
  },
  {
    text: 'Nämlichkeitsnachweis',
    size: 1,
    href: 'naemlichkeitsnachweis',
  },
  {
    text: 'Schadennachweis',
    size: 1,
    href: 'schadennachweis',
  },
  {
    text: 'Übergabenachweis',
    size: 1,
    href: 'uebergabenachweis',
  },
  {
    text: 'Ursprungsnachweis',
    size: 1,
    href: 'ursprungsnachweis',
  },
  {
    text: 'Vermögensnachweis',
    size: 1,
    href: 'vermoegensnachweis',
  },
  {
    text: 'Nachwuchspolitik',
    size: 1,
    href: 'nachwuchspolitik',
  },
  {
    text: 'Nachwuchsprobleme',
    size: 1,
    href: 'nachwuchsprobleme',
  },
  {
    text: 'Nachwuchsförderung',
    size: 1,
    href: 'nachwuchsfoerderung',
  },
  {
    text: 'nah',
    size: 1,
    href: 'nah',
  },
  {
    text: 'verbrauchernah',
    size: 1,
    href: 'verbrauchernah',
  },
  {
    text: 'neutral',
    size: 1,
    href: 'neutral',
  },
  {
    text: 'wettbewerbsneutral',
    size: 1,
    href: 'wettbewerbsneutral',
  },
  {
    text: 'praxisorientiert',
    size: 1,
    href: 'praxisorientiert',
  },
  {
    text: 'Orientierungsmittel',
    size: 1,
    href: 'orientierungsmittel',
  },
  {
    text: 'Pendelwanderung',
    size: 1,
    href: 'pendelwanderung',
  },
  {
    text: 'Pendelverkehr',
    size: 1,
    href: 'pendelverkehr',
  },
  {
    text: 'Pendelpflug',
    size: 1,
    href: 'pendelpflug',
  },
  {
    text: 'Pendelhacke',
    size: 1,
    href: 'pendelhacke',
  },
  {
    text: 'Pendelkostenbeitrag',
    size: 1,
    href: 'pendelkostenbeitrag',
  },
  {
    text: 'Pflegebeitrag',
    size: 1,
    href: 'pflegebeitrag',
  },
  {
    text: 'Pflegegeld',
    size: 1,
    href: 'pflegegeld',
  },
  {
    text: 'Pflegeheim',
    size: 1,
    href: 'pflegeheim',
  },
  {
    text: 'Pflegekosten',
    size: 1,
    href: 'pflegekosten',
  },
  {
    text: 'pflegeleicht',
    size: 1,
    href: 'pflegeleicht',
  },
  {
    text: 'Pflegepersonal',
    size: 1,
    href: 'pflegepersonal',
  },
  {
    text: 'Bundesstrafrechtspflege',
    size: 1,
    href: 'bundesstrafrechtspflege',
  },
  {
    text: 'Dateipflege',
    size: 1,
    href: 'dateipflege',
  },
  {
    text: 'Datenpflege',
    size: 1,
    href: 'datenpflege',
  },
  {
    text: 'Datenbankpflege',
    size: 1,
    href: 'datenbankpflege',
  },
  {
    text: 'Hauspflegerin',
    size: 1,
    href: 'hauspflegerin',
  },
  {
    text: 'Spitex-Pflege',
    size: 1,
    href: 'spitex-pflege',
  },
  {
    text: 'Rechtspflege',
    size: 1,
    href: 'rechtspflege',
  },
  {
    text: 'Schulpflege',
    size: 1,
    href: 'schulpflege',
  },
  {
    text: 'Denkmalpflege',
    size: 1,
    href: 'denkmalpflege',
  },
  {
    text: 'pflegerisch',
    size: 1,
    href: 'pflegerisch',
  },
  {
    text: 'Pflegevertrag',
    size: 1,
    href: 'pflegevertrag',
  },
  {
    text: 'Wartungsvertrag',
    size: 1,
    href: 'wartungsvertrag',
  },
  {
    text: 'Stadtplaner',
    size: 1,
    href: 'stadtplaner',
  },
  {
    text: 'Städteplaner',
    size: 1,
    href: 'staedteplaner',
  },
  {
    text: 'Umgebungsplaner',
    size: 1,
    href: 'umgebungsplaner',
  },
  {
    text: 'Gartenplaner',
    size: 1,
    href: 'gartenplaner',
  },
  {
    text: 'Umweltplaner',
    size: 1,
    href: 'umweltplaner',
  },
  {
    text: 'Planungsbüro',
    size: 1,
    href: 'planungsbuero',
  },
  {
    text: 'bildungspolitisch',
    size: 1,
    href: 'bildungspolitisch',
  },
  {
    text: 'bevölkerungspolitisch',
    size: 1,
    href: 'bevoelkerungspolitisch',
  },
  {
    text: 'tagespolitisch',
    size: 1,
    href: 'tagespolitisch',
  },
  {
    text: 'wirtschaftspolitisch',
    size: 1,
    href: 'wirtschaftspolitisch',
  },
  {
    text: 'präjudizierlich',
    size: 1,
    href: 'praejudizierlich',
  },
  {
    text: 'Präjudiz',
    size: 1,
    href: 'praejudiz',
  },
  {
    text: 'Präjudizialklage',
    size: 1,
    href: 'praejudizialklage',
  },
  {
    text: 'Gerichtspraxis',
    size: 1,
    href: 'gerichtspraxis',
  },
  {
    text: 'Praxisänderung',
    size: 1,
    href: 'praxisaenderung',
  },
  {
    text: 'Primärliteratur',
    size: 1,
    href: 'primaerliteratur',
  },
  {
    text: 'Primärstrahlung',
    size: 1,
    href: 'primaerstrahlung',
  },
  {
    text: 'Primärstrom',
    size: 1,
    href: 'primaerstrom',
  },
  {
    text: 'Primärteilchen',
    size: 1,
    href: 'primaerteilchen',
  },
  {
    text: 'Primärvorgang',
    size: 1,
    href: 'primaervorgang',
  },
  {
    text: 'Primärenergie',
    size: 1,
    href: 'primaerenergie',
  },
  {
    text: 'Quotenaktie',
    size: 1,
    href: 'quotenaktie',
  },
  {
    text: 'Quotenrückversicherung',
    size: 1,
    href: 'quotenrueckversicherung',
  },
  {
    text: 'Quotensystem',
    size: 1,
    href: 'quotensystem',
  },
  {
    text: 'Steuerquote',
    size: 1,
    href: 'steuerquote',
  },
  {
    text: 'Betriebsquervergleich',
    size: 1,
    href: 'betriebsquervergleich',
  },
  {
    text: 'Quereinstieg',
    size: 1,
    href: 'quereinstieg',
  },
  {
    text: 'Erlebnispädagogik',
    size: 1,
    href: 'erlebnispaedagogik',
  },
  {
    text: 'Erlebnispark',
    size: 1,
    href: 'erlebnispark',
  },
  {
    text: 'Rechtsgültigkeit',
    size: 1,
    href: 'rechtsgueltigkeit',
  },
  {
    text: 'Regelungsdichte',
    size: 1,
    href: 'regelungsdichte',
  },
  {
    text: 'Ressortchef',
    size: 1,
    href: 'ressortchef',
  },
  {
    text: 'Ressortminister',
    size: 1,
    href: 'ressortminister',
  },
  {
    text: 'Rubrizierungen',
    size: 1,
    href: 'rubrizierungen',
  },
  {
    text: 'Rubrizierungsdaten',
    size: 1,
    href: 'rubrizierungsdaten',
  },
  {
    text: 'Rubrizierungsfeld',
    size: 1,
    href: 'rubrizierungsfeld',
  },
  {
    text: 'Rubrizierungskorrektur',
    size: 1,
    href: 'rubrizierungskorrektur',
  },
  {
    text: 'Rubrizierungsstempel',
    size: 1,
    href: 'rubrizierungsstempel',
  },
  {
    text: 'Rubrizierungsverzeichnis',
    size: 1,
    href: 'rubrizierungsverzeichnis',
  },
  {
    text: 'Rubrizierungsweisung',
    size: 1,
    href: 'rubrizierungsweisung',
  },
  {
    text: 'Rubrizierungszettel',
    size: 1,
    href: 'rubrizierungszettel',
  },
  {
    text: 'Rückfragesystem',
    size: 1,
    href: 'rueckfragesystem',
  },
  {
    text: 'Rückfragetaste',
    size: 1,
    href: 'rueckfragetaste',
  },
  {
    text: 'Rückfrageapparat',
    size: 1,
    href: 'rueckfrageapparat',
  },
  {
    text: 'Völkerbundssatzung',
    size: 1,
    href: 'voelkerbundssatzung',
  },
  {
    text: 'Tagsatzung',
    size: 1,
    href: 'tagsatzung',
  },
  {
    text: 'Satzungsgewalt',
    size: 1,
    href: 'satzungsgewalt',
  },
  {
    text: 'Selbsthilfeaktion',
    size: 1,
    href: 'selbsthilfeaktion',
  },
  {
    text: 'Selbsthilfegruppe',
    size: 1,
    href: 'selbsthilfegruppe',
  },
  {
    text: 'Selbsthilfeverkauf',
    size: 1,
    href: 'selbsthilfeverkauf',
  },
  {
    text: 'Selbsthilfegenossenschaft',
    size: 1,
    href: 'selbsthilfegenossenschaft',
  },
  {
    text: 'Ansiedler',
    size: 1,
    href: 'ansiedler',
  },
  {
    text: 'Siedlungsbild',
    size: 1,
    href: 'siedlungsbild',
  },
  {
    text: 'Siedlungsentwicklung',
    size: 1,
    href: 'siedlungsentwicklung',
  },
  {
    text: 'putzsüchtig',
    size: 1,
    href: 'putzsuechtig',
  },
  {
    text: 'Fachausbildung',
    size: 1,
    href: 'fachausbildung',
  },
  {
    text: 'Fachliteratur',
    size: 1,
    href: 'fachliteratur',
  },
  {
    text: 'Fachpresse',
    size: 1,
    href: 'fachpresse',
  },
  {
    text: 'Fachmesse',
    size: 1,
    href: 'fachmesse',
  },
  {
    text: 'Fachwerk',
    size: 1,
    href: 'fachwerk',
  },
  {
    text: 'Fahrnisbauten',
    size: 1,
    href: 'fahrnisbauten',
  },
  {
    text: 'Fahrniskauf',
    size: 1,
    href: 'fahrniskauf',
  },
  {
    text: 'Fahrnispfandrecht',
    size: 1,
    href: 'fahrnispfandrecht',
  },
  {
    text: 'baufällig',
    size: 1,
    href: 'baufaellig',
  },
  {
    text: 'Fluchttier',
    size: 1,
    href: 'fluchttier',
  },
  {
    text: 'Fassungskraft',
    size: 1,
    href: 'fassungskraft',
  },
  {
    text: 'Fremdarbeiter',
    size: 1,
    href: 'fremdarbeiter',
  },
  {
    text: 'Fremdbefruchtung',
    size: 1,
    href: 'fremdbefruchtung',
  },
  {
    text: 'Fremdheit',
    size: 1,
    href: 'fremdheit',
  },
  {
    text: 'Fremdkapital',
    size: 1,
    href: 'fremdkapital',
  },
  {
    text: 'Fremdkörper',
    size: 1,
    href: 'fremdkoerper',
  },
  {
    text: 'Vorsorgeuntersuchung',
    size: 1,
    href: 'vorsorgeuntersuchung',
  },
  {
    text: 'vorstellig werden',
    size: 1,
    href: 'vorstellig-werden',
  },
  {
    text: 'Veredlungsprodukt',
    size: 1,
    href: 'veredlungsprodukt',
  },
  {
    text: 'Veredlungsindustrie',
    size: 1,
    href: 'veredlungsindustrie',
  },
  {
    text: 'Verfahrens-',
    size: 1,
    href: 'verfahrens',
  },
  {
    text: 'Fremdkosten',
    size: 1,
    href: 'fremdkosten',
  },
  {
    text: 'wirklichkeitsfremd',
    size: 1,
    href: 'wirklichkeitsfremd',
  },
  {
    text: 'Fremdversicherung',
    size: 1,
    href: 'fremdversicherung',
  },
  {
    text: 'arbeiterfreundlich',
    size: 1,
    href: 'arbeiterfreundlich',
  },
  {
    text: 'bedienungsfreundlich',
    size: 1,
    href: 'bedienungsfreundlich',
  },
  {
    text: 'benützerfreundlich',
    size: 1,
    href: 'benuetzerfreundlich',
  },
  {
    text: 'gastfreundlich',
    size: 1,
    href: 'gastfreundlich',
  },
  {
    text: 'scheissfreundlich',
    size: 1,
    href: 'scheissfreundlich',
  },
  {
    text: 'überfreundlich',
    size: 1,
    href: 'ueberfreundlich',
  },
  {
    text: 'regierungsfreundlich',
    size: 1,
    href: 'regierungsfreundlich',
  },
  {
    text: 'wirtschaftfreundlich',
    size: 1,
    href: 'wirtschaftfreundlich',
  },
  {
    text: 'Fürsorgestelle',
    size: 1,
    href: 'fuersorgestelle',
  },
  {
    text: 'Fürsorgerin',
    size: 1,
    href: 'fuersorgerin',
  },
  {
    text: 'Fürsorgewesen',
    size: 1,
    href: 'fuersorgewesen',
  },
  {
    text: 'Fürsorgeanstalt',
    size: 1,
    href: 'fuersorgeanstalt',
  },
  {
    text: 'Fürsorgestaat',
    size: 1,
    href: 'fuersorgestaat',
  },
  {
    text: 'Wohnungsfürsorge',
    size: 1,
    href: 'wohnungsfuersorge',
  },
  {
    text: 'Führungsaufgabe',
    size: 1,
    href: 'fuehrungsaufgabe',
  },
  {
    text: 'Führungsebene',
    size: 1,
    href: 'fuehrungsebene',
  },
  {
    text: 'Freiwillige',
    size: 1,
    href: 'freiwillige',
  },
  {
    text: 'arbeitssüchtig',
    size: 1,
    href: 'arbeitssuechtig',
  },
  {
    text: 'profitsüchtig',
    size: 1,
    href: 'profitsuechtig',
  },
  {
    text: 'aufwändig',
    size: 1,
    href: 'aufwaendig',
  },
  {
    text: 'Überbauungsplan',
    size: 1,
    href: 'ueberbauungsplan',
  },
  {
    text: 'überbaubar',
    size: 1,
    href: 'ueberbaubar',
  },
  {
    text: 'übergehen',
    size: 1,
    href: 'uebergehen',
  },
  {
    text: 'überhaupt',
    size: 1,
    href: 'ueberhaupt',
  },
  {
    text: 'überholen',
    size: 1,
    href: 'ueberholen',
  },
  {
    text: 'überholt',
    size: 1,
    href: 'ueberholt',
  },
  {
    text: 'übernachten',
    size: 1,
    href: 'uebernachten',
  },
  {
    text: 'Übernachtung',
    size: 1,
    href: 'uebernachtung',
  },
  {
    text: 'Überwälzung',
    size: 1,
    href: 'ueberwaelzung',
  },
  {
    text: 'Überschneidung',
    size: 1,
    href: 'ueberschneidung',
  },
  {
    text: 'übersehen',
    size: 1,
    href: 'uebersehen',
  },
  {
    text: 'Übersicht',
    size: 1,
    href: 'uebersicht',
  },
  {
    text: 'übersichtig',
    size: 1,
    href: 'uebersichtig',
  },
  {
    text: 'Übersichtlichkeit',
    size: 1,
    href: 'uebersichtlichkeit',
  },
  {
    text: 'übersichtlich',
    size: 1,
    href: 'uebersichtlich',
  },
  {
    text: 'Übersichtsplan',
    size: 1,
    href: 'uebersichtsplan',
  },
  {
    text: 'Übersichtstabelle',
    size: 1,
    href: 'uebersichtstabelle',
  },
  {
    text: 'Klausurarbeit',
    size: 1,
    href: 'klausurarbeit',
  },
  {
    text: 'Synodalklausur',
    size: 1,
    href: 'synodalklausur',
  },
  {
    text: 'durchwegs',
    size: 1,
    href: 'durchwegs',
  },
  {
    text: 'Kopplungsbruch',
    size: 1,
    href: 'kopplungsbruch',
  },
  {
    text: 'Kopplungsspule',
    size: 1,
    href: 'kopplungsspule',
  },
  {
    text: 'Umlageverfahren',
    size: 1,
    href: 'umlageverfahren',
  },
  {
    text: 'Umlageeinnehmer',
    size: 1,
    href: 'umlageeinnehmer',
  },
  {
    text: 'umlagepflichtig',
    size: 1,
    href: 'umlagepflichtig',
  },
  {
    text: 'Umschlagplatz',
    size: 1,
    href: 'umschlagplatz',
  },
  {
    text: 'Umsatzsteuer',
    size: 1,
    href: 'umsatzsteuer',
  },
  {
    text: 'Umsatzkapital',
    size: 1,
    href: 'umsatzkapital',
  },
  {
    text: 'Umsatzwelle',
    size: 1,
    href: 'umsatzwelle',
  },
  {
    text: 'Umsatzerlös',
    size: 1,
    href: 'umsatzerloes',
  },
  {
    text: 'Verpflegungszulage',
    size: 1,
    href: 'verpflegungszulage',
  },
  {
    text: 'umständehalber',
    size: 1,
    href: 'umstaendehalber',
  },
  {
    text: 'Unkostenübertragung',
    size: 1,
    href: 'unkostenuebertragung',
  },
  {
    text: 'Schreibunterlage',
    size: 1,
    href: 'schreibunterlage',
  },
  {
    text: 'Ermessensunterschreitung',
    size: 1,
    href: 'ermessensunterschreitung',
  },
  {
    text: 'Unzukömmlichkeiten',
    size: 1,
    href: 'unzukoemmlichkeiten',
  },
  {
    text: 'Wesenheit',
    size: 1,
    href: 'wesenheit',
  },
  {
    text: 'wesenlos',
    size: 1,
    href: 'wesenlos',
  },
  {
    text: 'Wesenseinheit',
    size: 1,
    href: 'wesenseinheit',
  },
  {
    text: 'wesenhaft',
    size: 1,
    href: 'wesenhaft',
  },
  {
    text: 'Hypothekarwesen',
    size: 1,
    href: 'hypothekarwesen',
  },
  {
    text: 'Gefängniswesen',
    size: 1,
    href: 'gefaengniswesen',
  },
  {
    text: 'Wohlfahrtsamt',
    size: 1,
    href: 'wohlfahrtsamt',
  },
  {
    text: 'Wohlfahrtsausschuss',
    size: 1,
    href: 'wohlfahrtsausschuss',
  },
  {
    text: 'Wohlfahrtseinrichtung',
    size: 1,
    href: 'wohlfahrtseinrichtung',
  },
  {
    text: 'Wohlfahrtsfonds',
    size: 1,
    href: 'wohlfahrtsfonds',
  },
  {
    text: 'Wohlfahrtsstaat',
    size: 1,
    href: 'wohlfahrtsstaat',
  },
  {
    text: 'zugestandermassen',
    size: 1,
    href: 'zugestandermassen',
  },
  {
    text: 'Zumutbarkeit',
    size: 1,
    href: 'zumutbarkeit',
  },
  {
    text: 'Stabdienste',
    size: 1,
    href: 'stabdienste',
  },
  {
    text: 'Stammkunde',
    size: 1,
    href: 'stammkunde',
  },
  {
    text: 'Stammzelle',
    size: 1,
    href: 'stammzelle',
  },
  {
    text: 'starrblind',
    size: 1,
    href: 'starrblind',
  },
  {
    text: 'Starrkopf',
    size: 1,
    href: 'starrkopf',
  },
  {
    text: 'Starrkrampf',
    size: 1,
    href: 'starrkrampf',
  },
  {
    text: 'Starrleinen',
    size: 1,
    href: 'starrleinen',
  },
  {
    text: 'Starrsucht',
    size: 1,
    href: 'starrsucht',
  },
  {
    text: 'steckbrieflich',
    size: 1,
    href: 'steckbrieflich',
  },
  {
    text: 'Stellung nehmen',
    size: 1,
    href: 'stellung-nehmen',
  },
  {
    text: 'Stichprobeverfahren',
    size: 1,
    href: 'stichprobeverfahren',
  },
  {
    text: 'stichprobenweise',
    size: 1,
    href: 'stichprobenweise',
  },
  {
    text: 'Stichprobenpunkt',
    size: 1,
    href: 'stichprobenpunkt',
  },
  {
    text: 'Stichprobensatz',
    size: 1,
    href: 'stichprobensatz',
  },
  {
    text: 'Stichwortschloß',
    size: 1,
    href: 'stichwortschloss',
  },
  {
    text: 'Stimmungsindikator',
    size: 1,
    href: 'stimmungsindikator',
  },
  {
    text: 'Stimmungsumschwung',
    size: 1,
    href: 'stimmungsumschwung',
  },
  {
    text: 'Stimmungsbarometer',
    size: 1,
    href: 'stimmungsbarometer',
  },
  {
    text: 'Stimmungsmensch',
    size: 1,
    href: 'stimmungsmensch',
  },
  {
    text: 'Storno',
    size: 1,
    href: 'storno',
  },
  {
    text: 'Betriebsstörung',
    size: 1,
    href: 'betriebsstoerung',
  },
  {
    text: 'Störungsdienst',
    size: 1,
    href: 'stoerungsdienst',
  },
  {
    text: 'Störzeichen',
    size: 1,
    href: 'stoerzeichen',
  },
  {
    text: 'Störungsfeuer',
    size: 1,
    href: 'stoerungsfeuer',
  },
  {
    text: 'Steiflichter',
    size: 1,
    href: 'steiflichter',
  },
  {
    text: 'schablonenmässig',
    size: 1,
    href: 'schablonenmaessig',
  },
  {
    text: 'schablonenhaft',
    size: 1,
    href: 'schablonenhaft',
  },
  {
    text: 'Schablonenzeichnung',
    size: 1,
    href: 'schablonenzeichnung',
  },
  {
    text: 'Schattenkasse',
    size: 1,
    href: 'schattenkasse',
  },
  {
    text: 'Schattenkonto',
    size: 1,
    href: 'schattenkonto',
  },
  {
    text: 'Schonzeit',
    size: 1,
    href: 'schonzeit',
  },
  {
    text: 'Schongebiet',
    size: 1,
    href: 'schongebiet',
  },
  {
    text: 'Absatzschwankungen',
    size: 1,
    href: 'absatzschwankungen',
  },
  {
    text: 'Beschäftigungsgradschwankungen',
    size: 1,
    href: 'beschaeftigungsgradschwankungen',
  },
  {
    text: 'Beschäftigungsschwankungen',
    size: 1,
    href: 'beschaeftigungsschwankungen',
  },
  {
    text: 'Börsenschwankungen',
    size: 1,
    href: 'boersenschwankungen',
  },
  {
    text: 'Preisschwankungen',
    size: 1,
    href: 'preisschwankungen',
  },
  {
    text: 'Qualitätsschwankungen',
    size: 1,
    href: 'qualitaetsschwankungen',
  },
  {
    text: 'Stromschwankung',
    size: 1,
    href: 'stromschwankung',
  },
  {
    text: 'Währungsschwankungen',
    size: 1,
    href: 'waehrungsschwankungen',
  },
  {
    text: 'Schwergewichtsgut',
    size: 1,
    href: 'schwergewichtsgut',
  },
  {
    text: 'karrierebewusst',
    size: 1,
    href: 'karrierebewusst',
  },
  {
    text: 'pflichtbewusst',
    size: 1,
    href: 'pflichtbewusst',
  },
  {
    text: 'preisbewusst',
    size: 1,
    href: 'preisbewusst',
  },
  {
    text: 'schuldbewusst',
    size: 1,
    href: 'schuldbewusst',
  },
  {
    text: 'selbstbewusst',
    size: 1,
    href: 'selbstbewusst',
  },
  {
    text: 'sprachbewusst',
    size: 1,
    href: 'sprachbewusst',
  },
  {
    text: 'staatsbewusst',
    size: 1,
    href: 'staatsbewusst',
  },
  {
    text: 'standesbewusst',
    size: 1,
    href: 'standesbewusst',
  },
  {
    text: 'umweltbewusst',
    size: 1,
    href: 'umweltbewusst',
  },
  {
    text: 'Volkswirtschaft',
    size: 1,
    href: 'volkswirtschaft',
  },
  {
    text: 'BWA',
    size: 1,
    href: 'bwa',
  },
  {
    text: 'Kompetenzstück',
    size: 1,
    href: 'kompetenzstueck',
  },
  {
    text: 'Koppelwirtschaft',
    size: 1,
    href: 'koppelwirtschaft',
  },
  {
    text: 'Koppelweide',
    size: 1,
    href: 'koppelweide',
  },
  {
    text: 'Polier',
    size: 1,
    href: 'polier',
  },
  {
    text: 'Begutachtungskommission',
    size: 1,
    href: 'begutachtungskommission',
  },
  {
    text: 'Vorschub',
    size: 1,
    href: 'vorschub',
  },
  {
    text: 'Schulleistung',
    size: 1,
    href: 'schulleistung',
  },
  {
    text: 'Bedarfsverkehr',
    size: 1,
    href: 'bedarfsverkehr',
  },
  {
    text: 'Starrsinn',
    size: 1,
    href: 'starrsinn',
  },
  {
    text: 'Vermögensschaden',
    size: 1,
    href: 'vermoegensschaden',
  },
  {
    text: 'Vermögensverfall',
    size: 1,
    href: 'vermoegensverfall',
  },
  {
    text: 'Betriebsvermögen',
    size: 1,
    href: 'betriebsvermoegen',
  },
  {
    text: 'Vernehmlasser',
    size: 1,
    href: 'vernehmlasser',
  },
  {
    text: 'Verwertungsklausel',
    size: 1,
    href: 'verwertungsklausel',
  },
  {
    text: 'Versorgungsanstalt',
    size: 1,
    href: 'versorgungsanstalt',
  },
  {
    text: 'Umlaufvermögen',
    size: 1,
    href: 'umlaufvermoegen',
  },
  {
    text: 'verantwortungsvoll',
    size: 1,
    href: 'verantwortungsvoll',
  },
  {
    text: 'Veredlungsverfahren',
    size: 1,
    href: 'veredlungsverfahren',
  },
  {
    text: 'verfremden',
    size: 1,
    href: 'verfremden',
  },
  {
    text: 'Veredlungsverkehr',
    size: 1,
    href: 'veredlungsverkehr',
  },
  {
    text: 'Zielvorgabe',
    size: 1,
    href: 'zielvorgabe',
  },
  {
    text: 'Vorgabewert',
    size: 1,
    href: 'vorgabewert',
  },
  {
    text: 'Vorprogramm',
    size: 1,
    href: 'vorprogramm',
  },
  {
    text: 'Termingeschäft',
    size: 1,
    href: 'termingeschaeft',
  },
  {
    text: 'Terminzahlung',
    size: 1,
    href: 'terminzahlung',
  },
  {
    text: 'Terminwechsel',
    size: 1,
    href: 'terminwechsel',
  },
  {
    text: 'Sühnetermin',
    size: 1,
    href: 'suehnetermin',
  },
  {
    text: 'Terminplan',
    size: 1,
    href: 'terminplan',
  },
  {
    text: 'Terminkalender',
    size: 1,
    href: 'terminkalender',
  },
  {
    text: 'Terminrolle',
    size: 1,
    href: 'terminrolle',
  },
  {
    text: 'terminieren',
    size: 1,
    href: 'terminieren',
  },
  {
    text: 'Versicherungsträger',
    size: 1,
    href: 'versicherungstraeger',
  },
  {
    text: 'Energieträger',
    size: 1,
    href: 'energietraeger',
  },
  {
    text: 'Würdenträger',
    size: 1,
    href: 'wuerdentraeger',
  },
  {
    text: 'Geschäftsträger',
    size: 1,
    href: 'geschaeftstraeger',
  },
  {
    text: 'Querträger',
    size: 1,
    href: 'quertraeger',
  },
  {
    text: 'Verdauungstrakt',
    size: 1,
    href: 'verdauungstrakt',
  },
  {
    text: 'absprachegemäss',
    size: 1,
    href: 'absprachegemaess',
  },
  {
    text: 'volksnah',
    size: 1,
    href: 'volksnah',
  },
  {
    text: 'Bauführer',
    size: 1,
    href: 'baufuehrer',
  },
  {
    text: 'Ausbildungsleiter',
    size: 1,
    href: 'ausbildungsleiter',
  },
  {
    text: 'Bauleiter',
    size: 1,
    href: 'bauleiter',
  },
  {
    text: 'EDV-Projektleiter',
    size: 1,
    href: 'edv-projektleiter',
  },
  {
    text: 'Fachdienstleiter',
    size: 1,
    href: 'fachdienstleiter',
  },
  {
    text: 'Q-Leiter',
    size: 1,
    href: 'q-leiter',
  },
  {
    text: 'Kundendienstleiter',
    size: 1,
    href: 'kundendienstleiter',
  },
  {
    text: 'Werkleiter',
    size: 1,
    href: 'werkleiter',
  },
  {
    text: 'Bauherr',
    size: 1,
    href: 'bauherr',
  },
  {
    text: 'Kundendienstleistung',
    size: 1,
    href: 'kundendienstleistung',
  },
  {
    text: 'Kundendientswerkstatt',
    size: 1,
    href: 'kundendientswerkstatt',
  },
  {
    text: 'Kundendienstbüro',
    size: 1,
    href: 'kundendienstbuero',
  },
  {
    text: 'fremdwort',
    size: 1,
    href: 'fremdwort',
  },
  {
    text: 'eigenständig',
    size: 1,
    href: 'eigenstaendig',
  },
  {
    text: 'Entgegenkommen',
    size: 1,
    href: 'entgegenkommen',
  },
  {
    text: 'ertragsfähig',
    size: 1,
    href: 'ertragsfaehig',
  },
  {
    text: 'Flugzeugträger',
    size: 1,
    href: 'flugzeugtraeger',
  },
  {
    text: 'Umtriebskosten',
    size: 1,
    href: 'umtriebskosten',
  },
  {
    text: 'Champagner',
    size: 1,
    href: 'champagner',
  },
  {
    text: 'Fehlleitung',
    size: 1,
    href: 'fehlleitung',
  },
  {
    text: 'Fehlanzeige',
    size: 1,
    href: 'fehlanzeige',
  },
  {
    text: 'Fehlstelle',
    size: 1,
    href: 'fehlstelle',
  },
  {
    text: 'Fehlbitte',
    size: 1,
    href: 'fehlbitte',
  },
  {
    text: 'fehlschlagen',
    size: 1,
    href: 'fehlschlagen',
  },
  {
    text: 'Fehlgeburt',
    size: 1,
    href: 'fehlgeburt',
  },
  {
    text: 'fehlleiten',
    size: 1,
    href: 'fehlleiten',
  },
  {
    text: 'Fehlanlage',
    size: 1,
    href: 'fehlanlage',
  },
  {
    text: 'Fehlsichtigkeit',
    size: 1,
    href: 'fehlsichtigkeit',
  },
  {
    text: 'Fehlentscheidung',
    size: 1,
    href: 'fehlentscheidung',
  },
  {
    text: 'Fehlkonstruktion',
    size: 1,
    href: 'fehlkonstruktion',
  },
  {
    text: 'Fehltritt',
    size: 1,
    href: 'fehltritt',
  },
  {
    text: 'Fehlschluss',
    size: 1,
    href: 'fehlschluss',
  },
  {
    text: 'Querschnittuntersuchung',
    size: 1,
    href: 'querschnittuntersuchung',
  },
  {
    text: 'Altertumskunde',
    size: 1,
    href: 'altertumskunde',
  },
  {
    text: 'Gegenwartskunde',
    size: 1,
    href: 'gegenwartskunde',
  },
  {
    text: 'Staatsbürgerkunde',
    size: 1,
    href: 'staatsbuergerkunde',
  },
  {
    text: 'Völkerkunde',
    size: 1,
    href: 'voelkerkunde',
  },
  {
    text: 'Berufskunde',
    size: 1,
    href: 'berufskunde',
  },
  {
    text: 'Deutschkunde',
    size: 1,
    href: 'deutschkunde',
  },
  {
    text: 'Fachkunde',
    size: 1,
    href: 'fachkunde',
  },
  {
    text: 'Namenskunde',
    size: 1,
    href: 'namenskunde',
  },
  {
    text: 'Sachkunde',
    size: 1,
    href: 'sachkunde',
  },
  {
    text: 'Sprechkunde',
    size: 1,
    href: 'sprechkunde',
  },
  {
    text: 'Stilkunde',
    size: 1,
    href: 'stilkunde',
  },
  {
    text: 'Arzneikunde',
    size: 1,
    href: 'arzneikunde',
  },
  {
    text: 'Bodenkunde',
    size: 1,
    href: 'bodenkunde',
  },
  {
    text: 'Erdkunde',
    size: 1,
    href: 'erdkunde',
  },
  {
    text: 'Gesteinskunde',
    size: 1,
    href: 'gesteinskunde',
  },
  {
    text: 'Naturkunde',
    size: 1,
    href: 'naturkunde',
  },
  {
    text: 'Pflanzenkunde',
    size: 1,
    href: 'pflanzenkunde',
  },
  {
    text: 'Sternkunde',
    size: 1,
    href: 'sternkunde',
  },
  {
    text: 'Tierkunde',
    size: 1,
    href: 'tierkunde',
  },
  {
    text: 'Vogelkunde',
    size: 1,
    href: 'vogelkunde',
  },
  {
    text: 'Hüttenkunde',
    size: 1,
    href: 'huettenkunde',
  },
  {
    text: 'Waffenkunde',
    size: 1,
    href: 'waffenkunde',
  },
  {
    text: 'Beschaffung',
    size: 1,
    href: 'beschaffung',
  },
  {
    text: 'Datenträger',
    size: 1,
    href: 'datentraeger',
  },
  {
    text: 'Datenverarbeitung',
    size: 1,
    href: 'datenverarbeitung',
  },
  {
    text: 'Datenbank',
    size: 1,
    href: 'datenbank',
  },
  {
    text: 'Datenschutz',
    size: 1,
    href: 'datenschutz',
  },
  {
    text: 'Einsatzfreudigkeit',
    size: 1,
    href: 'einsatzfreudigkeit',
  },
  {
    text: 'einsatzfreudig',
    size: 1,
    href: 'einsatzfreudig',
  },
  {
    text: 'Einsatzpreis',
    size: 1,
    href: 'einsatzpreis',
  },
  {
    text: 'einsatzfähig',
    size: 1,
    href: 'einsatzfaehig',
  },
  {
    text: 'Einsatzwagen',
    size: 1,
    href: 'einsatzwagen',
  },
  {
    text: 'Einsatzform',
    size: 1,
    href: 'einsatzform',
  },
  {
    text: 'Bezugsperson',
    size: 1,
    href: 'bezugsperson',
  },
  {
    text: 'Gletschervorfeld',
    size: 1,
    href: 'gletschervorfeld',
  },
  {
    text: 'Niederschwelligkeit',
    size: 1,
    href: 'niederschwelligkeit',
  },
  {
    text: 'Verhältnismässigkeit',
    size: 1,
    href: 'verhaeltnismaessigkeit',
  },
  {
    text: 'Autobestand',
    size: 1,
    href: 'autobestand',
  },
  {
    text: 'Komputerbestand',
    size: 1,
    href: 'komputerbestand',
  },
  {
    text: 'Gebäudebestand',
    size: 1,
    href: 'gebaeudebestand',
  },
  {
    text: 'Beharrungsvermögen',
    size: 1,
    href: 'beharrungsvermoegen',
  },
  {
    text: 'betriebswirtschaftlich',
    size: 1,
    href: 'betriebswirtschaftlich',
  },
  {
    text: 'Zwangsbewirtschaftung',
    size: 1,
    href: 'zwangsbewirtschaftung',
  },
  {
    text: 'Querschnittansicht',
    size: 1,
    href: 'querschnittansicht',
  },
  {
    text: 'Querschnittregelung',
    size: 1,
    href: 'querschnittregelung',
  },
  {
    text: 'Querschnittreiz',
    size: 1,
    href: 'querschnittreiz',
  },
  {
    text: 'Arbeitsumfeld',
    size: 1,
    href: 'arbeitsumfeld',
  },
  {
    text: 'querschnittsgelähmt',
    size: 1,
    href: 'querschnittsgelaehmt',
  },
  {
    text: 'Bagatellsubvention',
    size: 1,
    href: 'bagatellsubvention',
  },
  {
    text: 'Bedarfsdeckung',
    size: 1,
    href: 'bedarfsdeckung',
  },
  {
    text: 'qualitätsbewusst',
    size: 1,
    href: 'qualitaetsbewusst',
  },
  {
    text: 'Belastungsgrenze',
    size: 1,
    href: 'belastungsgrenze',
  },
  {
    text: 'Beharrungsprinzip',
    size: 1,
    href: 'beharrungsprinzip',
  },
  {
    text: 'Monatsbetreffnis',
    size: 1,
    href: 'monatsbetreffnis',
  },
  {
    text: 'Bewährungskontrolle',
    size: 1,
    href: 'bewaehrungskontrolle',
  },
  {
    text: 'Bewertungsblatt',
    size: 1,
    href: 'bewertungsblatt',
  },
  {
    text: 'schadenintensiv',
    size: 1,
    href: 'schadenintensiv',
  },
  {
    text: 'Bereinigungsverfahren',
    size: 1,
    href: 'bereinigungsverfahren',
  },
  {
    text: 'unbewusst',
    size: 1,
    href: 'unbewusst',
  },
  {
    text: 'Datenautobahn',
    size: 1,
    href: 'datenautobahn',
  },
  {
    text: 'Einbaumotor',
    size: 1,
    href: 'einbaumotor',
  },
  {
    text: 'Einbauvorrichtung',
    size: 1,
    href: 'einbauvorrichtung',
  },
  {
    text: 'Einbauwinker',
    size: 1,
    href: 'einbauwinker',
  },
  {
    text: 'Einfalldosis',
    size: 1,
    href: 'einfalldosis',
  },
  {
    text: 'Einfallstrasse',
    size: 1,
    href: 'einfallstrasse',
  },
  {
    text: 'Einführungsbericht',
    size: 1,
    href: 'einfuehrungsbericht',
  },
  {
    text: 'Einführungsbrief',
    size: 1,
    href: 'einfuehrungsbrief',
  },
  {
    text: 'Einführungsbestimmungen',
    size: 1,
    href: 'einfuehrungsbestimmungen',
  },
  {
    text: 'Einführungsdraht',
    size: 1,
    href: 'einfuehrungsdraht',
  },
  {
    text: 'Einführungsfeierlichkeiten',
    size: 1,
    href: 'einfuehrungsfeierlichkeiten',
  },
  {
    text: 'Einführungskampagne',
    size: 1,
    href: 'einfuehrungskampagne',
  },
  {
    text: 'Einführungskurs',
    size: 1,
    href: 'einfuehrungskurs',
  },
  {
    text: 'Einführungsöffnung',
    size: 1,
    href: 'einfuehrungsoeffnung',
  },
  {
    text: 'Einführungsrohr',
    size: 1,
    href: 'einfuehrungsrohr',
  },
  {
    text: 'Einführungspreis',
    size: 1,
    href: 'einfuehrungspreis',
  },
  {
    text: 'Eingliederungshilfe',
    size: 1,
    href: 'eingliederungshilfe',
  },
  {
    text: 'Eingliederungsstätte',
    size: 1,
    href: 'eingliederungsstaette',
  },
  {
    text: 'Nichtigkeitseinwand',
    size: 1,
    href: 'nichtigkeitseinwand',
  },
  {
    text: 'Verteidigungseinwand',
    size: 1,
    href: 'verteidigungseinwand',
  },
  {
    text: 'Verzögerungseinwand',
    size: 1,
    href: 'verzoegerungseinwand',
  },
  {
    text: 'erlebnishungrig',
    size: 1,
    href: 'erlebnishungrig',
  },
  {
    text: 'Ermessensbereich',
    size: 1,
    href: 'ermessensbereich',
  },
  {
    text: 'Ermessensfrage',
    size: 1,
    href: 'ermessensfrage',
  },
  {
    text: 'Ermessensmissbrauch',
    size: 1,
    href: 'ermessensmissbrauch',
  },
  {
    text: 'Ertragsausfall',
    size: 1,
    href: 'ertragsausfall',
  },
  {
    text: 'Ertragszins',
    size: 1,
    href: 'ertragszins',
  },
  {
    text: 'Reinertrag',
    size: 1,
    href: 'reinertrag',
  },
  {
    text: 'Ertragsgrenze',
    size: 1,
    href: 'ertragsgrenze',
  },
  {
    text: 'Ertragskraft',
    size: 1,
    href: 'ertragskraft',
  },
  {
    text: 'Ertragswert',
    size: 1,
    href: 'ertragswert',
  },
  {
    text: 'Durchführungsverordnung',
    size: 1,
    href: 'durchfuehrungsverordnung',
  },
  {
    text: 'Durchführungsbestimmungen',
    size: 1,
    href: 'durchfuehrungsbestimmungen',
  },
  {
    text: 'Durchführungsstelle',
    size: 1,
    href: 'durchfuehrungsstelle',
  },
  {
    text: 'entgeltlich',
    size: 1,
    href: 'entgeltlich',
  },
  {
    text: 'Umschuldungsentlastung',
    size: 1,
    href: 'umschuldungsentlastung',
  },
  {
    text: 'Forderungseingabe',
    size: 1,
    href: 'forderungseingabe',
  },
  {
    text: 'Forderungsübergang',
    size: 1,
    href: 'forderungsuebergang',
  },
  {
    text: 'Forderungsabschreibung',
    size: 1,
    href: 'forderungsabschreibung',
  },
  {
    text: 'weltfremd',
    size: 1,
    href: 'weltfremd',
  },
  {
    text: 'Fremdgeruch',
    size: 1,
    href: 'fremdgeruch',
  },
  {
    text: 'reparaturfreundlich',
    size: 1,
    href: 'reparaturfreundlich',
  },
  {
    text: 'Entwicklungsstufe',
    size: 1,
    href: 'entwicklungsstufe',
  },
  {
    text: 'Entwicklungsroman',
    size: 1,
    href: 'entwicklungsroman',
  },
  {
    text: 'Entwicklungsjahre',
    size: 1,
    href: 'entwicklungsjahre',
  },
  {
    text: 'Entwicklungszeit',
    size: 1,
    href: 'entwicklungszeit',
  },
  {
    text: 'Entwicklungsbad',
    size: 1,
    href: 'entwicklungsbad',
  },
  {
    text: 'Entwicklungsland',
    size: 1,
    href: 'entwicklungsland',
  },
  {
    text: 'Entwicklungsarbeiter',
    size: 1,
    href: 'entwicklungsarbeiter',
  },
  {
    text: 'Entwicklungsbüro',
    size: 1,
    href: 'entwicklungsbuero',
  },
  {
    text: 'Erfassungsverfahren',
    size: 1,
    href: 'erfassungsverfahren',
  },
  {
    text: 'Ergänzungsgebühr',
    size: 1,
    href: 'ergaenzungsgebuehr',
  },
  {
    text: 'ergänzungs-',
    size: 1,
    href: 'ergaenzungs',
  },
  {
    text: 'Erhebungstermin',
    size: 1,
    href: 'erhebungstermin',
  },
  {
    text: 'Erkenntnisgrund',
    size: 1,
    href: 'erkenntnisgrund',
  },
  {
    text: 'Erkenntniskraft',
    size: 1,
    href: 'erkenntniskraft',
  },
  {
    text: 'Erkenntnisvermögen',
    size: 1,
    href: 'erkenntnisvermoegen',
  },
  {
    text: 'Straferlassgesuch',
    size: 1,
    href: 'straferlassgesuch',
  },
  {
    text: 'Einsichtsrecht',
    size: 1,
    href: 'einsichtsrecht',
  },
  {
    text: 'Rückfragehäufigkeit',
    size: 1,
    href: 'rueckfragehaeufigkeit',
  },
  {
    text: 'wesenfremd',
    size: 1,
    href: 'wesenfremd',
  },
  {
    text: 'Einlagerung',
    size: 1,
    href: 'einlagerung',
  },
  {
    text: 'Erhebungsbogen',
    size: 1,
    href: 'erhebungsbogen',
  },
  {
    text: 'beispiel',
    size: 1,
    href: 'beispiel',
  },
  {
    text: 'zreno -',
    size: 1,
    href: 'zreno',
  },
  {
    text: 'Vermittlungsgeschäft',
    size: 1,
    href: 'vermittlungsgeschaeft',
  },
  {
    text: 'Vermittlungsverfahren',
    size: 1,
    href: 'vermittlungsverfahren',
  },
  {
    text: 'Drehtüreffekt',
    size: 1,
    href: 'drehtuereffekt',
  },
  {
    text: 'Ertragsstrom',
    size: 1,
    href: 'ertragsstrom',
  },
  {
    text: 'Deckungsbeitrag',
    size: 1,
    href: 'deckungsbeitrag',
  },
  {
    text: 'Ertragslage',
    size: 1,
    href: 'ertragslage',
  },
  {
    text: 'Verkaufsstelle',
    size: 1,
    href: 'verkaufsstelle',
  },
  {
    text: 'orientieren',
    size: 1,
    href: 'orientieren',
  },
  {
    text: 'Zeitplanung',
    size: 1,
    href: 'zeitplanung',
  },
  {
    text: 'Standortpolitik',
    size: 1,
    href: 'standortpolitik',
  },
  {
    text: 'Führungsverhalten',
    size: 1,
    href: 'fuehrungsverhalten',
  },
  {
    text: 'Beurteilungsvermögen',
    size: 1,
    href: 'beurteilungsvermoegen',
  },
  {
    text: 'Energieaufwand',
    size: 1,
    href: 'energieaufwand',
  },
  {
    text: 'Standespolitik',
    size: 1,
    href: 'standespolitik',
  },
  {
    text: 'unzeitgemäss',
    size: 1,
    href: 'unzeitgemaess',
  },
  {
    text: 'vielversprechend',
    size: 1,
    href: 'vielversprechend',
  },
  {
    text: 'Bewirtschaftungsmassnahmen',
    size: 1,
    href: 'bewirtschaftungsmassnahmen',
  },
  {
    text: 'Raumplanung',
    size: 1,
    href: 'raumplanung',
  },
  {
    text: 'Familienplanung',
    size: 1,
    href: 'familienplanung',
  },
  {
    text: 'Personalplanung',
    size: 1,
    href: 'personalplanung',
  },
  {
    text: 'Betriebsaufwand',
    size: 1,
    href: 'betriebsaufwand',
  },
  {
    text: 'Nettoaufwand',
    size: 1,
    href: 'nettoaufwand',
  },
  {
    text: 'Zeitaufwand',
    size: 1,
    href: 'zeitaufwand',
  },
  {
    text: 'abtreten',
    size: 1,
    href: 'abtreten',
  },
  {
    text: 'Plattform',
    size: 1,
    href: 'plattform',
  },
  {
    text: 'fundiert',
    size: 1,
    href: 'fundiert',
  },
]
