#SYNCFAB PUBLIC INFORMATION (SPI)
Circulating Supply for CoinMarketCap
## Deployment
	kubectl create -f spi-deployment.yml
## Service
	kubectl apply -f spi-service.yml
## Update service
```
kubectl patch deployment spi -p \
"{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"
```
### Related but not use
	kubectl expose deployment spi  --target-port=3000 --type=NodePort