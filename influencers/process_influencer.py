from defines import *
import os
import re


#process media data of each influcers and calculates the IGI point. sorts the media objects depending
# stores the final calculated data and media into dict that will be converted to json and load to output json file 
def process_data(cat_train_file,inf_data_to_process,output_json):
    all_data_=fetch_infdata(inf_data_to_process)
    json_data=[] #final version of data 
    for info in all_data_:
        temp_dict=dict()
        if(is_influencer(info)):
            try:
                cat_list=categorize_influencer(info,cat_train_file)
                if (len(cat_list) >0):
                    temp_dict["username"]=info["username"]
                    temp_dict["profile_picture_url"]=info["profile_picture_url"]
                    temp_dict["followers_count"]=info["followers_count"]
                    temp_dict["follows_count"]=info["follows_count"]
                    temp_dict["category"]=cat_list
                    temp_dict["media_count"]=info["media_count"]
                    info["media"]["data"]=sort_media_list(info["media"]["data"]) #this function will store top 3 media of profil into here 
                    temp_dict["top_media"]= append_top_media(info["media"]["data"])
                    temp_dict["IGI"]=calculate_IGI_point(info)
                    try:
                        temp_dict["biography"]=info["biography"]
                    except KeyError:
                        temp_dict["biography"]=""
                    try:
                        temp_dict["website"]=info["website"]
                    except KeyError:
                        temp_dict["website"]=""
                    json_data.append(temp_dict)

            except Exception as ex: 
                continue                 
            
    final_data=normalize_IGI(json_data)
    with open(output_json, mode='w+', encoding='utf-8') as outfile:
        outfile.seek(0)
        json.dump(final_data, outfile, indent = 4)

        
def fetch_infdata(inf_data_file):
    all_data=[]
    with open(inf_data_file,'r+',encoding='utf-8') as outfile:
        # First we load existing data into a dict.
        if(os.stat(inf_data_file).st_size != 0):
            all_data = json.load(outfile)
            
    return all_data
   
#categorize influencer depending on provided train data
def categorize_influencer(user,cat_train_file):
    user_text=return_user_text(user)
    cat_data=[]
    with open(cat_train_file,'r+',encoding='utf-8') as outfile:
        # First we load existing data into a dict.
        if(os.stat(cat_train_file).st_size != 0):
            cat_data = json.load(outfile)

    cat_count=len(cat_data)

    #cat_data file format [ {"category":"moda","hashtags":[]}]
    for cat in range(cat_count):
        hashtag_count=len(cat_data[cat]["hashtags"])
        cat_data[cat]["frequency"]=0
        for i in range(hashtag_count):
            count = user_text.count(cat_data[cat]["hashtags"][i])
            cat_data[cat]["frequency"] += count

    #sort category word frequency vector
    ##assign top 2 of list as categories of user

    for cat in range(cat_count):
        max_idx=cat
        for j in range(cat+1,cat_count):
            if(max_idx !=j):
                if ((cat_data[j]["frequency"]) > (cat_data[max_idx]["frequency"])):
                    max_idx = j

        temp_d=cat_data[cat].copy()
        cat_data[cat].update(cat_data[max_idx])
        cat_data[max_idx].update(temp_d)

    top_cat=[]
    for i in range(3):
        if(cat_data[i]["frequency"] !=0):
            top_cat.append(cat_data[i]["category"])    
    return top_cat
  
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

#Calculates IGIG_media for each post of influencer and sort the media list accordingly
def sort_media_list(media_list):
    #input media_list format is [{},{}]
    med_grade=0.0
    count=len(media_list)
    max_index=0
    
    #calculate media grade
    for media in media_list:
        try:
            med_grade=round(0.001*((media["like_count"]*0.655) +(media["comments_count"]*0.345)),2)
            media["IGI_media"]=float(med_grade)
            med_grade=0.0

        except KeyError:
            media["IGI_media"]=0.0   

    #sort media_list 
    
    for i in range(count):
        max_index=i
        for j in range(i+1,count):
            if(max_index !=j): 
                if(media_list[j]["IGI_media"] > media_list[max_index]["IGI_media"]):          
                    max_index=j
        
        temp=media_list[i].copy()
        media_list[i].update(media_list[max_index])
        media_list[max_index].update(temp)

    return media_list
#return top media of influencer
def append_top_media(media_list):
    top_med=list()
    #append only top 3 media to be returned
    for i in range(3):
        try:
            temp_d=dict()
            temp_d["like_count"]=media_list[i]["like_count"]
            temp_d["comments_count"]=media_list[i]["comments_count"]
            temp_d["media_url"]=media_list[i]["permalink"]
            top_med.append(temp_d)

        except Exception as ex:
            continue

    return top_med
def normalize_IGI(all_data):
    minn=all_data[0]["IGI"]
    maxx=all_data[0]["IGI"]
    for user in all_data:
        try:
            if( user["IGI"] > maxx):
                maxx=user["IGI"] 
            if(user["IGI"] < minn):
                minn=user["IGI"]
        except Exception as ex:
            continue

    maxx=maxx*1.015
    minn=minn*0.45
    scale=maxx-minn

    for user in all_data:
        try:
            normalized= ((user["IGI"] - minn) /scale)*9 +1
            user["IGI"]=round(normalized,1)
        except Exception as ex:
            continue

    return all_data

def calculate_IGI_point(user_object):
    median_of_media=0
    sum_IGI_media=0
    for med in user_object["media"]["data"]:
        sum_IGI_media += med["IGI_media"]
    median_of_media = sum_IGI_media/(len(user_object["media"]["data"]))

    grade= round((0.01*((user_object["followers_count"]*0.55) + (user_object["media_count"]*0.2) + (median_of_media*0.25))),3)
    
    return grade

#returns true if given user text is not including forbidden keywords
def is_influencer(user):
    user_text=return_user_text(user)
    none_inf_keywords=["politic","siyaset","dizi","film","movie","president","başbakan","vekil","politika","university","bakan","diyanet","collage","üniversite","nonprofit","non-profit","vakıf","teşkilat","tarikat","kanal","perakende","market","grocery","bim"]
    for cat in none_inf_keywords:
        if(cat in user_text):
            return False 
    return True


process_data("cat_train_data.json","inf_data_with_media.json","_1output.json")
