import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissors from "./assets/images/icon-scissors.svg";
import lizard from "./assets/images/icon-lizard.svg";
import spock from "./assets/images/icon-spock.svg";

const Tiledata = [
  {
    id: "rock",
    imgurl: rock,
    border: "linear-gradient(hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
  },
  {
    id: "paper",
    imgurl: paper,
    border: "linear-gradient(hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
  },
  {
    id: "scissors",
    imgurl: scissors,
    border: "linear-gradient(hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
  },
  {
    id: "lizard",
    imgurl: lizard,
    border: "linear-gradient(hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)",
  },
  {
    id: "spock",
    imgurl: spock,
    border: "linear-gradient(hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)",
  },
];

export default Tiledata;
