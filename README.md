#### Project setup
Em primeiro lugar é necessário que você tenha o '**_yarn_**' instalado e saiba como utilizar o **_terminal_** para rodar os comandos da aplicação.

Em sua máquina após acessar a pasta do projeto pela linha de comando rode o comando abaixo para instalação dos pacotes:
```
yarn install
```

O Próximo passo será instalar o '_mkcert_' para poder trabalhar com o HTTPS em ambiente de **_Desenvolvimento_**. Siga as intruções para instalação de acordo com o seu sistema operacional no [link do pacote](https://github.com/FiloSottile/mkcert) e depois de instalado efetue os seguintes comandos na pasta do projeto:

```
mkcert -install
```

```
mkcert licensed "*.licensed" licensed localhost 127.0.0.1 ::1
```

Para compilar o projeto em **_Desenvolvimento_**, execute o comando:

```
yarn dev
```

Para compilar o projeto para **_Publicação_**, execute o comando:

```
yarn build
```
