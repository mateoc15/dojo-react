import React, { Component } from 'react';
import './Visualizador.css';

class Visualizador extends Component {
  constructor() {
          super();
          this.imagen =  '';
          this.state = {
              titulo: '-',
              cuerpo: '',
              referencias: '',
              url: ''
          }
      }
      render() {
          return (
              <div className="App">
                  <div className="titulo">{this.props.titulo=='' ? 'Titulo': this.props.titulo}</div>
                  <img src={this.props.url==''
                   ? 'http://2.bp.blogspot.com/_QtDFVR44S_Q/TTu95-aiCqI/AAAAAAAAA-k/jP65Ns2H-f0/s1600/camaleon2.jpg'
                    : this.props.url} className="imagen"></img>
                  <div className="cuerpo">{this.props.cuerpo== '' ? 'Cuerpo del Articulo' : this.props.cuerpo}</div>
                  <a padding className="url" href={this.props.url}>{this.props.url}</a>
                  <a padding className="referencias" href={this.props.referencias}>{this.props.referencias}</a>
              </div>
          );
      }

  }
  export default Visualizador;
