CREATE TABLE aliados (
    identificador INTEGER PRIMARY KEY AUTOINCREMENT,
    aliado VARCHAR(50) NOT NULL,
    habilidade VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT (datetime('now'))
);