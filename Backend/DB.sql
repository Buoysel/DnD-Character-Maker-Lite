use dnd_char_maker_lite;

CREATE TABLE users (
	user_id INT AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);	

CREATE TABLE characters (
	char_id INT AUTO_INCREMENT,
    creator_id INT NOT NULL,
    date_created DATETIME,
    name VARCHAR(100),
    level TINYINT,
    race VARCHAR(50),
    class VARCHAR(50),
    background VARCHAR(255),
    alignment VARCHAR(255),
    hitpoints INT,
    strength TINYINT,
    dexterity TINYINT,
    constitution TINYINT,
    intelligence TINYINT,
    wisdom	TINYINT,
    charisma TINYINT,
    PRIMARY KEY (char_id),
    FOREIGN KEY (creator_id) REFERENCES users(user_id)
);

SELECT * FROM users;
SELECT * FROM characters;

INSERT INTO users (username, email, password)
VALUES ('buoysel', 'firstone1993@msn.com', 'mypass');

INSERT INTO characters (creator_id, date_created, name, level, race, class, background, alignment, hitpoints, strength, dexterity, constitution, intelligence, wisdom, charisma)
VALUES				   (    1,          now(), 'Bo''Rung', 1, 'Orc', 'Monk', 'Pirate', 'Lawful Neutral', 11, 15, 16, 17, 10, 16, 9);


SELECT characters.name, users.username AS 'Creator'
FROM characters
	INNER JOIN users ON users.user_id = characters.creator_id;
    
