import os
import sys
import time

if len(sys.argv) != 2:
    print "Usage: python deploy.py <testing|validation|production>"
    sys.exit(1)

protocol = "http://"
if (sys.argv[1] == "testing"):
    SERVER_NAME = "tmoses.mgm-iot.com"
elif (sys.argv[1] == "validation"):
    SERVER_NAME = "vmoses.mgm-iot.com"
elif (sys.argv[1] == "production"):
    SERVER_NAME = "moses.mgm-iot.com"
    protocol = "https://"
else:
    print "Usage: python deploy.py <testing|validation|production>"
    sys.exit(1)

print "-" * 20 + " start deploy front end " + time.strftime('%X %x %Z') + " " +  "-" * 20

os.chdir("/Users/yifanw/moses/")
os.system("git pull")
APP_VERSION = open('front/app/deploy_ver').read() + '.' + os.popen('git log -n 1 --pretty=format:%h%d').read()[:7] + " (" + time.strftime('%X %x %Z') + ")"

print "APP VERSION = " + APP_VERSION
os.chdir("/Users/yifanw/moses/front/mobile")

newTxt = ""

for line in open("config/prod.env.js"):
    if "API_ROOT" in line:
        newTxt += "  API_ROOT: \'\"" + protocol + SERVER_NAME + "/v1\"\',\n"
    elif "APP_VERSION" in line:
        newTxt += "  APP_VERSION: \'\"" + APP_VERSION + "\"\',\n"
    elif "APP_SERVER" in line:
        newTxt += "  APP_SERVER: \'\"" + sys.argv[1] + "\"\'\n"
    else:
        newTxt += line

f = open("config/prod.env.js", "w")
f.write(newTxt)
f.close()

os.system("echo 'registry = https://registry.npm.taobao.org' > ~/.npmrc")
os.system("npm install")
os.system("npm run build")

os.chdir("../app/www")
os.system("rm -fr *")
os.system("cp -R ../../mobile/dist/mobile/* .")

os.chdir("..")
os.system("cordova-hcp build")
os.chdir("www")

import json
chcp = json.load(open("chcp.json"))
chcp["content_url"] = protocol + SERVER_NAME + "/mobile"
chcp["update"] = "resume"
f = open("chcp.json", "w")
json.dump(chcp, f)
f.close()

os.system("ssh root@" + SERVER_NAME + " 'rm -fr /usr/share/nginx/dist/mobile'")
os.system("ssh root@" + SERVER_NAME + " 'mkdir /usr/share/nginx/dist/mobile'")
os.system("scp -r * root@" + SERVER_NAME + ":/usr/share/nginx/dist/mobile")
os.chdir("..")

import xml.etree.ElementTree as ET
tree = ET.parse("config.xml")
tree.getroot().attrib['version'] = open('deploy_ver').read()
tree.getroot()[2][0].attrib['url'] = protocol + SERVER_NAME + "/mobile/chcp.json"
tree.write("config.xml")
os.system("rm -fr platforms/ios/build/*")
os.system("rm -fr platforms/android/build/*")
os.system("cordova build --release --device")
os.system('git checkout ../mobile/config/prod.env.js')
os.system('git clean . -f')
os.system('git checkout .')
