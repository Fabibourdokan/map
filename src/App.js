import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    dados: [
      {
        nome: "Fabi",
        idade: 29,
        musicaPreferida: "the shock of the lightning",
        instrumentoPreferido: "Violão",
        cidade: "Joinville",
        mesAniversario: "Novembro"
      },

      {
        nome: "Fernanda",
        idade: 30,
        musicaPreferida: "Say Goodbye",
        instrumentoPreferido: "Piano",
        cidade: "Campo Grande",
        mesAniversario: "Outubro"
      },

      {
        nome: "Dani",
        idade: 26,
        musicaPreferida: "Plano B",
        instrumentoPreferido: "Violão",
        cidade: "Blumenau",
        mesAniversario: "Maio"
      },

      {
        nome: "Maria Clara",
        idade: 08,
        musicaPreferida: "Nada Contra",
        instrumentoPreferido: "Violino",
        cidade: "Joinville",
        mesAniversario: "Outubro"
      },

      {
        nome: "Daniel",
        idade: 06,
        musicaPreferida: "OI nego",
        instrumentoPreferido: "Guitarra",
        cidade: "Joinville",
        mesAniversario: "Abril"
      },

      {
        nome: "Saide",
        idade: 65,
        musicaPreferida: "Banho de Lua",
        instrumentoPreferido: "Flauta",
        cidade: "Campo Grande",
        mesAniversario: "Agosto"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1> Minha ficha </h1>
        {this.state.dados.map((item) => (
          <div>
            <p>
              Meu nome é {item.nome}, minha idade é {item.idade}, minha música
              preferida é {item.musicaPreferida} meu instrumento preferido é
              {item.instrumentoPreferido}, moro em{item.cidade} o mês do meu
              aniversário é {item.mesAniversario}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
