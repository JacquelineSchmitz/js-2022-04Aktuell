import React from 'react'
import GruppenTag from './components/GruppenTag'
import App from './model/Shopping'


class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.initialisieren()
  }

  initialisieren() {
    let horror = App.gruppeHinzufuegen("Horror")
    let film1 = horror.artikelHinzufuegen("Freitag der 13.")
    film1.gekauft = false
    horror.artikelHinzufuegen("Evil Dead")
    horror.artikelHinzufuegen("The Devils Rejects")
    horror.artikelHinzufuegen("Stephen King ES")
    let scifi = App.gruppeHinzufuegen("Science Fiction")
    let film2 = scifi.artikelHinzufuegen("Stranger Things")
    film2.gekauft = true
    scifi.artikelHinzufuegen("Star Wars 9 Der Aufstieg ...")
    scifi.artikelHinzufuegen("Mandalorian")
    scifi.artikelHinzufuegen("Boba Fett")
    scifi.artikelHinzufuegen("Ewoks-Kampf um Endor")
    let mystery = App.gruppeHinzufuegen("Mystery")
    let film3 = mystery.artikelHinzufuegen("Vampire Diarys")
    film3.gekauft = true
    mystery.artikelHinzufuegen("The Orginals")
  }

  render() {
    let Movie = []
    for (const gruppe of App.gruppenListe) {
      Movie.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={false}/>)
    }


    let WatchedMovie = []
    for (const gruppe of App.gruppenListe) {
      WatchedMovie.push(<GruppenTag
        key={gruppe.id}
        gruppe={gruppe}
        gekauft={true}/>)
    }



    return (
      <div id="container">
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <header>
          <h1>Movielist</h1>
          <label
            className="mdc-text-field mdc-text-field--filled mdc-text-field--with-trailing-icon mdc-text-field--no-label">
            <span className="mdc-text-field__ripple"></span>
            <input className="mdc-text-field__input" type="search"
                   id="artikelEingabe" placeholder="Film hinzufügen "/>
            <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing"
               role="button">add_circle</i>
            <span className="mdc-line-ripple"></span>
          </label>
        </header>
        <hr/>

        <main>
          <section>
            <h2>Movie
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              {Movie}
            </dl>
          </section>
          <hr/>
          <section>
            <h2>WatchedMovie
              <i className="material-icons">expand_less</i>
            </h2>
            <dl>
              {WatchedMovie}
            </dl>
          </section>
        </main>
        <hr/>

        <footer>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">bookmark_add</span>
            <span className="mdc-button__ripple"></span> Genre
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">sort</span>
            <span className="mdc-button__ripple"></span> Sort
          </button>
          <button className="mdc-button mdc-button--raised">
            <span className="material-icons">settings</span>
            <span className="mdc-button__ripple"></span> Einstellungen
          </button>
        </footer>
      </div>
    )
  }
}

export default ShoppingList
