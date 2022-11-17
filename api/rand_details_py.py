import string
import random
import pandas as pd


N = 4
card = 10

df1 = pd.DataFrame(columns = ['Doctor ID', 'Nurse ID', 'Room allocated'])
df1.drop(df1.index, inplace=True)


for x in range(card):
    main_list = []
    doctor_id = 'DOC'+''.join(random.choices(string.digits, k=N))
    main_list.append(doctor_id)
    #print(doctor_id)
    nurse_id = 'N'+''.join(random.choices(string.digits, k=N))
    main_list.append(nurse_id)
    #print(nurse_id)
    room_no = ''.join(random.choice('ABCDE')) + '-Wing '+''.join(random.choices(string.digits, k=N))
    main_list.append(room_no)
    #print(room_no)    
    print(main_list)
    df1 = df1.append(pd.DataFrame([main_list] , columns=['Doctor ID', 'Nurse ID', 'Room allocated']))

out = df1.to_json(orient='records')[1:-1].replace('},{', '} {')