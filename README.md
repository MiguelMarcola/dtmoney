# Requisições da Lambda

- A lambda deve ser acionada via GET sem body

- Deve ser passado na requisição um header x-api-key com o valor do token do Doadin

# Retorno da Lamda

- A lambda irá retornar um access_token no seguinte formato

```json
{
	"access_token": "token",
	"token_type": "bearer",
	"expires_in": 86399
}
```

# Configurações da Lambda

- A lambda deve ser acionada pelo método GET

- A lambda deve ter variáveis de ambiente diferente para rodar em DEV e em Produção

## Variáveis de ambiente DEV

Em DEV as variáveis de ambiente devem ser as seguintes:

CLIENT_ID=`dba3a8db-fa54-40e0-8bab-7bfb9b6f2e2e`

CLIENT_SECRET=`D/ilRsfoqHlSUChwAMnlyKdDNd7FMsM7cU/vo02REag=`

BASE_URL = `https://mpisandbox.braspag.com.br/v2/auth/token`

ESTABLISHMENT_CODE= `1108578265`

MCC= `6300`

MERCHANT_NAME= `Brasilcap`



## Variáveis de ambiente PRODUÇÃO

Em Produção as variáveis de ambiente devem ser as seguintes:

CLIENT_ID = `5198eba7-d4ce-4298-a108-b26a19cfab78`
CLIENT_SECRET = `o282GF3f5ZA2Li6W3cafqi/4nkiqCoOpBZ8kGDILxzI`
BASE_URL = `https://mpi.braspag.com.br/v2/auth/token`
ESTABLISHMENT_CODE= `1108578265`
MCC= `6300`
MERCHANT_NAME= `Brasilcap`

