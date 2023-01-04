from defines import *
import os
import re

def getAccountInfo( params,username ) :
    """ Get info on a users account
    
    API Endpoint:
        https://graph.facebook.com/{graph-api-version}/{ig-user-id}?fields=business_discovery.username({ig-username}){username,website,name,ig_id,id,biography,follows_count,followers_count,media_count,profile_picture_url}&access_token={access-token}

    Returns:
        object: data from the endpoint
    """

    endpointParams = dict() # parameter to send to the endpoint
    endpointParams['fields'] = 'business_discovery.username(' + username + '){username,name,website,biography,followers_count,follows_count,media_count,profile_picture_url,media{caption,permalink,like_count,comments_count}}' # string of fields to get back with the request for the account
    endpointParams['access_token'] = params['access_token'] # access token


    url = params['endpoint_base'] + params['ig_user_id'] # endpoint url

    return makeApiCall( url, endpointParams, params['debug'] ) # make the api calls

def all_influencers(inf_usernames,json_out):
    params = getCreds() # get creds
    params['debug'] = 'no' # set debug
    usernames=read_usernames(inf_usernames)
    file_data=[]
    if not (os.path.isfile(json_out)):
        with open(json_out, mode='w', encoding='utf-8') as outfile:
            json.dump([], outfile)

    with open(json_out,'r+',encoding='utf-8') as outfile:
        # First we load existing data into a dict.
        if(os.stat(json_out).st_size != 0):
            file_data = json.load(outfile)
            # Join new_data with file_data inside emp_details
        else:
            json.dump([], outfile)

        fetched_usernames=json_usernames(file_data)
        for user in usernames:
            #dont forget to check if line is empty !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            #try except for keyError
            if not(user in fetched_usernames):
                try:
                    response = getAccountInfo(params,user) # hit the api for some data!            
                    if(response['json_data']['business_discovery']["followers_count"]>10000):
                        if(is_influencer(response['json_data']['business_discovery'])):

                            file_data.append(response['json_data']['business_discovery'])
                            print(response['json_data']['business_discovery'])
                        
                            # Sets file's current position at offset.
                            outfile.seek(0)
                            json.dump(file_data, outfile, indent = 4)
                            # convert back to json.
                    fetched_usernames.append(user)
                except KeyError:
                    continue

def read_usernames(file_name):
    fileP = open(file_name, 'r')
    file_lines = set(fileP.readlines())
    ret=list()
    # Strips the newline character
    for u in file_lines:
        ret.append(u.strip())
    return ret
    
#gets json list  user infos and return usernames as into a set
def json_usernames(json_content):
    ret_val=set()
    for info in json_content:
        ret_val.add(info['username'])

    ret_list=list(ret_val)
    return ret_list
    
#returns true if given user text is not including forbidden keywords
def is_influencer(user):
    user_text=return_user_text(user)
    none_inf_keywords=["politic","siyaset","president","başbakan","vekil","politika","university","bakan","diyanet","collage","üniversite","nonprofit","non-profit","vakıf","teşkilat","tarikat","kanal","perakende","market","grocery","bim"]
    for cat in none_inf_keywords:
        if(cat in user_text):
            return False 
    return True

#retreive media list of user return media captions as text
def return_media_text(media_list):
    med_text=""
    for med in media_list:
        try:
            for text in med["caption"].strip().split('\n'):     
                if(len(text)>1):
                    if('#' in text):
                        text = re.sub(r'[#]', ' ', text)
                    if ( '_' in text):
                        text = re.sub(r'[_]', '', text)
                    if ("http" in text):
                        continue
                    text = re.sub(u'[^ \w+]', '', text, flags=re.UNICODE)
                    text=text.lower()
                    med_text = med_text + (text+' ')
        except KeyError:
            continue
    return med_text

def return_user_text(user):
    user_text=return_media_text(user["media"]["data"])
    try:
        user_text += user["biography"].lower()
    except KeyError:
        user_text = user_text
    return user_text



all_influencers("usernames.txt","inf_data_.json")
