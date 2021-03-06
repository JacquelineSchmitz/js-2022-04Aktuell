import {Artikel} from "./Artikel.js"


/**
 * Klasse zum Gruppieren der Artikel
 *
 * @property {Number}    counter      - dient zur Erzeugung eindeutiger Gruppen-IDs
 * @property {Number}    id           - eindeutige ID-Nummer der Gruppe
 * @property {Number}    index        - Position der Gruppe innerhalb der Gruppenliste
 * @property {String}    name         - Name der Gruppe
 * @property {Artikel[]} artikelListe - Liste der Artikel in dieser Gruppe
 */
class Gruppe {
  static counter = 1
  id = Gruppe.counter++
  index
  name
  artikelListe = []

  constructor(name, index) {
    this.name = name
    this.index = index
  }

  /**
   * Sucht einen Artikel anhand seines Namens
   * @param {String} suchName - Name des gesuchten Artikels
   * @param {Boolean} meldungAusgeben - steuert, ob eine Meldung ausgegeben wird
   * @returns {Artikel|null}
   */
  artikelFinden(suchName, meldungAusgeben) {
    for (let artikel of this.artikelListe) {
      if (artikel.name == suchName) {
        return artikel
      }
    }
    if (meldungAusgeben) {
      // App.informieren(`[${this.name}] Artikel "${suchName}" nicht gefunden`, true)
    }
    return null
  }

  /**
   * Listet die Artikel in dieser Gruppe in der Konsole auf
   * @param {Boolean} gekauft - steuert die Anzeige der gekauften oder noch zu kaufenden Artikel
   */
  artikelAuflisten(suchName, gekauft) {
    for (let artikel of this.artikelListe) {
      if (artikel.gekauft == true) {
        console.debug(`${artikel.name}`)
      }
    }
    // if (meldungAusgeben) {
    //   App.informieren(`[${this.name}] Artikel "${suchName}" nicht gefunden`, true)
    // }
    return null
  }

  /**
   * Fügt einen Artikel zur ArtikelListe hinzu und gibt diesen als Wert zurück
   * @param {String} name - Name des neuen Artikels
   * @returns {Artikel} neuerArtikel - der neu erzeugte Artikel
   */
  artikelHinzufuegen(name) {
    let vorhandenerArtikel = this.artikelFinden(name, false)
    if (!vorhandenerArtikel) {
      let neuerArtikel = new Artikel(name, this.artikelListe.length)
      this.artikelListe.push(neuerArtikel)
      // App.informieren(`[${this.name}] Artikel "${name}" hinzugefügt`)
      return neuerArtikel
    } else {
      // App.informieren(`[${this.name}] Artikel "${name}" existiert schon!`, true)
    }
  }

  /**
   *
   * @param {String} name
   */
  artikelEntfernen(name) {
    // TODO: Artikel finden, position ermitteln
    let position = 0;
    this.artikelListe.splice(position , 1)
  }

  /**
   * Sucht einen Artikel anhand des Namens und benennt ihn um.
   * @param {String} alterName - Name des zu findenden Artikels
   * @param {String} neuerName - neuer Name des Artikels
   */
  artikelUmbenennen(alterName, neuerName) {
    // artikel finden mit 'alterName'
    let vorhandenerArtikel = this.artikelFinden(alterName)

    // wenn gefunden, dann 'neuerName' zuweisen
    if (vorhandenerArtikel) {
      vorhandenerArtikel.name = neuerName
    }
    // Meldung ausgeben
    console.debug("Artikelname wurde geändert von ", alterName, "zu", neuerName)
  }
}
export {Gruppe}