from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.behaviors import DragBehavior
from kivy.metrics import dp
from elements import KButton, Label, TextInput

class NavBar(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

class Menu(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.add_widget(KButton(1, text='Menu'))

    pass
class ToolBox(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.add_widget(KButton(1, text='Toolbox'))

    pass
class HorizontalBox(BoxLayout):
    def __init__(self, *args, **kwargs):
        super().__init__(**kwargs)
        for arg in args:
            self.add_widget(arg)
    pass
class MainArea(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # dButton = DragButton(text = 'New', size_hint = (None,None), width = dp(60), height = dp(60))
        # dButton.drag_rectangle = (self.x,self.y,self.width,self.height)
        # dButton.drag_distance = 0
        # dButton.drag_timeout = 1000000
        # self.add_widget(dButton)

    pass
class StatusBar(Label):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
    pass

class MainWindow(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.add_widget(Menu())
        toolBox = ToolBox()
        mainArea = MainArea()
        self.add_widget(HorizontalBox(toolBox,mainArea))
        self.add_widget(StatusBar(text='Label'))

class LoginPage(BoxLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)



class mainApp(App):
    pass




if __name__ == '__main__':
    app = mainApp()
    app.run()
