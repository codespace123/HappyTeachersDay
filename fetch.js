console.log("version: " + Web3.version);
var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/5334d7957c024b359dcb1dbc7275c4cd"));
var a = web3.eth.getTransaction('0xac1f94d742ebe49e86a37d37298388744b82548d353a709bfcc57bf7e85d5d1c');
console.log(a);

