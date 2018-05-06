import React, { Component } from 'react';
import './CreadorMovil.css';

const porClave = (nombreKey, valor) => ({
  [nombreKey]: valor
});

class CreadorMovil extends Component {
  constructor(){
    super();
    this.state = {
      titulo: '',
      cuerpo: '',
      referencias: '',
      url: ''
    }
  }

    manejador(clave, valor){
      this.setState(
        porClave(clave, valor)
      );
      this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url);
    }

    render() {
        return (
          <div className = "App" >
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="texto">Titulo del articulo:</div>
                  </td>
                  <td>
                  <input type="text" className="campoForm" placeholder="Titulo" onChange = {event => this.manejador('titulo', event.target.value)}/>
                  </td>
                </tr>
                <tr>
                <td>
                  <div className="texto">Cuerpodel articulo:</div>
                </td>
                  <textarea rows="10" cols="50" className="campoArea" type="text" onChange = {event => this.manejador('cuerpo', event.target.value)}> </textarea>
                </tr>
                <tr>
                <td>
                  <div className="texto">Url del articulo:</div>
                </td>
                  <input type="text" className="campoForm" placeholder="Url" onChange = {event => this.manejador('url', event.target.value)}/>
                </tr>
                <tr>
                <td>
                  <div className="texto">Referencias del articulo:</div>
                </td>
                  <textarea rows="3" cols="50" className="campoArea" type="text" onChange = {event => this.manejador('referencias', event.target.value)}></textarea>
                </tr>
              </tbody>
            </table>
            </div >
        );
    }
}

export default CreadorMovil;
