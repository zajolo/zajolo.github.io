import React from 'react';
import Bill from "../assets/Billsykes.jpg";
import Captain from "../assets/Captainhook.jpg";
import Coachman from "../assets/Coachman.jpg";
import Commander from "../assets/Commander.jpg";
import Cruella from "../assets/Cruelladevil.jpg";
import Dawn from "../assets/Dawn.jpg";
import Dr from "../assets/Dr.facilier.jpg";
import Edgar from "../assets/Edgarbalthazar.jpg";
import Ernesto from "../assets/Ernesto.jpg";
import Queen from "../assets/EvilQueen.jpeg";
import Gabby from "../assets/Gabby.jpg";
import Gantu from "../assets/Gantu.jpg";
import Gaston from "../assets/Gaston.jpg";
import Governor from "../assets/Governor.jpg";
import Hades from "../assets/Hades.jpg";
import Horned from "../assets/Hornedking.jpg";
import Jafar from "../assets/Jafar.jpg";
import John from "../assets/Johnsilver.jpg";
import Judge from "../assets/Judgeclaude.jpg";
import King from "../assets/Kingmagnifico.jpg";
import Lady from "../assets/Ladytremaine.jpg";
import Lotso from "../assets/Lotso.jpg";
import Medusa from "../assets/Madamemedusa.jpg";
import Mim from "../assets/Madammim.jpg";
import Maleficent from "../assets/Maleficent.jpg";
import Gothel from "../assets/MotherGothel.jpg";
import Oogie from "../assets/oogie.jpg";
import Percival from "../assets/Percival.jpg";
import Hans from "../assets/Princehans.jpg";
import Ratigan from "../assets/professorratigan.jpg";
import Hearts from "../assets/Queenofhearts.jpg";
import Ringmaster from "../assets/Ringmaster.jpg";
import Scar from "../assets/Scar.jpg";
import Screenslaver from "../assets/Screenslaver.jpg";
import Shan from "../assets/Shanyu.jpg";
import Sheriff from "../assets/Sheriff.jpg";
import Sid from "../assets/Sid.jpg";
import Syndrome from "../assets/Syndrome.jpg";
import Teka from "../assets/Teka.jpg";
import Ursula from "../assets/Ursula.jpg";
import Wiliam from "../assets/William.jpg";
import Yokai from "../assets/yokai.jpg";
import Yzma from "../assets/Yzma.jpg";
import Zurg from "../assets/Zurg.jpg";

const Villain = [
    {
        "name": "The Evil Queen",
        "film": "Snow White and the Seven Dwarfs",
        "image": Queen
    },
    {
        "name": "The Coachman",
        "film": "Pinocchio",
        "image": Coachman
    },
    {
        "name": "The Ringmaster",
        "film": "Dumbo",
        "image": Ringmaster
    },
    {
        "name": "Lady Tremaine",
        "film": "Cinderella",
        "image": Lady
    },
    {
        "name": "Queen of Hearts",
        "film": "Alice in Wonderland",
        "image": Hearts
    },
    {
        "name": "Captain Hook",
        "film": "Peter Pan",
        "image": Captain
    },
    {
        "name": "Maleficent",
        "film": "Sleeping Beauty",
        "image": Maleficent
    },
    {
        "name": "Cruella De Vil",
        "film": "101 Dalmations",
        "image": Cruella
    },
    {
        "name": "Madam Mim",
        "film": "The Sword in the Stone",
        "image": Mim
    },
    {
        "name": "Edgar Balthazar",
        "film": "The Aristocats",
        "image": Edgar
    },
    {
        "name": "Sheriff of Nottingham",
        "film": "Robin Hood",
        "image": Sheriff
    },
    {
        "name": "Madame Medusa",
        "film": "The Rescuers",
        "image": Medusa
    },
    {
        "name": "The Horned King",
        "film": "The Black Cauldron",
        "image": Horned
    },
    {
        "name": "Professor Ratigan",
        "film": "The Great Mouse Detective",
        "image": Ratigan
    },
    {
        "name": "Bill Sykes",
        "film": "Oliver and Company",
        "image": Bill
    },
    {
        "name": "Ursula",
        "film": "The Little Mermaid",
        "image": Ursula
    },
    {
        "name": "Percival C. McLeach",
        "film": "The Rescuers Down Under",
        "image": Percival
    },
    {
        "name": "Gaston",
        "film": "Beauty and the Beast",
        "image": Gaston
    },
    {
        "name": "Jafar ",
        "film": "Aladdin",
        "image": Jafar
    },
    {
        "name": "Scar",
        "film": "The Lion King",
        "image": Scar
    },
    {
        "name": "Governor Ratcliffe",
        "film": "Pocahontas",
        "image": Governor
    },
    {
        "name": "Sid Phillips",
        "film": "Toy Story",
        "image": Sid
    },
    {
        "name": "Judge Claude Frollo",
        "film": "The Hunchback of Notre Dame",
        "image": Judge
    },
    {
        "name": "Hades",
        "film": "Hercules",
        "image": Hades
    },
    {
        "name": "Shan Yu",
        "film": "Mulan",
        "image": Shan
    },
    {
        "name": "William Cecil Clayton",
        "film": "Tarzan",
        "image": Wiliam
    },
    {
        "name": "Yzma",
        "film": "The Emperor's New Groove",
        "image": Yzma
    },
    {
        "name": "Commander Lyle Tiberius Rourke",
        "film": "Atlantis: The Lost Empire",
        "image": Commander
    },
    {
        "name": "Gantu",
        "film": "Lilo and Stitch",
        "image": Gantu
    },
    {
        "name": "Long John Silver",
        "film": "Treasure Planet",
        "image": John
    },
    {
        "name": "Syndrome",
        "film": "The Incredibles",
        "image": Syndrome
    },
    {
        "name": "Oogie Boogie ",
        "film": "The Nightmare Before Christmas",
        "image": Oogie
    },
    {
        "name": "Dr. Facilier",
        "film": "The Princess and the Frog",
        "image": Dr
    },
    {
        "name": "Lotso",
        "film": "Toy Story 3",
        "image": Lotso
    },
    {
        "name": "Mother Gothel",
        "film": "Tangled",
        "image": Gothel
    },
    {
        "name": "Prince Hans",
        "film": "Frozen",
        "image": Hans
    },
    {
        "name": "Yokai",
        "film": "Big Hero 6",
        "image": Yokai
    },
    {
        "name": "Dawn Bellwether",
        "film": "Zootopia",
        "image": Dawn
    },
    {
        "name": "Te Ka",
        "film": "Moana",
        "image": Teka
    },
    {
        "name": "Ernesto De la Cruz",
        "film": "Coco",
        "image": Ernesto
    },
    {
        "name": "Evelyn Deavor/Screenslaver",
        "film": "The Incredibles 2",
        "image": Screenslaver
    },
    {
        "name": "Gabby Gabby",
        "film": "Toy Story 4",
        "image": Gabby
    },
    {
        "name": "Zurg",
        "film": "Lightyear",
        "image": Zurg
    },
    {
        "name": "King Magnifico",
        "film": "Wish",
        "image": King
    }
]

export default Villain;