import Web3 from 'web3';
import PrismSale from './PrismSale.json'

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");

const contractAddress = "0xe07ec2cdda2276F7c95820eEC4Fe89a8B5f201Ee"
const contract = new web3.eth.Contract(PrismSale.abi, contractAddress)

const sharedMessage = "This is to confirm your account when downloading the limited edition album"

export { web3, contract, contractAddress, sharedMessage }