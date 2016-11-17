import Bee from './Bee'

class ForagerBee {
  constructor() {
    super();
  }

  forage(treasure){
    this.treasureChest.push(treasure);
  }
};

export default ForagerBee;
