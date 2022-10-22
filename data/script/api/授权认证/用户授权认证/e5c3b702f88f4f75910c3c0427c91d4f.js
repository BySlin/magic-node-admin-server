/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "验证码",
  "path": "/captcha",
  "description": "",
  "groupId": "4dac464312424adca284b3b36bceaafd",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "content-length",
          "value": "18201",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 15:25:49 GMT",
          "description": ""
        }
      ],
      "children": [
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "code",
          "required": false,
          "validateType": 0,
          "value": "200"
        },
        {
          "children": [],
          "dataType": "Boolean",
          "description": "",
          "error": "",
          "expression": "",
          "key": "success",
          "required": false,
          "validateType": 0,
          "value": "true"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "message",
          "required": false,
          "validateType": 0,
          "value": "OK"
        },
        {
          "children": [
            {
              "children": [],
              "dataType": "String",
              "description": "验证码Key",
              "error": "",
              "expression": "",
              "key": "captchaKey",
              "required": false,
              "validateType": 0,
              "value": "d6becc56bacd40d4b4e30977a4a0633a"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "验证码Svg",
              "error": "",
              "expression": "",
              "key": "data",
              "required": false,
              "validateType": 0,
              "value": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"150\" height=\"50\" viewBox=\"0,0,150,50\"><rect width=\"100%\" height=\"100%\" fill=\"#FFFFFF\"/><path d=\"M12 8 C82 41,92 12,134 44\" stroke=\"#4de9e9\" fill=\"none\"/><path fill=\"#52b4d5\" d=\"M113.32 14.89L113.28 14.85L113.34 14.92Q114.45 17.17 116.39 17.17L116.39 17.17L116.24 17.01Q116.89 17.17 117.30 17.01L117.29 17.00L117.16 16.87Q117.06 22.10 117.02 28.50L116.98 28.46L116.90 28.37Q116.87 34.62 117.06 39.87L117.22 40.03L117.21 40.02Q116.74 39.79 116.36 39.79L116.34 39.77L116.35 39.78Q115.04 39.83 113.63 41.70L113.51 41.58L113.70 41.77Q114.28 34.96 114.24 28.26L114.15 28.17L114.30 28.32Q114.15 21.51 113.24 14.81ZM113.13 42.80L113.19 42.86L113.12 42.79Q114.09 41.32 115.27 40.60L115.29 40.62L115.13 40.46Q115.27 41.59 115.20 42.66L115.10 42.56L115.10 42.56Q115.94 42.14 116.70 42.26L116.79 42.35L116.76 42.32Q118.82 42.56 120.19 45.33L120.02 45.16L120.11 45.25Q118.94 37.92 118.94 30.65L118.86 30.56L118.86 30.57Q119.00 23.16 119.79 16.04L119.78 16.03L119.71 15.95Q118.75 17.85 117.68 18.49L117.63 18.45L117.66 18.47Q117.63 17.72 117.75 16.35L117.73 16.33L117.77 16.37Q116.83 16.65 116.07 16.54L116.05 16.53L116.24 16.71Q113.88 16.45 112.86 13.55L112.86 13.56L112.81 13.51Q113.88 20.97 113.99 28.13L113.90 28.04L113.93 28.06Q114.01 35.19 113.02 42.69Z\"/><path fill=\"#8ed34a\" d=\"M65.64 41.55L65.73 41.64L65.56 41.46Q63.58 41.20 61.41 41.05L61.34 40.98L61.30 40.94Q59.91 39.55 57.25 35.71L57.25 35.71L57.29 35.75Q55.17 38.92 52.77 41.35L52.60 41.19L50.54 41.60L50.63 41.69Q49.57 41.89 48.58 42.15L48.45 42.02L48.42 41.99Q52.70 37.97 55.70 33.86L55.62 33.78L55.75 33.90Q52.37 29.61 46.96 24.81L47.13 24.98L46.95 24.80Q49.27 25.63 51.97 26.05L51.91 25.99L51.93 26.01Q55.31 29.05 57.22 31.75L57.39 31.92L57.22 31.76Q59.46 28.82 62.20 26.30L62.26 26.37L62.16 26.27Q65.25 25.97 67.08 25.48L67.07 25.47L67.16 25.55Q62.58 29.16 58.88 33.72L58.77 33.61L58.84 33.68Q62.26 38.40 65.73 41.63ZM68.57 24.75L68.51 24.70L68.57 24.75Q65.69 25.61 62.15 25.95L62.11 25.91L62.10 25.90Q59.24 28.60 57.53 31.08L57.37 30.92L57.52 31.07Q56.55 29.95 54.91 27.97L54.99 28.04L54.78 28.02L54.73 27.97Q54.54 27.89 54.42 27.89L54.57 28.04L54.50 27.98Q53.71 27.10 52.07 25.66L52.05 25.64L52.16 25.74Q48.60 25.23 45.74 24.01L45.67 23.94L45.74 24.01Q51.13 28.68 55.17 33.82L55.15 33.80L55.23 33.88Q51.92 38.57 47.51 42.87L47.39 42.76L47.54 42.90Q47.76 42.78 51.26 41.94L51.22 41.90L51.12 41.80Q49.67 43.20 48.03 44.53L48.12 44.62L48.13 44.63Q51.23 43.62 54.39 43.43L54.43 43.48L54.30 43.34Q56.69 41.09 58.59 38.34L58.69 38.44L58.73 38.49Q60.13 40.23 61.35 41.41L61.36 41.42L61.34 41.40Q61.41 41.35 61.49 41.43L61.41 41.35L61.64 41.39L61.69 41.44Q63.03 42.63 64.36 43.69L64.24 43.57L64.27 43.60Q67.79 44.08 70.68 45.10L70.81 45.23L70.77 45.19Q64.54 40.67 60.84 35.49L60.85 35.50L60.96 35.61Q64.49 30.46 69.06 26.39L69.13 26.46L69.03 26.36Q68.10 26.73 67.11 26.96L67.08 26.92L65.24 27.56L65.08 27.39Q66.31 26.54 68.48 24.67Z\"/><path fill=\"#dc60bd\" d=\"M32.38 40.87L32.54 41.04L32.45 40.95Q31.06 39.18 29.77 36.10L29.91 36.24L27.73 31.05L27.77 31.09Q26.08 34.99 25.47 36.29L25.60 36.42L25.43 36.25Q24.17 39.37 22.58 41.27L22.42 41.12L22.48 41.18Q22.07 41.15 21.31 41.26L21.38 41.33L21.35 41.31Q21.39 33.93 15.57 27.99L15.44 27.85L15.54 27.96Q13.74 26.09 11.73 24.60L11.74 24.61L11.76 24.63Q13.63 25.21 15.49 25.51L15.38 25.40L15.42 25.43Q21.50 30.41 22.95 36.66L22.92 36.63L23.01 36.72Q23.95 34.92 25.13 31.72L24.97 31.56L24.99 31.58Q26.43 27.92 27.00 26.63L26.97 26.59L28.34 26.56L28.42 26.63Q29.31 28.37 30.49 31.64L30.48 31.62L30.40 31.54Q31.67 35.14 32.31 36.54L32.36 36.60L32.39 36.63Q34.13 30.26 39.62 25.69L39.70 25.77L39.78 25.86Q41.00 25.78 43.74 25.21L43.57 25.04L43.66 25.12Q34.89 31.02 33.71 40.99L33.81 41.09L33.19 41.00L33.07 40.88Q32.84 40.96 32.50 41.00ZM35.48 43.44L37.48 43.58L37.43 43.53Q37.18 42.06 37.18 40.54L37.27 40.63L37.12 40.47Q37.12 37.24 38.53 34.00L38.51 33.99L38.66 34.14Q40.48 29.45 44.59 26.36L44.68 26.45L44.75 26.52Q43.55 26.81 41.69 27.15L41.66 27.13L41.66 27.13Q43.61 25.46 44.90 24.54L44.93 24.57L42.32 24.93L42.45 25.06Q41.06 25.11 39.72 25.26L39.74 25.28L39.89 25.43Q34.56 29.51 32.62 34.53L32.69 34.60L32.71 34.62Q32.11 32.50 30.74 28.23L30.60 28.10L30.72 28.22Q30.32 28.16 30.06 28.16L30.09 28.19L29.59 28.22L29.55 28.19Q29.54 27.99 28.74 26.24L28.72 26.22L26.67 26.22L26.64 26.19Q25.56 28.88 23.46 34.51L23.59 34.64L23.58 34.63Q22.26 30.95 19.18 27.67L19.22 27.71L19.11 27.61Q18.85 27.61 18.54 27.57L18.64 27.66L17.99 27.47L17.89 27.38Q17.10 26.63 15.31 25.03L15.44 25.15L15.40 25.11Q12.23 24.46 10.55 23.96L10.45 23.86L10.53 23.93Q21.23 31.36 20.85 41.68L20.79 41.62L20.94 41.77Q21.16 41.80 21.52 41.76L21.38 41.62L21.44 41.68Q21.88 41.72 22.07 41.72L22.00 41.65L21.92 41.57Q22.01 41.50 22.20 43.60L22.24 43.64L24.19 43.49L24.21 43.51Q26.73 40.64 28.98 34.89L28.89 34.79L29.03 34.94Q30.45 38.72 32.32 41.38L32.30 41.36L32.26 41.33Q32.68 41.40 32.94 41.42L32.87 41.35L32.79 41.26Q33.13 41.36 33.40 41.36L33.36 41.32L35.37 43.34Z\"/><path fill=\"#cf79eb\" d=\"M90.23 30.94L90.20 30.91L90.26 30.97Q90.35 29.54 89.53 28.62L89.46 28.56L89.50 28.60Q88.58 27.57 87.13 27.61L87.13 27.61L87.20 27.68Q84.78 27.66 83.94 29.79L83.99 29.84L84.03 29.88Q83.70 30.62 83.67 31.31L83.75 31.39L83.63 31.27Q83.50 36.20 82.59 40.54L82.65 40.61L82.66 40.62Q80.97 41.13 79.10 42.12L79.05 42.07L79.08 42.10Q81.37 35.14 81.11 27.83L80.97 27.70L80.98 27.71Q80.73 20.38 78.18 13.56L78.22 13.60L78.28 13.66Q80.05 14.98 82.07 15.66L82.10 15.69L82.04 15.63Q83.54 21.48 83.74 27.34L83.65 27.26L83.61 27.21Q85.05 25.19 87.76 25.27L87.69 25.20L87.72 25.23Q92.77 25.29 92.88 30.66L92.98 30.76L92.91 30.69Q93.01 36.34 94.38 40.99L94.42 41.04L94.54 41.15Q92.63 40.27 90.88 40.08L90.82 40.02L90.92 40.12Q90.26 36.72 90.14 30.86ZM90.51 40.36L90.57 40.42L90.51 40.36Q91.59 40.52 92.69 40.79L92.65 40.74L92.58 40.68Q92.66 40.87 93.19 42.85L93.26 42.92L93.17 42.83Q96.16 43.80 98.18 45.25L98.20 45.27L98.28 45.35Q95.54 39.53 95.01 33.21L94.99 33.19L94.90 33.10Q94.69 29.50 93.28 27.94L93.20 27.86L93.20 27.86Q93.27 27.85 92.62 27.39L92.51 27.28L92.68 27.45Q92.38 26.89 91.73 26.12L91.64 26.03L91.73 26.04L91.84 26.16Q90.82 25.14 87.70 24.87L87.83 25.00L87.76 24.93Q87.05 24.94 85.64 25.28L85.54 25.19L85.64 25.28Q85.40 20.40 85.06 17.89L85.04 17.87L85.01 17.84Q84.28 17.76 82.79 17.45L82.77 17.43L82.83 17.48Q82.73 16.82 82.47 15.33L82.38 15.25L82.36 15.23Q79.47 14.32 77.60 12.75L77.57 12.73L77.60 12.75Q80.57 19.91 80.83 27.71L80.78 27.66L80.69 27.56Q81.10 35.47 78.55 42.82L78.54 42.81L78.57 42.84Q79.47 42.22 80.61 41.73L80.58 41.69L79.88 44.00L79.80 43.92Q82.97 42.63 84.94 42.44L85.02 42.52L84.98 42.48Q85.59 37.12 85.78 33.16L85.80 33.17L85.77 33.14Q85.84 31.27 87.78 30.16L87.71 30.09L87.70 30.09Q88.17 29.79 88.70 29.83L88.78 29.91L88.76 29.89Q89.00 29.98 89.34 30.02L89.19 29.87L89.67 30.00L89.80 30.13Q89.71 30.42 89.82 30.87L89.75 30.81L89.90 30.95Q90.04 36.96 90.54 40.38Z\"/><path d=\"M2 27 C88 2,71 48,148 19\" stroke=\"#efef8a\" fill=\"none\"/></svg>"
            }
          ],
          "dataType": "Object",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": ""
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "executeTime",
          "required": false,
          "validateType": 0,
          "value": "2"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"captchaKey\": \"8334e4306d424a57a0fb5de963e329f9\",\n    \"data\": \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwxNTAsNTAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNkOWQ5ZDkiLz48cGF0aCBmaWxsPSIjMjBiMmUzIiBkPSJNODUuODMgMjkuMTNMODUuODYgMjkuMTZMODUuODUgMjkuMTVRODMuOTYgMjkuMTIgODIuNzQgMzAuNDVMODIuNzkgMzAuNTBMODIuODMgMzAuNTVRODEuNDkgMzEuNzUgODEuMzMgMzMuNjZMODEuNDggMzMuODBMODEuNTIgMzMuODVRODEuMjUgMzUuOTAgODIuNDcgMzYuOTBMODIuNTUgMzYuOTlMODIuNTYgMzYuOTlRODMuNjMgMzcuODYgODUuNzcgMzcuNzhMODUuNzIgMzcuNzRMODUuODEgMzcuODJRODguMTkgMzcuNzMgODkuMTQgMzYuNzhMODkuMTAgMzYuNzRMODkuMDUgMzYuNjlROTAuMTYgMzUuMzMgOTAuMDUgMzMuNTBMOTAuMDIgMzMuNDdMODkuOTEgMzMuMzdRODkuODkgMzEuNTkgODguODEgMzAuMzlMODguNzUgMzAuMzNMODguODIgMzAuNDFRODcuNzggMjkuMjUgODUuOTUgMjkuMjVaTTg1LjkyIDE5LjgxTDg1LjgzIDE5LjczTDg1Ljk0IDE5Ljg0UTg0LjQwIDE5LjU5IDgzLjA3IDIwLjA5TDgzLjA4IDIwLjEwTDgzLjEzIDIwLjE1UTgxLjg0IDIwLjk2IDgyLjA3IDIyLjgyTDgyLjA4IDIyLjgzTDgxLjk3IDIyLjcyUTgyLjUwIDI2LjQ5IDg1Ljg1IDI2LjQ5TDg1LjgyIDI2LjQ1TDg1LjkyIDI2LjU2UTg3LjUxIDI2Ljc3IDg4LjQ5IDI1LjYzTDg4LjQ0IDI1LjU3TDg4LjQ0IDI1LjU4UTg5LjUxIDI0LjUxIDg5LjU0IDIyLjk1TDg5LjM4IDIyLjc4TDg5LjUzIDIyLjkzUTg5LjU0IDIxLjEyIDg4LjgyIDIwLjUxTDg4Ljc0IDIwLjQzTDg4Ljc5IDIwLjQ4UTg3LjA5IDE5LjYyIDg1LjgwIDE5LjY5Wk04NS41NSA0MC4yN0w4NS42NyA0MC4zOUw4Mi41NyA0MC4zNEw4Mi42MCA0MC4zN1E4MS4wMiA0MC4zMSA3OS42OSAzOS40NEw3OS42NiAzOS40MEw3OS42OCAzOS40M1E3OC4zMCAzOC4yOCA3OC40NiAzNS40Mkw3OC41NSAzNS41Mkw3OC41MSAzNS40OFE3OC45NiAyOC42MiA4Mi41OCAyNy42M0w4Mi41MiAyNy41N0w4Mi41OCAyNy42M1E4MC4yOCAyNi43MSA3OC45NSAyMS4zNEw3OC45NyAyMS4zNUw3OC44NyAyMS4yNlE3OC42NyAxOS45OSA3OC43NSAxOS4xOUw3OC43MCAxOS4xNEw3OC42OCAxOS4xM1E3OC45OCAxNi45OSA4Mi42NyAxNi45NUw4Mi42MSAxNi44OUw4Mi42MSAxNi44OVE4Ni44MiAxNi44MCA4OC4yNyAxNi45OUw4OC4zMyAxNy4wNUw4OC4zNCAxNy4wNlE5Mi4xOCAxNy41OSA5Mi42MyAxOS42MEw5Mi42NyAxOS42NEw5Mi42MSAxOS41OFE5Mi43NyAyMC4yMyA5Mi43NyAyMC42MUw5Mi42NCAyMC40OUw5Mi43MiAyMC41NlE5Mi43MyAyMS4yNiA5Mi41NCAyMS44N0w5Mi42MyAyMS45Nkw5Mi41NiAyMS44OVE5MS45NSAyNi4xMSA4OS4wMiAyNy42NEw4OC45OSAyNy42MUw4OS4wOCAyNy43MFE5Mi41OCAyOC40OSA5My4wNyAzMy43OUw5Mi45OSAzMy43MEw5Mi45NCAzMy42NVE5My4wOCAzMy45NSA5My4xMiAzNS4yNEw5Mi45OSAzNS4xMUw5My4wNiAzNS4xOFE5My4wNiAzNy44NSA5MS40NiAzOC45MUw5MS42MiAzOS4wN0w5MS41NCAzOC45OVE5MC4yMiAzOS45MiA4NS42NSA0MC4zN1pNODcuODQgNDIuNjBMODcuOTUgNDIuNzFMOTEuMjkgNDIuNzhMOTEuMzEgNDIuODBROTMuMDMgNDIuODcgOTQuNTUgNDIuMTVMOTQuMzggNDEuOThMOTQuNDEgNDIuMDFROTUuNjYgNDEuMzkgOTUuNzMgMzkuNTNMOTUuNjAgMzkuMzlMOTUuNzIgMzkuNTJROTUuNjggMzguMzMgOTUuMzAgMzYuMzlMOTUuMzIgMzYuNDFMOTUuMjcgMzYuMzZROTQuNDAgMzEuNzYgOTIuMzEgMjkuODlMOTIuMjYgMjkuODVMOTIuMTMgMjkuNTNMOTEuOTYgMjkuMjhMOTEuNzAgMjguOTFMOTEuNzYgMjguOTdROTMuNDIgMjcuNjMgOTQuMzQgMjMuNDhMOTQuMzQgMjMuNDdMOTQuMzQgMjMuNDdROTQuMzAgMjMuMDUgOTQuMzcgMjIuMjJMOTQuNTEgMjIuMzVMOTQuMzUgMjIuMTlROTQuNTUgMjEuNjMgOTQuNDcgMjEuMDJMOTQuNDAgMjAuOTVMOTQuNTAgMjEuMDVROTQuMjIgMTkuNDggOTMuMDQgMTguOThMOTMuMDkgMTkuMDRMOTMuMTMgMTkuMDRMOTIuODYgMTguODRMOTIuOTcgMTguOTVROTIuNjUgMTguMTggOTEuNDcgMTcuMzhMOTEuNTggMTcuNDhMOTEuNTAgMTcuMzZMOTEuNjEgMTcuNDhRODkuNTggMTYuNzQgODUuNTEgMTYuNTVMODUuNDIgMTYuNDZMODUuNTAgMTYuNTVRODMuOTIgMTYuNDEgODIuNTUgMTYuNTJMODIuNTMgMTYuNTFMODIuNDQgMTYuNDFRODEuNzYgMTYuNTcgODAuNDYgMTYuNzJMODAuMzcgMTYuNjNMODAuMzUgMTYuNjBRNzguNjAgMTcuMTggNzguMzcgMTguODFMNzguMjAgMTguNjRMNzguMjIgMTguNjdRNzguMzEgMTkuMjkgNzguMzUgMjAuMDlMNzguMjQgMTkuOThMNzguMjggMjAuMDJRNzguNDIgMjAuNTcgNzguOTkgMjIuOTNMNzguOTEgMjIuODZMNzguOTEgMjIuODZRNzkuNzcgMjYuMTUgODEuNTIgMjcuNDhMODEuNDcgMjcuNDRMODEuNTYgMjcuNTJMODEuNTkgMjcuNTVRNzguNzcgMjguODAgNzguMjMgMzMuOThMNzguMzIgMzQuMDdMNzguMjggMzQuMDNRNzguMDEgMzYuMTYgNzguMDEgMzcuMDdMNzguMTggMzcuMjRMNzguMDQgMzcuMTBRNzguMTcgMzguOTUgNzkuMzUgMzkuODZMNzkuMzQgMzkuODVMNzkuMzcgMzkuODhRNzkuNDQgMzkuOTEgNzkuNzEgNDAuMTBMNzkuNzcgNDAuMTZMNzkuNzUgNDAuMTRRODAuNzkgNDIuNDQgODcuOTEgNDIuNjdaTTg3LjYwIDMxLjYyTDg3LjU0IDMxLjU2TDg3LjU3IDMxLjU5UTg4LjQ4IDMxLjUxIDg5LjM2IDMxLjk3TDg5LjM5IDMyLjAxTDg5LjM2IDMxLjk3UTg5LjcxIDMyLjkzIDg5LjY3IDMzLjQ3TDg5Ljc1IDMzLjU0TDg5Ljc1IDMzLjU0UTg5LjYxIDMzLjY4IDg5LjYxIDMzLjk4TDg5LjczIDM0LjA5TDg5LjcxIDM0LjA4UTg5Ljc0IDM2LjQ3IDg3LjQ2IDM3LjMwTDg3LjQ1IDM3LjMwTDg3LjM4IDM3LjIzUTg2LjU5IDM3LjU0IDg1Ljc5IDM3LjQyTDg1Ljc1IDM3LjM4TDg1LjgzIDM3LjQ3UTg0LjcwIDM3LjU2IDgzLjU2IDM3LjEwTDgzLjU3IDM3LjExTDgzLjU2IDM3LjExUTgzLjIzIDM2LjM5IDgzLjMwIDM1LjQwTDgzLjQ1IDM1LjU0TDgzLjQzIDM1LjUzUTgzLjU4IDMzLjkyIDg0Ljc4IDMyLjcwTDg0Ljc3IDMyLjcwTDg0LjcyIDMyLjY0UTg1LjgzIDMxLjM0IDg3LjQzIDMxLjQ1Wk04Ny44NCAyMi4xNUw4Ny42OSAyMi4wMEw4Ny42NiAyMS45N1E4OC40OCAyMS44OCA4OS4wMSAyMi4wM0w4OS4xMyAyMi4xNUw4OS4xMiAyMi45NEw4OS4xMyAyMi45NVE4OS4xNSAyNC4zOCA4OC4yNCAyNS4zOUw4OC4yNiAyNS40Mkw4OC4yNiAyNS40MVE4Ny4yMyAyNi4zMSA4NS44NiAyNi4xMkw4NS45OCAyNi4yM0w4NS43OSAyNi4wNFE4NC44NyAyNi4xMSA4NC40NSAyNS44OEw4NC41MCAyNS45M0w4NC41NCAyNS45OFE4NC4zNyAyNS41OCA4NC4yNiAyNC44OUw4NC4zMyAyNC45Nkw4NC4zMSAyNC45NFE4NC4wNyAyMy41NyA4NS4yOSAyMi43M0w4NS4yNiAyMi43MEw4NS4yMCAyMi42NFE4Ni4zOSAyMi4wOCA4Ny44MCAyMi4xMloiLz48cGF0aCBkPSJNMjAgNyBDOTAgMzQsNjIgMjMsMTQ5IDMxIiBzdHJva2U9IiM2ZGUzOGEiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjNjM4YzZkIiBkPSJNMzUuNDYgMzAuNDBMMzUuNDAgMzAuMzRMMzUuMzEgMzAuMjVRMzUuNTUgMjkuOTkgMzUuNTEgMjkuNThMMzUuNTAgMjkuNTdMMzUuNTMgMjkuNjBRMzUuMzggMjkuMTUgMzUuMDggMjguOTZMMzUuMDAgMjguODhMMzUuMTAgMjguOThRMzQuNDIgMjguNDUgMzMuNTUgMjguNjFMMzMuNTMgMjguNTlMMzMuNDUgMjguNTFRMzIuMzYgMjguNDggMzAuNzIgMjkuNTlMMzAuNzMgMjkuNjBMMzAuODMgMjkuNjlRMjkuNDcgMzAuNjUgMjkuNDcgMzEuODNMMjkuNDEgMzEuNzhMMjkuMzkgMzEuNzZRMjkuNDQgMzMuMDYgMjkuNDQgMzYuMzdMMjkuNDMgMzYuMzZMMjkuNDAgMzYuMzNRMjkuMzMgMzguODYgMjkuNDkgNDAuODhMMjkuNTAgNDAuODlMMjkuNTcgNDAuOTZRMjcuNzIgNDAuODIgMjcuNzIgNDAuODJMMjcuNzIgNDAuODJMMjcuNzUgNDAuODVRMjYuNzMgNDAuNzggMjYuMDAgNDAuODZMMjYuMDAgNDAuODVMMjYuMTQgNDAuOTlRMjYuNDggMzguNDEgMjYuNTYgMzYuMTZMMjYuNDYgMzYuMDZMMjYuNTkgMzYuMTlRMjYuNzEgMzEuNTIgMjYuMDcgMzAuMjJMMjYuMTUgMzAuMzBMMjUuOTkgMzAuMTRRMjUuNzcgMjkuNjIgMjUuMjAgMjkuMzJMMjUuMTQgMjkuMjZMMjUuMTQgMjkuMjZRMjQuMzcgMjguNjEgMjIuODEgMjguNDlMMjIuODAgMjguNDhMMjIuODUgMjguNTNRMjAuODYgMjguMzMgMjAuMzMgMjkuOTNMMjAuMzQgMjkuOTRMMjAuMzIgMjkuOTJRMjAuMDQgMzAuMjkgMjAuMTYgMzAuNzlMMjAuMjEgMzAuODRMMjAuMzIgMzAuOTRRMjAuODggMzMuNjAgMjAuNTQgMzYuMzhMMjAuNTMgMzYuMzhMMjAuNDUgMzYuMjlRMjAuMTQgMzkuMTAgMTguNzMgNDEuNTRMMTguNzUgNDEuNTZMMTguNzYgNDEuNTdRMTcuOTIgNDEuOTEgMTUuODMgNDIuMzNMMTUuNzIgNDIuMjJMMTUuNzkgNDIuMjlRMTguMTQgMzguODkgMTguMTQgMzQuNTlMMTguMTQgMzQuNTlMMTguMzEgMzQuNzZRMTguMTQgMjguNzMgMTQuMTEgMjQuNTFMMTQuMjEgMjQuNjFMMTQuMjEgMjQuNjFRMTQuOTIgMjQuODYgMTUuODcgMjUuMDlMMTUuODIgMjUuMDRMMTcuNjYgMjUuNTVMMTcuNjIgMjUuNTFRMTguMDEgMjYuMDUgMTguODkgMjcuNzNMMTkuMDEgMjcuODVMMTguOTkgMjcuODNRMTkuMTMgMjUuOTEgMjEuNTYgMjUuODdMMjEuNTggMjUuODlMMjEuNTAgMjUuODBRMjEuNjUgMjUuNzcgMjIuNjQgMjUuODVMMjIuNzIgMjUuOTJMMjIuNzUgMjUuOTVRMjcuODEgMjYuMzMgMjguOTUgMjkuMTVMMjguOTAgMjkuMDlMMjguOTAgMjkuMTBRMzAuNDYgMjYuMjggMzUuNDggMjUuNzRMMzUuNjcgMjUuOTNMMzUuNjIgMjUuODhRMzYuMzEgMjUuNjkgMzcuMTggMjUuODFMMzcuMTMgMjUuNzVMMzcuMTYgMjUuNzlRMzkuNDUgMjYuMDYgMzkuMzAgMjcuNjJMMzkuMTkgMjcuNTFMMzkuMjAgMjcuNTJRMzkuMTggMjguMjIgMzguOTEgMjguOThMMzguOTMgMjkuMDBMMzguOTAgMjguOTdRMzcuNDIgMzEuOTEgMzcuNjUgMzUuNDVMMzcuNzMgMzUuNTNMMzcuNzMgMzUuNTNRMzcuODcgMzguOTQgMzkuNzggNDEuNzZMMzkuNzkgNDEuNzhMMzkuNzUgNDEuNzRRMzguMDggNDEuNDAgMzYuMjYgNDEuMTdMMzYuNDIgNDEuMzRMMzYuMzggNDEuMzBRMzUuMTkgMzguNzcgMzUuMDAgMzYuMDBMMzQuOTUgMzUuOTRMMzQuOTkgMzUuOTlRMzQuNzIgMzMuMDUgMzUuMzYgMzAuMzFaTTM2LjE1IDQxLjY4TDM2LjA0IDQxLjU3TDM2LjEyIDQxLjY0UTM2Ljg3IDQxLjc1IDM4LjIxIDQxLjk0TDM4LjIzIDQxLjk3TDM4LjE4IDQxLjkyUTM4Ljc0IDQyLjY3IDM5Ljg4IDQ0LjA4TDM5LjgxIDQ0LjAxTDM5Ljg3IDQ0LjA2UTQyLjc3IDQ0LjYwIDQ0Ljg2IDQ1LjI1TDQ0Ljc3IDQ1LjE2TDQ0Ljk0IDQ1LjMzUTM5Ljg4IDQxLjM3IDM5LjYxIDM0Ljg2TDM5LjYyIDM0Ljg3TDM5LjU2IDM0LjgxUTM5LjUyIDMyLjc1IDQwLjEzIDMwLjg1TDQwLjE1IDMwLjg3TDQwLjA2IDMwLjc4UTQwLjIzIDI5Ljg1IDQwLjIzIDI5LjEyTDQwLjM0IDI5LjIzTDQwLjI3IDI5LjE2UTQwLjQwIDI4LjM3IDM5Ljc5IDI3LjgwTDM5Ljc4IDI3Ljc5TDM5LjY1IDI3LjYzTDM5Ljc2IDI3LjczUTM5Ljc2IDI3LjE3IDM5LjY4IDI2LjY3TDM5Ljc0IDI2LjczTDM5Ljc4IDI2Ljc2UTM5LjQ5IDI2LjA2IDM5LjAzIDI1Ljc5TDM5LjE5IDI1Ljk1TDM5LjEwIDI1Ljg2UTM4LjM1IDI1LjI5IDM3LjQ3IDI1LjI2TDM3LjUxIDI1LjI5TDM3LjU3IDI1LjM1UTM0Ljg0IDI1LjM2IDMyLjE3IDI2LjMxTDMyLjA4IDI2LjIzTDMyLjA5IDI2LjIzUTMwLjA0IDI2Ljg1IDI4Ljg2IDI4LjI2TDI4LjkwIDI4LjMwTDI4Ljg2IDI4LjI2UTI3LjMzIDI1LjgxIDIyLjQ5IDI1LjQ3TDIyLjU1IDI1LjUzTDIyLjYxIDI1LjU5UTIxLjkwIDI1LjUyIDIxLjQ4IDI1LjUyTDIxLjUxIDI1LjU1TDIxLjQ2IDI1LjUwUTE5LjQyIDI1LjUyIDE4LjgxIDI2Ljc3TDE4LjcxIDI2LjY3TDE4Ljc2IDI2LjczUTE4LjM2IDI2LjEzIDE3LjY4IDI1LjA3TDE3Ljg2IDI1LjI1TDE3Ljc3IDI1LjE2UTE1LjI3IDI0LjYxIDEzLjI5IDIzLjk2TDEzLjI2IDIzLjkyTDEzLjM3IDI0LjAzUTE4LjAwIDI4LjQwIDE4LjAwIDM0LjY4TDE3LjkyIDM0LjYwTDE3LjkwIDM0LjU4UTE3LjkzIDM5LjMzIDE1LjA4IDQyLjgwTDE1LjA1IDQyLjc3TDE1LjA4IDQyLjgwUTE1LjUwIDQyLjYyIDE2LjAwIDQyLjU0TDE2LjEyIDQyLjY2TDE2LjkyIDQyLjMyTDE3LjA0IDQyLjQ0UTE2LjMxIDQzLjQ2IDE1LjIxIDQ0LjY4TDE1LjI1IDQ0LjcyTDE1LjE3IDQ0LjY1UTE2LjgyIDQ0LjM1IDE5Ljk0IDQzLjc0TDIwLjA0IDQzLjg0TDE5LjkzIDQzLjczUTIyLjU2IDM5LjU5IDIyLjU2IDM0LjY3TDIyLjU1IDM0LjY3TDIyLjcyIDM0LjgzUTIyLjY0IDMzLjk1IDIyLjU2IDMzLjExTDIyLjUwIDMzLjA2TDIyLjU4IDMzLjE0UTIyLjU2IDMyLjQzIDIzLjU1IDMxLjYzTDIzLjUyIDMxLjYwTDIzLjQzIDMxLjU1TDIzLjU0IDMxLjY2UTIzLjk4IDMxLjAzIDI1LjE2IDMwLjkyTDI1LjIzIDMwLjk5TDI1LjE0IDMwLjg5UTI1LjcwIDMxLjA0IDI2LjAwIDMxLjA0TDI1Ljk4IDMxLjAyTDI2LjA3IDMxLjI5TDI2LjAyIDMxLjI0UTI2LjIzIDMzLjg5IDI2LjExIDM2LjI1TDI2LjIwIDM2LjMzTDI2LjMwIDM2LjQzUTI2LjA4IDM4LjYxIDI1LjU5IDQxLjI4TDI1LjU3IDQxLjI2TDI1LjU3IDQxLjI2UTI2LjYzIDQxLjMwIDI2LjYzIDQxLjMwTDI2LjYwIDQxLjI2TDI2LjY2IDQxLjMyUTI4LjA1IDQxLjI2IDI3LjcwIDQxLjI2TDI3Ljc3IDQxLjMzTDI3LjczIDQxLjI5UTI3Ljc2IDQxLjgxIDI3LjcyIDQyLjI3TDI3Ljc2IDQyLjMxTDI3LjY0IDQyLjE5UTI3LjY1IDQyLjY5IDI3LjY1IDQzLjE5TDI3LjYzIDQzLjE3TDMwLjA5IDQzLjE2TDMwLjE0IDQzLjIxUTMxLjM1IDQzLjE2IDMyLjYxIDQzLjI0TDMyLjU3IDQzLjIwTDMyLjc0IDQzLjM3UTMxLjEzIDM5LjU4IDMxLjMyIDMzLjY0TDMxLjI5IDMzLjYxTDMxLjI4IDMzLjYxUTMxLjM4IDMyLjU3IDMyLjU2IDMxLjgxTDMyLjYxIDMxLjg1TDMyLjU4IDMxLjgyUTMzLjUxIDMxLjA0IDM0Ljc2IDMwLjg1TDM0Ljc3IDMwLjg2TDM0Ljk0IDMwLjcyTDM1LjAxIDMwLjc5UTM0LjU0IDMyLjY4IDM0LjU0IDM0LjY2TDM0LjU4IDM0LjcwTDM0LjU1IDM0LjY3UTM0LjY1IDM4LjU0IDM2LjE3IDQxLjcwWk0zMC41OCAzMC4wOUwzMC43NiAzMC4wNEwzMC41NSAzMC4xOEwzMC42MiAzMC4xNFoiLz48cGF0aCBmaWxsPSIjN2M4NjVmIiBkPSJNNTguMzEgMjcuNzlMNTguMjQgMjcuNzJMNTguMjAgMjcuNjdRNTQuNzkgMjcuNjkgNTMuNjkgMzEuMDRMNTMuNjkgMzEuMDVMNTMuNjggMzEuMDNRNTMuMTkgMzEuOTkgNTMuMDcgMzMuMDVMNTMuMjMgMzMuMjFMNTMuMTIgMzMuMTBRNTMuMDIgMzUuMjUgNTQuMDEgMzYuNThMNTMuOTYgMzYuNTNMNTQuMDEgMzYuNThRNTUuMjUgMzcuNjcgNTcuNzMgMzcuNzFMNTcuODAgMzcuNzhMNTcuODEgMzcuNzlRNTkuNjAgMzcuNzkgNjEuMDEgMzYuNjVMNjEuMDEgMzYuNjVMNjAuOTIgMzYuNTZRNjIuMjggMzUuMzcgNjIuMjggMzMuNThMNjIuNDYgMzMuNzZMNjIuNDIgMzMuNzJRNjIuNDQgMzMuNDAgNjIuMzYgMzMuMDJMNjIuMzkgMzMuMDRMNjIuMjMgMzIuODhRNjIuMTMgMjcuODcgNTguMzIgMjcuODBaTTU4LjA3IDQwLjExTDU4LjA2IDQwLjA5TDU4LjE3IDQwLjIxUTU0LjQ0IDQwLjUxIDUyLjY1IDM4LjQ5TDUyLjUzIDM4LjM3TDUyLjQ5IDM4LjMzUTUyLjM0IDM5LjQ0IDUxLjg4IDQwLjgxTDUxLjkwIDQwLjgzTDUxLjk3IDQwLjkwUTQ5LjgxIDQxLjQ0IDQ4LjU1IDQyLjAxTDQ4LjU3IDQyLjAzTDQ4LjY5IDQyLjE1UTUwLjkwIDM2LjIxIDUwLjkwIDI5LjcwTDUwLjkzIDI5LjczTDUwLjkwIDI5LjcwUTUwLjkwIDIxLjQwIDQ3LjQ3IDEzLjU2TDQ3LjUxIDEzLjU5TDQ3LjQ2IDEzLjU0UTQ5LjgzIDE0LjkzIDUxLjE2IDE1LjM4TDUxLjAxIDE1LjIzTDUxLjE1IDE1LjM3UTUzLjE0IDIxLjg5IDUzLjI5IDI3LjcxTDUzLjIzIDI3LjY1TDUzLjI1IDI3LjY4UTU0Ljg0IDI1LjE1IDU4LjU3IDI1LjE5TDU4LjQ4IDI1LjEwTDU4LjQ2IDI1LjA3UTYxLjc0IDI1LjE2IDYzLjIzIDI3LjAzTDYzLjE5IDI2Ljk5TDYzLjI5IDI3LjA5UTY0Ljk1IDI5LjIxIDY1LjExIDMyLjc5TDY1LjE4IDMyLjg2TDY1LjI1IDMyLjkzUTY1LjM1IDM0LjE0IDY1LjI3IDM1LjczTDY1LjIzIDM1LjcwTDY1LjE4IDM1LjY0UTY1LjExIDM3LjA1IDY0LjIzIDM4LjIwTDY0LjE5IDM4LjE1TDY0LjI5IDM4LjI2UTYyLjQ5IDM5LjkyIDU4LjE1IDQwLjE5Wk02My41NyA0Mi42NEw2My42MCA0Mi42N0w2My42NCA0Mi43MFE2NS4xMCA0Mi42OCA2Ni41OSA0Mi4wMEw2Ni41NSA0MS45Nkw2Ni41NyA0MS45OFE2Ny42NSA0MC42NyA2Ny42OSAzOC43Mkw2Ny44NiAzOC44OUw2Ny44NyAzOC45MFE2Ny43MCAzOC4yNCA2Ny41NSAzNy4wNkw2Ny43MSAzNy4yMkw2Ny42MCAzNy4xMVE2Ny42NSAzNi41NSA2Ny41NCAzNS42NEw2Ny40OSAzNS41OUw2Ny40OSAzNS41OVE2Ni42NiAzMC44MCA2NS4xMCAyOC43NUw2NS4wNCAyOC42OUw2NC45OSAyOC42NFE2NS4wOSAyOC43MCA2NC4yOSAyNy44Mkw2NC4yMiAyNy43Nkw2NC4yNyAyNy44MFE2NC4wMSAyNy41MCA2My40NyAyNi43MEw2My41NyAyNi44MEw2My4zOSAyNi42MlE2MS44NSAyNC43MyA1OC41MCAyNC43N0w1OC42MyAyNC45MUw1OC41NiAyNC44M1E1Ni40NyAyNC44NCA1NS4yMiAyNS40NUw1NS4xNCAyNS4zN0w1NS4zMCAyNS41M1E1NC45NiAyMS4wMSA1NC4zNSAxNy44MUw1NC4yNyAxNy43M0w1NC4xOCAxNy42NFE1My41NyAxNy42MCA1Mi4wOCAxNy4yMkw1Mi4wMSAxNy4xNEw1MS45OSAxNy4xMlE1MS45OCAxNi41MCA1MS41MiAxNS4wNkw1MS40OSAxNS4wM0w1MS4zNiAxNC44OVE0OC45MiAxNC4wOSA0Ni42NyAxMi41M0w0Ni44NCAxMi43MEw0Ni43MiAxMi41N1E1MC40NCAyMC43MiA1MC40NCAyOS41MUw1MC41OSAyOS42Nkw1MC42MiAyOS42OVE1MC40OCAzNi41MiA0OC4wMSA0Mi43Mkw0Ny45OSA0Mi43MUw0OC4wOCA0Mi43OVE0OC43NyA0Mi40NSA1MC4xMCA0MS44OEw1MC4xMSA0MS45MEw1MC4xMyA0MS45MVE0OS44NSA0Mi42MiA0OS4yNCA0NC4xNEw0OS4xNyA0NC4wOEw0OS4yMCA0NC4xMFE1MS4yOCA0My4yOSA1NC4wNiA0Mi43Nkw1My45OSA0Mi42OUw1NC40NiA0MC45NUw1NC4zMyA0MC44MlE1Ni42MyA0Mi41MSA2My41NiA0Mi42MlpNNTkuODEgMjkuOTdMNTkuODcgMzAuMDNMNTkuNzkgMjkuOTVRNjAuODAgMjkuOTMgNjEuMzQgMzAuMzJMNjEuNDcgMzAuNDVMNjEuMzQgMzAuMzJRNjEuNzQgMzAuOTEgNjEuOTcgMzIuOTJMNjEuOTQgMzIuOTBMNjIuMDAgMzIuOTZRNjIuMTIgMzQuNzYgNjAuODcgMzYuMDdMNjAuOTAgMzYuMTFMNjAuODggMzYuMDhRNTkuNzEgMzcuNDggNTcuNzcgMzcuMzdMNTcuNjQgMzcuMjRMNTcuNzAgMzcuMzBRNTYuNzcgMzcuNDMgNTUuMjggMzYuOTRMNTUuMjYgMzYuOTJMNTUuMzUgMzcuMDBRNTUuMDggMzYuNDcgNTUuMDggMzUuOTNMNTUuMDcgMzUuOTNMNTUuMTUgMzYuMDFRNTUuMjAgMzIuOTcgNTYuNzYgMzEuMzdMNTYuNTkgMzEuMjFMNTYuNTggMzEuMjNMNTYuNjMgMzEuMjhRNTguMTAgMjkuOTQgNTkuODYgMzAuMDFaIi8+PHBhdGggZD0iTTQgMTUgQzg1IDgsNTYgNDksMTI5IDEwIiBzdHJva2U9IiM0MDZhZTciIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjMmJkM2E5IiBkPSJNMTE1LjQ4IDI5LjE4TDExNS41NSAyOS4yNUwxMTUuNTYgMjkuMjZRMTEzLjU3IDI5LjE0IDExMi4zNSAzMC40N0wxMTIuNDMgMzAuNTVMMTEyLjM4IDMwLjUwUTExMS4xNiAzMS44MyAxMTEuMDEgMzMuNzNMMTEwLjk1IDMzLjY3TDExMS4wMCAzMy43M1ExMTAuNzcgMzUuODIgMTExLjk5IDM2LjgzTDExMi4xMSAzNi45NUwxMTIuMDkgMzYuOTJRMTEzLjM1IDM3Ljk3IDExNS40OCAzNy45MEwxMTUuNDUgMzcuODdMMTE1LjQzIDM3Ljg1UTExNy42OSAzNy42NCAxMTguNjUgMzYuNjlMMTE4LjU5IDM2LjYzTDExOC43NyAzNi44MVExMTkuNjMgMzUuMjAgMTE5LjUyIDMzLjM3TDExOS42OCAzMy41NEwxMTkuNjYgMzMuNTJRMTE5LjUzIDMxLjYzIDExOC40NCAzMC40M0wxMTguMzggMzAuMzdMMTE4LjM4IDMwLjM3UTExNy4zNyAyOS4yNSAxMTUuNTUgMjkuMjVaTTExNS40MSAxOS43MEwxMTUuNTAgMTkuODBMMTE1LjQ1IDE5Ljc1UTExMy45NCAxOS41NCAxMTIuNjEgMjAuMDNMMTEyLjY0IDIwLjA2TDExMi42OCAyMC4xMFExMTEuMzMgMjAuODQgMTExLjU2IDIyLjcxTDExMS42OSAyMi44NEwxMTEuNTggMjIuNzNRMTEyLjIwIDI2LjU5IDExNS41NSAyNi41OUwxMTUuNDYgMjYuNDlMMTE1LjQ3IDI2LjUwUTExNy4wNyAyNi43NCAxMTguMDYgMjUuNjBMMTE3Ljk2IDI1LjQ5TDExOC4wNiAyNS41OVExMTkuMDIgMjQuNDIgMTE5LjA2IDIyLjg2TDExOS4wMSAyMi44MUwxMTkuMDkgMjIuOTBRMTE5LjA3IDIxLjA1IDExOC4zNSAyMC40NEwxMTguNDUgMjAuNTRMMTE4LjQwIDIwLjQ5UTExNi44MyAxOS43NiAxMTUuNTQgMTkuODNaTTExNS4xMiA0MC4yNEwxMTUuMjcgNDAuMzlMMTEyLjA0IDQwLjIxTDExMi4wOCA0MC4yNVExMTAuNTkgNDAuMjggMTA5LjI2IDM5LjQwTDEwOS4xOCAzOS4zM0wxMDkuMzcgMzkuNTJRMTA3Ljg0IDM4LjIyIDEwNy45OSAzNS4zNkwxMDguMTYgMzUuNTJMMTA3Ljk3IDM1LjM0UTEwOC41NCAyOC42MCAxMTIuMTYgMjcuNjFMMTEyLjEwIDI3LjU1TDExMi4xNCAyNy41OVExMDkuODQgMjYuNjYgMTA4LjUwIDIxLjI5TDEwOC41MSAyMS4zMEwxMDguNTcgMjEuMzZRMTA4LjA4IDE5LjgwIDEwOC4xNiAxOS4wMUwxMDguMTcgMTkuMDJMMTA4LjIyIDE5LjA2UTEwOC41OCAxNi45OSAxMTIuMjggMTYuOTZMMTEyLjE3IDE2Ljg1TDExMi4zNCAxNy4wMlExMTYuMzkgMTYuNzYgMTE3LjgzIDE2Ljk1TDExNy45MiAxNy4wNEwxMTcuOTEgMTcuMDNRMTIxLjcwIDE3LjUwIDEyMi4xNSAxOS41MkwxMjIuMjEgMTkuNThMMTIyLjI4IDE5LjY1UTEyMi4zMiAyMC4xOCAxMjIuMzIgMjAuNTZMMTIyLjQyIDIwLjY2TDEyMi4zMiAyMC41N1ExMjIuMzIgMjEuMjUgMTIyLjEzIDIxLjg1TDEyMi4wOCAyMS44MUwxMjIuMDggMjEuODBRMTIxLjQ4IDI2LjA0IDExOC41NCAyNy41NkwxMTguNzAgMjcuNzFMMTE4LjUzIDI3LjU1UTEyMi4yMSAyOC41MiAxMjIuNzAgMzMuODFMMTIyLjYyIDMzLjczTDEyMi41NSAzMy42NlExMjIuNjkgMzMuOTUgMTIyLjczIDM1LjI1TDEyMi42MCAzNS4xMkwxMjIuNzAgMzUuMjJRMTIyLjY3IDM3Ljg1IDEyMS4wNyAzOC45MkwxMjEuMTcgMzkuMDJMMTIxLjExIDM4Ljk2UTExOS44MiAzOS45MiAxMTUuMjYgNDAuMzhaTTExNy41MyA0Mi42OUwxMTcuNTIgNDIuNjhMMTIwLjg5IDQyLjc3TDEyMC44MiA0Mi43MVExMjIuNTkgNDIuODQgMTI0LjExIDQyLjEyTDEyNC4xMCA0Mi4xMUwxMjQuMTUgNDIuMTVRMTI1LjExIDQxLjI1IDEyNS4xOSAzOS4zOEwxMjUuMjcgMzkuNDdMMTI1LjMzIDM5LjUzUTEyNS40MCAzOC40NSAxMjUuMDEgMzYuNTFMMTI0Ljk5IDM2LjQ5TDEyNC44MyAzNi4zMlExMjQuMDYgMzEuODIgMTIxLjk2IDI5Ljk1TDEyMi4wMiAzMC4wMUwxMjEuNzQgMjkuNTRMMTIxLjQ2IDI5LjE5TDEyMS4zMyAyOC45NEwxMjEuNDQgMjkuMDVRMTIyLjk4IDI3LjU5IDEyMy45MCAyMy40NEwxMjMuODggMjMuNDFMMTI0LjAxIDIzLjU1UTEyMy45NCAyMy4xMCAxMjQuMDEgMjIuMjZMMTI0LjA2IDIyLjMwTDEyMy45NiAyMi4yMFExMjQuMTAgMjEuNTggMTI0LjAyIDIwLjk3TDEyNC4wNiAyMS4wMUwxMjQuMDMgMjAuOThRMTIzLjc2IDE5LjQyIDEyMi41OCAxOC45MkwxMjIuNzQgMTkuMDhMMTIyLjc4IDE5LjA4TDEyMi42MiAxOC45OUwxMjIuNDMgMTguODFRMTIyLjI1IDE4LjE3IDEyMS4wNyAxNy4zN0wxMjEuMDggMTcuMzhMMTIxLjA4IDE3LjM0TDEyMS4yMiAxNy40OVExMTkuMTUgMTYuNzEgMTE1LjA4IDE2LjUyTDExNS4wMiAxNi40NkwxMTQuOTkgMTYuNDNRMTEzLjU3IDE2LjQ2IDExMi4yMCAxNi41N0wxMTIuMTkgMTYuNTZMMTEyLjA4IDE2LjQ2UTExMS40MyAxNi42NCAxMTAuMTMgMTYuNzlMMTA5Ljk3IDE2LjYzTDExMC4wOCAxNi43M1ExMDguMTQgMTcuMTIgMTA3LjkxIDE4Ljc2TDEwNy45NiAxOC44MEwxMDcuOTUgMTguNzlRMTA3LjkxIDE5LjI4IDEwNy45NCAyMC4wOEwxMDcuODkgMjAuMDJMMTA3Ljk0IDIwLjA4UTEwNy45OSAyMC41NSAxMDguNTcgMjIuOTFMMTA4LjU2IDIyLjkxTDEwOC40NyAyMi44MlExMDkuMzAgMjYuMDkgMTExLjA1IDI3LjQyTDExMS4wMyAyNy40MEwxMTEuMjMgMjcuNTlMMTExLjI3IDI3LjY0UTEwOC4zNyAyOC44MSAxMDcuODQgMzMuOTlMMTA3Ljg1IDM0LjAwTDEwNy45NiAzNC4xMVExMDcuNzAgMzYuMjQgMTA3LjcwIDM3LjE2TDEwNy42OCAzNy4xNEwxMDcuNzIgMzcuMThRMTA3LjcwIDM4Ljg3IDEwOC44OCAzOS43OUwxMDguOTkgMzkuOTBMMTA5LjAyIDM5LjkzUTEwOS4xMSAzOS45OCAxMDkuMzggNDAuMTdMMTA5LjQwIDQwLjIwTDEwOS40MiA0MC4yMVExMTAuMjggNDIuMzMgMTE3LjQwIDQyLjU2Wk0xMTcuMTIgMzEuNTRMMTE3LjE1IDMxLjU3TDExNy4xOSAzMS42MVExMTguMDMgMzEuNDcgMTE4LjkxIDMxLjkyTDExOC45MSAzMS45MkwxMTguOTEgMzEuOTJRMTE5LjM4IDMzLjAwIDExOS4zNCAzMy41M0wxMTkuMzUgMzMuNTVMMTE5LjMwIDMzLjUwUTExOS4yNCAzMy43MCAxMTkuMjQgMzQuMDFMMTE5LjI2IDM0LjAzTDExOS4yOSAzNC4wNVExMTkuMzcgMzYuNTAgMTE3LjA5IDM3LjMzTDExNy4wNiAzNy4zMUwxMTYuOTIgMzcuMTZRMTE2LjE2IDM3LjUxIDExNS4zNiAzNy40MEwxMTUuMzQgMzcuMzdMMTE1LjM2IDM3LjM5UTExNC4zNiAzNy42MSAxMTMuMjEgMzcuMTVMMTEzLjIzIDM3LjE3TDExMy4yMSAzNy4xNVExMTIuOTkgMzYuNTUgMTEzLjA3IDM1LjU2TDExMy4wMyAzNS41M0wxMTIuOTAgMzUuMzlRMTEzLjExIDMzLjg2IDExNC4zMSAzMi42NEwxMTQuMzEgMzIuNjNMMTE0LjI3IDMyLjYwUTExNS40NSAzMS4zNiAxMTcuMDUgMzEuNDdaTTExNy4yNiAyMS45N0wxMTcuMzggMjIuMDlMMTE3LjI5IDIyLjAxUTExOC4xMyAyMS45MyAxMTguNjYgMjIuMDhMMTE4LjczIDIyLjE1TDExOC41OSAyMi44MUwxMTguNjMgMjIuODVRMTE4Ljc4IDI0LjQxIDExNy44NyAyNS40MkwxMTcuNzAgMjUuMjVMMTE3Ljc4IDI1LjMzUTExNi44OSAyNi4zNyAxMTUuNTIgMjYuMThMMTE1LjUwIDI2LjE1TDExNS40NSAyNi4xMFExMTQuNDYgMjYuMTAgMTE0LjA0IDI1Ljg3TDExMy45OSAyNS44MkwxMTQuMTUgMjUuOThRMTE0LjExIDI1LjcyIDExNC4wMCAyNS4wNEwxMTMuODcgMjQuOTFMMTE0LjAwIDI1LjAzUTExMy42OSAyMy41OCAxMTQuOTAgMjIuNzRMMTE0Ljc4IDIyLjYyTDExNC44MiAyMi42NVExMTYuMDMgMjIuMTEgMTE3LjQ0IDIyLjE1WiIvPjwvc3ZnPg==\"\n  },\n  \"executeTime\": 2\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
    "requestBodyDefinition": {
      "requestType": "json",
      "children": [],
      "dataType": "",
      "description": "",
      "error": "",
      "expression": "",
      "json": "",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-22 23:43:46",
  "createdAt": "2022-10-22 15:20:48",
  "createdBy": "",
  "updatedBy": "",
  "id": "e5c3b702f88f4f75910c3c0427c91d4f"
}
================================*/
const response = await importModule('response');

const svgCaptcha = require('svg-captcha');

const captchaKey = uuid();

const { data, text } = svgCaptcha.create({
  background: "#D9D9D9",
  noise: 2
});

cache.set("captcha:" + captchaKey, text.toLowerCase(), 1800);

return {
  captchaKey,
  data: "data:image/svg+xml;base64," + Buffer.from(data).toString('base64')
};