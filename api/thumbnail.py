import sys
import json
from pprint import pprint
import pandas as pd



df = pd.read_csv("dataset_new.csv")

x = "http://img.youtube.com/vi/"
y = "/hqdefault.jpg"

print(df.head())

for i in df.index:
	vid = df['Video_link'].iloc[i].split("=")[1]
	df['thumbnail'] = final_vid = x+vid+y
	
	
	
d = df.to_dict(orient='records')
j = json.dumps(d)
pprint(j)

f = open("alldata.json", "w")
f.write(j)
f.close()





