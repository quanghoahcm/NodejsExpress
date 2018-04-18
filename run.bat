REM ' Set WshShell = WScript.CreateObject("WScript.Shell")
REM ' return = WshShell.Run("cmd.exe /C:\Program Files\iisnode\www\NodejsExpressWithMsSQL" )

REM @echo off
echo Start ..................................
echo Run Server Nodejs Express in port : 3000
cd C:\Program Files\iisnode\www\NodejsExpressWithMsSQL 
npm run server

echo server runing...........................

Echo.
pause