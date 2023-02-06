import requests
from colorama import Fore, Back, Style
#from OpenSSL import SSL
from pytz import timezone
from datetime import datetime
import urllib3


urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def space_line():
    line = "-"
    print(Fore.YELLOW + line.center(100, "-"))


default_headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.5', 'Connection': 'keep-alive', 'Cookie': 'amp_ddd6ec=6LwNeSYMZM-n7G2uV7Arh8...1frqdddb9.1frqdo4fu.12.15.27; _gcl_au=1.1.1342798764.1641930296; _ga=GA1.1.690315493.1641930298; _ga_9VSBF2K4BX=GS1.1.1644785199.12.1.1644785571.0; amplitude_id_ddd6ece4d5ddebbf244a249703c9d662opensea.io=eyJkZXZpY2VJZCI6IjMxN2I4Y2QyLTE1OWMtNDBiZC05MDM5LWJmYjc2OWY1MjE4NFIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY0Mjc5NzkxNjc2NCwibGFzdEV2ZW50VGltZSI6MTY0Mjc5ODI2NzEzNSwiZXZlbnRJZCI6MjIsImlkZW50aWZ5SWQiOjI0LCJzZXF1ZW5jZU51bWJlciI6NDZ9; _ga_QN8V4MT4GF=GS1.1.1644785182.9.1.1644786001.0; _zendesk_cookie=BAhJIhl7ImRldmljZV90b2tlbnMiOnt9fQY6BkVU--459ed01949a36415c1716b5711271c3d08918307; cf_clearance=.gRQfmAjNAjGh7a.9CdelbjD0eT0qTMseRK19q8h6PQ-1642691128-0-150; __cfruid=f7f63e2ace4e4d724dac16c1dbafe94e4f6e58e5-1644765382; _help_center_session=QjFkUjlvVGNxZXYvMnIrQ2IvUG1saVNlcnZ1RlFBTzZ2UVFwZTdQK015bXZVSUtBMlZ0SGlacXJYUEI0VTlwT1NmRldOUWpJQ2tzaW1UODdoNFROUDhFYzlIaG42d1paRmZoL1p6NnBhd3orZHp3WDhNaWFpVTBhcHB2NWdZT04tLXliaGhlSDhoOWsvMDhpQ1JKZ0NQWHc9PQ%3D%3D--f8d299ad6371592563dfeb361a69dd465d0e46a4; _gid=GA1.2.617533610.1644785200; _zendesk_session=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJTQ2OGFjYjkzNjA1YzEwMzk0ZjUzNzJiZjk3ZDIyNGJmBjsAVEkiDGFjY291bnQGOwBGaQMJ96JJIgpyb3V0ZQY7AEZpA0fcQUkiDmlzX21vYmlsZQY7AFRGSSITd2FyZGVuLm1lc3NhZ2UGOwBUewA%3D--f1b2f49e3295e0933f3cd0f0f72e2d2dec486776; _zendesk_shared_session=-ZmxwMFU1OWw5VzhOZW9SY3UwNXpIaGdLeEhoQzR2UGh0NDM4eWdiTHF0UytYNzUxL3VZRm1pWnBoN1RhaGg1RWtqaUxvZTBWVVhJcjYzL2lkSHBlQnU2SnJlM1dORGh2Z0lva0c1L3NwT2UxYnlOSlBqWmsweS9wSis5UlJlOWhibmxrWFNmelplc0d4dk9sOWl6T0NBPT0tLWdGYzVwMEZqdUd0QnU2NUpjb2RDMmc9PQ%3D%3D--596903f958a6a233bd1e986642cf0936ca2bd332', 'Upgrade-Insecure-Requests': '1', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'TE': 'Trailers', "X-Amz-Server-Side-Encryption": "AES256xx"}
second_header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.5', 'Connection': 'keep-alive', 'Cookie': 'amp_ddd6ec=6LwNeSYMZM-n7G2uV7Arh8...1frqdddb9.1frqdo4fu.12.15.27; _gcl_au=1.1.1342798764.1641930296; _ga=GA1.1.690315493.1641930298; _ga_9VSBF2K4BX=GS1.1.1644785199.12.1.1644785571.0; amplitude_id_ddd6ece4d5ddebbf244a249703c9d662opensea.io=eyJkZXZpY2VJZCI6IjMxN2I4Y2QyLTE1OWMtNDBiZC05MDM5LWJmYjc2OWY1MjE4NFIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY0Mjc5NzkxNjc2NCwibGFzdEV2ZW50VGltZSI6MTY0Mjc5ODI2NzEzNSwiZXZlbnRJZCI6MjIsImlkZW50aWZ5SWQiOjI0LCJzZXF1ZW5jZU51bWJlciI6NDZ9; _ga_QN8V4MT4GF=GS1.1.1644785182.9.1.1644786001.0; _zendesk_cookie=BAhJIhl7ImRldmljZV90b2tlbnMiOnt9fQY6BkVU--459ed01949a36415c1716b5711271c3d08918307; cf_clearance=.gRQfmAjNAjGh7a.9CdelbjD0eT0qTMseRK19q8h6PQ-1642691128-0-150; __cfruid=f7f63e2ace4e4d724dac16c1dbafe94e4f6e58e5-1644765382; _help_center_session=QjFkUjlvVGNxZXYvMnIrQ2IvUG1saVNlcnZ1RlFBTzZ2UVFwZTdQK015bXZVSUtBMlZ0SGlacXJYUEI0VTlwT1NmRldOUWpJQ2tzaW1UODdoNFROUDhFYzlIaG42d1paRmZoL1p6NnBhd3orZHp3WDhNaWFpVTBhcHB2NWdZT04tLXliaGhlSDhoOWsvMDhpQ1JKZ0NQWHc9PQ%3D%3D--f8d299ad6371592563dfeb361a69dd465d0e46a4; _gid=GA1.2.617533610.1644785200; _zendesk_session=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJTQ2OGFjYjkzNjA1YzEwMzk0ZjUzNzJiZjk3ZDIyNGJmBjsAVEkiDGFjY291bnQGOwBGaQMJ96JJIgpyb3V0ZQY7AEZpA0fcQUkiDmlzX21vYmlsZQY7AFRGSSITd2FyZGVuLm1lc3NhZ2UGOwBUewA%3D--f1b2f49e3295e0933f3cd0f0f72e2d2dec486776; _zendesk_shared_session=-ZmxwMFU1OWw5VzhOZW9SY3UwNXpIaGdLeEhoQzR2UGh0NDM4eWdiTHF0UytYNzUxL3VZRm1pWnBoN1RhaGg1RWtqaUxvZTBWVVhJcjYzL2lkSHBlQnU2SnJlM1dORGh2Z0lva0c1L3NwT2UxYnlOSlBqWmsweS9wSis5UlJlOWhibmxrWFNmelplc0d4dk9sOWl6T0NBPT0tLWdGYzVwMEZqdUd0QnU2NUpjb2RDMmc9PQ%3D%3D--596903f958a6a233bd1e986642cf0936ca2bd332', 'Upgrade-Insecure-Requests': '1', 'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'TE': 'Trailers'}


cookies = {'Cookie': 'amp_ddd6ec=6LwNeSYMZM-n7G2uV7Arh8...1frqdddb9.1frqdo4fu.12.15.27; _gcl_au=1.1.1342798764.1641930296; _ga=GA1.1.690315493.1641930298; _ga_9VSBF2K4BX=GS1.1.1644785199.12.1.1644785571.0; amplitude_id_ddd6ece4d5ddebbf244a249703c9d662opensea.io=eyJkZXZpY2VJZCI6IjMxN2I4Y2QyLTE1OWMtNDBiZC05MDM5LWJmYjc2OWY1MjE4NFIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY0Mjc5NzkxNjc2NCwibGFzdEV2ZW50VGltZSI6MTY0Mjc5ODI2NzEzNSwiZXZlbnRJZCI6MjIsImlkZW50aWZ5SWQiOjI0LCJzZXF1ZW5jZU51bWJlciI6NDZ9; _ga_QN8V4MT4GF=GS1.1.1644785182.9.1.1644786001.0; _zendesk_cookie=BAhJIhl7ImRldmljZV90b2tlbnMiOnt9fQY6BkVU--459ed01949a36415c1716b5711271c3d08918307; cf_clearance=.gRQfmAjNAjGh7a.9CdelbjD0eT0qTMseRK19q8h6PQ-1642691128-0-150; __cfruid=f7f63e2ace4e4d724dac16c1dbafe94e4f6e58e5-1644765382; _help_center_session=QjFkUjlvVGNxZXYvMnIrQ2IvUG1saVNlcnZ1RlFBTzZ2UVFwZTdQK015bXZVSUtBMlZ0SGlacXJYUEI0VTlwT1NmRldOUWpJQ2tzaW1UODdoNFROUDhFYzlIaG42d1paRmZoL1p6NnBhd3orZHp3WDhNaWFpVTBhcHB2NWdZT04tLXliaGhlSDhoOWsvMDhpQ1JKZ0NQWHc9PQ%3D%3D--f8d299ad6371592563dfeb361a69dd465d0e46a4; _gid=GA1.2.617533610.1644785200; _zendesk_session=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJTQ2OGFjYjkzNjA1YzEwMzk0ZjUzNzJiZjk3ZDIyNGJmBjsAVEkiDGFjY291bnQGOwBGaQMJ96JJIgpyb3V0ZQY7AEZpA0fcQUkiDmlzX21vYmlsZQY7AFRGSSITd2FyZGVuLm1lc3NhZ2UGOwBUewA%3D--f1b2f49e3295e0933f3cd0f0f72e2d2dec486776; _zendesk_shared_session=-ZmxwMFU1OWw5VzhOZW9SY3UwNXpIaGdLeEhoQzR2UGh0NDM4eWdiTHF0UytYNzUxL3VZRm1pWnBoN1RhaGg1RWtqaUxvZTBWVVhJcjYzL2lkSHBlQnU2SnJlM1dORGh2Z0lva0c1L3NwT2UxYnlOSlBqWmsweS9wSis5UlJlOWhibmxrWFNmelplc0d4dk9sOWl6T0NBPT0tLWdGYzVwMEZqdUd0QnU2NUpjb2RDMmc9PQ%3D%3D--596903f958a6a233bd1e986642cf0936ca2bd332'}

# function for scanning subdomains


def domain_scanner(sub_domnames):
    print(Fore.RED + '-------------------------Scanner Started--------------------------------')
    space_line()
    print(Fore.BLUE + '-------------------Domains after scanning domains--------------------')

    # loop for getting URL's
    for subdomain in sub_domnames:
        # making url by putting subdomain one by one
        url = f"https://{subdomain}/robots.txt?version=poc123"

        ind_time = datetime.now(timezone("Asia/Kolkata")
                                ).strftime('%Y-%m-%d %H:%M:%S.%f')
        # using try catch block to avoid crash of
        # the program
        try:
            # sending get request to the url
            #session = requests.Session()
            #session.max_redirects = 10
            sending_request = requests.get(
            url=url, headers=default_headers, cookies=cookies, timeout=3, allow_redirects=True, verify=False)
        

            if sending_request.status_code == 400 :
                print("\n")
                print(Fore.GREEN+url)
                print("\n")
                print("Supports Cloudront (ANything) Method")
                print("\n")
                print(sending_request.headers)
                space_line()
                response = requests.head(url)                                                                                                                               
                d = open("second-cloudfront-result.txt", "a")                                                                                                                               
                d.name.splitlines()   
                d.write(url + "\n"  + str(sending_request.headers) + "\n")                                                                                                                                                                                                                                                        
                d.close()     
        # if url is invalid then pass it
        except requests.exceptions.ReadTimeout:
            pass

        except requests.ConnectionError:
            pass

        except requests.exceptions.InvalidURL:
            print(Fore.BLUE + 'An invalid url found : ' + url)

        except UnicodeError:
            pass

        except KeyboardInterrupt:
            print(Fore.RED + "Exiting")
            exit()

        except requests.exceptions.TooManyRedirects:
            pass
        except requests.exceptions.InvalidSchema:
            pass
        except requests.exceptions.ChunkedEncodingError:
            pass     
            

#    time_1 = datetime.strptime(ind_time,'%Y-%m-%d %H:%M:%S.%f')
#    current_time = datetime.now(timezone("Asia/Kolkata")).strftime('%Y-%m-%d %H:%M:%S.%f')
#    time_2 = datetime.strptime(current_time,'%Y-%m-%d %H:%M:%S.%f')
#    time_interval = str(time_2 - time_1)

#    if time_interval > "0:60:00" :
#        l = open("log.txt", "a")
#        l.name.splitlines()
#        l.write(url + " : " + current_time + "\n")
#        l.close()

    print('\n')

    print(Fore.GREEN + '----Scanning Finished----')


# main function
if __name__ == '__main__':

    print('\n')

    domain_wordlist = "test"

    domain_wordlist = str(input(Fore.GREEN + "The domains file name : "))

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
