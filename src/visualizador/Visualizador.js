import React, { Component } from 'react';
import './Visualizador.css';
import PropTypes from 'prop-types';

class Visualizador extends Component {
    constructor(){
        super();
        this.imagen = '';
        this.state = {
            titulo : '',
            cuerpo : '',
            referencias : '',
            url : '',
            colortitulo: '',
            tamanotitulo: '',
            letratitulo: '',
            colorcuerpo: '',
            tamanocuerpo: '',
            letracuerpo: ''
        }
    }
  render() {
    console.log(this.props.colorTitulo);
    return (
        <div className="App">
            <div className="titulo"  style={{color: (this.props.colortitulo), fontSize:(this.props.tamanotitulo)+'em'}}>{this.props.titulo=='' ? 'Titulo': this.props.titulo}</div>
            <img src={this.props.url==''
            ? 'https://www.myrenova.com/Plugins/Renova.Personalization/Content/Images/Configurador/empty.png'
            : this.props.url} className="imagen"></img>
            <div className="cuerpo" style={{color: (this.props.colorcuerpo), fontSize:(this.props.tamanocuerpo)+'em'}}>{this.props.cuerpo== '' ? 'Cuerpo del Articulo' : this.props.cuerpo}</div>
            <a padding className="referencias" href={this.props.referencias}>{this.props.referencias}</a>
        </div>
    );
  }
}

export default Visualizador;
