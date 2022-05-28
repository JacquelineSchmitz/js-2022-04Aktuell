import React from 'react'
import GruppenTag from './components/GruppenTag'
import Modell from './model/Shopping'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.initialisieren()
    this.state = {
      aktiveGruppe: null,
      showGruppenDialog: false,
      showSortierDialog: false,
      einkaufenAufgeklappt: true,
      erledigtAufgeklappt: false
    }
  }

  initialisieren() {
    let fantasy = Modell.gruppeHinzufuegen("Fantasy")
    let film1 = fantasy.artikelHinzufuegen("Der Dunkle Kristall")
    film1.gekauft = true
    fantasy.artikelHinzufuegen("Avatar")
    let scifi = Modell.gruppeHinzufuegen("Science Fiction")
    let film2 = scifi.artikelHinzufuegen("Die Ewkos")
    film2.gekauft = true
    scifi.artikelHinzufuegen("Star Wars")
    let horror = Modell.gruppeHinzufuegen("Horror")
    let film3 = horror.artikelHinzufuegen("Freitag der 13.")
    film3.gekauft = true
    horror.artikelHinzufuegen("The Devils Rejects")
  }

  einkaufenAufZuKlappen() {
    let neuerZustand = !this.state.einkaufenAufgeklappt
    this.setState({einkaufenAufgeklappt: neuerZustand})
  }

  erledigtAufZuKlappen() {
    this.setState({erledigtAufgeklappt: !this.state.erledigtAufgeklappt})
  }

  artikelChecken = (artikel) => {
    // ToDo: implementiere diese Methode
    // artikel.gekauft 'umpolen'
    artikel.gekauft = !artikel.gekauft
    // 'aktion' abhängig von 'artikel.gekauft' auf "erledigt" oder "reaktiviert" setzen
    let aktion
    if (artikel.gekauft == true){
      aktion = "erledigt"
    }else {
      aktion = "unerledigt"
    }
    // App.informieren mit 'aktion'
    Modell.informieren(`${artikel.name}"ist" ${aktion}`)
    // 'state' aktualisieren
    this.setState(this.state)
  }

  artikelHinzufuegen() {
    // ToDo: implementiere diese Methode
    let eingabe =document.getElementById("artikelEingabe")
    if (eingabe.value.trim().length > 0) {
      Modell.aktiveGruppe.artikelHinzufuegen(eingabe.value)
      this.setState(this.state)
    }
    eingabe.value = ""
    eingabe.focus()
  }

  setAktiveGruppe(gruppe) {
    Modell.aktiveGruppe = gruppe
    Modell.informieren("[App] Gruppe \"" + gruppe.name + "\" ist nun aktiv")
    this.setState({aktiveGruppe: Modell.aktiveGruppe})
  }

  render() {
    let nochNichtGesehen = []
    if (this.state.einkaufenAufgeklappt == true) {
      for (const gruppe of Modell.gruppenListe) {
        nochNichtGesehen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={false}
          aktiv={gruppe == this.state.aktiveGruppe}
          aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
          checkHandler={this.artikelChecken}/>)
      }
    }


    let schonGesehen = []
    if (this.state.erledigtAufgeklappt) {
      for (const gruppe of Modell.gruppenListe) {
        schonGesehen.push(<GruppenTag
          key={gruppe.id}
          gruppe={gruppe}
          gekauft={true}
          aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe)}
          checkHandler={this.artikelChecken}/>)
      }
    }

    return (
      <div id="container">
        <header>
          <h1>Watchlist</h1>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input className="mdc-text-field__input" type="search"
                   id="artikelEingabe" placeholder="Artikel hinzufügen"
                   onKeyPress={e => (e.key == 'Enter') ? this.artikelHinzufuegen() : ''}/>
            <span className="mdc-line-ripple"></span>
            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
               tabIndex="0" role="button"
               onClick={() => this.artikelHinzufuegen()}>add_circle</i>
          </label>

        </header>
        <hr/>

        <main>
          <section>
            <h2>Noch nicht gesehen
              <i onClick={() => this.einkaufenAufZuKlappen()} className="material-icons">
                {this.state.einkaufenAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            <dl>
              {nochNichtGesehen}
            </dl>
          </section>
          <hr/>
          <section>
            <h2>Schon gesehen
              <i onClick={() => this.erledigtAufZuKlappen()} className="material-icons">
                {this.state.erledigtAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            <dl>
              {schonGesehen}
            </dl>
          </section>
        </main>
        <hr/>

        <footer>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">bookmark_add</span>
            <span className="mdc-button__ripple"></span> Gruppen
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">sort</span>
            <span className="mdc-button__ripple"></span> Sort
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">settings</span>
            <span className="mdc-button__ripple"></span> Setup
          </button>
        </footer>
      </div>
    )
  }
}

export default App
