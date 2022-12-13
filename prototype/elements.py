from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label

class KButton(Button):
    def __init__(self, id:int, **kwargs):
        super().__init__(**kwargs)
        self.__id = id
    @property
    def id(self):
        return self.__id

