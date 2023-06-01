def passdec(pas):
    lpas=list(pas)
    pas=''
    lenofl=len(lpas)
    for i in range(lenofl):
        lpas[i]=chr((ord(lpas[i])//10)-5)
    for i in lpas:
        pas+=i
    return pas

from mysql import connector
conn = connector.connect(
    host='localhost',
    user='root',
    password='root',
    port='3306',
    database='stylomart'
)
dbpointer = conn.cursor()
name=input('Enter username')
dbpointer.execute('SELECT * FROM customer WHERE Username = %s',(name,))
results=dbpointer.fetchone()
if not results:
    print('No such user')
else:
    passw=input('Enter the Password')
    if passw==passdec(results[2]):
        print('Login Success')
    else:
        print('Incorrect Password')
