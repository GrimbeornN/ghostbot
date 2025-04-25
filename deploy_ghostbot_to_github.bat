
@echo off
echo Initialisation du dépôt Git...
git init

echo Ajout de tous les fichiers...
git add .

echo Création du commit initial...
git commit -m "First commit of GhostBot"

echo Configuration de la branche principale...
git branch -M main

echo Lien avec le dépôt distant GitHub...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/GrimbeornN/ghostbot.git

echo Envoi vers GitHub...
git push -u origin main

echo.
echo === DEPLOIEMENT TERMINÉ ===
pause
