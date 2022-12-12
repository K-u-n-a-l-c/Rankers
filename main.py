from bs4 import BeautifulSoup
import requests


login_url = ('http://103.70.61.125/iiit-ranchi-result')

payload = {
    '__VIEWSTATE' : '2ruaOhJVKmHqRhe0KR1xX8E9uPv4pvepWxDqxhS+GnHlFKul4T9K93pVUfPcuK2aTmWKr7l1iUD9/DitwzaGdaXssWxJyB7nEumWqG9YqlE=' , 
'__VIEWSTATEGENERATOR' : '82BB5251' , 
'__EVENTVALIDATION' : '1XzNsmSA7xQSltXYFPXDuZFXilYFw6/ZSRv0LUbpIyAT7o5TrEnY2lxbAnBQNkCQl8T3Mwcyhghi13TT7OJKDoCuVQcQtuaauyIx0BhSaW34cxF4u8nMRRBQ6fWzCBUsP1yvBWZv7iNqQwLZ4uoo262nuu8CtTBnK5xiE2bYU7A=' , 
'reg_No' : '2020ugcs064r' , 
'dob' : '25122003' , 
'requestID' : 'Submit'
}
html_text = requests.post(login_url, data=payload).text
soup = BeautifulSoup(html_text, 'lxml')
result = soup.find('table', class_ = 'table table-hover table-striped').text
name = soup.find('span', id = 'Label1').text
branch = soup.find('span', id = 'Label3').text
tr=soup.find_all("td")
temp = '' 
avg = []
# for i in range(0, len(result)):
#     if(result[i] == '.' and result[i-1] <= '9'):
#         temp += result[i-1] + result[i] + result[i+1] + result[i+2] + ' '
#         avg.append( temp )
#         temp =''
# print( float( avg[len( avg )-2] ) )
list1=[]
list2=[]

for i in range(0,len(tr)):
    if i%8==0 and i != 0:
        list1.append(list2)
        list2 = []
    list2.append(tr[i].text.split())
list1.append(list2)
print(list1)