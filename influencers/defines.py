import requests
import json

def getCreds() :
	""" Get creds required for use in the application
	Returns:
		dictonary: credentials needed globally

	"""

	creds = dict() # dictionary to hold everything
	creds['access_token'] = 'EAAFqN41C3dEBAOWWdBoIFN4ZB8DLiXVfRa9YSHoEKTNLRaqEySs8rubRxoVd5qHpEgDhsakQ2obX7iGMxWpfeVmdAsfO0y0qiPXR1Dac0sybypXkNCIxZAz3mJ2wcoOwaZA7HUygM5yZBoRpc8sDXMkrwaWaBtjFhhLpLXpJmRkjRkmHZAV5SzkObB4eUEOeHZBBu4EvOpDgZDZD' # access token for use with all api calls
	creds['client_id'] = '398261802425809'
	creds['client_secret']= '048a3ad313a6165f43d62885e2f78974'
	creds['graph_domain'] = 'https://graph.facebook.com/' # base domain for api calls
	creds['graph_version'] = 'v15.0' # version of the api we are hitting
	creds['endpoint_base'] = creds['graph_domain'] + creds['graph_version'] + '/' # base endpoint with domain and version
	creds['debug'] = 'no' # debug mode for api call
	creds['page_id'] = '104791312455167' # ig-user facebook page id
	creds['ig_user_id'] = '17841456242643635' # ig-user instagram account id
	return creds

def makeApiCall( url, endpointParams, debug = 'no' ) :
	""" Request data from endpoint with params
	
	Args:
		url: string of the url endpoint to make request from
		endpointParams: dictionary keyed by the names of the url parameters
	Returns:
		object: data from the endpoint

	"""

	data = requests.get( url, endpointParams ) # make get request
	data.encoding = data.apparent_encoding

	response = dict() # hold response info
	response['url'] = url # url we are hitting
	response['endpoint_params'] = endpointParams #parameters for the endpoint
	response['json_data'] = json.loads( data.content ) # response data from the api

	if ( 'yes' == debug ) : # display out response info
		displayApiCallData( response ) # display response

	return response # get and return content

def displayApiCallData( response ) :
	""" print(out to cli response from api call """

	print("\nURL: ") 
	print(response['url']) 
	print("\nEndpoint Params: " )
	print(response['endpoint_params'] )
	print("\nResponse: ") 
	print(response['json_data']) 