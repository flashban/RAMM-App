from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import json
import os
app = Flask(__name__)  
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
main_path = os.getcwd()


def index():
    return "Homepage of Course API"

@app.route('/getjson', methods = ['GET'])
def GetJSON():
    try:
        if(request.method == 'GET'):
            print(os.getcwd())
            os.chdir(main_path + '/scripts')
            f = open('final.json')
            data = json.load(f)
            f.close()
            os.chdir(main_path)
        return jsonify(data)
    except (TypeError,FileNotFoundError) as e: 
        print("error")


@app.route('/search',methods = ['POST'])
def query():
    try:
        if(request.method == 'POST'):
            videoInput = request.json['videoInput']
            print(os.getcwd())
            os.chdir(main_path + '/scripts')
            os.system(f"./auto.sh \"{videoInput}\" ")
            f = open('final.json')
            data = json.load(f)
            f.close()
            os.chdir(main_path)
    except: 
        pass
    return jsonify(data)


@app.route('/getdata' , methods = ['GET'])
def get_data():
    try:
        if(request.method == 'GET'):
            print(os.getcwd())
            os.system(f"python3 details.py") 
            f = open ('final.json', "r")
            data = json.loads(f.read())
            os.chdir(main_path)
    except: 
        pass
    return jsonify(data)
    
@app.route('/getalldata' , methods = ['GET'])
def get_all_data():
    try:
        if(request.method == 'GET'):
            print(os.getcwd())
            os.system(f"python3 thumbnail.py") 
            f = open ('alldata.json', "r")
            data = json.loads(f.read())
            os.chdir(main_path)
    except: 
        pass
    return jsonify(data)
