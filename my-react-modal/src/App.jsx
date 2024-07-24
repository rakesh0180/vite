import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  let isOpen, setIsOpen;
  [isOpen, setIsOpen] = useState("false");

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>open modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero fugit nobis consequatur, sequi laborum quis unde dignissimos
            neque eaque quia quasi. Corrupti, minima at quaerat quod qui eum?
            Quo ad eos ab. Alias numquam, aliquam nihil voluptatibus dolorem,
            quam odio aperiam veritatis nostrum eligendi, iste quis aliquid.
            Doloremque voluptate sint odit accusamus quos fugiat tenetur nostrum
            culpa atque officiis. Qui veritatis, eaque perspiciatis odit et
            explicabo dignissimos modi voluptatum! Assumenda ea deserunt laborum
            tenetur modi aliquid nostrum, blanditiis exercitationem at
            doloremque. Doloribus natus ab modi aut, in accusamus rerum
            voluptates suscipit minus amet tempora, cumque at, quibusdam ea
            ipsum?
          </p>
        </Modal>
      )}
    </>
  );
}

export default App;
