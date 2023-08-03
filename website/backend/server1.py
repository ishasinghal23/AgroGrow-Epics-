from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def predict_with_pickle(data):
    # Load the trained model from the pickle file
    with open('../RandomForest.pkl', 'rb') as f:
        model = pickle.load(f)

    # Extract the input features from the data
    n = float(data.get('n', 0))  # Convert to float, with a default value of 0
    p = float(data.get('p', 0))
    k = float(data.get('k', 0))
    temperature = float(data.get('temperature', 0))
    humidity = float(data.get('humidity', 0))
    ph = float(data.get('ph', 0))
    rainfall = float(data.get('rainfall', 0))

    # Perform the prediction using the loaded model and input features
    # Replace this with your actual prediction logic
    prediction = model.predict([[n, p, k, temperature, humidity, ph, rainfall]])

    # Return the predicted output
    return prediction[0]


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

@app.route('/predict', methods=['POST'])
def predict():
    # Retrieve the data from the request
    data = request.get_json()

    # Perform prediction using the data
    prediction = predict_with_pickle(data)

    # Prepare the response
    response = {
        'output': prediction
    }

    return jsonify(response)




@app.route('/predict/model2', methods=['OPTIONS', 'POST'])
def predict_using_model2():
    if request.method == 'OPTIONS':
        # Handle the OPTIONS request
        response_headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST'
        }
        return '', 200, response_headers

    if request.method == 'POST':
        # Retrieve the data from the request
        data = request.get_json()

        # Perform prediction using model 2 and the data
        pred = predict_model2(data)
        # pred = int(pred)

        # Prepare the response
        response = {
            'output': pred
        }

        return jsonify(response)

if __name__ == '__main__':
    app.run()