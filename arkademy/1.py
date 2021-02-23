import json

def biodata(nama, umur):

    x = {
        "name": nama,
        "age": umur,
        "address": "Lampung",
        "hobbies": ["Reading","Gaming"],
        "is_married": False,
        "list_of_school":  [["SDN_1_Margoyoso", "2002","2008","null"],
                            ["SMPN_1_Sumberejo", "2008","2011","null"],
                            ["SMAN_1_Sumberejo", "2011","2014","IPA"],
                            ["Universitas_Lampung","2014","2019","Electrical_Engineering"]],
        "skills" : [["Microsoft_Office","advanced"],
                    ["Microsoft_Visio","advanced"],
                    ["Arduino","beginner"],
                    ["Matlab","beginner"],
                    ["Python","beginner"],
                    ["C++","beginner"]],
        "intereset_in_coding": True
     }

    y = json.dumps(x)

    print(y)

biodata("Rizky_Saputra", 23)