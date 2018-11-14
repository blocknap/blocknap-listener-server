# BlockNap Listener Server
# Version 0.1.0

 1.Create account in https://infura.io/
    
 2.Create wallet in https://www.myetherwallet.com/
    
 3.Get ether in http://faucet.ropsten.be:3001/
    
 4.Clone repository.
    
 5.Install nodeJS libraries. Execute "npm install" in folder.
    
 6.Edit configuration file

 - ADDRESS_WALLET = Address of wallet create
 - PRIVATE_KEY_WALLET = Private key of wallet
 - PRIVATE_KEY_INFURA = Private key of infura

```json
	{
	  "account": "ADDRESS_WALLET",
	  "port": 8889,
	  "private": "PRIVATE_KEY_WALLET",
	  "listenFiles": [
		{
		  "name": "logTest",
		  "file": "logTest.js"
		}
	  ],
	  "provider_config": "PRIVATE_KEY_INFURA",
	  "provider":"infura_ropsten",
	  "wss":"wss://ropsten.infura.io/ws",
	  "gas": "0x1e8480",
	  "gasPrice": "0x15",
	  "path_listen": "../../listen",
	  "db": "postgresql://root@localhost:26257/blocknap?sslmode=disable"
	}
```


7.Execute init.sh
