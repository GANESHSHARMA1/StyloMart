import mysql.connector

conn = mysql.connector.connect(host = 'localhost',username = 'root', password = 'root',database = 'test')

my_cursor = conn.cursor()

conn.commit()
conn.close()

print("Connction Successfully Created")