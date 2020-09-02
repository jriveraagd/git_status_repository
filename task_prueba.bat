@echo off

cd "C:\Users\jrivera\Downloads\playa"

echo *************************************************************************

git status --porcelain >> "prueba.txt"

echo *************************************************************************

C:\curl\curl -X POST http://172.30.0.136:8080 -H "cache-control: no-cache" -H "content-type:multipart/form-data" -F "avatar=@C:\Users\jrivera\Downloads\playa\prueba.txt"

del /f "C:\Users\jrivera\Downloads\playa\prueba.txt"
