import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Creador from './creador/Creador.js';
import Visualizador from './visualizador/Visualizador.js';

//import VisualizadorMovil from './visualizador/VisualizadorMovil.js';
//import CreadorMovil from './creador/CreadorMovil.js';

class App extends Component {
  constructor(){
    super();
    this.state = ({
      tituloArticulo: '',
      cuerpoArticulo: '',
      referenciasArticulo: '',
      urlArticulo: ''
    });
    this.getData = this.getData.bind(this);
  }

  getData(tituloR, cuerpoR, refR, urlR){
    this.setState({
    tituloArticulo: tituloR,
    cuerpoArticulo: cuerpoR,
    referenciasArticulo: refR,
    urlArticulo: urlR,
    })

  }

  changeColor(){
         this.setState({bgColor: !this.state.color_black})
     }

    render() {
      const{
        tituloArticulo,
        cuerpoArticulo,
        referenciasArticulo,
        urlArticulo
      } = this.state;
        return (
          <div className = "App" >
            <header className = "App-header" >
            <img src = { logo } className = "App-logo" alt = "logo" / >
            <h1 className = "App-title" > Welcome to React
            < /h1>
            </header>
            <table className="tabla">
              <tbody>
                <tr>
                  <th>Publicador</th>
                  <th>Visualizador</th>
                </tr>
                <tr>
                  <td>
                    <Creador sendData={this.getData}/>
                  </td>
                  <td>
                    <Visualizador titulo={tituloArticulo}
                                  cuerpo={cuerpoArticulo}
                                  referencias={referenciasArticulo}
                                  url={urlArticulo}/>
                  </td>
                </tr>
              </tbody>
            </table>

            <input
            Cambiar vista
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
            <label>
            Cambiar vista
            </label>

            </div>
        );
    }
}

export default App;
