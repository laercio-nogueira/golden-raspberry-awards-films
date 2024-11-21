# Pior Filme do Golden Raspberry Awards

API RESTful para consultar informações sobre os produtores com o maior e menor intervalo entre prêmios consecutivos na categoria "Pior Filme" do **Golden Raspberry Awards**.

## **Topicos**
1. Tecnologias e Libs.
2. Instalação
3. Estrutura do Projeto.
4. **Testes de Integração**: Inclui testes de integração para validação dos dados.

---

## **1. Tecnologias Utilizadas**
- **Node.js**
- **NestJS**
- **TypeORM**
- **SQLite** (banco de dados em memória)
- **csv-parser** (biblioteca para leitura de CSV)
- **Jest** (framework de testes)

---

## **2. Instalação**

### **Pré-requisitos**
- Node.js versão 22+.
- npm (gerenciador de pacotes).

### **Passo a Passo**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/laercio-nogueira/golden-raspberry-awards-films.git
   cd ./golden-raspberry-awards-films
   ```

2. Instale as dependencias
   ```bash
   npm install

3. Inicie a aplicação
   ```bash
   npm run start

4. A aplicação estará disponível em:
- http://localhost:3000/movies/intervals

---

## **3. Estrutura do Projeto**
```ruby
src/
├── database/
│   ├── entities/
│   │   └── movies.entity.ts        # Entidade de filmes
│   ├── movielist.csv               # Arquivo CSV com dados dos filmes
│   └── typeorm.config.ts           # Configuração do TypeORM
├── modules/
│   ├── csv/
│   │   └── csv.service.ts          # Serviço para leitura e importação do CSV
│   └── movies/
│       ├── movies.controller.ts   # Controlador REST para os filmes
│       ├── movies.module.ts       # Módulo de filmes
│       └── movies.service.ts      # Serviço principal para lógica de negócio
├── app.module.ts                   # Módulo principal da aplicação
├── main.ts                         # Arquivo de inicialização da aplicação
test/
├── app.e2e-spec.ts                 # Testes de integração (end-to-end)
└── jest-e2e.json                   # Configuração do Jest para testes e2e
```

---

## **4. Testes de Integração**
1. Para rodar os testes, execute:
   ```bash
   npm run test

