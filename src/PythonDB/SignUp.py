import string
import time
def passenc(pas):
    lpas=list(pas)
    pas=''
    lenofl=len(lpas)
    for i in range(lenofl):
        lpas[i]=chr((ord(lpas[i])+5)*10)
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
name=input('Enter the name')
l=len(name)
if not name.isalpha():
    print('Invalid')
elif l<5 or l>15 :
    print('Minimum 5 characters and Maximum 15')
else:
    passw=input('Enter password')
    ll=len(passw)
    a1=a2=0
    for i in string.punctuation:
        if passw.__contains__(i):
            a1+=1
            break
    for i in string.digits:
        if passw.__contains__(i):
            a2+=1
    if not (a1 and a2):
        print('Should contains atleast one special character alteast one digit')
    elif ll<5 or l>15:
        print('Minimum 5 characters and Maximum 15')
    else:

        dbpointer.execute('INSERT INTO customer (Username,Password,Timestamp) VALUES (%s,%s,%s)',(name,passenc(passw),time.ctime()))
        conn.commit()
        print('Sign Up successfull')




