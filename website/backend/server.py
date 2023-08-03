from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def predict_with_model(data):
    # Load the model from the pickle file
    with open('../dl_model.pkl', 'rb') as f:
        model = pickle.load(f)

    # Perform the prediction using the loaded model and input data
    prediction = model.predict(data)

    # Return the predicted output
    return prediction

@app.route('/predict/dlmodel', methods=['POST'])
def predict_dlmodel():
    if 'image' not in request.files:
        return jsonify({'error': 'No image found'})

    image = request.files['image']
    # Perform any preprocessing or model prediction with the image here
    # ...

    # Return the predicted output as a response
    return jsonify({'output': 'predicted_output'})


if __name__ == '__main__':
    app.run()
