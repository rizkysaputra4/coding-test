import json

def biodata(nama, umur):

    x = {
        "name": nama,
        "age": umur,
        "address": "Lampung",
        "hobbies": ["Reading","Gaming"],
        "is_married": False,
        "list_of_school":  [{"name" : "SDN_1_Margoyoso", "year_in" : "2002", "year_out" : "2008", "major": "null"},
                            {"name" : "SMPN_1_Sumberejo", "year_in" : "2008", "year_out" : "2011", "major": "null"},
                            {"name" : "SMAN_1_Sumberejo", "year_in" : "2011", "year_out" : "2014", "major": "IPA"},
                            {"name" : "Universitas_Lampung", "year_in" : "2014", "year_out" : "2019", "major": "Electrical_Engineering"}],
        "skills" : [{"skill_name": "Microsoft_Office", "level": "advanced"},
                    {"skill_name": "Microsoft_Visio", "level": "advanced"},
                    {"skill_name": "Arduino", "level": "beginner"},
                    {"skill_name": "Matlab", "level": "beginner"},
                    {"skill_name": "Python", "level": "beginner"},
                    {"skill_name": "C++", "level": "beginner"}],
        "intereset_in_coding": True
     }

    y = json.dumps(x)

    print(y)

biodata("Rizky_Saputra", 23)