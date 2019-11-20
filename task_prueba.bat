@echo off

cd "C:\mayolivawebsite"

echo *************************************************************************

git status --porcelain >> "prueba.txt"

echo *************************************************************************

C:\curl\curl -X POST http://172.30.0.136:8080 -H "cache-control: no-cache" -H "content-type:multipart/form-data" -F "avatar=@C:\mayolivawebsite\prueba.txt"

del /f "C:\mayolivawebsite\prueba.txt"