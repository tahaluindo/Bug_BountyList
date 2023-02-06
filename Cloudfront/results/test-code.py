import requests
from colorama import Fore, Back, Style
#from OpenSSL import SSL
from pytz import timezone
from datetime import datetime
import urllib3
import tracemalloc
import urllib3
import warnings

# Enable tracemalloc to get the object allocation traceback
tracemalloc.start()

# Suppress the warning message for insecure requests
warnings.filterwarnings("ignore", category=urllib3.exceptions.InsecureRequestWarning)

# Disable warnings for insecure requests
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)




async def domain_scanner(sub_domnames):
    print(Fore.RED + '-------------------------Scanner Started--------------------------------')
    
    print(Fore.BLUE + '-------------------Domains after scanning domains--------------------')

    # loop for getting URL's
    for subdomain in sub_domnames:
        # making url by putting subdomain one by one
        url = f"https://{subdomain}/hsjs.js"

        # Set the custom header
        header = {"X-Amz-Server-Side-Encryption": "sjskj"}

        # Set the number of requests to send
        num_requests = 50

        # Send the requests
        for i in range(num_requests):
            # Send a request with the custom header for every other request
            if i % 25 == 0:
                response1 = requests.get(url, headers=header)
            else:
                response2 = asyncio.create_task(requests.get(url))

            # Wait for the response to complete
            await response2

            # If the response is a 400 status code, print a message
            if await response2.status_code == 400:
                print("Target is vulnerable!")
                print("\n")
                print("Response headers:")
                print(response.headers)




# main function
if __name__ == '__main__':

    print('\n')

    domain_wordlist = "test-data"


    print('\n')

    # opening the subdomain text file
    with open(domain_wordlist, 'r') as file:

        # reading the file
        name = file.read()

        # using spilitlines() function storing the
        # list of splitted strings
        sub_dom = name.splitlines()
    # calling the function for scanning the subdomains
    # and getting the url
    domain_scanner(sub_dom)
