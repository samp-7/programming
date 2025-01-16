# Sistema: https://dlp.hashtagtreinamentos.com/python/intensivao/login

import pyautogui
import time

pyautogui.PAUSE = 4

# APERTA WINDOWS, ESCREVE CHROME E ENTRA
pyautogui.press('win')
pyautogui.write('google')
pyautogui.press('enter')

pyautogui.write("https://dlp.hashtagtreinamentos.com/python/intensivao/login")
pyautogui.press('enter')

#dar intervalo especifico
time.sleep(3)

# clicar no lugar especifico
pyautogui.click(x=586, y=155)

