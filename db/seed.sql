/* Seed */
USE burgers_db;

/* removes data in tables for a clean slate */ 
TRUNCATE TABLE burgers;

/* department */ 
INSERT INTO burgers (burger_name, devoured)
VALUES 
    ("whataburger", false), 
    ("patty melt", false), 
    ("avocodo bacon burger", false);
    
SELECT * FROM burgers;