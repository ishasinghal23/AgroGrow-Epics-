from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def predict_model2(data):
    # Load the trained model for model 2 from the pickle file
    with open('../LogisticRegressiont.pkl', 'rb') as f:
        model2 = pickle.load(f)
        
    # soil_type = {0: 'Black', 1: 'Clayey', 2: 'Loamy', 3: 'Red', 4: 'Sandy'}
    # crop_type = {0: 'Barley', 1: 'Cotton', 2: 'Ground Nuts', 3: 'Maize', 4: 'Millets', 5: 'Oil seeds', 6: 'Paddy', 7: 'Pulses', 8: 'Sugarcane', 9: 'Tobacco', 10: 'Wheat'}

    # Extract the input features from the data for model 2
    temperature = float(data.get('temperature', 0))
    humidity = float(data.get('humidity', 0))
    moisture = float(data.get('moisture', 0))
    soilType = float(data.get('soilType', 0))
    cropType = float(data.get('cropType', 0))
    nitrogen = float(data.get('nitrogen', 0))
    potassium = float(data.get('potassium', 0))
    phosphorous = float(data.get('phosphorous', 0))
    
    # soil = {i for i in soil_type if soil_type[i]==soilType}
    # crop = {i for i in crop_type if crop_type[i]==cropType}


    # Perform the prediction using model 2 and input features
    pred = model2.predict([[temperature, humidity, moisture, soilType, cropType, nitrogen, potassium, phosphorous]])

    # Return the predicted output for model 2
    return pred[0]

@app.route('/predict/model2', methods=['POST'])
def predict_using_model2():
    # Retrieve the data from the request
    data = request.get_json()

    # Perform prediction using model 2 and the data
    pred = predict_model2(data)
    pred = int(pred)

    # Prepare the response
    response = {
        'output': pred
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run()
