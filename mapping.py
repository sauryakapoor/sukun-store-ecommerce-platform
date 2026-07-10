from flask import Flask, request, jsonify
from openai import OpenAI
import os

# Initialize Flask app
app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-commerce AI Assistant</title>
        <link rel="stylesheet" href="/static/styles.css">
        <script src="https://maps.googleapis.com/maps/api/js?key= AIzaSyCeIfYTcb9cVAve7LabYrvpi2OO1SNxYDA&libraries=places"></script>
    </head>
    <body>
        <div class="chat-container">
            <h1>E-commerce AI Assistant</h1>
            <div id="chat-box"></div>
            <textarea id="user-input" placeholder="Type your message here..."></textarea>
            <button id="send-btn">Send</button>
            <div id="map" style="height: 400px; margin-top: 20px;"></div>
        </div>
        <script>
        function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 12,
            });

            // Get user location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    map.setCenter(userLocation);

                    // Add marker for user location
                    new google.maps.Marker({
                        position: userLocation,
                        map,
                        title: "Your Location",
                    });

                    // Search for nearby bookstores
                    const service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(
                        {
                            location: userLocation,
                            radius: 5000,
                            type: ["book_store"],
                        },
                        (results, status) => {
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                const chatBox = document.getElementById("chat-box");
                                chatBox.innerHTML += '<div class="ai-message"><strong>Nearby Bookstores:</strong><ul>';

                                results.forEach((place) => {
                                    chatBox.innerHTML += `<li>${place.name} - ${place.vicinity}</li>`;

                                    // Add markers for bookstores
                                    new google.maps.Marker({
                                        position: place.geometry.location,
                                        map,
                                        title: place.name,
                                    });
                                });

                                chatBox.innerHTML += '</ul></div>';
                            }
                        }
                    );
                },
                (error) => {
                    console.error("Error getting location: ", error);
                }
            );
        }

        document.getElementById("send-btn").addEventListener("click", async () => {
            const userInput = document.getElementById("user-input").value;
            if (!userInput.trim()) return;

            const chatBox = document.getElementById("chat-box");
            chatBox.innerHTML += `<div class='user-message'><strong>You:</strong> ${userInput}</div>`;

            try {
                const response = await fetch("/assistant", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: userInput }),
                });

                const data = await response.json();
                chatBox.innerHTML += `<div class='ai-message'><strong>AI:</strong> ${data.reply}</div>`;
            } catch (error) {
                console.error(error);
                chatBox.innerHTML += `<div class='error-message'>Error: Unable to fetch AI response.</div>`;
            }

            document.getElementById("user-input").value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        });

        window.onload = initMap;
        </script>
    </body>
    </html>
    '''

# AI assistant endpoint
@app.route('/assistant', methods=['POST'])
def assistant():
    user_message = request.json.get('message', '')

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"You are an AI assistant for an e-commerce website. Respond to: \"{user_message}\"",
            max_tokens=150,
            temperature=0.7,
        )

        reply = response['choices'][0]['text'].strip()
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Static files
@app.route('/static/<path:path>')
def static_files(path):
    return app.send_static_file(path)

# Start the server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
