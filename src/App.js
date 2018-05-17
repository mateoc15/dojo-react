import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Creador from './creador/Creador';
  import Visualizador from './visualizador/Visualizador';

  class App extends Component {
    constructor(){
      super();
      this.state = {
          tituloArticulo : '',
          cuerpoArticulo : '',
          referenciasArticulo : '',
          urlArticulo : '',
          colorTitulo: '',
          tamanoTitulo: '',
          letraTitulo: '',
          colorCuerpo: '',
          tamanoCuerpo: '',
          letraCuerpo: ''
      }
      this.getData = this.getData.bind(this);
    }

    getData(tituloR, cuerpoR, refR, urlR, colorTituloR, tamanoTituloR, letraTituloR, colorCuerpoR, tamanoCuerpoR, letraCuerpoR){
      this.setState({
        tituloArticulo : tituloR,
        cuerpoArticulo : cuerpoR,
        referenciasArticulo : refR,
        urlArticulo : urlR,
        colorTitulo: colorTituloR,
        tamanoTitulo: tamanoTituloR,
        letraTitulo: letraTituloR,
        colorCuerpo: colorCuerpoR ,
        tamanoCuerpo: tamanoCuerpoR,
        letraCuerpo: letraCuerpoR
      })
    }


    setEstilo(clave, valor){
      document.getElementsByClassName('text').style[clave] = valor;
    }

    render() {
      const {
        tituloArticulo,
        cuerpoArticulo,
        referenciasArticulo,
        urlArticulo,
        colorTitulo,
        tamanoTitulo,
        letraTitulo,
        colorCuerpo,
        tamanoCuerpo,
        letraCuerpo
      } = this.state;

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Dojo React</h1>
          </header>
          <div className="App-intro">


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
                <Visualizador titulo = {tituloArticulo}
                                cuerpo = {cuerpoArticulo}
                                referencias = {referenciasArticulo}
                                url = {urlArticulo}
                                colortitulo = {colorTitulo}
                                tamanotitulo = {tamanoTitulo}
                                letratitulo = {letraTitulo}
                                colorcuerpo = {colorCuerpo}
                                tamanocuerpo = {tamanoCuerpo}
                                letracuerpo = {letraCuerpo}
                                />
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default App;
