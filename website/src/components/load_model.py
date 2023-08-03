import joblib
import sys

# Load the model from the pickle file
model = joblib.load("../RandomForest.pkl")  # Replace with the actual path to your pickle file

# Get the input data from command-line arguments
input_data = sys.argv[1:]
input_data = [float(x) for x in input_data]

# Perform prediction using the loaded model
predicted_output = model.predict([input_data])[0]

# Print the predicted output
print(predicted_output)
