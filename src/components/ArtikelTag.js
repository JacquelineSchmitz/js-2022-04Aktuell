import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dd><label><input type="checkbox"/> Brokkoli</label></dd>
        <dt>Getreideprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Reis</label></dd>
        <dt>Milchprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <dd><label><input type="checkbox"/> Streukäse</label></dd>
        <br/>
      </React.Fragment>
    )
  }
}

export default ArtikelTag
