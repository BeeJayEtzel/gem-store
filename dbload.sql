INSERT INTO store (name, phone, email, id, createdAt, updatedAt)
VALUES ("Gem Emporium", "555-555-5555", "email@gememporium.com", 1, NOW(), NOW())

INSERT INTO collection (name, store, id, createdAt, updatedAt)
VALUES ("Birth Stones", 1, 1, NOW(), NOW());

INSERT INTO collection (name, store, id, createdAt, updatedAt)
VALUES ("High Roller Gems", 1, 2, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Hope Diamond", "A glorius masterpiece", "/images/hopediamond.jpg", 1, 350000000, 2, 1, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Heart of the Ocean", "It'll never let go", "/images/blueheart.jpg", 1, 2200000, 2, 2, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Ruby", "A fiery red gemstone", "/images/ruby.jpg", 2, 299.99, 1, 3, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Diamond", "So shiny", "/images/diamond.jpg", 2, 2989.99, 1, 4, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Amethyst", "Very much purple. Very", "/images/amethyst.jpg", 2, 199.99, 1, 5, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Opal", "It's opal-y'", "/images/opal.jpg", 2, 989.99, 1, 6, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Sapphire", "Shiny blue rock", "/images/sapphire.jpg", 2, 89.99, 1, 7, NOW(), NOW());

INSERT INTO gem (name, description, picture, onhand, price, collection, id, createdAt, updatedAt)
VALUES ("Cubic Zirconia", "Not a diamond, but hey, you might fool her", "/images/cz.jpg", 2, 9.99, 1, 8, NOW(), NOW());
