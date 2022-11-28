### Tests and linter status:
[![Actions Status](https://github.com/Meetyouafter/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Meetyouafter/frontend-project-lvl2/actions) <a href="https://codeclimate.com/github/Meetyouafter/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/ac7f02a9bf1ff85dc58e/maintainability" /></a> <a href="https://codeclimate.com/github/Meetyouafter/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ac7f02a9bf1ff85dc58e/test_coverage" /></a> [![Node.js CI](https://github.com/Meetyouafter/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/Meetyouafter/frontend-project-lvl2/actions/workflows/node.js.yml)

<b>Добро пожаловать в 'Вычислитель отличий!'</b>

В проекте реализовано сравнение двух файлов форматов JSON, YAML, YML с представлением итога сравнения в трёх возможных вариантах:
'stylish' — посрочное сравнение файлов с отображением различий с помощью "+" или "-".  
'plain' — текстовое описание атрибутов с необходимыми комментариями.  
'json' — отражение разницы между файлами в формате JSON.

<b>Для локального запуска программы и сравнения файлов:</b>
- Установите Node.js последней версии;
- Склонируйте репозиторий проекта; 
- После первого клонирования репозитория используйте команду install;
- Для установки пакета из операционной системы используйте команду npm link;
- Поместите необходимые для сравнения файлы в папку __fixtures__ (при желании вы можете использовать любое место хранения);
- наберите команду ``` gendiff --format filepath1 filepath2```
  где: ```--format``` - получение сравнения в необходимом формате из предложенных;
       ```filepath1``` - путь до первого файла;
       ```filepath2``` - путь до второго файла.
       
  Например: ```gendiff --format 'plain' ./__fixtures__/file1.json ./__fixtures__/file2.json```


<b>Example stylish compare files with JSON and YML formats</b>
[![asciicast](https://asciinema.org/a/3JWKRsuoKAyvX5T3sB2GSsPlr.svg)](https://asciinema.org/a/3JWKRsuoKAyvX5T3sB2GSsPlr)

<b>Example plain compare files with JSON and YML formats</b>
[![asciicast](https://asciinema.org/a/Wb3mOzDvzBQ5DVKDl1CGntJuX.svg)](https://asciinema.org/a/Wb3mOzDvzBQ5DVKDl1CGntJuX)

<b>Example json compare files with JSON and YML formats</b>
[![asciicast](https://asciinema.org/a/cuCBd8FSoyXAgueqhMGHRdhh2.svg)](https://asciinema.org/a/cuCBd8FSoyXAgueqhMGHRdhh2)  
  
