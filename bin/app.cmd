@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\app" %*
) ELSE (
  node  "%~dp0\app" %*
)