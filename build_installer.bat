@echo off
setlocal enableextensions

REM Always run relative to this script's location
cd /d "%~dp0"

REM 1) Check Location
if not exist "package.json" (
  echo ERROR: package.json not found.
  echo Please run this script from the repository root.
  echo Current directory: "%cd%"
  pause
  exit /b 1
)

REM 2) Build
echo Building Windows installer via: npm run tauri build
echo.
call npm run tauri build
if errorlevel 1 (
  echo.
  echo ERROR: Build failed (exit code %errorlevel%).
  pause
  exit /b %errorlevel%
)

REM 3) Reveal
set "NSIS_DIR=%cd%\src-tauri\target\release\bundle\nsis"
if exist "%NSIS_DIR%" (
  echo.
  set "SETUP_EXE="
  for /f "delims=" %%F in ('dir /b /a-d /o-d "%NSIS_DIR%\*-setup.exe" 2^>nul') do (
    set "SETUP_EXE=%NSIS_DIR%\%%F"
    goto :haveSetupExe
  )

  :haveSetupExe
  if defined SETUP_EXE (
    echo Build succeeded. Revealing installer:
    echo %SETUP_EXE%
    explorer /select,"%SETUP_EXE%"
  ) else (
    echo Build succeeded. Opening output folder:
    echo %NSIS_DIR%
    explorer "%NSIS_DIR%"
  )
) else (
  echo.
  echo Build succeeded, but expected output folder was not found:
  echo %NSIS_DIR%
  echo (The installer may have been produced in a different bundle folder.)
)

REM 4) Pause
echo.
pause
