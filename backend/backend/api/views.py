import json
import random

from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework import status


# Create your views here.

@csrf_exempt
# @api_view(['GET'])
def index(request):
    final = []
    colors_array = []
    selected_colors = []
    colors = {
        "rgb": {
            "red":255,
            "green":255,
            "blue":255
        },
        "hsl": {
            "hue":360,
            "saturation":100,
            "lightness":100
        },
        # Add new color combinations here
        # "cmyk": {
        #     "cyan":100,
        #     "magenta":100,
        #     "yellow":100,
        #     "black":100
        # },
        # "brgb": {
        #     "red":10000,
        #     "green":10000,
        #     "blue":10000
        # }
    }
    
    for i in colors:
        colors_array.append(i)
    for i in range(0,5):
        random_color_selector = random.randint(0, len(colors)-1)
        selected_colors.append(colors_array[random_color_selector])
    
    for selected_color in selected_colors:
        color_dict = {}
        color_dict.update({'type':selected_color})
        for key, value in colors[selected_color].items():
            value = random.randint(0,value)
            a = ""
            if(selected_color == 'hsl' and len(color_dict)>1):
                a = str(value) + "%"
                color_dict.update({key:a})
            elif(selected_color == 'cmyk'):
                a = str(value) + "%"
                color_dict.update({key:a})
            else:
                color_dict.update({key:value})
        final.append(color_dict)
    return JsonResponse(final, safe=False, status=status.HTTP_200_OK)