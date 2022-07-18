CREATE TABLE server_produtos(  
    codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255) NOT NULL,
    preco FLOAT NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
