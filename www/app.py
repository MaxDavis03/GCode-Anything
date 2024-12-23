from flask import Flask, request, jsonify, render_template, Response
import os
import cv2

app = Flask(__name__)

UPLOAD_FOLDER = '/uploads'  # Replace with actual path to SD card

# Simulated position data (replace with real data in a real application)
position_data = {
    "x_position": 0.0,
    "z_position": 0.0
}

# Initialize camera
camera = cv2.VideoCapture(0)  # Replace '0' with the camera ID if necessary

# Endpoint for homepage
@app.route('/')
def home():
    return render_template('index.html')

# Endpoint for position data
@app.route('/position')
def position():
    return jsonify(position_data)

# Camera feed generator
def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            # Encode the frame in JPEG format
            _, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# Endpoint for live camera feed
@app.route('/camera_feed')
def camera_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

