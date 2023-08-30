## 1° STEP

Criar o arquivo .npmrc e colar nele:

    save-exact=true

Adicionar __save-exact=true__ no arquivo __.npmrc__ faz o npm salvar as versões exatas das dependências no package.json, __evitando atualizações automáticas.__

## 2° STEP

Inicia instalando ad dependêcnias de desenvolvimento

    npm i typescript @types/node tsx tsup -D

esse comando instala:
- __typescript__;
- __@types/node__ (para usar tipos TypeScript nas APIs do Node.js);
- __tsx__ (executar arquivos .ts, sem converter antes);
- __tsup__ (Compila TypeScript para JavaScript otimizado rapidamente, ideal para pacotes eficientes);

## 3° STEP

    npx tsc --init 

Cria um arquivo de configuração __tsconfig.json__ para personalizar as opções do compilador TypeScript em um projeto.
- Obs: 
    - em tsconfig.json alterar para "target": "ES2020"

## 4° STEP

Instalar o fastify -> framework para API

    npm  i fastify

Framework web rápido e eficiente para Node.js, otimizado para alto desempenho e baixo consumo de recursos.

## 5° STEP

Criar __.gitignore__ e adicionar:

- __node_modules__ -> biblioteca instaladas;
- __build__ -> onde é exportado o .js de que roda em produção;
- __.env__ -> variaveis de ambiente

E qualquer outro arquivo que possuir informações sensiveis.

## 6° STEP

adicionar atalhos no __package.json__

      "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "tsx watch src/server.ts",
    "start": "node build/server.js",
    "build": "tsup src --out-dir build"
    },

## 7° STEP

criar os arquivos: 
- __.env__; 
- __.env.example__;

la ficarão as variaveis de ambintes como : __NODE_ENV=dev__

instalar dotenv.

    npm i dotenv

Carrega variáveis de ambiente de arquivos .env para armazenar configurações sensíveis fora do código-fonte.

criar o arquivo __src/env/index.ts__

Instalar o __zod__

    npm i zod

É uma biblioteca de validação de dados em JavaScript/TypeScript. utilizado aqui para validar as informações das variávieis de ambiente


## 8° STEP

ESLint:

é uma ferramenta que ajuda a identificar e corrigir problemas no código JavaScript/TypeScript, melhorando a qualidade e consistência por meio de análises estáticas.

instalar como dependencia de desenvolvimento:

    npm i eslint -D

no caso acima é necessário responder as perguntas que serão feitas, apra configurar um padrão

instalar com as configs da rocketseat:

    npm i eslint @rocketseat/eslint-config -D

seguindo o código acima, iremos criar um arquivo __.eslintrc.json__

__.eslintrc.json__:

É um arquivo de configuração usado pelo ESLint para definir regras e configurações de análise de código em projetos JavaScript/TypeScript.

e nesse arquivo vamos colar o código abaixo

    {
    "extends": [
        "@rocketseat/eslint-config/node"
      ]
    }

criar o arquivo

 __.eslintignore__

é um arquivo usado para indicar ao ESLint quais arquivos ou pastas ele deve ignorar durante a análise de código. Nele colocaremos coisas como:

- node_modules
- build


Para o eslint "consertar" os erros de padronização ao salvar, basta colar o código abaixo, no __settings.json__ do vscode

    "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }


## 9° STEP

"paths": { "@/*": ["./src/*"] }: Isso cria um mapeamento de caminho de importação personalizado. Ele permite que você use a sintaxe @/ nos seus imports, e o TypeScript irá procurar esses módulos no diretório src/ do projeto. Por exemplo, se você tiver um arquivo chamado main.ts dentro do diretório src/, você poderá importá-lo em outros arquivos usando import "@/main";.

descomente essa parte do código no arquivo __tsconfig.json__ e deixei igual abaixo

    "baseUrl": "./",                                  
    "paths": {
      "@/*": ["./src/*"]
    },  


## 10° STEP

Iremos usar ORM (Object Relational Mapper), Mais precisamente o Prisma

instalar a interface de linha de comando do prisma

    npm i prisma -D

para inicializar o Prisma

    npx prisma init

cria a pasta prisma com o arquivo schema.prisma

instalar a extensão do prisma no vscode:

    Prisma

Em settings.json, colar o código abaixo
para quando salvar arquivos do tipo prisma, ele formate automaticamente

    "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
    }

criar de forma automatizada a tipagem do schema do prisma:

    npx prisma generate

instalar o client para acessar o banco de dados:

    npm i @prisma/client

## 11° STEP
Docker

Guias de instação do docker:

    https://docs.docker.com/get-docker/
    https://www.nerdlivre.com.br/como-instalar-o-docker-no-ubuntu/

1 – Atualizar o Sistema
O primeiro passo é atualizar a lista de pacotes do Ubuntu. Para isso entre com o seguinte comando:

    sudo apt update

2 – Instalar pré-requisitos
Instale pacotes de pré-requisitos para permitir ao APT o uso de pacotes seguros HTTPS.

    sudo apt install apt-transport-https ca-certificates curl software-properties-common

3 – Adicionar chave GPG
Vamos adicionar a chave para garantir a validade dos pacotes vindos do repositório do Docker.

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

4 – Adicionar repositório Docker ao Ubuntu
Vamos adicionar o repositório Docker as fontes de pacotes do Ubuntu.

    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

5 – Atualizar a lista de pacotes
Atualize novamente a lista dos pacotes.

    sudo apt update

6 – Instalar o Docker
Vamos instalar o Docker no Ubuntu.

    sudo apt install docker-ce

7 – Verificar a instalação
Para garantir que tudo deu certo vamos verificar se o Docker está em execução.

    sudo systemctl status docker
    docker --version

Por padrão o comando Docker só pode ser executado pelo usuário usando SUDO. Para facilitar o uso, vamos adicionar nosso usuário do sistema ao grupo docker, assim não precisamos usar SUDO e digitar senha as nossa execuções do comando.

    sudo usermod -aG docker ${USER}
    su - ${USER}

Pronto agora já pode usar o docker para criar containers.


## 12° STEP

dockerhub:

O Docker Hub é um serviço onde você pode encontrar, armazenar e compartilhar imagens de contêineres Docker, que são pacotes autossuficientes contendo aplicativos e todas as suas dependências. Isso facilita a distribuição e implantação de aplicativos em diferentes ambientes.

baixar imagem  do dockerhub, aconselhavel a imagem da bitmap, pois tem melhor segurança:

    https://hub.docker.com/r/bitnami/postgresql

Exemplo do comando que vamos utilizar:

    docker run --name postgresql -e POSTGRESQL_USERNAME=my_user -e POSTGRESQL_PASSWORD=password123 -e POSTGRESQL_DATABASE=my_database -p 5432:5432 bitnami/postgresql:latest

"docker run" -> executa o container

"--name postgresql" -> nome do container

"-e" -> variaveis de ambiente

" -e POSTGRESQL_USERNAME=my_user" -> usuario do banco de dados

"-e POSTGRESQL_PASSWORD=password123" -> senha do banco de dados

"-e POSTGRESQL_DATABASE=my_database" -> nome do banco de dados

"bitnami/postgresql:latest" -> imagem do dockerhub

"-p" -> porta

"-p 5432:5432" -> porta do container:porta do computador, esta direcionando a porta 5432 do container, para a porta 5432 do computador (a porta 5432 é a porta padrão do postgresql)

    docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest

obs -> Alguns comandos do docker:

docker ps -> Mostra os containers que estão rodando, nome, id, portas e etc

docker ps -a -> mostra todos os containeres que criei em algum momento

docker start <nome_imagem_container_ou_ID> -> starta o container

docker stop <nome_imagem_container_ou_ID> -> para o container

docker rm <nome_imagem_container_ou_ID> -> apaga o container

docker logs <nome_imagem_container_ou_ID> -> mostra os logs

docker logs <nome_imagem_container_ou_ID> -f -> acompanha os logs conforme vãos endo atualizados


## 13° STEP

conectando o Prisma ao banco de dados do docker

no arquivo .env adicionar a variavel de ambiente:

Modelo:

    DATABASE_URL="postgresql://<usuario>:<senha>@<host>:<porta>/<nome_do_banco>?schema=public"

    DATABASE_URL="postgresql://docker:docker@localhost:5432/apisolid?schema=public"

## 14° STEP

aplica migrações de banco de dados usando o Prisma em modo de desenvolvimento. Ele atualiza o esquema do banco de dados de acordo com as alterações feitas nos models do Prisma. após esse comando ele pedira para nomear a migrate.

    npx prisma migrate dev

prisma studio -> abre o prisma studio, onde podemos ver o banco de dados e fazer alterações (interface gráfica para navegar nas tabelas do banco de dados)

    npx prisma studio 

## 15° STEP

criar o docker-compose.yml

O Docker Compose é uma ferramenta que permite definir e gerenciar aplicativos compostos por vários contêineres Docker usando um único arquivo de configuração YAML. Isso simplifica a execução, a escalabilidade e o gerenciamento de aplicativos complexos.

    criar o arquivo __docker-compose.yml__

"traduzir" o comando que utilizamos ao criar o container do postgresql para o docker-compose.yml

    version: '3.8'

    services:
    postgresql:
        image: bitnami/postgresql:latest
        environment:
        - POSTGRESQL_USERNAME=docker
        - POSTGRESQL_PASSWORD=docker
        - POSTGRESQL_DATABASE=apisolid
        ports:
        - 5432:5432

Este trecho de código faz a mesma coisa que o comando que usado para criar o contêiner do PostgreSQL, mas agora está encapsulado no formato docker-compose.yml. Isso permitirá usar o Docker Compose para gerenciar o contêiner de forma mais conveniente.


Para subir um conjunto de serviços definidos em um arquivo docker-compose.yml, se usa o seguinte comando:

    docker-compose up

sso inicia todos os serviços definidos no arquivo docker-compose.yml em primeiro plano. Se você quiser iniciar os serviços em segundo plano, pode adicionar a opção -d:

    docker-compose up -d

Lembre-se de que  deve executar esse comando no diretório onde está localizado o arquivo docker-compose.yml.

O comando docker-compose stop é utilizado para parar os contêineres em execução dos serviços definidos no arquivo docker-compose.yml. Por exemplo, para parar os serviços definidos no arquivo docker-compose.yml, execute:

    docker-compose stop

Isso irá parar os contêineres associados aos serviços, mas não irá removê-los. Se você desejar remover os contêineres, pode usar o comando:

    docker-compose down

Para retomar a execução dos serviços após tê-los parado, você pode usar o comando:

    docker-compose start