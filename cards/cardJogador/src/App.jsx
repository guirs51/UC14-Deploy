import React from "react";
//import CardJogador from "../";
//import Titulo from "./components/Titulo";
import Fallen from "../src/assets/Fallen.jpg";
import Kaiser from "../src/assets/Kaiser.jpg";
import Aomine from "../src/assets/aomine.jpg";
import Gojo from "../src/assets/Gojo.jpeg";
import Bokuto from "../src/assets/Bokuto.jpg";
import CardJogador from "../src/components/CardJogador";
import Titulo from "../src/components/Titulo";

// Função principal do App
export default function App() {
  // Array de Objetos representando os jogadores
  // cada objeto tem um id e as props nome, posiçao, time avaliação e imagem
  const jogadores = [
    {
      id: 1,
      nome: "Fallen",
      posicao: "IGL",
      time: "Fúria",
      avaliacao: 10,
      imagen: "https://theclutch.com.br/wp-content/uploads/2021/01/fallen-liquid.jpg",
    },
    {
      id: 2,
      nome: "Kaiser",
      posicao: "Atacante",
      time: "Bastard",
      avaliacao: 10,
      imagen: Kaiser,
    },
    {
      id: 3,
      nome: "Aomine",
      posicao: "Pivo",
      time: "School",
      avaliacao: 10,
      imagen: Aomine,
    },
    {
      id: 4,
      nome: "Gojo",
      posicao: "Atacante",
      time: "Vasco da Gama",
      avaliacao: 10,
      imagen: Gojo,
    },
    {
      id: 5,
      nome: "Bokuto",
      posicao: "Oposto",
      time: "Black Jackals",
      avaliacao: 10,
      imagen: Bokuto,
    },
  ];
  return (
    <main
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "50px",
        flexWrap: "wrap",
      }}
    >
      {/* Componente de Titulo */}
      <div style={{ width: "100%" }}>
        <Titulo texto= "Lista de Jogadores"/>
      </div>
      {/* Percorrer a array de jogadores com o .map | para cada jogador cria um CardJogador */}
      {jogadores.map((j) => (
        // key é mecessartio para p React identificar cada item da lista
        // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
        <CardJogador key={j.id}{...j} />
      ))}
    </main>
  );
}
