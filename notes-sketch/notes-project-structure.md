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
