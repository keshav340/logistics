import requests

def port_code_to_coordinates(port_code):
    api_key = 'AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo'
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json'

    params = {
        'address': port_code,
        'key': api_key,
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if data['status'] == 'OK' and data['results']:
        location = data['results'][0]['geometry']['location']
        latitude = location['lat']
        longitude = location['lng']
        return latitude, longitude
    else:
        return None

# Example usage
port_code = 'INDEL'
coordinates = port_code_to_coordinates(port_code)

if coordinates:
    print(f"Latitude: {coordinates[0]}, Longitude: {coordinates[1]}")
else:
    print(f"Unable to retrieve coordinates for port code: {port_code}")
