rm ../js/*.js
CALL tsc -p .
IF %errorlevel%==0 (
	CALL grunt screeps
) ELSE (
	ECHO Error in compiling TS scripts
)
