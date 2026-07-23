import sqlite3

# Connect to SQLite database
conn = sqlite3.connect("database.db")

# Create cursor
cursor = conn.cursor()

# Create users table
cursor.execute("""
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT NOT NULL,
    usn TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL
)
""")

conn.commit()
conn.close()

print("✅ Database created successfully!")