# Documentação do Aplicativo Newsflash

## Visão Geral

O aplicativo Newsflash é um aplicativo móvel desenvolvido usando React Native e Expo. Ele fornece aos usuários as últimas notícias e permite que cliquem em um item de notícia para visualizar o artigo completo em um navegador da web. A aplicação está containerizada usando Docker para fácil configuração e implantação.

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Executando a Aplicação](#executando-a-aplicação)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Uso](#uso)

## Pré-requisitos

Antes de começar, certifique-se de que você atendeu aos seguintes requisitos:

- Docker instalado em sua máquina.
- Configuração funcional do Expo CLI para desenvolvimento em React Native.
- Um emulador móvel configurado (por exemplo, Android Studio ou iOS Simulator).

## Instalação

Para instalar e configurar o aplicativo Newsflash, siga estas etapas:

1. **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd newsflash
    ```
    
3. **Instalar e atualizar as dependencias do projeto
   ```bash
    yarn install
    ```

4. **Construa e inicie o container Docker:**

    ```bash
    docker-compose up --build
    ```

## Executando a Aplicação


1. **Inicie o emulador:**

    Certifique-se de que seu emulador está em execução e configurado para funcionar com o Expo. Você pode iniciar o seu emulador preferido (Android ou iOS) e então lançar o aplicativo usando as Ferramentas de Desenvolvimento do Expo.

## Uso

- **Visualizando Notícias:** A tela principal exibe uma lista de notícias obtidas de uma API de notícias. Cada notícia mostra um título, uma breve descrição e uma imagem.
- **Lendo Artigos Completos:** Clicar em uma notícia abrirá o artigo completo no navegador padrão do dispositivo.


