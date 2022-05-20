import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dt>Obst & Gemüse
          <i className="material-icons">expand_less</i>
        </dt>


        <ArtikelTag/>
        <ArtikelTag/>
        <ArtikelTag/>
      </React.Fragment>
    )
  }
}

export default GruppenTag
