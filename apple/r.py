import requests


# Input the file name
file_name = input("Enter the file name: ")

# Read the file and store the domains in a list
with open(file_name, 'r') as f:
    domains = [line.strip() for line in f]

# Iterate through the list of domains
for domain in domains:
    # Send a GET request to the domain
    url = "https://"+domain
    try :
        response = requests.get(url)
    
        # Check if the response contains the "Cache-Control" header
        if 'Cache-Control' or 'cache-control' in response.headers:
            print(f"{domain} - Cache-Control header found")
            print(response.headers)
            print("\n")
            
    except requests.exceptions.ConnectionError:
        pass